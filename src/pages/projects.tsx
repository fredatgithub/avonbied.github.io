import Head from 'next/head';

const title = 'My Projects'

const Page = (): JSX.Element => {
	return (<>
		<Head><title>{title}</title></Head>
		<h1>{title}</h1>
		<h1>Hello world!</h1>
	</>);
};

export default Page;