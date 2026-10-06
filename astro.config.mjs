import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Canonical URLs, Open Graph image URLs and the sitemap all derive from this.
  // Moving to a custom domain later means changing this line and nothing else.
  site: "https://fehizoro-dev.netlify.app",
  integrations: [tailwind(), icon(), sitemap()]
});
