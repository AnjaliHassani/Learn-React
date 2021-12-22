function RowsRender(props) {
  try {
    var tableHeight =
      document.getElementsByClassName("column divid")[0].offsetHeight;
    if (tableHeight >= 980) props.divHeight(tableHeight);
    else props.divHeight(980);
  } catch (e) {}

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

    return (
      <tr
        key={item.id}
        style={{
          background:
            props.active && props.active.id === item.id
              ? `rgba(${backk})`
              : "white",
        }}
      >
        <td>{props.active && props.active.id === item.id && "=>"}</td>
        <td>{item.time}</td>
        <td>{item.colour}</td>
        <td>{item.shade}</td>
      </tr>
    );
  });
}
export default RowsRender;
