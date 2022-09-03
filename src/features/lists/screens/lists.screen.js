import React from "react";
import {
  ListsContainer,
  TitleContainer,
  Title,
} from "../components/list.styles";

export const ListsScreen = ({ navigation }) => {
  return (
    <ListsContainer>
      <TitleContainer>
        <Title>Your Lists</Title>
      </TitleContainer>
    </ListsContainer>
  );
};
