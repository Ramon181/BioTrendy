import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slice/products/productsSlice";

const Recient = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const reciente = products.slice(0, 4);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-[95%]">
        <div className=" mb-5">
          <h2 className=" text-3xl font-bold">Productos Relacionados</h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex flex-wrap flex-row justify-around lg:justify-between">
            {reciente &&
              reciente.map(e => (
                <div class=" relative overflow-hidden col-span-6 lg:col-span-4 mx-1 mb-3 lg:mb-5 productCategory bg-[#1F1F1F] rounded-lg">
                  
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
        </div>
      </div>
    </div>
  );
};

export default Recient;
