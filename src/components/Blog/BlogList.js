import Link from 'next/link'
import DataMocker from "../../../data";
import BlogCard from "./BlogCard";

const blogs = DataMocker.blogs;
console.log('%c Testing css', 'color: orange;');
const testTable = console.table(blogs);


const horseAge = (str, age, something) => {
  const ageStr = age > 5 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years ${something}`;
}

const test = horseAge`This test horse is ${5}${'jotain'}`


function BlogList({fullWidth = false}) {
  console.time('Render')
  return (
    <div className="BlogList">
      <div className="grid-container">
        {
          blogs.map((data, index) => {
            return (
              <Link key={index} href={`/blog/?blog=${data.id}`} as={`/blog/${data.id}`}>
                <a className="grid-item">
                  <BlogCard data={data} fullWidth={fullWidth} />
                </a>
              </Link>
            )
          })
        }
      </div>
      {console.timeEnd('Render')}
      <style jsx>{`
        .BlogList {
          margin: 8px 0;
        }
        .BlogList a {
          text-decoration: none;
        }
        .grid-container {
          ${fullWidth && `grid-template-columns: 1fr;`}
        }
        .grid-item {
          ${fullWidth && `padding: 0;`}
          margin: 0 0 8px 0;
        }
      `}</style>
    </div>
  );
};

export default BlogList