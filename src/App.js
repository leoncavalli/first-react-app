import logo from "./logo.svg";
import "./App.css";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";

function App() {
  let categoryViewModel={title:"Category List"}
  let productViewModel={title:"Product List"}
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Navi></Navi>
        </div>
        <div className="row">
          <div className="col-md-3">
            <CategoryList model={categoryViewModel}></CategoryList>
          </div>
          <div className="col-md-6">
            <ProductList model={productViewModel}></ProductList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
