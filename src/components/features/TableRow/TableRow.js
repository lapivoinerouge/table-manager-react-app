import { NavLink } from "react-router-dom";
import styles from './TableRow.module.scss';

const TableRow = props => {
  return (
    <tr>
      <td className='d-flex'>
        <div className='p-3'><h4>Table: {props.id}</h4></div>
        <div className='p-3'><b>Status: </b>{(props.status).charAt(0).toUpperCase() + (props.status).slice(1)}</div>
      </td>
      <td className={'d-flex-row ' + styles.buttonColumn}>
        <NavLink className={'btn btn-primary'} to={'/table/' + props.id}>Read more</NavLink>
      </td>
    </tr>
  );
};

export default TableRow;