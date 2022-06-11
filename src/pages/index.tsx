import Head from 'next/head';
import Card from '../components/card';

const title = 'Home';

const Page = (): JSX.Element => {
	return (<>
		<Head>
			<title>{title}</title>
		</Head>
		<section style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Card title='Hello &amp; welcome!'>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia modi nemo ab labore, magnam cumque nisi vel minus. Vitae earum doloremque excepturi cum fuga a magni deserunt perferendis quos molestiae.</p>
			</Card>
		</section>
	</>);
};

export default Page;