import Head from 'next/head';
import { Card } from '@components/card';

const title = 'Home';

const Page = (): JSX.Element => {
	return (<>
		<Head>
			<title>{title}</title>
		</Head>
		<section style={{ position: 'absolute', height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
			<Card title='Hello &amp; welcome!' size='large'>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
			</Card>
		</section>
	</>);
};

export default Page;