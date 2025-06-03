require('dotenv').config();
const noble = require('@abandonware/noble');
const axios = require('axios');

noble.on('stateChange', state => {
  if (state === 'poweredOn') {
    noble.startScanning();
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', async peripheral => {
  const deviceName = peripheral.advertisement.localName || 'Unknown';
  const data = {
    device: deviceName,
    value: 'SampleValueFromDevice'
  };

  try {
    const response = await axios.post(process.env.LARAVEL_API_URL, data);
    console.log(`✅ Data sent: ${response.status}`);
  } catch (err) {
    console.error(`❌ Error sending data:`, err.message);
  }
});
