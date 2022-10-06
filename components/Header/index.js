/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.css'
import logo from  '../../public/img.png'
import Image from 'next/future/image'

function Header() {
    return(
        <div className={styles.menu}>

     <Image src= {logo} ></Image>
        
        </div>
    )
    
}

export default Header


