import { createContext, useState, useEffect, useReducer } from 'react';
// import { useRouter } from 'next/router';
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
    return (
        <DiscordContext.Provider value={{}}>{ children }</DiscordContext.Provider>
    )
}