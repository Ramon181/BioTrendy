import Breadcrumbs from "../../../componets/client/breadcrumbs/Breadcrumbs";
import Cards from "../../../componets/client/products/cards/Cards";
import Filters from "../../../componets/client/products/filters/Filters";

const Products = () => {


  return (
    <div className="flex items-center flex-col">
      <div className="my-4 w-[90%] bg-gray-200 px-3 rounded-lg">
        <Breadcrumbs products={"Productos"} filter={"Hombre"}/>
      </div>
      <section className=" my-4 w-[90%] flex flex-row">
        <Filters />
        <Cards />
      </section>
    </div>
  );
};

export default Products;
