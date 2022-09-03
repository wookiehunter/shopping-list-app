import styled from "styled-components/native";

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
