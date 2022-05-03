import React, { useContext } from "react";
import { Text, FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
const SearchContainer = styled(Text)`
  padding: 16px;
`;

const Search = styled(Searchbar)`
  width: 360px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Search
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16, marginTop: 16 }}
      />
    </SafeArea>
  );
};
