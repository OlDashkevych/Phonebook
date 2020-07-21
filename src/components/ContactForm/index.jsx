import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import ContactForm from './ContactForm.tsx';

const mstp = state => ({
  items: contactsSelectors.getContacts(state),
});

const mdtp = dispatch => ({
  setExisting: boolean => dispatch(contactsActions.setExisting(boolean)),
  onAddItem: item => dispatch(contactsActions.addAction({ item })),
});

export default connect(mstp, mdtp)(ContactForm);
