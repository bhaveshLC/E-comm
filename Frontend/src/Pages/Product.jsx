import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { useParams } from 'react-router-dom';
import ProductPath from '../Components/ProductPath/ProductPath'
import ProductInfo from '../Components/ProductInfo/ProductInfo';

const Product = () => {
  const {all_product} = useContext(Context);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
       <ProductPath product={product} />
       <ProductInfo product={product} />
    </div>
  )
}

export default Product