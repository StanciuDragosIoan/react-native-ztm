import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  return null;
};
