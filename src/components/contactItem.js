import React, {
    useCallback,
    useState,
    useEffect,
    useContext,
} from 'react';
import {
    useQueryClient,
    useMutation,
    QueryClient,
} from 'react-query';
import deleteContactRequest from '../api/deleteContactRequest';
import updateContactRequest from '../api/updateContactRequest';
import { debounce } from 'lodash';
import { TokenContext } from '../App';

export const ContactItem = ({ Contact }) => {
    const [text, setText] = useState(Contact.text);
    const [token] = useContext(TokenContext);

    const queryClient = useQueryClient();

    const { mutate: updateContact } = useMutation(
        (updatedContact) => updateContactRequest(updatedContact, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('Contacts');
            },
        }
    );

    const { mutate: deleteContact } = useMutation(
        (updatedContact) => deleteContactRequest(updatedContact, token),
        {
            onSettled: () => {
                queryClient.invalidateQueries('Contacts');
            },
        }
    );

    const debouncedUpdateContact = useCallback(
        debounce(updateContact, 600),
        [updateContact]
    );

    useEffect(() => {
        if (text !== Contact.text) {
            debouncedUpdateContact({
                ...Contact,
                text,
            });
        }
    }, [text]);

    return (
        <div
            style={{
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <input
                checked={Contact.completed}
                type="checkbox"
                style={{
                    marginRight: '5px',
                    height: '34px',
                    width: '34px',
                }}
                onChange={() =>
                    updateContact({
                        ...Contact,
                        completed: !Contact.completed,
                    })
                }
            />

            <input
                style={{
                    padding: '8px',
                    marginRight: '6px',
                }}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                style={{
                    padding: '5px',
                    height: '35px',
                    outline: 'none',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#cc5a5a',
                }}
                onClick={() => deleteContact(Contact)}
            >
                delete
            </button>
        </div>
    );
};