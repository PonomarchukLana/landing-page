import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../images/menu-icon.svg';
import Button from '../../components/Button';
import styles from './Styles.module.scss';

const Header = ({ navList }) => {
    const [showMenu, setShowMenu] = useState(false);

    let activeStyle = {
        textShadow: '0 0 1px #000, 0 0 1px #000',
        opacity: '1',
    };

    useEffect(() => {
        showMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [showMenu]);

    const navBar = (list) => {
        return (
            <>
                <ul>
                    {list.map(item =>
                        <li key={item.title}>
                            <NavLink className={styles.navLink}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                to={item.link}>
                                {item.title}
                            </NavLink>
                        </li>)}
                </ul>
            </>
        )
    }

    return (
        <header>
            <div className={`${showMenu ? styles.bg : ''}`}>
                <div className={`${styles.wrapp} ${showMenu ? styles.positionUnset : ''}`}>
                    <NavLink
                        className={styles.logo}
                        to='/'>
                        <Logo />
                    </NavLink>
                    <div className={styles.navWrapp}>
                        <nav className={styles.nav}>
                            {navBar(navList)}
                        </nav>
                        <Button click={() => console.log('Apply')}>Apply</Button>
                    </div>
                    <div className={`${styles.mobNavWrapp} ${showMenu ? styles.closeIcon : ''}`} onClick={() => setShowMenu(!showMenu)}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={`${showMenu ? styles.show : styles.hidden}`}>
                    <div className={styles.navMob}>
                        {navBar(navList)}
                        <Button fullwidth click={() => console.log('Apply')}>Apply</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
