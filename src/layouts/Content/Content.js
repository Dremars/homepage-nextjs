import colors from "../../colors";


function Content(props) {
  const { sidebar, mainContent } = props;
  return (
    <div className="SiteContent">
      {
        sidebar
        ? <div className="Columned grid-container">
        {
          mainContent &&
          <div className="Main">
            {mainContent}
          </div>
        }
        {
          sidebar &&
          <div className="Sidebar">
            {sidebar}
          </div>
        }
      </div>
        : <div className="Single">
        {mainContent}
      </div>
      }
      <style jsx>{`
        .Columned {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media only screen and (min-width: 600px) {
          .Columned {
            grid-template-columns: 3fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default Content;