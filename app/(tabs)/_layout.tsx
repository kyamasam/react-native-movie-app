import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({
  icon,
  title,
  focused,
}: {
  icon: any;
  title: string;
  focused: boolean;
}) => {
  return (
    <>
      {focused ? (
        <ImageBackground
          source={images.highlight}
          className="flex flex-row items-center justify-center overflow-hidden bg-pink-400 mt-[22px] min-h-16 rounded-full w-full min-w-[112px]"
        >
          <Image tintColor="#151312" className="size-5" source={icon}></Image>
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <View className="size-full justify-center items-center mt-4 rounded-full">
          <Image source={icon} tintColor="#A8B5DB"></Image>
        </View>
      )}
    </>
  );
};
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          height: 52,
          marginHorizontal: 10,
          marginBottom: 36,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} title="Home" focused={focused}></TabIcon>
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon
                icon={icons.search}
                title="Search"
                focused={focused}
              ></TabIcon>
            </>
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <TabIcon
                icon={icons.save}
                title="Saved"
                focused={focused}
              ></TabIcon>
            </>
          ),
        }}
      />{" "}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.person}
              title="Profile"
              focused={focused}
            ></TabIcon>
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
