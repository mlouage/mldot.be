import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://mldot.be',
	integrations: [mdx(), sitemap()],
	output: 'server',
	adapter: cloudflare({
		mode: 'advanced',
	}),
});
