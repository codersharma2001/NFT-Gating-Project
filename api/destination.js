const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_ae3831af191f4170b46f9bfd4dd47246'
};

const data = {
  name: 'My Destination',
  to_url: 'https://ef5f-182-77-13-210.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));