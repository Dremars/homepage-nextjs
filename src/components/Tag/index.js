import colors from "../../colors";
import Link from 'next/link'

const Tag = (props) => {
  const { isText } = props;
  return (
    <Link href="/search">
      <a className="Tag">
        {
          isText
          ? props.children
          : <span>
              {props.children}
            </span>
        }
        <style jsx>{`
          .Tag {
            border-radius: 5px;
            background-color: ${colors.primary};
            color: ${colors.base};
            font-size: 0.675rem;
            padding: 5px;
            margin-left: 5px;
            text-decoration: none;
          }
          .Tag:first-of-type {
            margin-left: 0;
          }
          .Tag:focus {
            outline: 1px #fff solid;
          }
        `}</style>
      </a>
    </Link>
  );
}

export default Tag