import Image from "../Image";
import colors from "../../colors";

function BlogCard({data, fullWidth = false}) {
  const { title, description } = data;
  return (
    <div className="BlogCard" >
      <div 
        style={{
          height: 'auto',
          width: fullWidth ? '200px' : '100%',
          float: 'left',
        }}>
        <Image
          src="/static/Avatar.png"
          alt="Blog card image"
          style={{
            height: 'auto',
            width: '100%',
          }}
        />
      </div>
      <div className="BlogCardContainer">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
      <style jsx>{`
        .BlogCard {
          display: ${fullWidth ? 'flex' : 'inline-block'};
          flex-direction: row;
          text-decoration: none;
          background-color: ${colors.base};
          color: ${colors.textColor};
          margin: 0;
        }
        .BlogCard a:visited {
          text-decoration: none;
        }
        .BlogCardContainer {
          flex: 0 0 auto;
          padding: 0 8px;
        }
      `}</style>
    </div>
  );
}

export default BlogCard;