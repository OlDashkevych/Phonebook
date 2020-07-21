import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useMediaQuery } from 'react-responsive';
import ContactListContainer from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import Notification from '../../components/Notification';
import slideTransition from '../../components/Notification/transitions/slide.module.css';
import Logo from '../../components/Logo';

import styles from './ContactsView.module.css';
import useFilterChange from './hooks/useFilterChange';
import { isDesktop } from '../../assets/mediaQuery';

interface IContact {
  name: string;
  id: string;
  number: string;
}

interface IContactsView {
  onFiltrate(filter: string): void;
  contactExist: boolean;
  items: IContact[];
}

const ContactsView: React.FC<IContactsView> = ({
  onFiltrate,
  contactExist,
  items,
}) => {
  const [filter, handleFilterChange] = useFilterChange();
  const Desktop = isDesktop(useMediaQuery);
  useEffect(() => {
    onFiltrate(filter);
  }, [filter, onFiltrate, items]);

  return (
    <div className={styles.container}>
      <div className={Desktop ? styles.contactsCard_D : styles.contactsCard}>
        <div className={Desktop ? styles.section_D : styles.section}>
          <Logo />
          <CSSTransition
            in={contactExist}
            timeout={1000}
            classNames={slideTransition}
            unmountOnExit
            onEntered={() => setTimeout(() => {}, 1000)}
          >
            <Notification />
          </CSSTransition>
          <ContactForm />
        </div>
        <div className={Desktop ? styles.section_D : styles.section}>
          <h2 className={styles.title}>Contacts</h2>
          <Filter onSetFilter={handleFilterChange} />
          <ContactListContainer />
        </div>
      </div>
    </div>
  );
};

export default ContactsView;
