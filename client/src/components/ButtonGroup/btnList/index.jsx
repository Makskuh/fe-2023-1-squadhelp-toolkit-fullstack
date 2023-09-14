import classNames from 'classnames';
import React from 'react';
import styles from '../BtnGroup.module.sass';
function BtnGroup({ dataBtn,id,handleClick}) {
  return <button onClick={() => handleClick(id)}>{dataBtn.data}</button>;
}
export default BtnGroup;
