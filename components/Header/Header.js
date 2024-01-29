import Image from "next/image";
import styles from "./page.module.css";

export default function Header() {
    return (
        <div className={styles.content_sidebar}>
            <nav className={styles.sidebar_navigation}>
                <div className={styles.sidebar_up}>
                    <div className={styles.logo}>
                        <a href="/">
                            <Image src="/logo-spotify.png" alt="Logo" width={80} height={24} priority />
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="/">
                                <svg data-encore-id="icon" role="img" aria-hidden="true"
                                    className="Svg-sc-ytk21e-0 bneLcE home-icon bx" viewBox="0 0 24 24">
                                    <path
                                        d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z">
                                    </path>
                                </svg>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="/#search">
                                <svg data-encore-id="icon" role="img" aria-hidden="true"
                                    className="Svg-sc-ytk21e-0 bneLcE search-icon" viewBox="0 0 24 24">
                                    <path
                                        d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z">
                                    </path>
                                </svg>
                                <span>Search</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles.sidebar_down}>
                    <div className={styles.library}>
                        <div className={styles.library_up}>
                            <div className={styles.library_content}>
                                <button className={styles.library_button} title="Collapse Your Library">
                                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                                        className="Svg-sc-ytk21e-0 bneLcE search-icon" viewBox="0 0 24 24">
                                        <path
                                            d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z">
                                        </path>
                                    </svg>
                                    <span>You Library</span>
                                </button>
                                <div title="Create playlist or folder">
                                    <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg-sc-ytk21e-0 dYnaPI plus"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                            <div className={styles.playlist_scroll}>
                                <section className={styles.section_playlist}>
                                    <div className={styles.section_playlist_content}>
                                        <span className={styles.title}>Create your first playlist</span>
                                        <span className={styles.subtitle}>It&apos;s easy, we&apos;ll help you</span>
                                        <button className={styles.section_playlist_button}>
                                            <span>Create playlist</span>
                                        </button>
                                    </div>
                                </section>

                                <section className={styles.section_playlist}>
                                    <div className={styles.section_playlist_content}>
                                        <span className={styles.title}>Let&apos;s find some podcasts to follow</span>
                                        <span className={styles.subtitle}>We&apos;ll keep you updated on new episodes</span>
                                        <button className={styles.section_playlist_button}>
                                            <span>Browse podcasts</span>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className={styles.library_down}>
                            <div className={styles.library_down_atalhos}>
                                <div className={styles.cookies}>
                                    <a href="https://www.alura.com.br/imersao-front-end">Imersão Fron-End Alura</a>
                                </div>
                                <div className={styles.cookies}>
                                    <a href="https://github.com/zammyrbychyeller/">Developed by Stênio</a>
                                </div>
                            </div>

                            <div className={styles.languages}>
                                <button className={styles.languages_button}>
                                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                                        className="Svg-sc-ytk21e-0 dYnaPI" viewBox="0 0 16 16">
                                        <path
                                            d="M8.152 16H8a8 8 0 1 1 .152 0zm-.41-14.202c-.226.273-.463.713-.677 1.323-.369 1.055-.626 2.496-.687 4.129h3.547c-.06-1.633-.318-3.074-.687-4.129-.213-.61-.45-1.05-.676-1.323-.194-.235-.326-.285-.385-.296h-.044c-.055.007-.19.052-.391.296zM4.877 7.25c.062-1.771.34-3.386.773-4.624.099-.284.208-.554.329-.806a6.507 6.507 0 0 0-4.436 5.43h3.334zm-3.334 1.5a6.507 6.507 0 0 0 4.436 5.43 7.974 7.974 0 0 1-.33-.806c-.433-1.238-.71-2.853-.772-4.624H1.543zm4.835 0c.061 1.633.318 3.074.687 4.129.214.61.451 1.05.677 1.323.202.244.336.29.391.297l.044-.001c.06-.01.19-.061.385-.296.226-.273.463-.713.676-1.323.37-1.055.626-2.496.687-4.129H6.378zm5.048 0c-.061 1.771-.339 3.386-.772 4.624-.082.235-.171.46-.268.674a6.506 6.506 0 0 0 4.071-5.298h-3.03zm3.031-1.5a6.507 6.507 0 0 0-4.071-5.298c.097.214.186.44.268.674.433 1.238.711 2.853.772 4.624h3.031z">
                                        </path>
                                    </svg>
                                    <span className={styles.language_selected}>English</span>
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    );
}
