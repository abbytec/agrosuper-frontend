import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div className={styles.main}>
      <div className={"pane " + styles.loginPane}>
        <span>
          <h1>Agrosuper - Login</h1>
        </span>
        <span>
          <p>Usuario:</p> <input type="text"></input>
        </span>
        <span>
          <p>Clave:</p> <input type="password"></input>
        </span>
        <span>
          <button>Ingresar</button>
        </span>
      </div>

    </div>

  )
}
