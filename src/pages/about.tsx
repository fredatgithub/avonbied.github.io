import Head from 'next/head';

const title = 'About Me';

const Page = (): JSX.Element => {
	return(<>
		<Head><title>{title}</title></Head>
		<h1>{title}</h1>
	</>);
};

export default Page;