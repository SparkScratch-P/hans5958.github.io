$(document).ready(function () {
    var preArray = $("pre")[0].innerHTML.split("\n")
    var aArray = []
    var bArray = []
    var cArray = []
    var dArray = []
    for (i = 5; i < preArray.length; i++) {
        if (i % 5 === 1) {
            aArray.push(preArray[i - 1])
        } else if (i % 5 === 2) {
            bArray.push(preArray[i - 1])
        } else if (i % 5 === 3) {
            cArray.push(preArray[i - 1])
        } else if (i % 5 === 4) {
            if (preArray[i - 1] == "") {
                dArray.push("data/icons/min/blank.png")
            } else {
                dArray.push(preArray[i - 1])
            }
        }
    }
    /*
    a = site
    b = username
    c = link
    d = pic
    */
    var a = document.createElement("p")
    var b = document.createElement("p")
    var c = document.createElement("a")
    var d = document.createElement("img")
    a.setAttribute("class", "siteName")
    b.setAttribute("class", "userName")
    c.setAttribute("href", "#")
    d.setAttribute("class", "siteIcon")
    for (i = 0; i < aArray.length; i++) {
        c.innerHTML = ""
        var element = document.createElement("td");
        a.innerHTML = aArray[i]
        b.innerHTML = bArray[i]
        if (cArray[i] != "") {
            c.setAttribute("onclick", "window.open(\"" + cArray[i] + "\")")
            c.setAttribute("href", "#")
            c.setAttribute("class", "fancy")
        } else {
            c.removeAttribute("onclick")
            c.removeAttribute("href")
            c.removeAttribute("class")
        }

        d.setAttribute("src", dArray[i])
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        c.appendChild(d)
        c.appendChild(a)
        c.appendChild(b)
        element.appendChild(c)
        console.log(element)
        $("tr").last()[0].innerHTML += element.outerHTML
        if ($("tr").last()[0].childElementCount == 4) {
            $("tr").last()[0].outerHTML += "<tr></tr>"
        }
    }
    $("pre")[0].setAttribute("class", "hidden")
});