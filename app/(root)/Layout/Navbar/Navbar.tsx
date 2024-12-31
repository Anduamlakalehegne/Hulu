import styles from './Navbar.module.css'



import Image from 'next/image'
import Link from 'next/link'


export const Navbar = () => {
    return (
        <>
            <nav className={styles.Navbar}>
                <Image
                    src={'/assets/logo.svg'}
                    height={120}
                    width={120}
                    alt='Logo'
                />

                <Link
                    href={"/Login"}
                >
                    Login
                </Link>

            </nav>
        </>
    )
}