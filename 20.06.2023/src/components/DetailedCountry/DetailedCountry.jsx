import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailedCountry = () => {
  const { countryName } = useParams();
  const [countryInfo, setCountryInfo] = useState({});
  const { capital, borders, currencies, flag, flags, languages, area } =
    countryInfo;

  console.log({ countryInfo });

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

  const renderCurrency = () => {
    let currentCurrency = "";
    for (let curr in currencies) {
      currentCurrency = currencies?.[curr];
    }

    return currentCurrency?.name;
  };

  const renderLanguage = () => {
    let currentLanguage = "";
    for (let curr in languages) {
      currentLanguage = languages?.[curr];
    }

    return currentLanguage;
  };

  const handleAddFavorite = () => {
    const dataFromLocaleStorage =
      JSON.parse(localStorage.getItem("favorites")) || [];
    const newData = dataFromLocaleStorage.concat({
      name: countryName,
      flag,
      img: flags?.png,
      area,
    });

    localStorage.setItem("favorites", JSON.stringify(newData));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        {countryName} {flag}
      </h1>
      <img src={flags?.png} alt={countryName} />
      {capital?.length > 1
        ? `Столицы: ${capital.join(", ")}`
        : `Столица: ${capital?.[0]}`}
      <p>currency: {renderCurrency()}</p>
      <p>language: {renderLanguage()}</p>
      <p>Neighbour countires: {borders?.join(", ")} </p>

      <button onClick={handleAddFavorite}>Favorite</button>
    </div>
  );
};

export default DetailedCountry;
