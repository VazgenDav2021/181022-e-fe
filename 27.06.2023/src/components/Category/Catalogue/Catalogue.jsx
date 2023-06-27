import React from "react";
import jsonData from "./data.json";
import { CatalogueWrapper, CartItem, ItemImage, Cicle } from "./styled";

const Catalogue = () => {
  return (
    <CatalogueWrapper>
      {jsonData.map((eachItem, idx) => {
        const { description, discount, isNew, name, oldPrice, price, url } =
          eachItem;
        return (
          <CartItem key={idx}>
            <ItemImage style={{ backgroundImage: `url(${url})` }} alt={name}>
              {isNew || discount ? (
                <Cicle background={isNew}>
                  {isNew ? "New" : `-${discount}%`}
                </Cicle>
              ) : null}
            </ItemImage>
            <p>{name}</p>
            <p>{description}</p>
            <div style={{ display: "flex" }}>
              <span>{price}</span>
              {oldPrice ? <span>{oldPrice}</span> : null}
            </div>
          </CartItem>
        );
      })}
    </CatalogueWrapper>
  );
};

export default Catalogue;
