import TableRow from "../TableRow/TableRow";
import { Table } from "react-bootstrap";

const Tables = () => {
  return (
    <Table>
      <tbody>
        <TableRow status="reserved" />
      </tbody>
    </Table>
  );
};

export default Tables;