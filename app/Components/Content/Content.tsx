import styles from './Content.module.css'


interface ContentProps {
    h5Text: string,
    h6Text: string,
    pText: string,
}

export const Content = ({
    h5Text, h6Text, pText
}: ContentProps) => {
    return (
        <div className={styles.Content}>
            <div className={styles.ContentRow}>

                <h5>{h5Text}</h5>
                <h6>{h6Text}</h6>
                <p>{pText}</p>
            </div>
        </div>
    )
}