import styled from "styled-components/native";
import { Card } from "react-native-paper";
export const Icon = styled.Image`
  padding-left: 16px;
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Container = styled.View`
  width: 360px;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;
