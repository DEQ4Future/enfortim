/* Estadístiques de visites amb Matomo, sense galetes (no cal bàner de
   consentiment). Per activar-ho, ompliu MATOMO_URL (acabada en "/") i
   SITE_ID amb les dades de la vostra instal·lació de Matomo. */
(function () {
  var MATOMO_URL = '';   // p. ex. 'https://deq4future.matomo.cloud/'
  var SITE_ID = '';      // p. ex. '2'
  if (!MATOMO_URL || !SITE_ID) return;

  var _paq = window._paq = window._paq || [];
  _paq.push(['disableCookies']);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['setTrackerUrl', MATOMO_URL + 'matomo.php']);
  _paq.push(['setSiteId', SITE_ID]);
  var g = document.createElement('script');
  g.async = true;
  g.src = MATOMO_URL + 'matomo.js';
  document.head.appendChild(g);
})();
