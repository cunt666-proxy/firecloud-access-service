import { Schema } from 'firecloud-router';
import { ObjectId } from 'firecloud-router/schema';

export default Schema({
  rules: [ { action: String, subject: String } ],
  owner: { type: ObjectId, required: true },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now }
});
