import styles from '../styles/Home.module.css'

import ConversationList from "../components/ConversationList";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
  <div className={styles.wrapper}>
    <Sidebar /> 
    <div className={styles.main}>
      <ConversationList/>
      {/* chat view */}
    </div>
  </div>
  )
}