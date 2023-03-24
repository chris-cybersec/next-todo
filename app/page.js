import { Suspense } from "react"

//styles
import styles from "@/app/styles/min/Home.module.css"

//components
import Input from "./components/input"
import ListTodos from "./components/listtodos"


const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.title}>Todos</div> 
        <div className={styles.input}>
          <Suspense fallback={"Loading..."}><Input /></Suspense>
        </div>
        <div className={styles.listTodos}>
          <Suspense fallback={"Loading..."}><ListTodos /></Suspense>    
        </div> 
      </div>  
    </div>
  )
}

export default Home