interface buttonPorps {
  text?: string;
  color?: string;
  a?: number;
  b?: number;
  c?: number;
  children?: React.ReactNode;
}

function Button(props: buttonPorps) {
  return (
    <button style={{ color: props.color }}>
      {props.text} {props.children}
    </button>
  );
}

export default Button;
