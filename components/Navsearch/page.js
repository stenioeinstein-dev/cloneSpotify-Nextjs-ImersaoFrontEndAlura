'use client'
import { Btnsignin, Btnsignup } from "../Btns/Btns";
import styles from "./page.module.css";



export default function Navsearch() {


  function handleClickBack() {
    history.back();
  }

  function handleClickGo() {
    history.go(1);
  }

  return (
    <>
      <nav className={styles.view_nav}>
        <div className={styles.left}>
          <div className={styles.view_nav_btns}>
            <div className={styles.view_nav_back} title="Go back" onClick={handleClickBack} >
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF">
                <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
              </svg>
            </div>
            <div className={styles.view_nav_next} title="Go forward" onClick={handleClickGo} >
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 cAMMLk IYDlXmBmmUKHveMzIPCF">
                <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
              </svg>
            </div>
          </div>
          <div className={styles.view_nav_input}>
            <form>
              <input type="text" placeholder="What do you want to listen to?" id="search" />
              <div>
                <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI mOLTJ2mxkzHJj6Y9_na_" viewBox="0 0 18 18">
                  <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                </svg>
              </div>
            </form>

          </div>
        </div>
        <div className={styles.right}>
          <Btnsignup />
          <Btnsignin />
        </div>
      </nav>


    </>
  );
}
