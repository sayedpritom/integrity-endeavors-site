/*
 * Integrity Endeavors - script.js
 *
 * Progressive enhancement only. The page is complete without this file.
 * The inline script in <head> decides whether motion is allowed and sets:
 *   html.has-motion   animations may run
 *   html.is-loading   the hero entrance is waiting
 *   html.has-loader   the branded loading screen is showing
 *
 * This file (1) ends the loading state and (2) reveals elements marked
 * with class="reveal" as they scroll into view.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  if (!root.classList.contains('has-motion')) return;
  window.ieMotionReady = true;          // tells the head script we arrived

  /* ---- 1. Loading screen / hero entrance ------------------------------ */

  var LOADER_MIN_MS = 1500;             // lets the shield animation finish
  var LOADER_MAX_MS = 4000;             // never hold the page longer than this
  var LOADER_FADE_MS = 800;             // matches the CSS fade-out
  var finished = false;

  function finishLoading() {
    if (finished) return;
    finished = true;
    root.classList.remove('is-loading');
    if (!root.classList.contains('has-loader')) return;
    try { window.sessionStorage.setItem('ie-intro-seen', '1'); } catch (e) {}
    window.setTimeout(function () { root.classList.remove('has-loader'); }, LOADER_FADE_MS);
  }

  if (root.classList.contains('has-loader')) {
    var whenLoaded = function () {
      window.setTimeout(finishLoading, Math.max(0, LOADER_MIN_MS - performance.now()));
    };
    if (document.readyState === 'complete') whenLoaded();
    else window.addEventListener('load', whenLoaded, { once: true });
    window.setTimeout(finishLoading, LOADER_MAX_MS);
  } else {
    // No loader on repeat views: start the hero entrance on the next frame
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(finishLoading);
    });
  }

  /* ---- 2. Scroll reveals ---------------------------------------------- */

  var items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(function (el) { observer.observe(el); });
})();
