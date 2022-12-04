import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStatusOptions } from "../../../redux/statusRedux";
import { editTable } from "../../../redux/tablesRedux";
import styles from "./TableForm.module.scss";
import { useNavigate } from "react-router-dom";

const TableForm = props => {
  const statusOptions = useSelector(state => getStatusOptions(state));

  const [status, setStatus] = useState(props.status);
  const [peopleAmount, setPeopleAmount] = useState(props.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(props.maxPeopleAmount);
  const [bill, setBill] = useState(props.bill);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStatusChange = e => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    if (newStatus === "Cleaning" || newStatus === "Free") {
      setPeopleAmount("0");
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTable({ id: props.id, status, peopleAmount, maxPeopleAmount, bill }));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className='d-flex mb-3 col-md-3'>
        <div className={styles.label}><b>Status:</b></div>
        <Form.Select 
          value={status} 
          type="select" 
          onChange={handleStatusChange}>
          { statusOptions.map(status => <option key={ status }>{ status }</option>) }
        </Form.Select>
      </div>
      
      <div className='d-flex mb-3 col-md-2'>
        <div className={styles.label}><b>People:</b></div>
        <Form.Control
          value={ peopleAmount }
          onChange={e => setPeopleAmount(e.target.value)}
          type="text" />
        <div className={styles.propertyText}>/</div>
        <Form.Control
          value={ props.maxPeopleAmount }
          onChange={e => setMaxPeopleAmount(e.target.value)}
          type="text" />
      </div>

      {status === "Busy" &&
        <div className='d-flex mb-3 col-md-2'>
          <div className={styles.label}><b>Bill:</b></div>
          <div className={styles.label}>$</div>
          <Form.Control
            value={bill}
            onChange={e => setBill(e.target.value)}
            type="text" />
        </div>
      }

      <Button className={styles.button} variant="primary" type="submit">Update</Button>
    </Form>
  );
};

export default TableForm;
