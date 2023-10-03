const Detail = ({ product }) => {
  return (
    <section className=" w-full flex justify-center items-center">
      <div className="flex flex-col w-[95%]">
        <div className=" w-full h-[70px] bg-[#248fcd6b] pl-10 flex items-center rounded-sm">
          <h2 className=" font-bold text-xl text-black uppercase ">
            Descripción
          </h2>
        </div>
        <div className=" px-10 lg:px-32 text-center my-10">
          <p className=" font-semibold text-sm">{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
