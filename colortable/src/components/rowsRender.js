function RowsRender(props) {
  // console.log(props.items);
  let shadeObj = {
    red: "255,0,0,",

    blue: " 0,0,255,",

    green: "0,128,0,",

    yellow: "255,255,0,",

    orange: "255,165,0,",
  };

  return props.items.map((item) => {
    var color = item.colour;
    var shade = item.shade;
    var backk = shadeObj[color] + shade;
    // console.log(backk);
    return (
      <tr key={item.id} style={{ background: `rgba(${backk})` }}>
        <td>{item.arrow}</td>
        <td>{item.time}</td>
        <td>{item.colour}</td>
        <td>{item.shade}</td>
      </tr>
    );
  });
}
export default RowsRender;
