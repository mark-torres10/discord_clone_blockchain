import { useState, useContext } from 'react';
import Image from 'next/image';
import 'dotenv/config';
import styles from '../styles/chatHeader.module.css';
import at from '../assets/icons/at.svg';
import help from '../assets/icons/help.svg';
import inbox from '../assets/icons/inbox.svg';
import personPlus from '../assets/icons/person-plus.svg';
import phone from '../assets/icons/phone.svg';
import pin from '../assets/icons/pin.svg';
import video from '../assets/icons/video.svg';
import ethLogo from '../assets/eth.png';
import { DiscordContext } from '../context/context';

const testMetamaskAddress = process.env.METAMASK_ADDRESS;

const ChatHeader = () => {
    const { roomName, currentAccount, connectWallet } = useContext(DiscordContext); 
    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt=''/>
                <h3 className={styles.title }>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            {currentAccount ? (
                <div className={styles.connectedWallet}>
                <Image src={ethLogo} height={20} width={15} alt='ethLogo' />
                <span className={styles.separator}>{'|'}</span>
                {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                </div>
            ) : (
                <div className={styles.connectWallet} onClick={() => connectWallet()}>
                Connect Wallet
                </div>
            )}
            <div className={styles.headerIconsContainer}>
                <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={phone}
                    className={styles.svg}
                    alt=''
                />
                </div>
                <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={video}
                    className={styles.svg}
                    alt=''
                />
                </div>
            </div>
            <div className={styles.headerItem}>
                <Image height={25} width={25} src={pin} className={styles.svg} alt='' />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={personPlus}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <input type='search' placeholder='Search' />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={inbox}
                    className={styles.svg}
                    alt=''
                />
            </div>
            <div className={styles.headerItem}>
                <Image
                    height={25}
                    width={25}
                    src={help}
                    className={styles.svg}
                    alt=''
                />
            </div>
        </div>
    )
}

export default ChatHeader;