import React from 'react'


import { Navbar } from './Layout/Navbar/Navbar'
import { Footer } from './Layout/Footer/Footer'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout