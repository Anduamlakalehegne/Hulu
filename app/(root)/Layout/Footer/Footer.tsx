import Link from 'next/link'
import styles from './Footer.module.css'


const Link1 = [
    {
        LinkText: "Streaming Library",
    }, {
        LinkText: "Live Tv",
    }, {
        LinkText: "Live  News",
    }, {
        LinkText: "Live Sports",
    },
]

const Link2 = [
    {
        LinkText: "Tv Shows",
    }, {
        LinkText: "Movies",
    }, {
        LinkText: "Originals",
    }, {
        LinkText: "Networks",
    }, {
        LinkText: "Kids",
    }, {
        LinkText: "FX",
    },
]


const Link3 = [
    {
        LinkText: "Max",
    }, {
        LinkText: "Cinemax",
    }, {
        LinkText: "Paramount",
    }, {
        LinkText: "Starz",
    },
]


const Link4 = [
    {
        LinkText: "Disney Bundles Trio Basics",
    }, {
        LinkText: "Disney Bundles Trio Premium",
    }, {
        LinkText: "Disney Bundles Duo Basics",
    }, {
        LinkText: "Student Discount",
    },
]

const Link5 = [
    {
        LinkText: "Account & Billing",
    }, {
        LinkText: "Plans & Pricing",
    }, {
        LinkText: "Supported Devices",
    }, {
        LinkText: "Accessibility",
    },
]

const Link6 = [
    {
        LinkText: "Shop Hulu",
    }, {
        LinkText: "Press",
    }, {
        LinkText: "Jobs",
    }, {
        LinkText: "Contact",
    },
]




export const Footer = () => {
    return (
        <div className={styles.FooterMain}>

            <div className={styles.FooterRow}>


                <div>
                    <h6>Browse</h6>
                    {
                        Link1.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>

                <div>
                    {
                        Link2.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>

                <div>
                    {
                        Link3.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>


                <div>
                    {
                        Link4.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>

                <div>
                    <h6>Help</h6>
                    {
                        Link5.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>


                <div>
                    <h6>About us</h6>
                    {
                        Link6.map((item, index) => (
                            <Link href={"/"} key={index}>
                                {item.LinkText}
                            </Link>
                        ))
                    }
                </div>





            </div>


            <div className={styles.FooterRow1}>

                <h5>&copy; Easy Coding Tutorial</h5>


            </div>


        </div>
    )
}