import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiShareForwardLine } from 'react-icons/ri';
import { fetchCurrency } from '../../redux/HomePage/homePage';
import './HomePage.css';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const currencies = useSelector((state) => state.homePage);

  return (
    <div>
      <div className="home">
        <h1>Currency Rates</h1>
      </div>
      <div className="currency-list">
        {currencies.map((currency) => (
          <div
            key={currency.id}
            id={currencies.id}
          >
            <span>{currency.key}</span>
            <span><RiShareForwardLine /></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
