async function fetchData() {
  try {
    const data = await downloadDataSimulate();
    const result = await makeRequestToServer(data);
    console.log('Result:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

function downloadDataSimulate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Simulated data';
      resolve(data);
    }, 5000);
  });
}

function makeRequestToServer(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = `Processed data: ${data}`;
      resolve(result);
    }, 5000);
  });
}

fetchData();