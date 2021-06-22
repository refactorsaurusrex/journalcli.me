import React from 'react';
import clsx from 'clsx';
import styles from './HomepageCallout.module.css';

const Callouts = [
  {
    title: '',
    description: (
      <>
        <code>journal-cli</code> makes it super easy to keep a well-organized journal that can be instantly indexed, searched, and browsed all from your terminal window. It's for anyone who likes writing with markdown, loves command line tools, and is highly averse to storing intimate information in the cloud without encryption.
      </>
    ),
  },
];

function Callout({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.calloutText}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCallout() {
  return (
    <section className={styles.callout}>
      <div className="container">
        <div className={`${styles.centerRow} row`}>
          {Callouts.map((props, idx) => (
            <Callout key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
