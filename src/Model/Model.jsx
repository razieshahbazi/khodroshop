import suv from '../img/suv.jpg'
import sedan from '../img/sedan.jpg'
import coupe from '../img/coupe.jpg'
import convertible from '../img/convertible.jpg'
import compact from '../img/compact.jpg'
import styles from './model.module.css'


export const Model = () => {
  return (
    <div className={styles.container}>
        
        <div className={styles.item}>
            <img src={coupe}/>
            <h4>کوپه</h4>
        </div>
        <div className={styles.item}>
            <img src={convertible}/>
            <h4>کروک</h4>
        </div>
        <div className={styles.item}>
            <img src={compact}/>
            <h4>هاچبک</h4>
        </div>
        <div className={styles.item}>
            <img src={suv}/>
            <h4>شاسی بلند</h4>
        </div>
        <div className={styles.item}>
            <img src={sedan}/>
            <h4>سدان</h4>
        </div>


    </div>
  )
}

