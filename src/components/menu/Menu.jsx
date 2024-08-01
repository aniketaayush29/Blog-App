import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

const  Menu = () => {
  return (
    <div
      className = {styles.container}> Menu
      <h2> {"What's hot"}</h2>
      <div className={styles.items}>
      <Link href = "/" className={styles.item}> 
      <div className = {styles.imageContainer}>
        <Image src = "/p1.jpeg" alt = "" fill className = {styles.image}/>
      </div>
      <div  className = {styles.textConatiner}>
        <span  className = {`${styles.category} ${styles.travel}`}> Travel </span>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}>10.03.2024</span>
        </div>
      </div>
     </Link>
      </div>
      
    </div>
  )
}


export default Menu
