import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'
import Menu from '../menu/Menu'

const CardList = () => {
  return (
    <div
      className = {styles.container}>
        <h1 className = {styles.title}>Recent Posts</h1> 
        
        <div className={styles.posts}>
        
        <div className={styles.flexing}></div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
        <Menu/>
      <Pagination/>
    </div>
  )
}
export default CardList
