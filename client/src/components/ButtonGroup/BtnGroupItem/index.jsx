import classNames from 'classnames';
import React from 'react';
import styles from '../BtnGroup.module.sass';

function BtnItem({ dataBtn, id, handleClick}) {

  const styleBtnEnabled = classNames(styles.btn, {
    [styles.isEnabled]: dataBtn.isEnabled,
  });
  const styleWrapperEnabled = classNames(styles.btnWrapper, {
    [styles.isWrapperEnabled]: dataBtn.isEnabled,
  });

  return (
    <div className={styleWrapperEnabled}>
      <button className={styleBtnEnabled} onClick={() => handleClick(id)}>{dataBtn.isEnabled ? 'Yes': 'No'}</button>
      <p className={styles.infoUnderBtn}>{dataBtn.data}</p>
      {dataBtn.isRecommend ? <span>(Recommended)</span> : ''}
    </div>
    )
}
export default BtnItem;
