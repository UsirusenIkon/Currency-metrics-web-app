import { useEffect, React, useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const [filter, setFilter] = useState('');
  const [items, setItems] = useState(currencyData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = items.filter((item) => item.name === filter);
    setItems(values);
    setFilter('');
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

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
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search.." value={filter} onChange={handleChange} />
          <button type="submit">search</button>
        </form>
      </div>
      <div className="currency-list flex">
        {items.map((currency, id) => (
          <div
            className="currency flex"
            key={currency.id}
            id={currencyData.id}
          >
            <img
              className="home-img"
              src={currencyData[id].imageUrl}
              alt={currencyData[id].name}
            />
            <span className="name">{currencyData[id].name}</span>
            <span className="forward flex">
              <Link to="/details">
                <RiShareForwardLine
                  id={currencyData[id].id}
                  onClick={() => (
                    dispatch(fetchCurrencyDetails(
                      { short: currencyData[id].api },
                    ))
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
