import DataMocker from "../../../data";
import Image from '../Image';
import { FormattedRelative } from "react-intl";

const blogs = DataMocker.blogs;

function BlogPost(props) {
  const blog = blogs[props.blog-1];
  console.log('BlogPost: ', blogs);
  const { title, description, id, content, updatedAt } = blog;
  return (
    <article className="BlogPost">
      BlogPost
      <Image
        src="/static/BannerPlaceholder.png"
        alt="Blog card image"
        style={{
          height: 'auto',
          width: '100%'
        }}
      />
      <div className="BlogPostHeader content-divider">
        <h3>{title}</h3>
        <p>{description}</p>
        <FormattedRelative value={updatedAt}/>
      </div>
      <p className="BlogPostContent">{content.content}</p>
      <style jsx>{`
        .BlogPostHeader {
          padding: 10px;
        }
        .BlogPostContent {
          padding: 10px;
        }
      `}</style>
    </article>
  )
}

export default BlogPost;