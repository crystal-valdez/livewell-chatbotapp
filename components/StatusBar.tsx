import React from 'react';
import styles from './StatusBar.module.css'; // Import the CSS module

const StatusBar = () => {
  return (
    <div className={styles.statusBar}>
      <div className={styles.leftItems}>
        <span>9:41 AM</span>
        <span className={styles.dot}>•</span>
        <span>Carrier</span>
        <span className={styles.dot}>•</span>
        <span>Wi-Fi</span>
      </div>
      <div className={styles.rightItems}>
        <span>
            <img src="/images/wifi.svg" alt="Signal" width="12" height="10" className= "mr-1" />
        </span>
        <span className={styles.batteryIcon}>
          <span className={styles.batteryLevel} style={{ width: '70%' }}></span> 
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
