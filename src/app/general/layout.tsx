"use client"
import '../globals.css'
import Link from 'next/link'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css'
/*import localFont from '@next/font/local';
 const myFont = localFont({
  src: [
    {
      path: '../../pages/fonts/Gotham-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-Ultra.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-UltraItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../pages/fonts/Gotham-XLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../pages/fonts/Gotham-XLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
  ]
}); */
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const layout = usePathname();
  return (
    /*className= { myFont.className }*/
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <header>
          <Link href={'/general'}><Image src='/logo.png' alt='logo' width={'200'} height={'90'} style={{ objectFit: 'cover', transform: 'scale(0.8)' }} priority /></Link>
          <h1 style={{ fontFamily: "var(--gotham)" }}>{layout == "/general" ? "General Carnes" : layout == "/general/variaciones" ? "General Carnes Variaciones" : "Editor Semanal"}</h1>
          <Image src={"/profile.png"} alt={'Imagen de perfil'} width={'50'} height={'50'} />
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
