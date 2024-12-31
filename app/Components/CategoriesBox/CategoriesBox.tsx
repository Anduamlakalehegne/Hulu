import styles from './CategoriesBox.module.css'


import { Box } from './Box'


export const CategoriesBox = () => {
    return (
        <div className={styles.CategoriesBox_Main}>
            <div className={styles.CategoriesBox_Row}>
                <Box
                    ImgUrl='/assets/tv/1.png'
                    h6Text='TV SHOWS'
                />
                <Box
                    ImgUrl='/assets/tv/2.jpg'
                    h6Text='MOVIES'
                />  <Box
                    ImgUrl='/assets/tv/3.jpg'
                    h6Text='HULU ORIGINALS'
                />  <Box
                    ImgUrl='/assets/tv/4.png'
                    h6Text='PREMIUMS'
                />
            </div>
        </div>
    )
}