"use client"
import { useState, useEffect } from 'react';
import styles from './page.module.css'

interface Props { };
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
var request = {
    method: "getCarnesRealProyeccion",
    query:{
        initial_date: {
            month: 1,
            year: 2023
        },
        end_date:{
            month: 1,
            year: 20255
        }
    }
}
const Page = ({ }: Props) => {
    const [datos, setDatos] = useState({})
    const [showUSDM, setShowUSDM] = useState(false);
    const [showUSD_Ton, setshowUSD_Ton] = useState(false);

    async function getDatos() {

        const res = await fetch("/api/SecureApi", {
            method: "POST",
            body: JSON.stringify(request),
            headers: myHeaders
        });
        const object = await res.json().then((data) => data);
        console.log(object)
        return object;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        //setDatos(getDatos())
    }, [])
    return <>
        <div style={{ width: "100%" }} className={styles.mainDiv}>
            <aside className={styles.asideFilter}>
                <p>Fecha de inicio:</p>
                <input type="month" onChange={(e)=>{
                    request.query.initial_date.month = e.currentTarget.valueAsDate?.getMonth() as number;
                    request.query.initial_date.year = e.currentTarget.valueAsDate?.getFullYear() as number;
                    setDatos(getDatos());
                    }}></input>
                <p>Fecha de fin:</p>
                <input type="month" onChange={(e)=>{
                    request.query.end_date.month = e.currentTarget.valueAsDate?.getMonth() as number;
                    request.query.end_date.year = e.currentTarget.valueAsDate?.getFullYear() as number;
                    setDatos(getDatos());
                    }}></input>
                <span>
                    <label>USDM</label>
                    <input type="checkbox"></input>
                </span>
                <span>
                    <label>USD Ton</label>
                    <input type="checkbox"></input>
                </span>
                
            </aside>
            <span className={styles.mainSpan}>
                <button onClick={() => setDatos(getDatos())}>Tim button</button>
            </span>
        </div>


    </>
}
export default Page