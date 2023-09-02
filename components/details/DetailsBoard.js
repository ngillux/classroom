import React from 'react';
import DetailsList from './DetailsList';

import styles from './Details.module.css';
export default function DetailsBoard(props) {
  // console.log('PROPS ===>', props.curriculumData);

  return (
    <>
      <div className={styles.container}>
        {props.curriculumData.map((d, idx) => {
          return (
            <DetailsList
              key={idx}
              title={d.name}
              superblockData={d.blocks}
            ></DetailsList>
          );
        })}
      </div>
    </>
  );
}
