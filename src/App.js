import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <HomePage />
    </Provider>
  );
}

export default App;
