import React, { useState } from "react";
import { countries } from "../data/country";
export default function Dropdown() {
  const [selectedCountryName, setSelectedCountryName] = React.useState(null);
  const [countrySelected, setSelectedCountry] = useState(false);
  console.log(selectedCountryName);
  
  const handleCountryChange = (e) => {
    if (e.target.value === "Select Country") {
      setSelectedCountry(false);
    } else {
      setSelectedCountryName(e.target.value);
      setSelectedCountry(true);
    }
  };

  const getCity = (country) => {
    return country.cities.map((item) => <option value={item}>{item}</option>);
  };
  return (
    <>
      <h3>Dropdown</h3>
      <form>
        <select onChange={handleCountryChange}>
          <option>Select Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select disabled={!countrySelected}>
          {!countrySelected && <option>Select a country</option>}
          {countries.map((country) => {
            if (country.name === selectedCountryName) return getCity(country);
          })}
        </select>
      </form>
    </>
  );
}