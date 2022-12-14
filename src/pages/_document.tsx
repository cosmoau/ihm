import { getCssText } from '@cosmoau/ui';
import NextDocument, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

type Props = {
  css: string;
};

class Document extends NextDocument<Props> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps({ renderPage }: DocumentContext): Promise<any> {
    const page = await renderPage();
    const css = getCssText();
    return { ...page, css };
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{ __html: ' ' + this.props.css }} />
          <meta charSet='UTF-8' />
          <meta
            name='description'
            content='ihostme are the go-to people for managing the rental of your holiday home and ALL your hosting and property management needs.'
          />
          <meta
            name='keywords'
            content='ihostme, hosting, property, management, rental, stayz, booking, airbnb, stayz, cosmo, cosmogroup.io, booking, airbnb'
          />

          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#d33b95' />
          <meta name='msapplication-TileColor' content='#981a64' />
          <meta name='theme-color' content='#fbd5ec' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script strategy='afterInteractive' id='SmallChat' async>
            {`
           window.Smallchat = {
                config: {
                  "slackTeamId": "TPZDU8ELR",
                  "scChannelId": "-NDtQu1bXjfxtImq9ycg",
                  "slackChannelId": "C046EH1B7LY",
                  "uid": "-NDtQf1Mmva7dKd4TD6j",
                  "planId": null,
                  "accountCreated": 1665263382789
                },
                appearance: {
                  "brand_color": "#fdfaf6",
                  "contact_dismissible": false,
                  "contact_enabled": true,
                  "contact_field_label": "Email",
                  "contact_immediately": false,
                  "contact_prompt": "Add your name and email to make sure you see our reply:",
                  "contact_reply": "Thanks {{name}}! You'll get a response here or we'll contact you at {{contact}}.",
                  "custom_css": "",
                  "hide_logo": true,
                  "hide_team_icon": true,
                  "launcher_pos": "right",
                  "launcher_prompt": "Send a message",
                  "launcher_type": "button",
                  "messenger_blank": "Send a message, and we'll reply as soon as we can.",
                  "messenger_entry": "Send a message...",
                  "messenger_prompt": "How can we help?",
                  "name_field_label": "Name",
                  "offline_greeting": "We're offline right now but typically respond in about an hour.",
                  "text_color": "#0a2540"
                },
              };
              window.addEventListener('load', function(){
                var styles = document.createElement('link');
                styles.rel = 'stylesheet';
                styles.href = 'https://static.small.chat/messenger.css';
                document.head.appendChild(styles);
                var wrapper = document.createElement('div');
                wrapper.id = 'SmallchatWrapper';
                document.body.appendChild(wrapper);
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://static.small.chat/messenger.js';
                document.body.appendChild(script);
              }, false);
          `}
          </Script>
          <Script
            defer
            strategy='beforeInteractive'
            src='https://api.pirsch.io/pirsch.js'
            id='pirschjs'
            data-code='Ef2zyoQZNHdet4OefRonvDGqc2NjYIQD'
          />
        </body>
      </Html>
    );
  }
}

export default Document;
