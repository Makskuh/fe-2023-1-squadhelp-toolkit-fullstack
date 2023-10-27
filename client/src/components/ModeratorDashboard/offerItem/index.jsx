import classNames from 'classnames';
import styles from '../BtnGroup.module.sass';

function offerItem({ dataBtn, id, handleClick }) {
  return (
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
  );
}
export default BtnItem;
