import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[1]};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Container = styled.View`
  width: 360px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Container>
      <RestaurantCard>
        <RestaurantCardCover source={{ uri: photos[0] }} />
        {/* <Text style={{ fontFamily: "Lato_400Regular" }}>{name}</Text> */}
        <Title>{name}</Title>
      </RestaurantCard>
    </Container>
  );
};
