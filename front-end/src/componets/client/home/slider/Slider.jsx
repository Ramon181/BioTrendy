import { useEffect, useState } from "react";
import { TruckSend } from "../../../../utils/svg/Svg";

const Slider = () => {
  const [carrusel, setCarrusel] = useState(0);
  const jsonPost = [
    {
      id: 1,
      title: "Espadas Azules",
      description: "No me interesan Espadas Azules",
      img: "https://fondosmil.com/fondo/65068.jpg",
    },
    {
      id: 2,
      title: "One Piece Se esta terminando",
      description:
        "One Piece ya está en su cumbre; es una de las mejores series de anime del mundo",
      img: "https://img2.wallspic.com/crops/9/8/7/2/7/172789/172789-anime-manga-caricatura-animacion-manga_shonen-1920x1080.jpg",
    },
  ];

  const runCarrusel = () => {
    setCarrusel(prevCarrusel => (prevCarrusel + 1) % jsonPost.length);
  };

  useEffect(() => {
    const interval = setInterval(runCarrusel, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full pt-8 place-content-center">
      <div class=" items-center flex flex-col-reverse lg:flex-row lg:flex">
        <div class="w-full lg:w-[60%] lg:p-8">
          <div class="">
            <h1 class="text-2xl mx-4 lg:mx-0 font-bold text-gray-800 uppercase dark:text-white lg:text-5xl">
              Descubre las <span className=" text-blue-600">ofertas</span> ofertas que tenemos para ti
            </h1>

            <p class="my-8 mx-8 lg:mx-0 text-xl text-gray-600 dark:text-gray-400">
              Registrate y se el primero en enterarte de las novedades
            </p>
            <div className="p-3 justify-between items-center space-y-3 lg:space-y-0 w-auto rounded bg-[#9494945b] flex flex-col lg:flex-row">
              <div className="lg:text-center">
                <h2 className=" text-base font-semibold">
                  Hasta <br /> <span className=" font-bold text-2xl">50%</span>{" "}
                  off{" "}
                </h2>
              </div>
              <div className=" space-x-2 flex items-center">
                <TruckSend />
                <div className=" flex flex-col -space-y-2">
                  <h2 className="text-2xl font-bold leading-normal">Envios</h2>
                  <span className="text-base">24/48</span>
                </div>
              </div>
              <button class="tracking-wider px-6 py-2.5 text-sm font-bold text-gray-900 uppercase transition-colors duration-300 transform bg-[#F5DE0D] hover:bg-[#ffed4f] focus:bg-[#ffed4f] rounded-md focus:outline-none ">
                Ver Ofertas
              </button>
              <a
                href=""
                class=" tracking-wider px-6 py-2.5 text-center text-sm font-bold  uppercase transition-colors duration-300 transform text-white  bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md  focus:outline-none "
              >
                Registrate
              </a>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center w-full py-4 lg:p-10 lg:w-1/2">
          <img
            class=" rounded-sm"
            src="https://hips.hearstapps.com/hmg-prod/images/xenia-adonts-wears-a-bold-blue-hoodie-sweater-from-cherry-news-photo-1629839738.jpg"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </main>
  );
};

export default Slider;
