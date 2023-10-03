import { useEffect, useState } from "react";

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
    <main className=" w-full place-content-center">
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[29rem]">
          {jsonPost.map((image, index) => (
            <div
              key={image.id}
              className={` top-0 ${index === carrusel ? "" : "hidden"}`}
            >
              <img
                src={image.img}
                alt="image"
                className="brightness-50 object-fill absolute w-full h-full "
              />
              <div className="absolute left-4 lg:left-0 bottom-[20%] lg:bottom-0 lg:top-0 lg:right-0 m-auto lg:flex lg:justify-center lg:items-center flex-col text-white">
                <p class="font-bold mb-3 text-3xl uppercase">{image.title}</p>
                <p class="text-xl mb-10 leading-none">{image.description}</p>
                <a
                  href=""
                  class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm font-bold text-gray-900 uppercase transition-colors duration-300 transform bg-[#F5DE0D] hover:bg-gray-200 focus:bg-gray-400 rounded-md lg:w-auto  focus:outline-none "
                >
                  Ver Mas
                </a>
              </div>
            </div>
          ))}
        </div>
        <div class="absolute left-0 bottom-4 right-0 m-auto flex justify-center items-center text-white">
          <div class="flex flex-row justify-center order-2 mt-6 lg:mt-0">
            {jsonPost.map((item, index) => (
              <button
                onClick={() => runCarrusel()}
                key={item.id}
                className={`w-4 h-4 mx-2 rounded-full focus:outline-none ${
                  index === carrusel ? "bg-gray-900" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slider;