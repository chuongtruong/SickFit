// This is to create a customed HTML DOCUMENT

import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
