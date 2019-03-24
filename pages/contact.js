import DefaultLayout from '../src/layouts/DefaultLayout';
import Banner from '../src/components/Banner/Banner';
import Text from '../src/components/Text';
import Image from '../src/components/Image';

const Content = (props) => (
  <div className="grid-container">
    <div className="grid-item">
      <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada volutpat tellus, nec tempor massa sollicitudin non. Aenean orci nulla, pellentesque ut sollicitudin et, euismod a enim. Suspendisse pretium fermentum aliquam. Mauris tempus sed diam quis sagittis. Ut in metus risus. Praesent pellentesque justo quis neque mattis, et finibus est ornare. Donec fringilla odio quis odio ultricies accumsan. Suspendisse eleifend in purus sit amet convallis.

  Nullam pretium, urna ut consectetur sollicitudin, velit orci pellentesque ante, ac malesuada mi orci quis mi. Vestibulum vitae ipsum lacinia, finibus nisi et, ullamcorper urna. Ut fringilla congue neque at consequat. Phasellus sodales eros ac enim rhoncus, at pretium mauris dapibus. In accumsan elementum ultricies. Nullam commodo semper lorem, in egestas enim tempus vel. Morbi sollicitudin euismod condimentum. Proin ut dolor neque. Morbi facilisis convallis nisl sed convallis. Pellentesque gravida metus sed turpis sollicitudin, quis eleifend justo accumsan. Fusce at neque sapien. 
      </Text>
    </div>
    <div className="grid-item">
      <Image
        src="/static/Avatar.png"
        alt="Banner image"
        style={{
          height: 'auto',
          width: '100%'
        }}
        variant="circular"
      />
    </div>
    <style jsx>{`
      .grid-container {
        grid-template-columns: 70% 30%;
      }
    `}</style>
  </div>
)

function Contact() {
  return (
    <>
    <DefaultLayout
      header={<Banner />}
      mainContent={<Content />}
      footer={<div>Footer</div>}
    >
    </DefaultLayout>
    </>
  );
}

export default Contact