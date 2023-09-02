import React from 'react';
import { useState } from 'react';
import DetailsListItem from './DetailsListItem';
import styles from './Details.module.css';
export default function DetailsList(props) {
  const [hideDetails, setHideDetails] = useState(true);
  const [buttonText, setButtonText] = useState('View more');

  const handleShowDetails = () => {
    if (hideDetails) {
      setHideDetails(false);
    } else {
      setHideDetails(true);
    }

    handleButtonText(hideDetails);
  };

  const handleButtonText = hideDetails => {
    if (hideDetails) {
      setButtonText('View less');
    } else {
      setButtonText('View more');
    }
  };

  //console.log('PROPS IN DETAILS LIST', props);

  return (
    <>
      <div className={styles.list_container}>
        <h1>{props.title}</h1>
        <button onClick={handleShowDetails}>{buttonText}</button>
      </div>
      <div className={styles.progress_container}>
        {hideDetails ? (
          ''
        ) : (
          <DetailsListItem data={props.superblockData}></DetailsListItem>
        )}
      </div>
    </>
  );
}
