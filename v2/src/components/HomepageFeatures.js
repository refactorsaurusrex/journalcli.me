import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Markdown + Yaml',
    Svg: require('../../static/img/note.svg').default,
    description: (
      <>
        Entries are stored in plain text on your local file system, written with markdown and yaml front matter. 
        No databases or proprietary file formats. Your journal entries will never become 
        unreadable due to obsolescence.
      </>
    ),
  },
  {
    title: 'Taggable',
    Svg: require('../../static/img/tag.svg').default,
    description: (
      <>
        Tag your entries with keywords and journal-cli will dynamically index your journal, making it easy to find 
        and read categorized sets of entries. The index can be further manipulated with common PowerShell commands.
      </>
    ),
  },
  {
    title: 'Cross Platform',
    Svg: require('../../static/img/laptop.svg').default,
    description: (
      <>
        Runs on Windows, Mac, and Linux.<a href="/docs/requirements">*</a>
      </>
    ),
  },
  {
    title: 'End To End Encryption',
    Svg: require('../../static/img/shield.svg').default,
    description: (
      <>
        Journal entry files are <strong>stored offline by default</strong>. Users can optionally take advantage of 
        journal-cli's new cloud synchronization feature, which encrypts all journal entry files locally and stores them in 
        your own Amazon S3 bucket. <em>[Coming soon!]</em>
      </>
    ),
  },
  {
    title: 'Version History',
    Svg: require('../../static/img/schedule.svg').default,
    description: (
      <>
        A complete version history is maintained of every journal entry that's synchronizized to the cloud. You can read previous versions, 
        compare edits between arbitrary versions, or revert changes back to a previous version. <em>[Coming soon!]</em>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`${styles.centerRow} row`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
