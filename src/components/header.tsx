import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './header.module.css';

const nav = [
	{name: 'Home', url: '/'},
	{name: 'About', url: '/about'},
	{name: 'Projects', url: '/projects'},
	{name: 'Contact',	url: '/contact'}
];

const Header = (): JSX.Element => {
	const router = useRouter();
	return(
	<header className={styles.siteHead}>
		<nav className={styles.navBar}>
			{nav.map((link, id) => <Link key={`${id}`} href={`${link.url}`}>
				<a className={`${styles.navLink} ${link.url === router.pathname ? styles.active : ''}`}>{link.name}</a>
			</Link>)}
		</nav>
	</header>
	);
}

export default Header;