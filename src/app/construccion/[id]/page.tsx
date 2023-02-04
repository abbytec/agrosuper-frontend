"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react'
interface Props {
    params: any,
}

const Page = ({ params }: Props) => {
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
        <div className='pane itemsPane'>
            <div style={{ background: "white", borderRadius: "10px", width: "200px", height: "100px" }}>
                <Image src='/logo.png' alt='logo' width={'200'} height={'90'} style={{ objectFit: 'cover', transform: 'scale(0.8)' }} priority />
            </div>
            <p>El sitio web &quot;<strong>{params["id"]}</strong>&quot; se encuentra en construccion.</p>
            <p>Seras redirigid@ a la pagina principal en {timer} segundos...</p>
        </div>
    )
}

export default Page