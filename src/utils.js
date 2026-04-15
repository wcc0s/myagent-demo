// Utility functions
function formatDate(d) {
  return d.toISOString().split('T')[0];
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

module.exports = { formatDate, slugify, sleep };
