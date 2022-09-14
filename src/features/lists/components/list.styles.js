import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const ListsContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const TitleContainer = styled.View`
  margin: 20px 0;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  letter-spacing: 2px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: ${(props) => props.theme.space[3]};
`;

export const NewListButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  color: ${(props) => props.theme.colors.text.inverse};
  font-size: 64px;
  padding: 10px;
  border-radius: 5px;
`;
