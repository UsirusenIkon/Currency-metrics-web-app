import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Details from './components/DetailsPage/DetailsPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/" element={<Details />} />
      </Routes>
      <NavBar />
    </Provider>
  );
}

export default App;
