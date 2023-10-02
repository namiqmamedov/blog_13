import Featured from "@/components/featured/Featured"
import styles from "./homepage.module.css"
import Menu from "@/components/Menu/Menu"

export default function Home() {
  return (
    <div className={styles.container}>
        <Featured/>
        <CategoryList/>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}
