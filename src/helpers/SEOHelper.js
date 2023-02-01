import getConfig from 'next/config';

const {
  publicRuntimeConfig: { clientUrl },
} = getConfig();

class SEOHelper {
  static getAccountData = (account = {}) => {
    const params = {
      metas: [],
      links: [],
      title: '',
    };
    params.metas.push({
      name: 'msapplication-TileImage',
      content:
        `${clientUrl}/favicon.ico`,
    });
    params.metas.push({
      name: 'description',
      content: account.name,
    });
    params.metas.push({
      name: 'og:title',
      content: account.name,
    });
    params.metas.push({
      name: 'og:description',
      content: account.name
    });
    params.metas.push({
      name: 'og:url',
      content: `${clientUrl}/accounts/${account.slug}`,
    });
    params.metas.push({
      property: 'og:image',
      content: account.image,
    });
    params.metas.push({
      name: 'og:site_name',
      content: 'Market place',
    });
    params.links.push({
      rel: 'canonical',
      href: clientUrl,
    });
    params.links.push({
      rel: 'icon',
      href: `${clientUrl}/favicon.ico`,
      sizes: '32x32',
    });
    params.links.push({
      rel: 'icon',
      href: `${clientUrl}/favicon.ico`,
      sizes: '192x192',
    });
    params.links.push({
      rel: 'apple-touch-icon-precomposed',
      href: `${clientUrl}/favicon.ico`
    });
    params.title = `${account?.name}`;
    return params;
  }

  static getAccountPageData = () => {
    const params = {
      metas: [],
      links: [],
      title: '',
    };
    params.metas.push({
      name: 'msapplication-TileImage',
      content:
        `${clientUrl}/favicon.ico`,
    });
    params.metas.push({
      name: 'msapplication-TileImage',
      content:
        `${clientUrl}/favicon.ico`,
    });
    params.links.push({
      rel: 'icon',
      href: `${clientUrl}/favicon.ico`,
      sizes: '32x32',
    });
    params.links.push({
      rel: 'icon',
      href: `${clientUrl}/favicon.ico`,
      sizes: '192x192',
    });
    params.links.push({
      rel: 'apple-touch-icon-precomposed',
      href: `${clientUrl}/favicon.ico`
    });
    return params;
  }
}

export default SEOHelper;
