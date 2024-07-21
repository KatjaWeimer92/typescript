import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.pages}>
    <header className={styles.header}>
        <Link className={location.pathname=== '/homepage' ? styles.active : ''} to={'/homepage'}>homepage</Link>
        <Link className={location.pathname=== '/star-wars' ? styles.active : ''} to={'/star-wars'}>star-wars</Link>
        <Link className={location.pathname=== '/gender-form' ? styles.active : ''} to={'/gender-form'}>gender form</Link>
        <Link className={location.pathname=== '/counter' ? styles.active : ''} to={'/counter'}>counter</Link>
        <Link className={location.pathname=== '/feedback' ? styles.active : ''} to={'/feedback'}>feddback</Link>
    </header>
    <main className={styles.main}>
        <Outlet/>
    </main>
    </div>
  )
}
