import classNames from 'classnames';
import styles from '../moderTable.module.sass'
function OfferItem({ data, confirmClick,rejectClick }) {
  const {User: creator, Contest: {User: buyer}} = data
  return (
    <tr className={styles.tableTr} >
      <td className={styles.tableTd} data-label="OrderId">
        {data.contestId}
      </td>
      <td className={styles.tableTd} data-label="Creator">
        {creator.email}
      </td>
      <td className={styles.tableTd} data-label="Buyer">
        {buyer.email}
      </td>
      <td className={styles.tableTd} data-label="Text">
        {data.text}
      </td>
      <td className={styles.tableTd} data-label="Status">
        {data.status}
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
