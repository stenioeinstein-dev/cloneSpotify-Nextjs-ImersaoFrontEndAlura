import styles from "./page.module.css";

export default function Input() {
    return (
        <div className={styles.container} id="input">
            <div className={styles.input}>
                <span>Esc to close</span>

                <input autoFocus="true" type="text" placeholder="Change color using secret codes" />
            </div>
        </div>
    );
}
