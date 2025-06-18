import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Smarter Links. Sharper Signals."
      description="SerDesBook: The Open Reference for Serializer/Deserializer Design and Validation">

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">SerDesBook</h1>
          <p className="hero__subtitle">The Open Reference for Serializer/Deserializer Design and Validation</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              📘 Read the Book
            </Link>
            <Link className="button button--outline button--lg margin-left--sm" to="https://github.com/prahardas/serdesbook.git">
              ⭐ GitHub Repo
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h3>📖 Fundamentals</h3>
                <p>Understand how SerDes systems work, from serialization to equalization and jitter budgeting.</p>
              </div>
              <div className="col col--4">
                <h3>🛠️ Practical Tools</h3>
                <p>Explore open-source simulation environments and lab validation workflows.</p>
              </div>
              <div className="col col--4">
                <h3>🤝 Contribute</h3>
                <p>Join the community. Edit Markdown, submit PRs, and help grow the definitive SerDes reference.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="text--center padding-vert--lg">
          <h2>📬 Get Updates</h2>
          <p>Subscribe to the SerDes newsletter for new chapters, tools, and event coverage.</p>
          <iframe
            src="https://serdesbook.substack.com/embed"
            width="100%"
            height="200"
            style={{ border: '1px solid #ccc', background: 'white' }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </section>
      </main>
    </Layout>
  );
}