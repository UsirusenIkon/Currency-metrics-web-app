import { useSelector } from 'react-redux';
import currencyData from '../../Utility/currencyData';
import './DetailsPage.css';

function Details() {
  const details = useSelector((state) => (state.detailPage));

  return (
    <div className="exchange-rates flex">
      {details.map((detail) => (
        <div key={detail.id}>
          <h3>
            {detail.name}
            (
            {detail.prefix}
            )
            {' '}
            Currency Exchange Rates
          </h3>
          <div
            key={detail.id}
            className="date"
          >
            <i>
              Current Date:
              {detail.date}
            </i>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[0].imageUrl} alt={currencyData[0].name} />
                <span>Aave:</span>
              </div>
              <span>
                {detail.data.aave}
              </span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[1].imageUrl} alt={currencyData[1].name} />
                <span>Cardano:</span>
              </div>
              <span>{detail.data.ada}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[2].imageUrl} alt={currencyData[2].name} />
                <span>United Arab Emirates Dirham:</span>
              </div>
              <span>{detail.data.aed}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[3].imageUrl} alt={currencyData[3].name} />
                <span>Afghan afghani:</span>
              </div>
              <span>{detail.data.afn}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[4].imageUrl} alt={currencyData[4].name} />
                <span>Algoran:</span>
              </div>
              <span>{detail.data.algo}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[5].imageUrl} alt={currencyData[5].name} />
                <span>Albanian lek:</span>
              </div>
              <span>{detail.data.all}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[6].imageUrl} alt={currencyData[6].name} />
                <span>Armenian dram:</span>
              </div>
              <span>{detail.data.amd}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[7].imageUrl} alt={currencyData[7].name} />
                <span>Synereo:</span>
              </div>
              <span>{detail.data.amp}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[8].imageUrl} alt={currencyData[8].name} />
                <span>
                  Netherlands Antillean Guilder:
                </span>
              </div>
              <span>{detail.data.ang}</span>
            </div>
            <div className="rate flex">
              <div className="rate-data flex">
                <img className="img" src={currencyData[9].imageUrl} alt={currencyData[9].name} />
                <span>Angolan kwanza:</span>
              </div>
              <span>{detail.data.aoa}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Details;
