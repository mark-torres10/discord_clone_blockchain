import styles from "../styles/sidebar.module.css";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import avatar1 from '../assets/avatar1.png';

import RoomAvatar from './RoomAvatar';

const dummyChannels = [
    {
        id: 1,
        name: 'general',
        avatar: avatar1
    },
    {
        id: 2,
        name: 'web3',
        avatar: avatar1
    },
    {
        id: 3,
        name: 'Ethereum',
        avatar: avatar1
    },
    {
        id: 4,
        name: 'Solana',
        avatar: avatar1
    },
    {
        id: 5,
        name: 'Bankless DAO',
        avatar: avatar1
    }
]


const Sidebar = () => {
    const router = useRouter();
    const [channels, setChannels] = useState(dummyChannels);


    return (
        <div className={styles.wrapper}>
            Hello!
            {channels.map((channel, idx) => {
                <RoomAvatar
                    key={idx}
                    id={channel.id}
                    avatar={channel.avatar}
                    name={channel.name}
                />
            })}
        </div>
    )
}

export default Sidebar