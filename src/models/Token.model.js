import { Schema, Crypto } from 'firecloud-router';
import { ObjectId } from 'firecloud-router/schema';

export default Schema({
  salt: { type: String, default: ()=> Crypto.genSaltSync(10) },
  owner: { type: ObjectId },
  account: { type: ObjectId },
  policy: { type: ObjectId },
  oneTime: { type: Boolean, default: false },
  expiredAt: { type: Number, required: true },
  createdAt: { type: Number, default: Date.now }
});
