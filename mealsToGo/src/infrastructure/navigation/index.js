import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AccountNavigator } from "./account.navigator.js";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <Navigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
