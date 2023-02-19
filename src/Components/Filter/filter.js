import React, {useState} from "react";
import styles from "./filter.module.css"

const Filter = ({items}) => {
    
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
            
            
    
    return  <div className={styles.fitrosbox}> 
                <div className={styles.filtrostitulo}>Filtros</div>
                    

                        <div className="topping">
                            <input 
                                className={styles.tags} 
                                type="checkbox" 
                                id="topping" 
                                name="topping" 
                                value="Gatos" 
                                checked={isChecked}
                                onChange={handleOnChange}/>
                                Gatos
                        </div>
                  
                        <div className="result">
                Above checkbox is {isChecked ? "checked" : "un-checked"}.
            </div>

            </div>
    }

export default Filter