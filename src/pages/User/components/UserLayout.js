import PropTypes from "prop-types";
import { UserInfoCard } from "./UserInfoCard";
import { AccordionUserAccaunt } from "./AccordionUserAccaunt";

import styles from "../user.module.scss";

export const UserLayout = ({ userData, orderItemsList }) => {
  const { firstName, lastName, phone, email, address } = userData;

  return (
    <div className={styles.userAccountContainer}>
      <UserInfoCard
        firstName={firstName}
        lastName={lastName}
        phone={phone}
        email={email}
        address={address}
      />
      <div className={styles.accordion_container}>
        {orderItemsList.map(({ createdAt, totalPrice, itemsList, _id }) => (
          <AccordionUserAccaunt
            key={_id}
            createdAt={createdAt}
            totalPrice={totalPrice}
            itemsList={itemsList}
          />
        ))}
      </div>
    </div>
  );
};
UserLayout.propTypes = {
  userData: PropTypes.object.isRequired,
  orderItemsList: PropTypes.array.isRequired,
};
