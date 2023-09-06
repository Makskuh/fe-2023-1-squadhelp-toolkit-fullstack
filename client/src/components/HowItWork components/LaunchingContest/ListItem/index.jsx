import React from 'react';
import styles from '../Launching.module.sass';

function ListItem({ dataContest, handleClick }) {
  const mapList = dataContest.map((value, index) => {
    return (
      <li key={index} className={styles.liItem}>
        <button
          onClick={() => handleClick(index)}
          className={styles.btnQuestion}
        >
          {value.question}
          <span className={value.isOpen ?styles.openArrow: styles.closeArrow }>➜</span>
        </button>
        {value.isOpen && <p className={styles.openAnswer}>{value.answer}</p>}
      </li>
    );
  });

  return <ul className={styles.ulWrapper}>{mapList}</ul>;
}

export default ListItem;
