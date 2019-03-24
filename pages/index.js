import DefaultLayout from '../src/layouts/DefaultLayout';
import Banner from '../src/components/Banner'
import BlogList from '../src/components/Blog/BlogList';

function Home() {
  return (
    <BlogList fullWidth={true} />
  );
}

const LayoutWrapper = () => (
  <DefaultLayout
    header={<Banner />}
    mainContent={<Home />}
    footer={<div>Footer</div>}
  />
)

export default LayoutWrapper;