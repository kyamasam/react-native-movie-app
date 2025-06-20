import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { Image, ImageBackground, ScrollView, View } from "react-native";
export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <ImageBackground source={images.bg} className="absolute w-full z-0 ">
        <ScrollView
          className="flex-1 px-5"
          contentContainerStyle={{
            minHeight: "100%",
            paddingBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={icons.logo}
            className="w-12 h-10 mx-auto mt-20"
          ></Image>
          <View className="flex-1 mt-10">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="search for a movie"
            ></SearchBar>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
