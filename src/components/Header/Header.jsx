import logoImage from '../../assets/img/logo.svg'
import { menu } from './menu'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'



const Header = () => {
    const nav = useNavigate()
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img height='45' src={logoImage} alt="logo" />
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    {menu.map(({title, link, id}) => (
                        <li key={`menu-item${id}`}>
                            <Link to={link}>{title}</Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
            <div className={styles.btns}>
                <button className={styles['login-btn']} onClick={() => nav('/about')}>Login</button>
                <button className={styles['sign-up-btn']}>Sign up</button>
            </div>
        </header>
    )
}

export default Header