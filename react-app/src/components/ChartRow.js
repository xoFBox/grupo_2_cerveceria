import React from "react";

function ChartRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.description}</td>
      <td>{props.price}</td>
      <td>{props.category.category_name}</td>
      <td>
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: 25 + "rem" }}
          src={props.urlImage}
          alt={props.name}
        ></img>
      </td>
    </tr>
  );
}

export default ChartRow;
