import styles from './CategoriesBox.module.css'

interface BoxProps {
    ImgUrl: string,
    h6Text: string,
}


export const Box = (
    { ImgUrl, h6Text }: BoxProps
) => {
    return (
        <div className={styles.CategoriesBox_Box}>
            <div>
                <div>
                    <img src={ImgUrl} alt="" />
                </div>
                <div className={styles.CategoriesBox_BoxOverlay}></div>
            </div>
            <div className={styles.CategoriesBox_BoxContent}>
                <h6>{h6Text}</h6>
            </div>
        </div>
    )
}