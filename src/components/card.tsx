// import { CSSProperties } from 'react';

import styles from './card.module.css';

interface CardProps {
	title?: string;
	// style?: CSSProperties;
	children?: React.ReactNode;
}

const Card = ({title, children}: CardProps): JSX.Element => {
	return(
	<article className={styles.card}>
		{title ? <header>
			<h3 className={styles.cardTitle}><span>{title ?? 'This is a Test Title'}</span></h3>
		</header> : null}
		<div className={styles.cardContent}>
			{children}
		</div>
	</article>
	);
}

export default Card;