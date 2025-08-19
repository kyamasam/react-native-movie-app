import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import SearchBar from "../../components/SearchBar";
import { images } from "../../constants/images";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(
    () =>
      fetchMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    const callLoadMovies = async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset;
      }
    };
    callLoadMovies();
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
        source={images.bg}
        resizeMode="cover"
      />
      <View className="w-full flex row justify-center mt-20 mb-10  items-center">
        <Image source={icons.logo} className="w-12 h-10" />
      </View>
      <SearchBar
        term={searchQuery}
        onChangeText={(term) => setSearchQuery(term)}
        placeholder="search movies"
      ></SearchBar>
      <Text className="text-white">
        {/* {" res"}
        {searchQuery}
        {JSON.stringify(movies)} */}
      </Text>
      <FlatList
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
        data={movies}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        ListHeaderComponent={() => (
          <>
            <View className="my-5 hidden">
              <SearchBar
                term={searchQuery}
                onChangeText={(term) => setSearchQuery(term)}
                placeholder="search movies"
              ></SearchBar>
            </View>
            {moviesLoading && (
              <>
                <Text>Loading movies...</Text>
                <ActivityIndicator />
              </>
            )}
            {moviesError && <Text>error {moviesError.message}</Text>}
            {!moviesLoading &&
              !moviesError &&
              searchQuery.trim() &&
              movies?.length && (
                <>
                  <Text> {movies?.length} results for </Text>
                  <Text className="text-accent"> {searchQuery}</Text>
                </>
              )}
          </>
        )}
      />
    </View>
  );
};

export default Search;
