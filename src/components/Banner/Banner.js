import Image from '../Image'

function Banner() {
  return (
    <div className="Banner">
      <Image
        src="/static/brand-blueprint-downloads-bg-390.jpg"
        alt="Banner image"
      />
      <style jsx global>{`
        .Banner > img {
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Banner