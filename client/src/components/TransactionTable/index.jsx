import React from 'react';
import styles from './TransactionTable.module.scss'


function TransactionTable(props) {
  return (
    <div>
      <table className={styles.table}>
        <tbody >
          <tr>
            <th colspan="4">Transaction history</th>
          </tr>
          <tr>
            <th>User</th>
            <th>Earned $</th>
            <th>spent $</th>
            <th>Amount $</th>
          </tr>
          <tr>
            <td>Maks</td>
            <td>250</td>
            <td>150</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
