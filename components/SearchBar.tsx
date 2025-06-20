import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
interface Props {
  onPress: () => void;
  placeholder: string;
}
const SearchBar = ({ onPress, placeholder = "Search" }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#Ab8bff"
      ></Image>
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#A8B5DB"
        className="flex-1 text-white text-base ml-2"
      ></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
