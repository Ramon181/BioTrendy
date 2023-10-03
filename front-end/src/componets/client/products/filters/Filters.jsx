import { useState } from "react";
import { Mas, Menos } from "../../../../utils/svg/Svg";

const Filters = () => {
  const [cantidad, setCantidad] = useState(false);
  const [tall, setTalla] = useState(false);

  return (
    <section class="mt-32 mr-8">
      <div class="container mx-auto">
        <div class="">
          <div class=" border-b py-4 px-2 border-gray-700">
            <button onClick={() => {
              cantidad ? setCantidad(false) : setCantidad(true)
            }} class="flex space-x-32 items-center justify-between w-full">
              <h1 class="font-semibold text-gray-700 dark:text-white">
                Cantidad
              </h1>
              {cantidad ? (
                <span  class="text-gray-400 bg-gray-200 rounded-full">
                  <Menos />
                </span>
              ) : (
                <span class="text-white bg-blue-500 rounded-full">
                  <Mas />
                </span>
              )}
            </button>
            {cantidad ? (
              <select className=" w-[50%] m-4 border rounded-sm" name="cantidad" id="cantidad">
                <option value="1">1</option>
              </select>
            ) : null}
          </div>

          <div class="border-b py-4 px-2 border-gray-700">
            <button class="flex space-x-32  items-center justify-between w-full">
              <h1 class="font-semibold text-gray-700 dark:text-white">Talla</h1>

              <span class="text-white bg-blue-500 rounded-full">
                <Mas />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
