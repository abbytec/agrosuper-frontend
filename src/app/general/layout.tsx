"use client"
import '../globals.css'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './page.module.css'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const layout = usePathname();
  return (

    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <header>
          <Link href={'/general'}><Image src='/logo.png' alt='logo' width={'200'} height={'90'} style={{ objectFit: 'cover', transform: 'scale(0.8)' }} priority /></Link>
          <h1>{layout == "/general" ? "General Carnes" : layout == "/general/variaciones" ? "General Carnes Variaciones" : "Editor Semanal"}</h1>
          <Image src={"/profile.png"} alt={'Imagen de perfil'} width={'60'} height={'60'}></Image>
        </header>
        <nav id='aside-nav'>
          <div className='nav-links'>
            <Link href={'/construccion/cerdo'}><button>Cerdo</button></Link>
            <Link href={'/construccion/pollo'}><button>Pollo</button></Link>
            <Link href={'/construccion/pavo'}><button>Pavo</button></Link>
          </div>
          <div className='nav-links'>
            <Link href={'/general/editor'}><button>Editor</button></Link>
          </div>
        </nav>
        <main>
          <nav className={styles.topNav}>
            {
              layout == "/general" ?
                <><p>General</p> <Link href={'/general/variaciones'}>Variaciones</Link></>
                :
                layout == "/general/variaciones" ?
                  <><Link href={'/general'}>General</Link> <p>Variaciones</p></> :
                  <><Link href={'/general'}>Volver Atrás</Link></>
            }
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
