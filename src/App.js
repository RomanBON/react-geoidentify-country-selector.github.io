import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CountrySelector} from 'react-geoidentify-country-selector';

class App extends Component {
    getSelectedCountry(coutryObject) {
        console.log(coutryObject);
        /*
         {
         countryName: "Georgia",
         ISOALPHA2Code: "GE",
         ISOALPHA3Code: "GEO",
         ISONumericalCode: 268
         }
         */
    }
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{marginBottom: "100px"}}>
          <h1 className="App-title">Eamlpe of React geoidentify country selector</h1>
        </header>
          <div style={{width: "400px", margin: "0 auto"}}>
              <CountrySelector
                  defaultCountry="Georgia"
                  getSelectedCountry={coutryObject => this.getSelectedCountry(coutryObject)}
              />
          </div>
      </div>
    );
  }
}

export default App;
