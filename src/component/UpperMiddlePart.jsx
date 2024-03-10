import css from './UpperMiddlePart.module.css';
export default function UpperMiddlePart(props){
    
    return (
        <div className={css.container}>
            <div className={css.part}>
                {props.city.toUpperCase()}
            </div>
            <div className={css.part}>
                {props.desc}
            </div>
            <div className={css.part}>
                <img src={props.Weathericon} alt="" />
            </div>
        </div>
    )
}