import logo from './logo.svg';
import './App.css';
import Navi from  './Navi'
import ProductList from './ProductList'
import CategoryList from './CategoryList'

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <CategoryList></CategoryList>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
