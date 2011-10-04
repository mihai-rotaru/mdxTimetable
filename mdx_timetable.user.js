// ==UserScript==
// @name           mdx timetable
// @namespace      mihai-rotaru
// @include        https://misis.mdx.ac.uk/mislve/bwskfshd.P_CrseSchd*
// ==/UserScript==
( function() {
    if (document.getElementsByClassName == undefined) {
        // from: http://forums.devshed.com/javascript-development-115/javascript-get-all-elements-of-class-abc-24349.html 
        document.getElementsByClassName = function(className)
            {
                    var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
                    var allElements = document.getElementsByTagName("*");
                    var results = [];

                    var element;
                    for (var i = 0; (element = allElements[i]) != null; i++) 
                    {
                        var elementClass = element.className;
                        if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
                            results.push(element);
                    }

                return results;
            }
    }

    allPageTitleDivs = document.getElementsByClassName('pagetitlediv');
    for( var i = allPageTitleDivs.length - 1; i >=0; i-- )
    {
        allPageTitleDivs[i].style.backgroundColor = '#AAA'
        allPageTitleDivs[i].style.display = 'none'
    }

    allInfoTextDivs = document.getElementsByClassName('infotextdiv');
    for( var i = allInfoTextDivs.length - 1; i >=0; i-- )
    {
        allInfoTextDivs[i].style.display = 'none'
    }

    allHeaderWrapperDivs = document.getElementsByClassName('headerwrapperdiv');
    for( var i = allHeaderWrapperDivs.length - 1; i >=0; i-- )
    {
        allHeaderWrapperDivs[i].style.display = 'none'
    }

    body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none';

}) ();
