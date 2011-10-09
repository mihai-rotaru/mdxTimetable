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

    // CSS code to hide unnecessary elements
    var css = '.pagetitlediv, .infotextdiv, .headerwrapperdiv { display: none; }'; 

    // add a border to the timetable
    css += 'TABLE.datadisplaytable { border-color: #4a6c85; border-style: solid; border-width: 1px; border-spacing: 0px; }';

    // links
    css += 'A:link { color: #c2e078; text-decoration: none; } A:visited { color: #c2e078;} ';

    // padding
    css += 'TABLE TD.ddlabel { border-color: #222; border-style:solid; border-width: 2px; padding: 10px; }';

    // table header
    css += 'TABLE TH.ddheader { width: 30px; height: 30px; vertical-align: middle; }';

    // inject the CSS code into the 'head' element
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

    // no need for the banner
    body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'none';

    console.debug("TEST");

    // zebra table
    timetable = document.getElementsByClassName('datadisplaytable')[0];
    var rows = timetable.rows;
    for( var i = 0; i < rows.length; i++ )
    {
        if( i%2 == 0 )
            rows[i].style.backgroundColor = '#badcdd'; 
        else
            rows[i].style.backgroundColor = '#cbf1f2';

        var cells = rows[i].cells;
        if( cells )
            for( var j = 0; j < cells.length; j++ )
            {
                cell = cells[j];
                
                // lectures/labs/seminars
                if( cell.attributes[0].value == 'ddlabel' )
                {
                    cell.style.backgroundColor = '#212b40';
                }
            }
    }
    console.info( "END!!!");

}) ();
