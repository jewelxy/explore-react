import { useEffect, useState } from 'react';
import './App.css';
import Cart from './comoponents/Cart/Cart';
import Country from './comoponents/Country/Country';

function App() {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])

  const handleAddCountry = (country) => {
        // console.log('Country Added',country)
        const newCart = [...cart,country];
        setCart(newCart);
  }
  return (
    <div className="App">
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
