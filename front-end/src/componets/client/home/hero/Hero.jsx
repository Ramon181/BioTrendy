const Hero = () => {
  return (
    <div class="container lg:w-4/5 px-6 py-16 mx-auto">
      <div class="items-center flex flex-col-reverse lg:flex-row lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
              Descubre tu estilo
            </h1>

            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              beatae error laborum ab amet sunt recusandae? Reiciendis natus
              perspiciatis optio.
            </p>

            <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm font-bold text-gray-900 uppercase transition-colors duration-300 transform bg-[#F5DE0D] hover:bg-gray-200 focus:bg-gray-400 rounded-md lg:w-auto  focus:outline-none ">
              Ver ahora
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full rounded-lg h-full lg:max-w-2xl"
            src="https://www.hendz.co/wp-content/uploads/2020/10/tenis-para-hombre-rojos-hendz-deportivos.jpg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
