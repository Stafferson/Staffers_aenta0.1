import styles from "./badge.module.css";

export default function Badge({
    text="Badge",
    extraClass="",
}) {
    return (
        <div className={[
            styles.badge,
            extraClass
        ].join(' ')}>
            <span className={styles.badge__text}>{text}</span>
        </div>
    )
}