const seoConfig: Record<string, {
    title: string;
    meta: { name: string; content: string }[];
  }> = {
    index: {
      title: 'Welkom op Mijn Website',
      meta: [
        { name: 'description', content: 'Ontdek inspiratie, uitdagingen en leer tekenen als een professional.' },
        { name: 'keywords', content: 'tekenen, inspiratie, leren, uitdagingen' },
        { name: 'og:title', content: 'Welkom op Mijn Website' },
        { name: 'og:description', content: 'Ontdek inspiratie, uitdagingen en leer tekenen als een professional.' },
      ],
    },
    home: {
      title: 'Welkom op Mijn Website',
      meta: [
        { name: 'description', content: 'Ontdek inspiratie, uitdagingen en leer tekenen als een professional.' },
        { name: 'keywords', content: 'tekenen, inspiratie, leren, uitdagingen' },
        { name: 'og:title', content: 'Welkom op Mijn Website' },
        { name: 'og:description', content: 'Ontdek inspiratie, uitdagingen en leer tekenen als een professional.' },
      ],
    },
    about: {
      title: 'Over Ons - Mijn Website',
      meta: [
        { name: 'description', content: 'Kom meer te weten over onze missie en visie.' },
        { name: 'keywords', content: 'over ons, missie, visie' },
        { name: 'og:title', content: 'Over Ons - Mijn Website' },
        { name: 'og:description', content: 'Kom meer te weten over onze missie en visie.' },
      ],
    },
    'blog/[slug]': {
      title: 'Blogartikel - Mijn Blog',
      meta: [
        { name: 'description', content: 'Lees de laatste blogs over tekenen, kunst en creativiteit.' },
        { name: 'keywords', content: 'blog, tekenen, kunst, creativiteit' },
      ],
    },
  };

  export default seoConfig;
