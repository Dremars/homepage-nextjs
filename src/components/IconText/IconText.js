import colors from "../../colors";


export const IconText = ({text, iconURL, iconOnly = false, light = false}) => {
  return (
    <p>
      <span/>
      {!iconOnly && text }
      <style jsx>{`
        p {
          display: inline-flex;
          text-decoration: none;
          margin: 8px;
          color: ${light ? colors.textColorWhite : colors.textColor}
        }
        p:hover {
          text-decoration: underline;
        }
        span {
          background-image: url('${iconURL}');
          height: 16px;
          width: 16px;
          display: block;
          background-size: 16px 16px;
          margin: 0 8px;
        }
      `}</style>
    </p>
  )
};

export const GithubLink = ({iconOnly = false, light = false}) => {
  const icon = `/static/icons/git/GitHub-Mark${light ? '-Light' : ''}-32px.png`
  return (
    <IconText text="Github" iconURL={icon} iconOnly={iconOnly} light={light} />
  );
};

export const LinkedinLink = ({iconOnly = false, light = false}) => {
  const icon = `/static/icons/linkedin/In-${light ? 'White' : 'Black'}-14px.png`
  return (
    <IconText text="Linkedin" iconURL={icon} iconOnly={iconOnly} light={light} />
  );
}

export default IconText;