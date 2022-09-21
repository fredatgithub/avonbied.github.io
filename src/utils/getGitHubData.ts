const API_KEY = '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';
const query = 'users/avonbied/repos';

const USER = 'avonbied';

const userGen = (user?: string) => `${user ?? USER}`;

interface QueryParams {
	userName?: string;
	repo?: string;
}

const queries = {
	user(params: QueryParams) {
		return `users/${userGen(params.userName)}`;
	},
	repos(params: QueryParams) {
		return `${this.user(params)}/repos`;
	},
	content(params: QueryParams) {
		return `${this.user(params)}/${userGen(params.repo)}/content/`;
	},
	readme(params: QueryParams) {
		return `${this.user(params)}/${userGen(params.repo)}/readme`;
	},
}

export enum QUERY_NAMES {
	user = 'user',
	repos = 'repos',
	content = 'content',
	readme = 'readme',
}
const queryGitHubAPI = async (query: QUERY_NAMES, params?: QueryParams) => {
	return await fetch(`https://api.github.com/${queries[query](params ?? {})}`, {
		headers: {
			'Authorization': `bearer ${API_KEY}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		}})
		.then(res => res.json())
		.catch(e => console.log(e))
}

export default queryGitHubAPI;