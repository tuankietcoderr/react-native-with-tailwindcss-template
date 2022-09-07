import { View, Text, Image } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="flex-1 items-center justify-center gap-y-6">
      <View className="flex-row gap-x-4">
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png",
          }}
          className="w-20 h-20"
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/299463877_560030875914611_8025210373789510385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W3bFryOoYeQAX8mz5qx&tn=H2jKtPqRbQ0ESHfr&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT_HvhxGWwasm9xEfWRTeaF8oRAfGIi0Y_joQRzCEzV9Rg&oe=631D2DF7",
          }}
          className="w-20 h-20 rounded-full"
          resizeMode="contain"
        />
        <Image
          source={{
            uri: "https://www.saashub.com/images/app/service_logos/155/7902ojac7nj3/large.png?1635277061",
          }}
          className="w-20 h-20 rounded-full"
          resizeMode="contain"
        />
      </View>
      <Text className="font-extrabold text-md text-sky-700">
        React Native + TailwindCSS + Heroicons Template
      </Text>
      <Text>by tuankietcoder</Text>
    </View>
  );
};

export default Home;
