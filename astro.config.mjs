// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: 'https://mingkang.pages.dev/',
    integrations: [mdx(), sitemap(), icon(), preact()],
});