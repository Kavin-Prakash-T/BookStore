import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components";
import { FilterBar } from "./components/FilterBar";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services";

export const ProductsList = () => {
const {products,initialProductList}=useFilter();

  useTitle("Explore")
  const [show, setShow] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
  async function fetchProducts() {
   const data= await getProductList();
    if (searchTerm) {
      initialProductList(data.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      initialProductList(data);
    }
  }
  fetchProducts();
}, [searchTerm,initialProductList]);

  return (
    <main>
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
            <span>
              <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700" type="button"> 
               Filters
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            { products.map((product) => (
              <ProductCard key={product.id} product={product} />
            )) }            
          </div>  
        </section>

        { show && <FilterBar setShow={setShow} /> }

    </main> 
  )
}