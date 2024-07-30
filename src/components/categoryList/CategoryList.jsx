import React from 'react'
import styles from "./categorylist.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div
      className={styles.container}>
      <h1 className={styles.titles}>Popular categories</h1>
      <div className={styles.categories}>

        <Link href="/blog?cat = style" className={'${styles.categories} ${styles.style}'}>
          <Image src="/style.png" alt="" width={32} height={32}
            className={styles.image} />
          style
        </Link>

        <Link href="/blog?cat = fashion" className={'${styles.categories} ${styles.fashion}'}>
          <Image src="/fashion.png" alt="" width={32} height={32}
            className={styles.image} />
          fashion
        </Link>

        <Link href="/blog?cat = coding" className={'${styles.categories} ${styles.coding}'}>
          <Image src="/coding.png" alt="" width={32} height={32}
            className={styles.image} />
          coding
        </Link>

        <Link href="/blog?cat = food" className={'${styles.categories} ${styles.food}'}>
          <Image src="/food.png" alt="" width={32} height={32}
            className={styles.image} />
          food
        </Link>

        <Link href="/blog?cat = culture" className={'${styles.categories} ${styles.culture}'}>
          <Image src="/culture.png" alt="" width={32} height={32}
            className={styles.image} />
          culture
        </Link>

        <Link href="/blog?cat = travel" className={'${styles.categories} ${styles.travel}'}>
          <Image src="/travel.png" alt="" width={32} height={32}
            className={styles.image} />
          travel
        </Link>

      </div>
    </div>
  )
}

export default CategoryList
