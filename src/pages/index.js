import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null; // Avoid rendering on the server

  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/xk6qxyZSkx"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Discord_Logo.svg"
              alt="Discord"
              width="20"
              height="20"
              style={{ filter: 'invert(0)' }}
            />
            Start your Journey
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HomepageHeader;
