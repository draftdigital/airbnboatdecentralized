import Image from "next/image";
import styles from "../../styles/Home.module.css";
import bg from "../../public/images/bayboat2.jpeg";
import logo from "../../public/images/logoAnB.png";

export default function index() {
  return (
    <div className={styles.component}>
      
      <Image
        className={styles.backgroundImg}
        src={bg}
        alt=""
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div>
        <Image 
        className="logo" 
        src={logo} 
        alt="logo"
        height={140}
        width={140} />
      </div>
    </div>
  );
}
