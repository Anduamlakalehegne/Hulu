import styles from './page.module.css'

import Link from 'next/link'

// For Components
import { Button } from '../Button/Button'

const MainBg = () => {
    return (
        <div className={styles.MainBg}>
            <div>
                <img src="/assets/MainBg.jpg" alt="" />
            </div>
            <div className={styles.MainBgContent}>

                <div className={styles.MainBgContent1}>
                    <div>
                        <h6>DISNEY BUNDLE DUO BASIC</h6>

                        <div>
                            <img src="/assets/logo1.png" className={styles.logo1} alt="" />
                            <p>Both With ads, for <br /> $9.99 Month.</p>
                            <Button
                                BtnText='Get Them Both'
                            />
                        </div>

                    </div>

                    <div>
                        <h6>DISNEY BUNDLE TRIO BASIC</h6>

                        <div>
                            <img src="/assets/logo2.png" className={styles.logo1} alt="" />
                            <p>All With ads, for <br /> $14.99 Month.</p>
                            <Button
                                BtnText='Get All Three'
                            />
                        </div>

                    </div>
                </div>

                <Link href={""}>Sign Up For Hulu Only.</Link>
            </div>



            <div className={styles.MainBg2}>
                <h6>Build The Plan That's Right For You</h6>
                <button>Start Building</button>
            </div>

        </div>
    )
}

export default MainBg
