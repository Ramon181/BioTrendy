import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../store/slice/product/productSlice";
import Overviews from "../../../componets/client/product/overviews/Overviews";
import Breadcrumbs from "../../../componets/client/breadcrumbs/Breadcrumbs";
import Detail from "../../../componets/client/product/detail/Detail";
import Recient from "../../../componets/client/product/recient/Recient";

const Product = () => {
  const product = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(id));
    return () => {
      dispatch(fetchProduct())
    }
  }, [dispatch, id]);

  return (
    <div className=" flex items-center flex-col">
      <div className="my-4 w-[90%] bg-gray-200 px-3 rounded-lg">
        <Breadcrumbs products={"Productos"} product={product.name} />
      </div>
      <Overviews product={product} />
      <Detail product={product}/>
      <Recient/>
    </div>
  );
};

export default Product;
