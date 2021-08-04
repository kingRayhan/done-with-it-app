import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListTabButton from "./NewListTabButton";
import routes from "./routes";

const Tabs = createBottomTabNavigator();

const AppTabNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={routes.LISTING}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListTabButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="account_navigator"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons size={size} color={color} name="account" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppTabNavigator;
