import seoConfig from '../config/appSeo';
import { useRoute } from 'vue-router';

export function useSeo() {
  const route = useRoute();

  const slug = route.name || 'home';

  const seo = seoConfig[slug as string] || {
    title: 'Fallback Titel',
    meta: [
      { name: 'description', content: 'Fallback beschrijving als er geen SEO-configuratie is gevonden.' },
    ],
  };

  useHead({
    title: seo.title,
    meta: seo.meta,
  });
}

