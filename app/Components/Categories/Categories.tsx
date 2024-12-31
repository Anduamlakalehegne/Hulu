import styles from './Categories.module.css'


// For Components
import Wrapper from '../Wrapper/Wrapper'
import { Content } from '../Content/Content'
import { CategoriesBox } from '../CategoriesBox/CategoriesBox'


export const Categories = () => {
    return (
        <>

            <Wrapper>
                <div className={styles.Categories}>
                    <Content

                        h5Text='Included in All Plans'
                        h6Text='All The Tv You Love'
                        pText='Watch full seasons of exclusive streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.'
                    />
                </div>


                <CategoriesBox />




            </Wrapper>

        </>
    )
}