// paytmIntegration.js

import axios from 'axios';
import dotenv from 'dotenv';
import PaytmChecksum from './PaytmChecksum/Paytm_Node_Checksum/PaytmChecksum.js'; // Import the PaytmChecksum utility

dotenv.config();

const { PAYTM_MID, PAYTM_MERCHANT_KEY } = process.env;

const initiateTransaction = async (orderId, amount, callbackUrl) => {
  try {
    const paytmParams = {
      body: {
        requestType: 'Payment',
        mid: PAYTM_MID,
        websiteName: 'WEBSTAGING', // Change it to 'DEFAULT' for production
        orderId,
        callbackUrl,
        txnAmount: {
          value: amount,
          currency: 'INR',
        },
        userInfo: {
          custId: 'CUST_001',
        },
      },
    };

    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      PAYTM_MERCHANT_KEY
    );

    paytmParams.head = {
      signature: checksum,
    };

    const options = {
      hostname: 'securegw-stage.paytm.in', // Change it to 'securegw.paytm.in' for production
      port: 443,
      path: `/theia/api/v1/initiateTransaction?mid=${PAYTM_MID}&orderId=${orderId}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post(
      `https://${options.hostname}${options.path}`,
      paytmParams,
      {
        headers: options.headers,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { initiateTransaction };
