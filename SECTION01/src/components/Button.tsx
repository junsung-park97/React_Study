interface buttonPorps {
  text?: string;
  color?: string;
  a?: number;
  b?: number;
  c?: number;
}

function Button(props: buttonPorps) {
  return <button style={{ color: props.color }}>{props.text}</button>;
}

export default Button;
