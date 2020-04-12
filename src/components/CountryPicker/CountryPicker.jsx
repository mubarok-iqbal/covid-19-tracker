import React , { useState , useEffect } from 'react';
import { Select , FormControl , MenuItem } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  
  const [fetchedCountries , setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
  },[setFetchedCountries]);


  return (
    <FormControl className={styles.formControl}>
      <Select  onChange={ (e) => handleCountryChange(e.target.value) }>
        <MenuItem value="">Global</MenuItem>
        {fetchedCountries.map((country , key) => <MenuItem value={country} key={key}>{country}</MenuItem>)}
      </Select >
    </FormControl>
  )
}

export default CountryPicker;
