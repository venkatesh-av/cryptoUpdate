import './index.css'

const CryptocurrencyItem = props => {
  const {eachCrypto} = props

  return (
    <li className="crypto-box-items">
      <div className="dis-flex">
        <img
          src={eachCrypto.currencyLogo}
          className="logo-img"
          alt={eachCrypto.currencyName}
        />
        <p className="color-p">{eachCrypto.currencyName}</p>
      </div>
      <div className="dis-flex">
        <p className="color-p">{eachCrypto.usdValue}</p>
        <p className="color-p">{eachCrypto.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
