import { NavLink } from "react-router-dom";
import styles from './TableRow.module.scss';
import PropTypes from 'prop-types';

const TableRow = props => {
  return (
    <tr>
      <td className='d-flex'>
        <div className='p-3'><h4>Table: {props.id}</h4></div>
        <div className='p-3'><b>Status: </b>{props.status}</div>
      </td>
      <td className={'d-flex-row ' + styles.buttonColumn}>
        <NavLink className={'btn btn-primary'} to={'/table/' + props.id}>Read more</NavLink>
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
};

export default TableRow;