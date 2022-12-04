import TableForm from "../../features/TableForm/TableForm";
import { Navigate, useParams } from "react-router-dom";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getTableById } from "../../../redux/tablesRedux";

const TablePage = () => {
  const { tableId } = useParams();
  const table = useSelector(state => getTableById(state, parseInt(tableId)));

  if(!table) return <Navigate to="/" />
  return (
    <section>
      <PageTitle>Table {tableId}</PageTitle>
      <TableForm id={table.id} status={table.status} bill={table.bill} peopleAmount={table.peopleAmount} maxPeopleAmount={table.maxPeopleAmount} />
    </section>
  );
};

export default TablePage;