"use client";
import Head from "next/head";

export default function Custom404() {
    const bodyStyle = {
        background: "black",
        color: "white",
        display: "flex",
        boxSizing: "border-box",
        margin: 0,
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <Head>
                <title>Agrosuper - 404</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="Pagina no encontrada" />
                <link rel="icon" href="/temp-favicon.png" />
            </Head>

            <body style={bodyStyle}>
                <h1>404 - Pagina no encontrada en Agrosuper</h1>
                <p style={{ color: "#e87722" }}>Por favor, revisa la URL</p>
            </body>
        </html>
    )
}