import React from "react";
import { ButtonContainer, NewListButton } from "./list.styles";

export const AddNewList = ({ navigation }) => {
  return (
    <ButtonContainer>
      <NewListButton
        icon="plus"
        color="#fff"
        onPress={() => console.log("New List")}
      >
        Create New List
      </NewListButton>
    </ButtonContainer>
  );
};
