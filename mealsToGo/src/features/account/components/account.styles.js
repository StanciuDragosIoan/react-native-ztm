import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding-left: 100;
  padding-right: 100;
  padding-top: 50;
  padding-bottom: 50;
  margin-top: 350;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding-top: 10;
  padding-left: 10;
  padding-bottom: 10;
  padding-right: 10;
`;
