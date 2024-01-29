import Image from "next/image";
import styles from"./page.module.css";


function Btnsignin () {
    return (
        <button className={styles.login}>Log in</button>
        )
}

function Btnsignup() {
    return (
        <button className={styles.subscribe}>Sign up</button>
    )
}

export { Btnsignin, Btnsignup }