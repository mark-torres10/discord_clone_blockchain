import styles from '../styles/conversationList.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import friends from '../assets/icons/friends.svg';
import nitro from '../assets/icons/nitro.svg';
import DmCard from './DmCard';

const dummyConversations = [
    {
        id: 1,
        name: 'Barack Obama',
        avatar: friends
    },
    {
        id: 2,
        name: 'John Doe',
        avatar: friends
    },
    {
        id: 3,
        name: 'Harry Styles',
        avatar: friends
    }
]


const ConversationList = () => {

    const [dms, setDms] = useState(dummyConversations);

    return (
        <div className={styles.conversations}>
            <div className={styles.conversationListTop}>
                <input type='search' placeholder='Find or start a conversation' />
            </div>
            <div className={styles.conversationsContainer}>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src={friends}
                            className={styles.svg}
                            alt='friends'
                        />
                    </div>
                    <p>Friends</p>
                </div>
                <div className={styles.elementsContainer}>
                    <div className={styles.svgContainer}>
                        <Image
                            height={25}
                            width={25}
                            src={nitro}
                            className={styles.svg}
                            alt='nitro'
                        />
                    </div>
                    <p>Nitro</p>
                </div>
                <div className={styles.dmTitle}>DIRECT MESSAGES</div>
                {dms.map((dm, index) => (
                    <DmCard
                        key={index}
                        name={dm.name}
                        id={dm.id}
                        avatar={
                            dm.avatar || 
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFI'
                        }
                        status='online'
                    />
                ))}
            </div>
        </div>
    )
}

export default ConversationList