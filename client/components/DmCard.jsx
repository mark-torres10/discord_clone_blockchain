import Image from 'next/image';
import styles from '../styles/dmCard.module.css';

const DmCard = ({ name, status, avatar, id }) => {
    const changeUrl = () => {}

    return (
        <div className={styles.dmCard} onClick={changeUrl}>
            <div className={styles.dmAvatarContainer}>
                <Image
                    src={avatar}
                    className={styles.dmAvatar}
                    height={48}
                    width={48}
                    alt={name}
                />
            </div>
        </div>
    )
}

export default DmCard;