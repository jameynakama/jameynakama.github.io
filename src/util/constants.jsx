export const RANDSENSE_API_BASE = process.env.NODE_ENV === 'production'
  ? 'http://jamey.wtf/randsense/api/v1/'
  : 'http://localhost:8000/randsense/api/v1/'
