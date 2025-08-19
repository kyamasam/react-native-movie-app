import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";
export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    })
  );
  return (
    <View className="flex-1 bg-primary">
      <Image
        resizeMode="cover"
        source={images.bg}
        className="absolute w-full z-0 "
      ></Image>
      <ScrollView
        className="flex-1 px-5"
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image source={icons.logo} className="w-12 h-10 mx-auto mt-20"></Image>

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text className="text-red-400">{moviesError?.message}</Text>
        ) : (
          <View className="flex-1 mt-10">
            <SearchBar
              onPressIn={() => {
                console.log("push");
                router.push("/search");
              }}
              placeholder="search for a movie"
            ></SearchBar>
            <>
              <Text className="mt-4 font-bold text-white text-lg">
                {" "}
                Latest Movies
              </Text>
            </>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
              keyExtractor={(item) => item.id}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 10,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
