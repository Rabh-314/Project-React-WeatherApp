import IndividualComponent from './IndividualComponent';
import css from './MiddlePart.module.css';
import humidity from "../images/humidity.png";
import wind from "../images/wind.png";
import thermo from "../images/thermo.png";


function MiddlePart({ data, city }) {

    const Temperature = {
        datadesign:"Temperature",
        datafront:thermo,
        databack:data.main.temp ,
        unit:'°C',
    }

    const Wind = {
        datadesign:"Wind",
        datafront:wind,
        databack:data.wind.speed,
        unit:' Km/H',
    }

    const Humidity = {
        datadesign:"Humidity",
        datafront:humidity,
        databack:data.main.humidity,
        unit:' %',
    }

    return (
        <div className={css.Container}>
            <IndividualComponent packate = {Temperature}/>
            <IndividualComponent packate = {Wind}/>
            <IndividualComponent packate = {Humidity}/>
        </div>
    )

}


export default MiddlePart;