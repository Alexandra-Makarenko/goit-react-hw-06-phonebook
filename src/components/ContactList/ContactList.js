// import PropTypes from 'prop-types';
import { ListItem } from '../ListItem/ListItem';
import { useSelector } from "react-redux";

import { List, Item, Button } from './ContactList.styled';


export const ContactList = ({  onDeleteContact }) => {

  const contacts = useSelector(state => state.contacts);

        return (
            <List>
                {contacts.map((contact) => (
                    <Item key={contact.id}
                    > {<ListItem
            contact={contact}
            
                        />}
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
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id:PropTypes.string.isRequired,
//       }).isRequired).isRequired,
//     onDeleteContact:  PropTypes.func.isRequired
// }
