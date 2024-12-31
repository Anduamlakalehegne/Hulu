import styles from './Button.module.css'


interface ButtonProps {
    BtnText: string,
}

export const Button = ({ BtnText }: ButtonProps) => {
    return (
        <button className={styles.Btn}>
            {BtnText}
        </button>

    )
}