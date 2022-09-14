import React from "react";
import {
  ListsContainer,
  TitleContainer,
  Title,
} from "../components/list.styles";
import { AddNewList } from "../components/newListButton";

export const ListsScreen = ({ navigation }) => {
  return (
    <ListsContainer>
      <TitleContainer>
        {/* <Title>Your Lists</Title> */}
        <AddNewList navigation={navigation} />
      </TitleContainer>
    </ListsContainer>
  );
};
