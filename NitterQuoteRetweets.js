// ==UserScript==
// @name     Nitter Quote Retweets Link
// @description Add link to QRTs search in each Tweet
// @version  0.0.1
// @include *nitter*
// @include *xcancel*
// @grant none
// @namespace https://github.com/rorycaputo
// @licence GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/rorycaputo
// @icon https://nitter.poast.org/favicon-32x32.png
// ==/UserScript==

// @updateURL todo
// @downloadURL todo

function getQRTSearchUrl(qrt, origin) {
    try {
        let tweetId = qrt.closest('.timeline-item').querySelector('.tweet-link').href.split('status/').pop().split('/')[0].split('?')[0].replace('#m', '')
        // https://nitter.poast.org/search?f=tweets&q=URL%3A[1234]&since=&until=&near=
        console.log(origin + '/search?f=tweets&q=URL%3A' + tweetId + '&since=&until=&near=')
        return origin + '/search?f=tweets&q=URL%3A' + tweetId + '&since=&until=&near='
    } catch (error) {
        console.log(error)
        return ''
    }
}

let origin = window.location.origin
let elements = document.getElementsByClassName('icon-quote');
console.log(document.getElementsByClassName('icon-quote')[0].parentElement.innerText)
console.log(elements.length)

for (let qrt of elements) {
    let newLink = document.createElement("a")
    newLink.href = getQRTSearchUrl(qrt, origin)
    newLink.style.position = 'relative'
    newLink.style.setProperty('z-index', 99999, 'important')
    newLink.style.setProperty('pointer-events', 'auto', 'important')
    qrt.parentNode.parentNode.insertBefore(newLink, qrt.parentNode)
    newLink.appendChild(qrt.parentNode)
}


  // {{{ changelog :

  // [2024-10-01 Wed] Hello

  // }}}

  // {{{ contact :

  // }}}
