import React, { useState, useEffect, useRef } from "react";
import { Country, City } from "country-state-city";
import PostSelect from "@/components/PostSelect";
import { useSelectStyle } from "@/hooks/useSelectStyle";

// Helper function to format data for react-select
const formatForSelect = (data, valueKey, labelKey) => {
  return data.map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
    data: item, // Store the full object if you need other properties later
  }));
};

const StateCitySelector = ({ onLocationChange, initialSelectedCountry }) => {
  // State for selected values
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // State for options arrays (populated from country-state-city)
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const customSelectStyles = useSelectStyle();

  const isFirstRender = useRef(true);

  // 1. Load all countries on initial mount
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(formatForSelect(allCountries, "isoCode", "name"));
  }, []);

  // 2. Load cities when a country is selected or changes
  useEffect(() => {
    if (selectedCountry) {
      const countryCities = City.getCitiesOfCountry(selectedCountry.value);
      setCities(formatForSelect(countryCities, "name", "name"));
      if (selectedCountry.value !== initialSelectedCountry?.value) {
        setSelectedCity(null);
      }
    } else {
      setCities([]);
      setSelectedCity(null);
    }
  }, [selectedCountry, initialSelectedCountry]);

  // 3. Notify parent component about the current selection
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      return;
    }

    if (onLocationChange) {
      onLocationChange({
        country: selectedCountry ? selectedCountry.label : null,
        countryIso: selectedCountry ? selectedCountry.value : null,
        city: selectedCity ? selectedCity.label : null,
      });
    }
  }, [selectedCountry, selectedCity, onLocationChange]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  return (
    <div className="flex gap-4 mt-5   pb-5">
      <PostSelect
        id="country-select"
        options={countries}
        value={selectedCountry}
        onChange={handleCountryChange}
        styles={customSelectStyles}
        className="w-40 sm:w-48 lg:w-[13.5rem]"
        label=" Country"
      />
      <PostSelect
        id="city-select"
        options={cities}
        value={selectedCity}
        onChange={handleCityChange}
        styles={customSelectStyles}
        className="w-40 sm:w-48 lg:w-[13.5rem] "
        label=" City"
      />
    </div>
  );
};

export default StateCitySelector;
