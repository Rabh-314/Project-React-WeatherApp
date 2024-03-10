import css from './Header.module.css';
import search from "../images/search.png";
import { useRef } from 'react';
function Header({setcity}){


    const city = useRef();

    const handleCLick = ()=>{
        const city_val = city.current.value;
        setcity(city_val);
        city.current.value = "";
    }


    return(
        <div className={css.container}>
            <div className={css.subContainer1}>
                <div className={css.element1}>
                    <input type="text" ref={city} placeholder='Enter City'/>
                </div>
                <div className={css.element2} onClick={handleCLick}>
                    <img src={search} alt='Not Found'/>
                </div>
            </div>
        </div>
    );

}

export default Header;