function Links(props) {
  console.log(props);
  return (
    <ul className="space-y-4">
      {props.links.map((link) => (
        <li className="bg-slate-400 text-white p-2 rounded-md">{link.title}</li>
      ))}
    </ul>
  );
}

export default Links;
