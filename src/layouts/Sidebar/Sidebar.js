import DataMocker from "../../../data";
import Image from '../../components/Image';
import colors from "../../colors";

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <div className="header">
        <h3>Aleksi Peiponen</h3>
      </div>
      <div className="Content">
        <Image
          src="/static/profile.jpg"
          alt="Banner image"
          style={{
            display: 'block',
            height: 'auto',
            width: 128,
            margin: 'auto',
          }}
        />
        <p className="Description">
        Aleksi Peiponen on ohjelmoija, verkkosovellusten kehittäjä ja uuden opiskelija. Verkkosivustojen ja sovelluskehityksen parissa työskentelevä uusista asioista innostuva osaaja.</p>
      </div>
      <style jsx>{`
        .Sidebar {
          margin 8px 0;
          background-color: ${colors.base}
        }
        .Sidebar .header {
          background-color: ${colors.primary};
          color: ${colors.textColorWhite};
          padding: 0.5em;
          text-align: center;
        }
        .Sidebar .Description {
          word-break: break-all;
        }
        h3 {
          margin: 0;
        }
        @media only screen and (max-width: 700px) {
          .Sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Sidebar;