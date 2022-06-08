import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const ContainerFavourites = styled(View)``;
const FavouriteButton = styled(TouchableOpacity)`
  margin-top: 25px;
  margin-left: 300px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <ContainerFavourites>
      <FavouriteButton
        onPress={() =>
          !isFavourite
            ? addToFavourites(restaurant)
            : removeFromFavourites(restaurant)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={24}
          color="red"
        />
      </FavouriteButton>
    </ContainerFavourites>
  );
};
