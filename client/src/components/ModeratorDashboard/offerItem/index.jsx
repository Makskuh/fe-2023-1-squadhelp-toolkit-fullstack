import classNames from 'classnames';
import styles from '../moderTable.module.sass'
function OfferItem({ data, confirmClick,rejectClick }) {
  return (
    <tr className={styles.tableTr} >
      <td className={styles.tableTd} data-label="OrderId">
        {data.contestId}
      </td>
      <td className={styles.tableTd} data-label="Creator">
        {data.userId}
      </td>
      <td className={styles.tableTd} data-label="Text">
        {data.text}
      </td>
      <td className={styles.tableTd} data-label="CreatedAt">
        03/31/2023
      </td>
      <td className={styles.tableTd} data-label="Confirm">
        <button className={styles.btnConfirmContest} onClick={() => confirmClick(data.id)}>+</button>
      </td>
      <td className={styles.tableTd} data-label="Reject">
        <button className={styles.btnRejectContest} onClick={() => rejectClick(data.id)}>-</button>
      </td>
    </tr>
  );
}
export default OfferItem;
