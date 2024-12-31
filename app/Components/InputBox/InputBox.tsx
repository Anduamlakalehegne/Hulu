import styles from './InputBox.module.css'


interface InputBoxProps {
    labelText: string,
    id?: string,
    value?: string
    onchange?: any,
    type?: string,
    required?: boolean
}

export const InputBox = (
    {
        labelText,
        id,
        value,
        onchange,
        type,
        required
    }: InputBoxProps
) => {
    return (
        <div className={styles.InputBox}>
            <label htmlFor={id}>{labelText}</label><br />
            <input type={type} id={id} required={required} value={value} onChange={onchange} />
        </div>
    )
}