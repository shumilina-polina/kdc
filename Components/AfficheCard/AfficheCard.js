import Link from "next/link";
import s from "./afficheCard.module.scss";

const AfficheCard = (props) => {
    // const {
    //     thumbanil,
    //     date,
    //     title
    // } = props.affiche;

    return(
        <Link href={"#"}>
            <a className={s.card}>
                <div className={s.card}>
                <img src="/assets/images/singlecollective1.jpg" className={s.thumbnail} />
                <div className={s.date}>
                    <span className={s.number}>18</span>
                    <span className={s.dtaeMonth}>Октября</span>
                    <span className={s.narrow}>Сегодня</span>
                </div>
                <div className={s.title}>
                    <span>Спектакль “Мойдодыр”</span>
                </div>
            </div>
            </a>
        </Link>
    )
}

export default AfficheCard;