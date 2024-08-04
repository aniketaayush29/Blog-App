import Image from "next/image"
import styles from "./comments.module.css"

const Comments = () => {

    const status = "authenticated"
  return (
    <div className = {styles.container}>
      <h1 className = {styles.title}> Comments</h1>
      {status === "authenticated" ? (<div className = {styles.write}>
        <textarea placeholder = "write a comment...." className = {styles.input}>        </textarea>
    <button className = {styles.button}>Send</button>

        </div>) : (<Link href = "/login">Login to write a comment</Link>)}
        <div className = {styles.comments}>
            <div className = {styles.comment}>
                <div className= {styles.user}>
                    <Image src = "/p1.jpeg" className = {styles.image} alt = "" width = {50} height = {50}/>
                <div className = {styles.userInfo}>
                    <span className = {styles.username}>John doe</span>
                    <span className = {styles.date}>01.01.2024</span>
                </div>
                </div>
                <p className = {styles.descr}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae aliquam autem enim vitae fugit minus voluptatum quae quia aspernatur, nulla modi ullam!</p>
            </div>
        </div>
    </div>
  )
}

export default Comments
