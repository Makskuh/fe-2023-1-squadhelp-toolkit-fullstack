import styles from './moderTable.module.sass';
import OfferItem from './offerItem';
import { getAllOffers } from '../../store/slices/moderatorSlice';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { useEffect,useState } from 'react';

function ModeratorDashboard() {
  const  [offers,setOffers] = useState([])
  const dispath = useDispatch();
  useEffect(async () => {
    const result = await dispath(getAllOffers());
    setOffers(result.payload)
  }, []);
  const confirmOffer = () => {
    console.log('+')
  }
  const rejectOffer = () => {
    console.log('-')
  }
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <caption className={styles.titleTable}>
          Moderator Offer Dashboard
        </caption>
        <thead className={styles.thead}>
          <tr className={styles.tableTr}>
            <th className={styles.tableTh} scope="col">
              Offer ID
            </th>
            <th className={styles.tableTh} scope="col">
              Creator
            </th>
            <th className={styles.tableTh} scope="col">
              Text
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
          {offers.map((val) => <OfferItem data={val} key={val.id} confirmClick={confirmOffer} rejectClick={rejectOffer}/>)}
        </tbody>
      </table>
    </div>
  );
}
const mStP = (state) => ({
  offers: state.offers,
});
export default connect(mStP)(ModeratorDashboard);
