function RowsRender(props) {
  let shadeObj = {
    red: "255,0,0,",

    blue: " 0,0,255,",

    green: "0,128,0,",

    yellow: "255,255,0,",

    orange: "255,165,0,",
  };

  return props.result.map((items) => {
    var color = items.colour;
    var shade = items.shade;
    var backk = shadeObj[color] + shade;
    console.log(backk);
    return (
      <tr key={items.id} style={{ background: `rgba(${backk})` }}>
        <td>{items.arrow}</td>
        <td>{items.time}</td>
        <td>{items.colour}</td>
        <td>{items.shade}</td>
      </tr>
    );
  });
}
export default RowsRender;
