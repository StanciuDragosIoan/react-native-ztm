import React from "react";
import { SafeAreaView, Text, StatusBar } from "react-native";

import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(Text)`
  padding: 16px;
`;

const Search = styled(Searchbar)`
  width: 360px;
`;

const ItemsList = styled(Text)`
  padding: 16px;
`;
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Search
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ItemsList>
        <RestaurantInfoCard />
      </ItemsList>
    </SafeArea>
  );
};
