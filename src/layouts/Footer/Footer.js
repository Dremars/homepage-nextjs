import { GithubLink, LinkedinLink } from '../../components/IconText/IconText';
import colors from "../../colors";

function Footer() {
  return (
    <>
      <footer className="Footer">
      {
        /*
        <div className="grid-container">
          <div className="grid-item Column">
            <h2>Tags</h2>
            <Tag>Text</Tag>
            <Tag>Text2</Tag>
            <Tag>Text3</Tag>
          </div>
          <div className="grid-item Column">
            <h2>Categories</h2>
            <Tag>Text</Tag>
            <Tag>Text2</Tag>
            <Tag>Text3</Tag>
          </div>
          <div className="grid-item Column">
            <h2>Search</h2>
            <input type="text" />
          </div>
        </div>
        */
      }
      <div className="left">
        <p>© 2019 Aleksi Peiponen</p>
      </div>
      <div className="SocialLinks right">
        <a href="https://github.com/Dremars/"> <GithubLink light/></a>
        <a href="https://www.linkedin.com/in/aleksi-peiponen-5a6455183/"><LinkedinLink light /></a>
      </div>
        
      </footer>
      <style jsx>{`
        .grid-container {
          grid-template-columns: 33.3% 33.4% 33.3%
        }
        .Footer {
          width: 100%;
          display:inline-block;
          background-color: ${colors.secondary};
          box-sizing: border-box;
          padding: 8px;
        }
        .Footer a {
          padding: 8px;
          text-decoration: none;
        }
        .Footer a:visited {
          padding: 8px;
          color: ${colors.textColorWhite};
        }
        .Footer a:hover {
          text-decoration: underline;
        }

        .Footer p {
          color: ${colors.textColorWhite};
          margin: 8px;
        }

        .Footer .grid-container {
          margin: 0 2em;
        }
        .Footer .Column {
          padding: 10px;
        }
        .Link {
          float: left;
          margin-left: 10px;
        }
        .Link:first-of-type {
          margin-left: 0;
        }
      `}</style>
    </>
  );
}

export default Footer;