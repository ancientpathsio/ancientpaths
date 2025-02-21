import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { Analytics } from '@vercel/analytics';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/xk6qxyZSkx">
            Start Here ↗
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <html lang="en">
      <head>
        <title>{siteConfig.title}</title>
      </head>
      <body>
        <Layout
          title={siteConfig.title}
          description={siteConfig.tagline}>
          <HomepageHeader />
          <main>
            <HomepageFeatures />
          </main>
        </Layout>
        <Analytics /> {/* Analytics here */}
      </body>
    </html>
  );
}
