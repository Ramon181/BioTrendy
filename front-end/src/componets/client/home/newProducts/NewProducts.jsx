import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../../store/slice/products/productsSlice";

const NewProducts = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="w-4/5 my-8 flex items-center flex-col">
      <div className=" mb-5">
        <h2 className=" text-3xl font-bold">Nuevos Productos</h2>
      </div>
      <div className="flex flex-wrap flex-row justify-around lg:justify-between">
        {products &&
          products.map(e => (
            <div class=" relative overflow-hidden col-span-6 lg:col-span-4 mx-1 mb-3 lg:mb-5 productCategory bg-[#1F1F1F] rounded-lg">
              <div className=" absolute bg-[#F5DE0D] rounded-sm top-[4px] -left-7 px-7 py-1 -rotate-45">
                <h3>Nuevo</h3>
              </div>
              <img
                class=" object-fill w-full h-72 rounded-t-lg"
                src={e.image}
                alt="NIKE AIR"
              />

              <div class="flex items-center justify-between px-4 py-2 ">
                <h1 class="text-lg font-bold text-white">${e.price}</h1>
                <button class="px-2 py-1 text-xs font-bold text-gray-900 transition-colors duration-300 transform bg-[#F5DE0D] rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className=" mt-2">
        <a className=" underline" href="">Ver Mas</a>
      </div>
    </div>
  );
};

export default NewProducts;
