const thispage = window.location.pathname.split('/').pop()
const sections = [
    ['index.html', 'Docs'],
    ['app.html', 'Using the App'],
    ['importing.html', 'Manually Importing'],
    ['web.html', 'Web Interface'],
    ['video.html', 'Uploading Video'],
    ['main.html', 'Main View'],
    ['referencing.html', 'Water Referencing'],
    ['numbers.html', 'Numbers'],
    ['sailing.html', 'Sailing'],
    ['management.html', 'Management'],
    ['technical.html', 'Technical'],
]

const existingHtml = document.getElementsByTagName('body')[0].innerHTML
document.getElementsByTagName('body')[0].innerHTML = `
    <div class="docs">
        <div class="docsidebar"></div>
        <div class="doccontent">
            ${existingHtml}
            <div class="bottomnav">
                <div class="bottomnavbefore"></div>
                <div class="bottomnavafter"></div>
            </div>
        </div>
    </div>
`
let sectionIdx
let idx = 0
let ih = `<nav class="doclist">`
for (section of sections) {
    if (section[0] === thispage) {
        sectionIdx = idx
        ih += `<p><a class="activenav" href="${section[0]}">${section[1]}</a></p>`
    } else {
        ih += `<p><a class="navitem" href="${section[0]}">${section[1]}</a></p>`
    }
    idx += 1
}
ih += "</nav>"
document.getElementsByClassName('docsidebar')[0].innerHTML = ih
if (sectionIdx > 0) {
    document.getElementsByClassName('bottomnavbefore')[0].innerHTML = 
        `Prev: <a href="${sections[sectionIdx - 1][0]}">${sections[sectionIdx - 1][1]}</a>`
}
if (sectionIdx < sections.length - 1) {
    document.getElementsByClassName('bottomnavafter')[0].innerHTML = 
        `Next: <a href="${sections[sectionIdx + 1][0]}">${sections[sectionIdx + 1][1]}</a>`
}

document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', `
    <title>See Sailing: ${sections[sectionIdx][1]}</title>
    <meta property="og:title" content="See Sailing: ${sections[sectionIdx][1]}" />
    <meta property="og:description" content="Online documentation for See Sailing: ${sections[sectionIdx][1]}" />
    <meta name="description" content="Online documentation for See Sailing: ${sections[sectionIdx][1]}" />
`)