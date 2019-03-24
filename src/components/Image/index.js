
function Image(props) {
  const styles = {};
  switch(props.variant) {
    case 'circular':
      styles.borderRadius = '50%';
    default:
  }
  return (
    <img
      src={props.src}
      alt={props.alt}
      aria-hidden={props.alt ? true : false}
      style={{
        ...props.style,
        ...styles
      }}
    />
  );
}

export default Image