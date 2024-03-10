import css from './MiddlePart.module.css'


export default function IndividualComponent({ packate }) {
    return (
        <div className={css.element}>
            <div className={css.flipper}>


                <div className={css.front}>

                    <img src={packate.datafront} alt="" />
                </div>


                <div className={css.back}>
                    <h1>{packate.datadesign}</h1>
                    <h1>{Math.floor(packate.databack)}{packate.unit}</h1>
                </div>
            </div>

        </div>

    )
}