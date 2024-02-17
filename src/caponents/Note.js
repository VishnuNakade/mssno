import React from 'react';
import Note_item from './Note_item';

export default function Note() {
  const data = [
    // ... (your data here)
    {
        "latestValues": {
          "batteryVoltage": 27.71648,
          "gridCurrent": 0.78116,
          "gridVoltage": 221.40686,
          "inverterCurrent": 0.83326,
          "inverterVoltage": 209.04449,
          "solarCurrent": 0,
          "solarVoltage": 0,
          "tValue": 1705518848
        },
        "timestamp": {
          "263715665": {
            "batteryVoltage": 23.62754,
            "gridCurrent": 0,
            "gridVoltage": 216.9158,
            "inverterCurrent": 0.72103,
            "inverterVoltage": 198.33502,
            "solarCurrent": 0,
            "solarVoltage": 0,
            "tValue": 263715664
          },
          "1663851384": {
            "batteryVoltage": 25.06,
            "gridCurrent": 0,
            "gridVoltage": 229.01343,
            "inverterCurrent": 0.62102,
            "inverterVoltage": 225.40044,
            "solarCurrent": 3.29151,
            "solarVoltage": 32.93867,
            "tValue": 1676345472
          },
          "1663851445": {
            "batteryVoltage": 25.06,
            "gridCurrent": 0,
            "gridVoltage": 229.21814,
            "inverterCurrent": 0.59528,
            "inverterVoltage": 224.30484,
            "solarCurrent": 3.36266,
            "solarVoltage": 33.11345,
            "tValue": 1676345600
          },
          "1663851505": {
            "batteryVoltage": 25.06,
            "gridCurrent": 0,
            "gridVoltage": 229.81766,
            "inverterCurrent": 0.59681,
            "inverterVoltage": 222.02316,
            "solarCurrent": 3.6621,
            "solarVoltage": 33.42288,
            "tValue": 1676345600
          }
        }
      }
  ];

  return (
    <div>
      {/* populating Notes in cards */}
      <div className="row my-3">
        <h2>Your Notes</h2>
         
        <div className="container mx-2">
          {data.map((item, index) => (
            <div key={index} className="mb-3">
              {/* Display latestValues in a card */}
              <Note_item data={item.latestValues} title="Latest Values" />

              <div className='row my-5'>
                    {/* Map through each timestamp and create a separate Note_item for each */}
              {Object.keys(item.timestamp).map((timestampKey) => (
                <Note_item key={timestampKey} data={item.timestamp[timestampKey]} title={`Timestamp ${timestampKey}`} />))}

              </div>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

