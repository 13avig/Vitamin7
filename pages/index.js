// pages/index.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  const pathname = usePathname();
  const isDarkMode = pathname === '/dark-mode';

  return (
    <div className={clsx('container', { 'dark-mode': isDarkMode })}>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/dark-mode">
          <button className="dark-mode">Dark-Mode</button>
        </Link>
        <Link href="/light-mode">
          <button className="light-mode">Light-Mode</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
