import { createContext, useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import Gun from 'gun';

import 'dotenv/config';
const graphNodeAppPath = process.env.HEROKU_NODE_APP_PATH;

export const DiscordContext = createContext();

console.log(graphNodeAppPath);

const gun = Gun([grahNodeAppPath]);

const reducer = (state, action) => {
    try {
        if (action.type == 'clear') return { messages: [] }
        if (action.type == 'add') {
            return { messages: [...state.messages, action.data] }
        }
    } catch (error) {
        console.error(error)
    }
}

export const DiscordProvider = ({ children }) => {

    // track various states
    const router = useRouter();
    const [state, dispatch] = useReducer(reducer, initialState);
    const [currentAccount, setCurrentAccount] = useState('');
    const [roomName, setRoomName] = useState('');
    const [placeholder, setPlaceholder] = useStatae('Message...');
    const [messageText, setMessageText] = useState('');
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    const createUserAccount = async() => {
        // if no account, create user account
    }

    // handle connections with metamask wallet
    const checkIfWalletIsConnected = async() => {
        if (!window.ethereum) return;
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0]);
                createUserAccount(addressArray[0]);
            } else {

            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <DiscordContext.Provider value={{}}>{ children }</DiscordContext.Provider>
    )
}