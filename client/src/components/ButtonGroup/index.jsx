import React from 'react';
import styles from './BtnGroup.module.sass';
import { useState } from 'react';
import constants from '../../constants';
import BtnItem from './BtnGroupItem/index';

function ButtonsGroup() {
  const [dataBtn, setDateBtn] = useState(
    constants.BTN_DATA.map((val) => ({ ...val, isEnabled: false }))
  );
  const makeEnabled = (id) => {
    const newData = dataBtn.slice(0).map((val, ind) => {
      if (id === ind) {
        return { ...val, isEnabled: !val.isEnabled };
      }
      return { ...val, isEnabled: false };
    });
    setDateBtn(newData);
  };
  return (
    <section className={styles.btnsWrapper}>
      {dataBtn.map((value, ind) => (
        <BtnItem dataBtn={value} key={ind} id={ind} handleClick={makeEnabled} />
      ))}
    </section>
  );
}

export default ButtonsGroup;
