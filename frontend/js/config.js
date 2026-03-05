/* =======================================================
   SyncTact — Runtime Config
   Auto-detects dev (localhost), dev tunnel, or production (Render)
   ======================================================= */

const _IS_LOCAL =
  location.hostname === 'localhost' || location.hostname === '127.0.0.1';

// Dev tunnel: same subdomain prefix, different port suffix
const _TUNNEL_MATCH = location.hostname.match(/^([a-z0-9]+)-3000\.(.+)$/);

/** REST API base URL */
const API_BASE = _IS_LOCAL
  ? 'http://localhost:8000'
  : _TUNNEL_MATCH
    ? `https://${_TUNNEL_MATCH[1]}-8000.${_TUNNEL_MATCH[2]}`
    : 'https://synctact-backend.onrender.com';

/** WebSocket base URL */
const WS_BASE = _IS_LOCAL
  ? 'ws://localhost:8000'
  : _TUNNEL_MATCH
    ? `wss://${_TUNNEL_MATCH[1]}-8000.${_TUNNEL_MATCH[2]}`
    : 'wss://synctact-backend.onrender.com';
