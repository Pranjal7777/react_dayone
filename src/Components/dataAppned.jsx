export function DataAppend(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      {props.os.map((e) => (
        <li>{e} </li>
      ))}
    </div>
  );
}
