//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_ae3831af191f4170b46f9bfd4dd47246'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICc1NDA5RUQwMjFEOTI5OWJmNjgxNDI3OUE2QTE0MTFBN2U4NjZBNjMxJykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweDM0RDQwMkYxNEQ1OEUwMDFEOEVmQmU2NTg1MDUxQkY5NzA2QUEwNjQnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['4b698632-43c7-4a4b-8bf5-6a38123c8c78']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '5409ED021D9299bf6814279A6A1411A7e866A631') && 
// (tx_logs_address == '') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')