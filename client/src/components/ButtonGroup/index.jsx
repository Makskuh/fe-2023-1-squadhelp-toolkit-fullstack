import React from 'react';
import styles from './BtnGroup.module.sass';
import { useState } from 'react';
import BtnGroup from './btnList';
import { filter, values } from 'lodash';
const textBtnGroup = [
  { data: 'The Domain should exactly match the name', isEnabled: false },
  { data: 'But minor variations are allowed', isEnabled: false },
  { data: 'I am only looking for a name,not a Domain', isEnabled: false },
];
function ButtonsGroup() {
  const [dataBtn, setDateBtn] = useState(textBtnGroup);
  const makeEnabled = (id) => {
    const newData = dataBtn.slice(0)
    newData.map((ind) => {
      if(id ===ind) {
        return !ind.isEnabled
      }
    })

    setDateBtn(newData);
  };
  return (
    <div className={styles.btnsWrapper}>
      {dataBtn.map((value, ind) => (
        <BtnGroup dataBtn={value} key={ind} id={ind} handleClick={makeEnabled}/>
      ))}
    </div>
  );
}

export default ButtonsGroup;
