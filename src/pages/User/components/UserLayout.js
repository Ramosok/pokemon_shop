import styles from "../user.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_ORDER_REQUEST } from "../actions";

export const UserLayout = ({ userData }) => {
  const { firstName, lastName, phone, email, address } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_ORDER_REQUEST());
  }, []);
  return (
    <div className={styles.user_container}>
      <div>
        <h2>User info</h2>
        <h3>First Name - {firstName}</h3>
        <h3>Last Name - {lastName}</h3>
        <h4>Phone - {phone}</h4>
        <h4>Email - {email}</h4>
        <h5>Country - {address.country}</h5>
        <h5>City - {address.city}</h5>
        <h5>Address Line one - {address.addressLine1}</h5>
        <h5>Address Line two - {address.addressLine2}</h5>
      </div>
    </div>
  );
};
