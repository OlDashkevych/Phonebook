import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import { path } from '../../routes';

const Navigation: React.FC = () => {
  const isAuthenticated: boolean = useSelector(authSelectors.isAuthenticated);
  return (
    <nav className={styles.nav}>
      <NavLink
        to={path.HOME.url}
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        {path.HOME.label}
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to={path.CONTACTS.url}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          {path.CONTACTS.label}
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
