"use client";
import './seccion.css'
import { useEffect, useState } from 'react';
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    var [timer, setTimer] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            if (timer <= 0) {
                window.location.href = '/general';
            } else {
                setTimer(timer - 1);
            }
        }, 1000);
        return () => {
            clearInterval(id)
        }
    }, [timer])
    return (
        <html lang="en">
            {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
            */}
            <head />

            <body>
                El sitio web &quot;<strong>{children}</strong>&quot; se encuentra en construccion.
                Seras redirigid@ a la pagina principal en {timer} segundos...
            </body>
        </html>)
}