import React, { Component } from 'react';

import './App.css';
import logo from './logo.svg';
import CountrySelector from '../node_modules/react-geoidentify-country-selector/lib/index';

class App extends Component {
    constructor() {
        super();
        this.state = {
            countryName: "Georgia",
            ISOALPHA2Code: "GE",
            ISOALPHA3Code: "GEO",
            ISONumericalCode: 268
        }
    }
    componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps, nextState);
    }
    getSelectedCountry(coutryObject) {
        // console.log(
        //     {
        //         countryName: coutryObject.countryName,
        //         ISOALPHA2Code: coutryObject.ISOALPHA2Code,
        //         ISOALPHA3Code: coutryObject.ISOALPHA3Code,
        //         ISONumericalCode: coutryObject.ISONumericalCode
        //     }
        // );
        this.setState({
            countryName: coutryObject.countryName,
            ISOALPHA2Code: coutryObject.ISOALPHA2Code,
            ISOALPHA3Code: coutryObject.ISOALPHA3Code,
            ISONumericalCode: coutryObject.ISONumericalCode
        });
    }
    render() {
        // countryName: "${this.state.countryName}",
        // ISOALPHA2Code: "${this.state.ISOALPHA2Code}",
        // ISOALPHA3Code: "${this.state.ISOALPHA3Code}",
        // ISONumericalCode: ${this.state.ISONumericalCode}
        return (
            <div className="App">
                <header className="App-header" style={{marginBottom: "30px"}}>
                    <h1 className="App-title">Example of React geoidentify country selector</h1>
                    <img className="App-logo" src={logo} alt="logo"/>
                </header>
                <div style={{width: "400px", margin: "0 auto"}}>
                    <CountrySelector
                        defaultCountry="Georgia"
                        getSelectedCountry={coutryObject => this.getSelectedCountry(coutryObject)}
                    />
                </div>
                <div style={{textAlign: 'left', width: '600px', margin: '0 auto'}}>
                    <pre style={{padding: '0 16px', fontSize: '85%', backgroundColor: '#f7f7f7', borderRadius: '3px'}}>
                        <code style={{color: '#0c5176'}}>
                        {`
import React, { Component } from 'react';

import CountrySelector from 'react-geoidentify-country-selector';

class App extends Component {
    getSelectedCountry(coutryObject) {
        console.log(coutryObject);
        /*
            {
                countryName: "${this.state.countryName}",
                ISOALPHA2Code: "${this.state.ISOALPHA2Code}",
                ISOALPHA3Code: "${this.state.ISOALPHA3Code}",
                ISONumericalCode: ${this.state.ISONumericalCode}
            }
         */
    }
    render() {
        return (
            <div>
                <CountrySelector
                    defaultCountry="Georgia"
                    getSelectedCountry={coutryObject => this.getSelectedCountry(coutryObject)}
                />
            </div>
        );
    }
}

export default App;`
                        }
                        </code>
                    </pre>
                </div>
            </div>
        );
    }
}

export default App;
