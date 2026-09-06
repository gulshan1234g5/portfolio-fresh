// Global Error Handler - injected into built HTML
(function() {
  function showError(title, message) {
    var root = document.getElementById('root');
    if (root) {
      root.innerHTML = '<div style="padding:2rem;text-align:center;background:#020617;color:#fafafa;font-family:system-ui,sans-serif;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:600px;margin:auto;"><h1 style="font-size:clamp(1.5rem,4vw,2.5rem);margin-bottom:1rem;color:#ef4444;">' + title + '</h1><pre style="text-align:left;background:#1e293b;padding:1rem;border-radius:0.5rem;overflow:auto;max-height:50vh;font-size:0.875rem;color:#f8fafc;">' + (message || 'Unknown error').replace(/</g,'<').replace(/>/g,'>') + '</pre><button onclick="location.reload()" style="margin-top:1rem;padding:0.75rem 1.5rem;background:#00cdf5;color:#020617;border:none;border-radius:0.5rem;font-weight:600;cursor:pointer;">Reload Page</button><div style="margin-top:1rem;font-size:0.875rem;color:#94a3b8;">If this persists, try clearing browser cache or open in incognito.</div></div>';
    }
  }
  window.addEventListener('error', function(e) {
    showError('JavaScript Error', e.message + '\n' + (e.filename ? ' at ' + e.filename + ':' + e.lineno : ''));
  });
  window.addEventListener('unhandledrejection', function(e) {
    showError('Unhandled Promise Rejection', e.reason?.message || String(e.reason));
  });
})();