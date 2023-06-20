import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedCountry = () => {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState({});

  const getDetailedCountryInfo = async () => {
    await fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(
      async (res) => {
        const data = await res.json();
        setCountryInfo(() => {
          return {
            ...data[0],
          };
        });
      }
    );
  };

  useEffect(() => {
    getDetailedCountryInfo();
  }, []);

  return <div>DetailedCountry</div>;
};

export default DetailedCountry;
