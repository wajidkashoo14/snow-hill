import { useRouter } from 'next/navigation';
import styles from '../styles/hero.module.css'

export default function Hero() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h3 className="montserrat  text-white text-6xl font-extrabold max-[600px]:text-5xl">CRAFTING JOUERNEYS</h3>
      <h3 className="montserrat text-white text-6xl font-extrabold max-[600px]:text-5xl ">NOT JUST TRIPS</h3>
      <button className='max-[600px]:mb-20' onClick={() => router.push('/contact')}>Get in touch</button>
    </div>
  );
}