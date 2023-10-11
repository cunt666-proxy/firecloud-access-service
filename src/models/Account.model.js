import { Schema, Crypto } from 'firecloud-router';
import { ObjectId } from 'firecloud-router/schema';

export default Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  policy: { type: ObjectId },
  isRoot: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  keys: { type: Object, default: ()=> ({ default: Crypto.keys.Generate(), kyber: Crypto.kyber.Generate() }) },
  createdAt: { type: Number, default: Date.now },
  updatedAt: { type: Number, default: Date.now },
  lastLoggedIn: { type: Number, default: Date.now }
});
