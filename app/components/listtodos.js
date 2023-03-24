//styles
import styles from "@/app/styles/min/ListTodos.module.css"

//icons
import { BsCheck2Circle, BsTrash } from "react-icons/bs";


const ListTodos = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ListTodosContainer}>
                <p>MyTodo</p>
                <div className={styles.icon}>
                    <div className={styles.completed}><BsCheck2Circle /></div>
                    <div className={styles.delete}><BsTrash /></div>
                </div>
            </div>
            {/* <div className={styles.ListTodosContainer}>
                <p>MyTodo</p>
            </div>
            <div className={styles.ListTodosContainer}>
                <p>MyTodo</p>
            </div>
            <div className={styles.ListTodosContainer}>
                <p>MyTodo</p>
            </div>
            <div className={styles.ListTodosContainer}>
                <p>MyTodo</p>
            </div> */}
        </div>
    )
}

export default ListTodos