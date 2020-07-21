import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { path } from '../../routes';
import styles from './RegisterView.module.css';
import useDataChange from './hooks/useDataChange.ts';

const RegisterView = () => {
  const [data, handleDataChange, handleClear] = useDataChange();
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ ...data }));
    handleClear();
  };

  return (
    <div>
      <h1 className={styles.title}>Register page</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleDataChange}
            id="name"
          />
        </label>

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
        <Link to={path.LOGIN.url}>Login</Link>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
