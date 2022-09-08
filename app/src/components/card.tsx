import styles from './card.module.css';

interface CardProps {
	title?: string;
	// style?: CSSProperties;
	children?: React.ReactNode;
	size?: 'small' | 'normal' | 'large';
}

const SIZES = {
	small: '24pt',
	normal: '36pt',
	large: '48pt',
}

export const Card = ({title, children, size = 'small'}: CardProps): JSX.Element => {
	return(
	<article className={styles.card} style={{ marginBottom: '16px'}}>
		{title ? <header>
			<h3 className={styles.cardTitle} style={{ fontSize: SIZES[size] }} ><span>{title ?? 'This is a Test Title'}</span></h3>
		</header> : null}
		<div className={styles.cardContent}>
			{children}
		</div>
	</article>
	);
};

interface CardSectionProps {
	title?: string;
	cardData: CardProps[];
}

export const CardSection = ({ title, cardData }: CardSectionProps): JSX.Element => {
	return(<section>
		{title ? <h2 style={{fontSize: '32pt'}}>{title}</h2> : ''}
		<div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', paddingTop: '16px'}}>
			{cardData.map(c => <Card title={c.title} size={c.size}>{c.children}</Card>)}
		</div>
	</section>);
}

export default CardSection;