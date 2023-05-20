import React from "react";

export default function App() {
  let a = 3,
    b = 4;
  return (
    <div>
      <A a={a} b={b} />
    </div>
  );
}

const A = ({ a, ...rest }) => {
  console.log("rest is ", rest);
  return (
    <div>
      <B a={a} {...rest} />
    </div>
  );
};

const B = (props) => {
  const { a, b } = props;
  console.log("props of B are ", props);
  console.log("a and b from app to B are ", a, b);
  return <div>this is b</div>;
};
