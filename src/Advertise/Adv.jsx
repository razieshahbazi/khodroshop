import styled from './adv.module.css'
import {products} from "../assets/api"
import {Product} from "../Advertise/Product"

    





export const Adv = () => {
console.log|(products)
  return (
    <div>
        <div className={styled.title}>
            <h1 className='text-3xl font-bold'>آگهی های ویژه</h1>
        </div>
        <div className={styled.products}>

            {
              products.map(product => <Product key={product.id} productData={product}/>)
              
            }

            <div>
                
                <div>
                   
                </div>
            </div>
        </div>
    </div>
  )
}
