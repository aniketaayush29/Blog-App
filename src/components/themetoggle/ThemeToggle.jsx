"use client"

import Image from "next/image";
import styles from "./themetoggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext);

  console.log(theme)
  return (
    <div className = {styles.container} onClick = {toggle}
    style = {theme === "dark" ? { backgroundColor: "white"} : {backgroundColor: "black"}}>
    <Image src = "/moon.png" alt = ""  width = {14} height = {14}/>
    <div className={styles.ball} style = {theme === "dark" ? {left:1, background: "black"} : {right:1, background: "white"}}></div>
    <Image src = "/sun.png" alt = ""  width = {14} height = {14}/>
    </div>
  )
}

export default ThemeToggle
