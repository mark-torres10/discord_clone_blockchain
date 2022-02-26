import { useState } from 'react';
import Image from 'next/image';
/*import 'dotenv/config';*/
require('dotenv').config()
import styles from '../styles/chatHeader.module.css';
import at from '../assets/icons/at.svg';
import ethLogo from '../assets/eth.png'

const testMetamaskAddress = process.env.METAMASK_ADDRESS;

const ChatHeader = () => {

    // const [currentAccount, setCurrentAccount] = useState(true);

    const currentAccount = testMetamaskAddress;

    /* TODO(mark): implement connection to metamask */
    const connectWallet = () => {}
    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image height={20} width={20} src={at} className={styles.svg} alt=''/>
                <h3 className={styles.title }>Room Name</h3>
                <div className={styles.chatHeaderStatus} id='online' />
            </div>
            {currentAccount ? (
                <div className={styles.connectedWallet}>
                    <Image src={ethLogo} height={20} width={15} alt='ethLogo'/>
                    <span className={styles.separator}>{'|'}</span>
                    {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
                </div>
            ) : (
                <div className={styles.connectWallet} onClick={() => connectWallet()}>
                    Connect Wallet
                </div>
            )}
        </div>
    )
}

export default ChatHeader;