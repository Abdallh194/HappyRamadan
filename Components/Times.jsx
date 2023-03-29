import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTimes } from "../Redux/StoreSlice";
function Times() {
  let [date, setDate] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTimes());
  }, [dispatch]);
  let { DataTimes } = useSelector((s) => s.ASRStore);
  function setday() {
    let days = 0;
    for (let i = 0; i < DataTimes.length; i++) {
      days = DataTimes[i];
      return days;
    }
  }
  return (
    <div className="Times hadle-Padding-margin-Global" id="Times">
      <Container>
        <div className="head">مواعيد الامساك والافطار في رمضان</div>
        <Table hover size="sm">
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>الامساك</th>
              <th>الافطار</th>
            </tr>
          </thead>
          {DataTimes.map((el) => {
            return (
              <tbody key={el.id}>
                <tr>
                  <td>{el.DATE}</td>
                  <td>{el.SEHR}</td>
                  <td>{el.IFTAR}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </Container>
    </div>
  );
}

export default Times;
