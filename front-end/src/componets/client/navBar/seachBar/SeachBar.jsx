const SeachBar = () => {
  return (
    <form action="" className="text-[13px] w-full mt-0 mb-1 mx-1">
      <table className="border-spacing-[0_0] w-full mb-0.5 border-none border-0">
        <tbody className="table-row-group align-middle border-inherit">
          <tr className="table-row border-inherit align-middle">
            <td className="pr-3 align-middle  text-base">
              <div className="border border-solid rounded-sm border-[#a5a5a7] bg-white focus:border-[#1F2029] hover:border-[#1F2029] ">
                <table className="w-full p-0 border-spacing-0 border-collapse">
                  <tbody className="table-row-group align-middle border-inherit">
                    <tr className="table-row border-inherit rounded-sm align-middle">
                      <td className=" align-middle pt-[5px] pb-1 px-[9px] rounded-sm w-full table-cell leading-none ">
                        <input
                          className="w-full h-auto m-0 p-0 rounded-sm border-[none] bg-left bg-no-repeat focus:border-[#1F2029] hover:border-[#1F2029] outline-none"
                          type="text"
                          name="search"
                          placeholder="Search..."
                        />
                      </td>
                      <td className="table-cell rounded-sm">
                        <div className="text-base rounded-sm relative select-none whitespace-nowrap px-0.5 py-0 ">
                          <button className="hidden rounded-lg cursor-pointer px-1 py-0 hover:inline-block">
                            <span>x</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>

            <td className="align-middle  ml-0.5 w-[1%] leading-none">
              <button className="bg-[#e9e9e9] bg-none border-[#1F2029] text-[0] w-auto align-middle border  px-[27px] py-1.5 rounded-sm border-solid">
                <svg
                  className="ml-auto h-5 px-4 text-gray-800 svg-inline--fa fa-search fa-w-16 fa-9x"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                  ></path>
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default SeachBar;
