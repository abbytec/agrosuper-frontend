"use client"
import { useState, useEffect } from 'react';
import styles from './page.module.css'

interface Props { };
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
var request = {
    method: "editorSemanal"
}
const Page = ({ }: Props) => {
    const [datos, setDatos] = useState({})
    const [showUSDM, setShowUSDM] = useState(false);
    const [showUSD_Ton, setshowUSD_Ton] = useState(false);

    async function getDatos() {

        const res = await fetch("http://localhost:3000/api/SecureApi", {
            method: "POST",
            body: JSON.stringify(request),
            headers: myHeaders
        });
        const object = await res.json().then((data) => data)
        console.log("AAAAA")
        return object;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setDatos(getDatos())
    }, [])
    return <>
        <h2> Maestria 7 (main)  </h2>
        <div style={{ width: "100%" }} className={styles.mainDiv}>
            <aside className={styles.asideFilter}>
                <input type="date"></input>
                <input type="date"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
            </aside>
            <span className={styles.mainSpan}>
                <button onClick={() => setDatos(getDatos())}>Tim button</button>
            </span>
        </div>


    </>
}
export default Page