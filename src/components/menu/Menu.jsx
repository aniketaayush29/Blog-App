import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'

const  Menu = () => {
  return (
    <div
      className = {styles.container}>
      <h2 className = {styles.subtitle}> {"What's hot"}</h2>
      <h1 className = {styles.title}>Most Popular</h1>
      <div className={styles.items}>
      <Link href = "/" className={styles.item}> 
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.travel}`}> Travel </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 

      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.culture}`}> Culture </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.food}`}> Food </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.fashion}`}> Fashion </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

      </div>
      

      <h2 className = {styles.subtitle}>Choosen by editor</h2>
      <h1 className = {styles.title}>Editors Pick</h1>
      <div className={styles.items}>
      <Link href = "/" className={styles.item}> 
      <div className = {styles.imageContainer}>
        <Image src = "/p1.jpeg" alt = "" width = {74} height = {74} className = {styles.image}/>
      </div>
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.travel}`}> Travel </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 
      <div className = {styles.imageContainer}>
        <Image src = "/p1.jpeg" alt = "" width = {74} height = {74} className = {styles.image}/>
      </div>
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.culture}`}> Culture </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 
      <div className = {styles.imageContainer}>
        <Image src = "/p1.jpeg" alt = "" width = {74} height = {74} className = {styles.image}/>
      </div>
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.food}`}> Food </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

     <Link href = "/" className={styles.item}> 
      <div className = {styles.imageContainer}>
        <Image src = "/p1.jpeg" alt = "" width = {74} height = {74} className = {styles.image}/>
      </div>
      <div  className = {styles.textConatiner}  >
        <span  className = {`${styles.category} ${styles.fashion}`}> Fashion </span>
        <h3 className = {styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
        <div className = {styles.detail}>
          <span className = {styles.username}>John Doe</span>
          <span className = {styles.date}> - 10.03.2024</span>
        </div>
      </div>
     </Link>

      </div>
    
    </div>
    
  )
}


export default Menu
