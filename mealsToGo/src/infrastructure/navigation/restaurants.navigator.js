import React from "react";
import { Text } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantDetailScreen } from "../../features/restaurants/components/restaurant-detail-screen.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();
const test = (route) => {
  return <Text>Restaurant Detail</Text>;
};
export const RestaurantsNavigator = ({ navigation }) => {
  return (
    <RestaurantStack.Navigator
      headerShown="false"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
