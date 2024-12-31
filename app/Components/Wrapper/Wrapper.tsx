import React from 'react'


import styles from './Wrapper.module.css'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className={styles.Wrapper}>
                {children}
            </div>
        </>
    )
}

export default Wrapper