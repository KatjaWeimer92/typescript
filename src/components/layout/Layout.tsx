import {Link, Outlet, useLocation } from 'react-router-dom';
import styles from './layout.module.css'
import Header from '../header/Header';

function Layout() {
  const location = useLocation()
  console.log(location.pathname);
  
  return (
    <div className={styles.page}>
      
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
      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  );
}

export default Layout;