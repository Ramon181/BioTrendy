import { Link } from "react-router-dom";
import { Arrow, HomeSvg } from "../../../utils/svg/Svg";

const Breadcrumbs = ({ products, filter, product }) => {
  return (
    <div class="flex items-center py-4 overflow-y-auto whitespace-nowrap">
      <Link to={"/"} class="text-gray-600 dark:text-gray-200">
        <HomeSvg />
      </Link>
      {products ? (
        <div className="flex flex-row items-center">
          <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <Arrow />
          </span>
          <Link
            to={"/products"}
            class="text-gray-600 dark:text-gray-200 hover:underline"
          >
            {products}
          </Link>
        </div>
      ) : null}
      
      {filter ? (
        <div className=" flex flex-row items-center">
          <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <Arrow />
          </span>
          <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline">
            {filter}
          </a>
        </div>
      ) : null}

      {product ? (
        <div className=" flex flex-row items-center">
          <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <Arrow />
          </span>
          <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline">
            {product}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Breadcrumbs;
