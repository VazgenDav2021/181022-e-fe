import React from "react";
import jsonData from "./data.json";
import { CategoryWrapper, CategoryItem, CategoryItemImage } from "./styled";

const Category = () => {
  return (
    <CategoryWrapper>
      {jsonData.map((categoryItem, idx) => {
        console.log({ categoryItem });
        return (
          <CategoryItem key={idx}>
            <CategoryItemImage src={categoryItem.url} />
            {categoryItem.name}
          </CategoryItem>
        );
      })}
    </CategoryWrapper>
  );
};

export default Category;
