import { S3Client } from '@aws-sdk/client-s3';
import { config } from '../config/config.js';

// Create and export the S3 client instance
const s3 = new S3Client({
  region: config.region,
  credentials: config.credentials,
});

export default s3;
