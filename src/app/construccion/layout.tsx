import '../globals.css'
import './seccion.css'

import { CSSProperties } from 'react';
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const bodyStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        height: "100vh",
        width: "100vw"
    }

    return (
        <html lang="en">
            {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />

            <body style={bodyStyle}>
                {children}
            </body>
        </html>)
}