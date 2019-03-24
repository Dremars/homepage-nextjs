import Link from 'next/link'
import { withRouter } from 'next/router'
import colors from "../../colors";
import { GithubLink, LinkedinLink } from '../../components/IconText/IconText';


const routes = [
  {
    name: 'Koti',
    path: '/'
  },
  {
    name: 'Blogi',
    path: '/blog'
  },
  {
    name: 'Yhteystiedot',
    path: '/contact'
  },
]

const isActive = (pathname, route) => pathname === route;

function NavBar({router}) {
  return (
    <>
      <nav className="NavBar">
        {
          routes.map((route, index) => {
            return (
              <Link key={index} href={route.path}>
                <a className={`Link${ isActive(router.pathname, route.path) ? ' active' : ''}`}>
                  <h2>{route.name}</h2>
                </a>
              </Link>
            );
          })
        }
        <div className="SocialLinks right">
          <a href="https://github.com/Dremars/"> <GithubLink light /></a>
          <a href="https://www.linkedin.com/in/aleksi-peiponen-5a6455183/"><LinkedinLink light /></a>
        </div>
      </nav>
      <div className="nav-pusher" />
      <style jsx>{`
        .NavBar {
          width: 100%;
          display:inline-block;
          position: fixed;
          background-color: ${colors.primary};
          height: 32px;
          max-width: 960px;
        }
        .Link {
          float: left;
          margin-left: 16px;
          text-decoration: none;
        }
        .Link:first-of-type {
          margin-left: 0;
        }
        .Link.active {
          text-decoration: underline;
        }
        a {
          color: ${colors.textColorWhite};
        }
        a:visited {
          color: ${colors.textColorWhite};
        }
        .NavBar a:first-of-type {
          margin-left: 8px;
        }
        .nav-pusher {
          height: 32px;
        }
      `}</style>
    </>
  );
}

export default withRouter(NavBar)