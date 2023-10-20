import styles from "./Products.module.css";
import Rating from '@mui/material/Rating';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

export const Product = ({productData}) => {
    // const  {state , dispatch} = useContext(CartContex);
    return (
      <div className='font-bold border border-solid  border-slate-300 rounded-xl m-3 pr-0 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 '>
        
        <div className={styles.card}>
        <img className={styles.cardImage} src={productData.image} alt="productimg"></img>
        <h4>{productData.price}  تومان </h4>
        <h3>{productData.name}</h3>
        <div className={styles.cardrate}>
           <Rating name="size-medium" defaultValue={3} size="small" readOnly /><span className={styles.review}>(2 دیدگاه)</span>
        </div>
        
        
        <div className={styles.cardfooter}>

          <div>
            <AddRoadIcon color="action"/>
          </div>

          <div>
            <LocalGasStationIcon color="action"/>
          </div>

          <div>
            <SettingsSuggestIcon color="action"/>
          </div>

          

        </div>
     
  
        </div>
        
        {/* <div className={styles.linkContainer}>
          <Link to={`/products/${productData.id}`}>Details</Link>
          <div className={styles.buttonContainer}>
            {
              isInCart(state , productData.id) ?
              <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE", payload:productData})}>+</button> :
              <button onClick={() => dispatch({type:"ADD_ITEM", payload:productData})}>Add to Cart</button>
            }
            
            { quantityCount(state , productData.id) > 1 &&
              <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE", payload:productData})}>-</button> }
            { quantityCount(state , productData.id) === 1 &&
              <button className={styles.smallButton} onClick={() => dispatch({type:"REMOVE_ITEM", payload:productData})}>
                <img src={deleteicon} alt="delete"/>
              </button> }
            
  
          </div>
        </div> */}
  
        </div>
          )
          }
  
          export default Product;