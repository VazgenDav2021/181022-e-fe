import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsInfo = useSelector((state) => state.products);

  const { prodcuts, isLoading, errorMessage } = productsInfo;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isLoading && errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {prodcuts?.map((eachProduct, index) => {
        const { title, id } = eachProduct;
        return (
          <a href={`/product/${id}`} key={index}>
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default HomePage;
