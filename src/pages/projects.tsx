import Head from 'next/head';
import { CardSection } from '@components/card';

import queryGitHubAPI, { QUERY_NAMES } from '../lib/getGitHubData';

const title = 'My Projects'

const Page = ({ projects }): JSX.Element => {
	const projectData = projects.map(({full_name, description}) => ({title: full_name, children: description, size: 'normal'}));
	return (<>
		<Head><title>{title}</title></Head>
		<CardSection title={title} cardData={projectData}/>
		<p style={{overflowWrap: 'break-word'}}>{`${projects.map(({full_name, html_url, language, topics, description}) => JSON.stringify({full_name, html_url, language, topics, description}))}`}</p>
	</>);
};

export const getStaticProps = async () => {
	const API_KEY = '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';
	const query = 'users/avonbied/repos';
	const projects = await queryGitHubAPI(QUERY_NAMES.repos);
	return ({
		props: {
			projects
		}
	});
}

export default Page;