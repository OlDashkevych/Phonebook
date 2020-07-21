import React from 'react';
import { AsYouType } from 'libphonenumber-js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';
import popTransition from './transitions/pop.module.css';

interface IContact {
  name: string;
  id: string;
  number: string;
}

interface IContactListProps {
  filtratedItems: IContact[];
  onDelete(id: string): void;
}

const ContactList: React.FC<IContactListProps> = ({
  filtratedItems: items,
  onDelete,
}) => {
  console.log(items);
  return items.length ? (
    <TransitionGroup component="ul" className={styles.list}>
      {items.map(({ name, id, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={popTransition}>
            <li className={styles.item}>
              <span>
                {name} {new AsYouType('US').input(number)}
              </span>
              <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                &#10006;
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  ) : null;
};

export default ContactList;
