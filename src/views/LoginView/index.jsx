import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { path } from '../../routes';
import styles from './LoginView.module.css';
import useDataChange from './hooks/useDataChange.ts';

const LoginView = () => {
  const [data, handleDataChange, handleClear] = useDataChange();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ ...data }));
    handleClear();
  };

  return (
    <div>
      <h1 className={styles.title}>Login page</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleDataChange}
            id="email"
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleDataChange}
            id="password"
          />
        </label>
        <Link to={path.REGISTER.url}>Registration</Link>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
