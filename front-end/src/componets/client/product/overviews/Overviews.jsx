import Size from "../size/Size";
import Slider from "../slider/Slider";

const Overviews = ({ product }) => {
  return (
    <div class=" w-full flex justify-center items-center">
      <div class=" flex flex-col lg:flex-row w-[95%]">
        <div class="pb-16 pt-10 w-full lg:w-[60%]">
          <div class="sm:overflow-hidden rounded-lg">
              {product.images ? (
                <Slider images={product.images} img={product.image} />
              ) : (
                <img src={product.image} className="w-full relative " alt="" />
              )}
          </div>
        </div>

        <div class=" w-full lg:w-[40%] pb-16 pt-10 ">
          <div class="mt-4 px-4">
            <h2 class="sr-only">Product information</h2>
            <h1 class="text-4xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            <p class="text-3xl my-6 tracking-tight text-gray-900">
              ${product.price}
            </p>

            <Size product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overviews;
