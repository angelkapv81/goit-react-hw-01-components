import PropTypes from "prop-types";
import style from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
    return (
        <div className={style.statBox}>
            <section className={style.statistics}>
                {title && <h2 className={style.title}>{title}</h2>}
                <ul className={style.statList}>
                    {stats.map((el) => (
                        <li key={el.id} className={style.item}>
                            <span className={style.label}>{el.label}</span>
                            <span className={style.percentage}>
                                {el.percentage}%
                            </span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};
