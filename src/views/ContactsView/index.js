import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import ContactsView from './ContactsView.tsx';

const mapDispatchToProps = dispatch => ({
  onFiltrate: filter => dispatch(contactsActions.filtrateContacts({ filter })),
});

const mapStateToProps = store => ({
  contactExist: store.contacts.contactExist,
  items: store.contacts.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
