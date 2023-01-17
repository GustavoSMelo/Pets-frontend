import Image from 'next/image';
import styles from '../styles/index.module.scss';

const Home = () => {
     return (
          <main className={styles.main}>
               <Image
                    src='/images/cao.png'
                    alt='Image de um cãozinho'
                    width={125}
                    height={125}
                    className={styles.cao}
               />

               <h6 className={styles.subtitle}>De-stress with</h6>
               <h1 className={styles.title}>Cute Pets</h1>

               <button className={styles.button} type='button'>
                    Start
               </button>
          </main>
     );
}

export default Home;
