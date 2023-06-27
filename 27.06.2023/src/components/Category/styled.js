import styled from "styled-components";

export const CategoryWrapper = styled.div`
  max-width: 1183px;
  margin: 48px auto;
  display: flex;
  justify-content: space-between;
`;

export const CategoryItem = styled.div`
  width: 381px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

export const CategoryItemImage = styled.img`
  border-radius: 20px;
`;
