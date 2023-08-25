import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedResponse = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoList: updatedResponse, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img-flex"
            />
            <div className="crypto-box">
              <ul type="none" className="ul-style">
                <li className="list-1">
                  <div>
                    <h1 className="color-hed">Coin Type</h1>
                  </div>
                  <div className="dis-flex">
                    <p className="color-p">USD</p>
                    <p className="color-p">EURO</p>
                  </div>
                </li>
                {cryptoList.map(eachCrypto => (
                  <CryptocurrencyItem
                    eachCrypto={eachCrypto}
                    key={eachCrypto.id}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
