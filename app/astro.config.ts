import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://avonbied.github.io',
	integrations: [sitemap()],
	port: (process.env.PORT ?? 8080),
	server: {
		host: true,
	},
	vite: {
		server: {
			watch: {
				usePolling: true,
				interval: 3000
			}
		}
	}
});
