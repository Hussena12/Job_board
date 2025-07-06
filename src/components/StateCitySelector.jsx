import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Country, City } from "country-state-city";
import { PostSelect } from "../components/PostSelect";

// Helper function to format data for react-select
const formatForSelect = (data, valueKey, labelKey) => {
  return data.map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
    data: item, // Store the full object if you need other properties later
  }));
};

const StateCitySelector = ({ onLocationChange }) => {
  // State for selected values
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  // State for options arrays (populated from country-state-city)
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // 1. Load all countries on initial mount
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(formatForSelect(allCountries, "isoCode", "name"));
  }, []); // Runs once on component mount

  // 2. Load cities when a country is selected or changes
  useEffect(() => {
    if (selectedCountry) {
      // IMPORTANT: When getting cities without states, you pass the country's ISO code only
      const countryCities = City.getCitiesOfCountry(selectedCountry.value);
      setCities(formatForSelect(countryCities, "name", "name")); // City's value and label are typically just the name
      setSelectedCity(null); // Reset selected city when country changes
    } else {
      setCities([]); // Clear cities if no country is selected
    }
  }, [selectedCountry]); // Runs when selectedCountry changes

  // 3. Notify parent component about the current selection
  useEffect(() => {
    if (onLocationChange) {
      onLocationChange({
        country: selectedCountry ? selectedCountry.label : null,
        countryIso: selectedCountry ? selectedCountry.value : null,
        // state: null, // Explicitly set state to null or remove if not needed in parent's state
        // stateIso: null,
        city: selectedCity ? selectedCity.label : null,
      });
    }
  }, [selectedCountry, selectedCity, onLocationChange]);
};

return (
  <div className="flex gap-4 mt-5   pb-5">
    <PostSelect className="w-32 sm:w-36 lg:w-[10rem]" label=" type" />
    <PostSelect className="w-32 sm:w-36 lg:w-[10rem]" label=" type" />
  </div>
);
export default StateCitySelector;
