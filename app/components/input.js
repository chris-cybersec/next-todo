"use client"

//styles
import styles from "@/app/styles/min/Input.module.css"

//icons
import { TbSquareRoundedPlusFilled } from "react-icons/tb";

const Input = () => {
    return (
        <div className={styles.container}>
            <input type="text"  placeholder="your Todos..." />
            <div className={styles.plus}><TbSquareRoundedPlusFilled /></div>
        </div>
    )
}

export default Input