/**
 * Check if link doesn't have following .html 
 * and place it if necessary
 * 
 * @returns {number} number of affected nodes
 */
export function fixPageLinks() {
  const linksArray = [...document.querySelectorAll('a')];

  linksArray.forEach(link => {
    link.href = fixLink(link.href);
  });

  return linksArray.length;

}

/**
 * Change input link into local acessable
 * @param {string} link link from href attr
 * 
 * @returns {string} local acessable link
 */
function fixLink(link) {
  if (!link) return '/';

  const endOnIndex = /\/$/.test(link);
  if (endOnIndex) return link;

  const isActionLink = /^\w+\:\S+/.test(link);

  const isFullSite = /^(http(s?)\:|www\.)/.test(link);

  if (isActionLink && !isFullSite) return link;

  const alreadyHasEnding = /\/?[^\r\n\t\f\v\/]+(\.[^\r\n\t\f\v\/]+)+$/.test(link);

  if (alreadyHasEnding) return link;

  return link + '.html'

}