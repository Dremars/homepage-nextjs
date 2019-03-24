import {IntlProvider} from 'react-intl';
import NavBar from "./Navbar/NavBar";
import {BaseStyles} from "../Styles";
import Footer from "./Footer/Footer";
import Content from "./Content/";
import Sidebar from './Sidebar';

function DefaultLayout(props) {
  return (
    <IntlProvider locale="fi">
      <div className="DefaultLayout">
        <NavBar />
        {
          props.header &&
          <header className="Header">
            {props.header}
          </header>
        }
        <Content
          mainContent={props.mainContent}
          sidebar={<Sidebar />}
        />
        <Footer />
        <BaseStyles />
        <style jsx>{`
          .DefaultLayout {
            max-width: 960px;
            padding: 0;
            margin: auto;
          }
        `}</style>
      </div>
    </IntlProvider>
  );
}

export default DefaultLayout;