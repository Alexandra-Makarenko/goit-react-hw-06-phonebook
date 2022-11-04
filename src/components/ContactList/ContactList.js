// import PropTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { List, Item, Button } from './ContactList.styled';


export const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // console.log(Object.values(contacts))

  // const visibleContacts = (Object.values(contacts)).filter(contact =>
  //       console.log(contact.name.toLowerCase()),
  // );
   const visibleContacts = Object.values(contacts).filter(contact =>
        contact?.name?.toLowerCase()?.includes(filter),
      );
  const dispatch = useDispatch();

  const onDeleteContact = (contact) => dispatch(deleteContact(contact));


        return (
            <List>
                {visibleContacts.map((contact) => (
                    <Item key={contact.id}
                    > {<ListItem
            contact={contact}/>}
                        <Button
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Удалить
        </Button></Item>
                ))}
            </List>
        );
    
}
