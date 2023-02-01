import Head from 'next/head';

const SeoHeader = ({ data }) => {
  const { links, metas, title } = data;
  return (
    <Head>
      <title>{title}</title>
      {links?.map((l, index) => (
        <link key={index} rel={l.rel} href={l.href} sizes={l.sizes} />
      ))}
      {metas?.map((m, index) => (
        <meta key={index} content={m.content} name={m.name} property={m.property} />
      ))}
    </Head>
  );
};

export default SeoHeader;
