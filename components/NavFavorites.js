import { View, Text } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Taguig City, Manila, PH",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Las Pinas City, Manila, PH",
  },
];
const NavFavorites = () => {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  );
};

export default NavFavorites;
