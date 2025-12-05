const headElement = document.getElementsByTagName('head')[0]
const bodyElement = document.getElementsByTagName('body')[0]

headElement.insertAdjacentHTML('beforeend', `
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${window.location.href}" />
`)

bodyElement.insertAdjacentHTML('beforebegin', `
<header>
    <a href="/"><img id="logo" src="/logo-blue.svg" alt="See Sailing"></a>
    <span class="spacer"></span>
    <nav>
        <span class="navitem"><a class="navitem login" href="https://app.see-sailing.com/">LOGIN</a></span>
        <span class="navitem"><a class="navitem" href="/buy.html">BUY</a></span>
        <span class="navitem"><a class="navitem" href="https://seesailing.substack.com">NEWS</a></span>
        <span class="navitem">MORE▼
            <div class="navitem-dropdown">
                <p><a class="navitem" href="https://app.see-sailing.com/b/h2go/2025-1-13-15-50-46?t=1736739752.3665016&s=5&r=true&c=7251.11_-6339.22_96.46">DEMO</a></p>
                <p><a class="navitem" href="https://app.see-sailing.com/b/boat-glen-mccauley/2025-4-5-11-13-59?t=1743815256.6291213&s=1&r=true&c=13228.31_-3668.00_4237.52">VIDEO SYNC</a></p>
                <p><a class="navitem" href="/connectivity.html">CONNECTIVITY</a></p>
                <p><a class="navitem" href="/spec.html">SPECS</a></p>
                <p><a class="navitem" href="/hardware.html">HARDWARE</a></p>
                <p><a class="navitem" href="/docs/index.html">DOCS</a></p>
            </div>
        </span>
       
    </nav>
</header>
`)

bodyElement.insertAdjacentHTML('afterend', `
<footer>
    <p>More: <a href="/privacy.html">Privacy Policy</a> <a href="/partners.html">Partnering</a>
    <span style="float: right;">Made in Wellington NZ, contact <a href="mailto:davep@see-sailing.com" style="color: #555;">David Preece</a>.</span></p>
</footer>
`)

let foundImage = false
for (element of document.getElementsByTagName('meta')) {
    if (element.getAttribute('property') === 'og:image') {
        foundImage = true
    }
    if (element.getAttribute('property') === 'og:description') {
        headElement.insertAdjacentHTML('beforeend', `
            <meta name="description" content="${element.getAttribute('content')}" />`)
    }
}
if (!foundImage) {
    headElement.insertAdjacentHTML('beforeend', `
        <meta property="og:image" content="${window.location.origin}/social.png" />`)
}

