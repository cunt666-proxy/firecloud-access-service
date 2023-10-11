import app from 'firecloud-router';
import src from './src/index';
import scheduled from './src/scheduled';

export default app(src, scheduled);
