import Head from "next/head";
import Image from 'next/image';
import { CSSProperties } from "react";
export default function Custom404() {
    const bodyStyle: CSSProperties = {
        background: "black",
        color: "white",
        margin: 0,
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    };
    const paneStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px",
        borderRadius: "7px",
        border: "2px solid white",
    }
    return (
        <div>
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

            <main style={bodyStyle}>
                <div style={paneStyle}>
                    <div style={{ background: "white", borderRadius: "10px", width: "200px", height: "100px" }}>
                        <Image src='/logo.png' alt='logo' width={'200'} height={'90'} style={{ objectFit: 'cover', transform: 'scale(0.8)' }} priority />
                    </div>

                    <h1>404 - Pagina no encontrada en Agrosuper</h1>
                    <p style={{ color: "#e87722", fontWeight: "bold" }}>Por favor, revisa la URL</p>
                </div>

            </main>
        </div>
    )
}