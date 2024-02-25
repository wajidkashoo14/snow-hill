import { useRouter } from 'next/navigation';
import styles from '../styles/hero.module.css'

export default function Hero() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h3 className="montserrat  text-white text-6xl font-extrabold">CRAFTING JOUERNEYS</h3>
      <h1 className="montserrat text-white text-6xl font-extrabold">NOT JUST TRIPS</h1>
      <button onClick={() => router.push('/contact')}>Get in touch</button>
    </div>
  );
}