import Image from "next/image";
import styles from '../styles/roomAvatar.module.css';

const RoomAvatar = ({ id, avatar, name }) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.roomAvatar}>
            <Image
                src={avatar}
                className={styles.roomAvatarImage}
                height={48}
                width={48}
                alt={name}
            />
        </div>
    </div>
  )
}

export default RoomAvatar;