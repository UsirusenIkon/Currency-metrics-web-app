import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiShareForwardLine } from 'react-icons/ri';
import { fetchCurrency } from '../../redux/HomePage/homePage';
import { fetchCurrencyDetails } from '../../redux/DetailsPage/detailsPage';
import './HomePage.css';
import currencyData from '../../Utility/currencyData';
import headerImg from '../../coinAssets/coinCurrency.jpg';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const currencies = useSelector((state) => state.homePage);

  return (
    <div className="home-page">
      <div className="header flex">
        <span className="img-cover"><img className="header-img" src={headerImg} alt="currency and coin" /></span>
        <h1>
          <span className="header-text">Coin</span>
          <span className="header-text">And</span>
          <span className="header-text">Currency Rates</span>
        </h1>
      </div>
      <div className="currency-list flex">
        {currencies.map((currency, id) => (
          <div
            className="currency flex"
            key={currency.id}
            id={currencies.id}
          >
            <img
              className="home-img"
              src={currencyData[id].imageUrl}
              alt={currencyData[id].name}
            />
            <span className="name">{currency.key}</span>
            <span className="forward flex">
              <Link to="/details">
                <RiShareForwardLine
                  id={currencies.id}
                  onClick={() => (
                    dispatch(fetchCurrencyDetails({ short: currency.data, full: currency.key }))
                  )}
                />
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
