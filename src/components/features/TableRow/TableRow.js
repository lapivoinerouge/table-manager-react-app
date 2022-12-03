import { Button } from "react-bootstrap";

const TableRow = props => {
  return (
    <tr>
      <td><h2>Table: {props.id}</h2></td>
      <td><b>Status: </b>{props.status}</td>
      <td><Button>Show more</Button></td>
    </tr>
  );
};

export default TableRow;