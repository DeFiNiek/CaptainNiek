import React from 'react';
import styles from './styles/DexscreenerChart.module.css'; // Ensure the path to the CSS module is correct

const Chart = () => {
  return (
    <div id="dexscreener-embed" className={styles.dexscreenerEmbed}>
      <iframe 
        src="https://dexscreener.com/solana/32awdGby1JBTJVZCTsCvrLizZ3ygJgxbvjANypyjC1bY?embed=1&theme=dark" 
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default Chart;
