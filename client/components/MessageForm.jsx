import Image from 'next/image';
import styles from '../styles/messageForm.module.css';
import gif from '../assets/icons/gif.svg';
import gift from '../assets/icons/gift.svg';
import plusFilled from '../assets/icons/plus-filled.svg';
import smiley from '../assets/icons/smiley.svg';
import sticker from '../assets/icons/sticker.svg';

const MessageForm = () => {
  return (
    <form className={styles.chatInputContainer}>
        <div className={styles.chatInputWrapper}>
            <div className={styles.svgContainer}>
                <Image 
                    height={25}
                    width={25}
                    src={plusFilled}
                    className={styles.svg}
                />
            </div>
            <input type='text' className={styles.chatInput} />
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={gift} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={gif} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={sticker} className={styles.svg} />
            </div>
            <div className={styles.svgContainer}>
                <Image height={25} width={25} src={smiley} className={styles.svg} />
            </div>
        </div>
    </form>
  )
}

export default MessageForm;