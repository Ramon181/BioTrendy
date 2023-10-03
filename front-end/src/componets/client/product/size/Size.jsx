const Size = ({ product }) => {
  const arrayDeCadenas = Array.from(
    { length: product.stock },
    () => product.stock
  );

  console.log(product);
  return (
    <form class="mt-4">
      <div className="flex flex-row items-center space-x-2">
        <h3 className=" text-xl font-medium text-gray-900">Cantidad:</h3>
        <select name="cantidad" id="cantidad">
          {arrayDeCadenas.map((e, index) => (
            <option value={index + 1}>{index + 1} Unidad</option>
          ))}
        </select>
        <p>(Disponible)</p>
      </div>
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-medium text-gray-900">Talla</h3>
          <a
            href="#"
            class="text-sm font-medium text-gray-600 hover:text-gray-500 underline"
          >
            Tabla de Tallas
          </a>
        </div>

        <fieldset class="mt-4">
          <legend class="sr-only">Choose a size</legend>
          <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {product.sizes && product.sizes.map(e => (
              <label
                key={e.id}
                class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm"
              >
                <input
                  type="radio"
                  name="size-choice"
                  value="XS"
                  class="sr-only"
                  aria-labelledby="size-choice-1-label"
                />
                <span id="size-choice-1-label">{e.size}</span>

                <span
                  class="pointer-events-none absolute -inset-px rounded-md"
                  aria-hidden="true"
                ></span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        class="mt-10 flex w-full items-center justify-center rounded-sm border border-transparent bg-[#F5DE0D] hover:bg-gray-200 focus:bg-gray-400 px-8 py-3 text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Añadir al Carrito
      </button>
    </form>
  );
};

export default Size;
