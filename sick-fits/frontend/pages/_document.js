// This is to create a customed HTML DOCUMENT

import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // this method allow things to be done in the back-end before it is sent to the front end
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    // server-side remdering syle component
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
