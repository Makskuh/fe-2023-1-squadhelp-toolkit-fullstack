import React from 'react';
import styles from './moderTable.module.sass';

function ModeratorDashboard() {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <caption className={styles.titleTable}>
          Moderator Contest Dashboard
        </caption>
        <thead className={styles.thead}>
          <tr className={styles.tableTr}>
            <th className={styles.tableTh} scope="col">
              Order ID
            </th>
            <th className={styles.tableTh} scope="col">
              Creator
            </th>
            <th className={styles.tableTh} scope="col">
              Buyer
            </th>
            <th className={styles.tableTh} scope="col">
              Created at{' '}
            </th>
            <th className={styles.tableTh} scope="col">
              Confirm
            </th>
            <th className={styles.tableTh} scope="col">
              Reject
            </th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr className={styles.tableTr}>
            <td className={styles.tableTd} data-label="OrderId">
              1
            </td>
            <td className={styles.tableTd} data-label="Creator">
              Creator1
            </td>
            <td className={styles.tableTd} data-label="Buyer">
              Buyer1
            </td>
            <td className={styles.tableTd} data-label="CreatedAt">
              03/31/2023
            </td>
            <td className={styles.tableTd} data-label="Confirm">
              <button className={styles.btnConfirmContest}>+</button>
            </td>
            <td className={styles.tableTd} data-label="Reject">
              <button className={styles.btnRejectContest}>-</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ModeratorDashboard;
