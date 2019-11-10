/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {/* {siteConfig.title} */}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/notebook.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('getting-started')}>Getting Started</Button>
            <Button href={docUrl('faq')}>FAQ</Button>
            <Button href={docUrl('features')}>Features</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>A command line tool, for journaling.</h2>
        <MarkdownBlock>`journal-cli` makes it super easy to keep a well-organized journal that can be instantly indexed, searched, and browsed all from your terminal window. It's for anyone who likes writing with markdown, loves command line tools, and are highly averse to storing intimate information in the cloud unless it's encrypted.</MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:"`journal-cli` can serve as a notebook for tracking anything you need at work, from summaries of 1:1 conversations to daily notes that can be later aggregated into a list of accomplishments. Use tags so you can quickly return all related entries in a single go. Use [encryption](/docs/encryption) to keep your notes private.",
            image: `${baseUrl}img/professional.svg`,
            imageAlign: 'left',
            title: '...and the professional.',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:"Use tags to categorize your entries. Use readme's to write notes to your future self. [Open a random entry](/docs/features#open-randomentry) to see what happened at some arbitrary point in the past. Never forget an important (or not-so-important) event again.",
            image: `${baseUrl}img/calendar.svg`,
            imageAlign: 'right',
            title: 'Keep track of your life over time.',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:"Take note of the little day-to-day events, right along with the bigger things, that make up your daily life today so you can reflect on them in the future. Think back 10 years... wouldn't it be interesting to glimpse into all the little things from that period you've long since forgotten about? You don't have to write a daily essay, a list of bullet points is all you need. \n\n ```plaintext\n# Wednesday, November 10 \n - Had breakfast with Nora this morning. Hadn't seen her in months.\n - Ran 10 miles at the trail downtown. My pace was a new personal best! \n- Watched two episodes of Blue Bloods with the wife. We're already on season 5.",
            image: `${baseUrl}img/personal.svg`,
            imageAlign: 'right',
            title: 'For the personal...',
          },
        ]}
      </Block>
    );

    const Features1 = () => (
      <Block layout="threeColumn">
        {[
          {
            content: '`journal-cli` stores journal entries in **plain text** on your local file system, written with markdown and yaml front matter. **No databases or proprietary file formats are used.** Your entries are readily accessible and will never become unreadable due to obsolescence.',
            image: `${baseUrl}img/angle-bracket.svg`,
            imageAlign: 'top',
            title: 'Markdown + Yaml',
          },
          {
            content: 'Just [install and start writing](/docs/getting-started) with your favorite markdown editor. ([Typora](https://typora.io/) is highly recommended.) Missing a feature you wish it had? [Open an issue](https://github.com/refactorsaurusrex/journal-cli/issues) and let\'s talk about it. ',
            image: `${baseUrl}img/freedom.svg`,
            imageAlign: 'top',
            title: 'Free & Open Source',
          },
          {
            content: 'Runs on [PowerShell 6](https://github.com/PowerShell/PowerShell), which is compatible with Windows, OSX, and Linux. ',
            image: `${baseUrl}img/computer.svg`,
            imageAlign: 'top',
            title: 'Cross-Platform',
          },
        ]}
      </Block>
    );

    const Features2 = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Tag your entries with keywords and `journal-cli` will dynamically index your journal, making it easy to find categorized sets of entries. The index can be sorted alphabetically or by count, and can be further manipulated with familiar PowerShell commands. Not a PowerShell afficionado? No problem! Check out the [list of recipes](/docs/recipes) here.',
            image: `${baseUrl}img/tag.svg`,
            imageAlign: 'top',
            title: 'Taggable',
          },
          {
            content: 'Write notes to your future self with `journal-cli`\'s unique "readme" feature. This allows you to specify either a specific future date or a duration such as "5 years" at which point you want to re-read your entry. Run `Get-ReadmeEntries` to return a list of all readme entries which have elapsed. In a future release, readme reminders will be proactive and automatic!',
            image: `${baseUrl}img/clock.svg`,
            imageAlign: 'top',
            title: 'Letters To The Future',
          },
          {
            content: 'A journal can contain your most intimate, private thoughts. Do you really want that in the cloud, stored insecurely, and vulnerable to hacking? Neither do I, which is why `journal-cli` stores files **offline** by default. Only you, dear user, can opt to synchronize your journal with a cloud based tool. (If you do, you are _highly_ encouraged to [encrypt](/docs/encryption) it first.)',
            image: `${baseUrl}img/fingerprint.svg`,
            imageAlign: 'top',
            title: 'Privacy-Focused',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features1 />
          <Features2 />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
