import DefaultLayout from '../src/layouts/DefaultLayout';
import BlogList from '../src/components/Blog/BlogList'
import BlogPost from '../src/components/Blog/BlogPost';
/*
function Blog() {
  return (
    <DefaultLayout
      header={<div>Header</div>}
      leftContent={<BlogList />}
      footer={<div>Footer</div>}
    >
    </DefaultLayout>
  );
}
*/

class Blog extends React.Component {
  static async getInitialProps({query}) {
    return {blog: query.id};
  }
  render() {
    const {blog} = this.props;
    //console.log(blog);
    if (blog) {
      return (
        <DefaultLayout
          header={<div>Header</div>}
          mainContent={<BlogPost blog={blog} />}
          sidebar={<p>Sidebar</p>}
          footer={<div>Footer</div>}
        >
        </DefaultLayout>
      );
    }
    return (
      <DefaultLayout
        header={<div>Header</div>}
        mainContent={<BlogList />}
        sidebar={<p>Sidebar</p>}
        footer={<div>Footer</div>}
      >
      </DefaultLayout>
    );
  }
}

export default Blog;