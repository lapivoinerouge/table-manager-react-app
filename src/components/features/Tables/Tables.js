import TableRow from "../TableRow/TableRow";
import { Table } from "react-bootstrap";
import { getAllTables } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <Table>
      {tables.map(table => 
        <tbody key={table.id}>
          <TableRow status={table.status} id={table.id} />
        </tbody>
      )}
    </Table>
  );
};

export default Tables;