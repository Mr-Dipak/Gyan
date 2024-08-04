import dotenv from 'dotenv';

dotenv.config();

export const config = {
  region: process.env.AWS_REGION,
  bucketName: process.env.AWS_BUCKET_NAME,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};
