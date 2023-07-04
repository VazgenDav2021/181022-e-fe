import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailedProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductInfo = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(() => {
        return {
          ...res.data,
        };
      });
    });
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return <div>DetailedProductPage {id}</div>;
};

export default DetailedProductPage;
