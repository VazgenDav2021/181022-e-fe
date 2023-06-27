import styled from "styled-components";

export const CatalogueWrapper = styled.div`
  width: 1236px;
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  justify-content: space-between;
  gap: 10px;
`;

export const CartItem = styled.div`
  width: 285px;
  height: 446px;
  background-color: #f4f5f7;
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const Cicle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${(props) => (props.background ? "#2EC1AC" : "#E97171")};
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
