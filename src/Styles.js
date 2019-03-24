import colors from "./colors";

export const BaseStyles = () => (
  // TODO: Fix font-size
  <style>{`
  html {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-family: monospace;
  }
  body {
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin:0 0 0.5em 0;
  }
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }

  @media only screen and (min-width: 400px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media only screen and (min-width: 700px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media only screen and (min-width: 900px) {
    .grid-container {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  .grid-item {
    font-size: 30px;
    text-align: left;
  }

  .content-divider {
    border-bottom: 1px solid #C4C4C4;
  }

  .left {
    float: left
  }
  .right {
    float: right;
  }

  .SocialLinks {
  }
  .SocialLinks a {
    text-decoration: none;
  }

  .Content {
    padding: 8px;
  }
`}</style>
);

export default BaseStyles;