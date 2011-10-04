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

    var css = '.pagetitlediv, .infotextdiv, .headerwrapperdiv { display: none; }'; 

    try {
        var elmHead, elmStyle;
        elmHead = document.getElementsByTagName('head')[0];
        elmStyle = document.createElement('style');
        elmStyle.type = 'text/css';
        elmHead.appendChild( elmStyle );
        elmStyle.innerHTML = css;
        //alert( "elmStyle.innerHTML: " + elmStyle.innerHTML ); 
    } catch( e ) {
        if( !document.styleSheets.length ) {
            document.createStyleSheet();
        }
        document.styleSheets[0].cssText += css;
        //          alert( "document.styleSheets[0]: " + document.styleSheets[0] ); 
    }

    body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none';

}) ();
