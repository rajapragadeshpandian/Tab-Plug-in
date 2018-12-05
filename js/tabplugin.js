/*function init( ele ) {
    var rpTabs = document.getElementsByClassName( 'rp-tabs' );
    [].forEach.call( rpTabs, function( rpTab ) {
        rpTab.tab( 'hori' );
    } );
}*/


(function () {



    var i,options;

   var body = document.getElementsByTagName('body')[0];
    console.log(body);

    body.addEventListener('click',nothing);

    function nothing(e)
    {
        return;
    }

    //var len =  rptabs.length;
    //console.log(rptabs.length);

    
         function init() {

        var defaults =
            {
                align:"horizontal",
                activetab:0

            }

        console.log("hi");
        // debugger;

     if( 'string' == typeof arguments[0] ) {

            
          /*  if( (arguments[0].indexOf(',') > -1) || (arguments[0].indexOf('.') > -1) )
            {
                arguments[0] = arguments[0].replace (/[.,]/g, " ");
            

            rptabs = document.getElementsByClassName(arguments[0]); 
            }

            else if(arguments[0].indexOf('#') > -1)
            {


                arguments[0] = arguments[0].replace (/#/g, "");
               rptabs = document.getElementById(arguments[0]);

              }

            else
            {
                rptabs = document.getElementsByClassName(arguments[0]);
            }*/

            rptabs = document.querySelectorAll(arguments[0]);
            
            
 }
              
        else {
            console.error( 'Pass a selector to change' );
            return;
        }

        if (arguments[1] && typeof arguments[1] === "object") {
            options = extendDefaults(defaults, arguments[1]);
        }

        else 
        {
            options = extendDefaults(defaults,arguments[0]);
        }

      
console.log(options);



        if (options.align == "horizontal") {

            
                horizontal();
                console.log("four");
            
        }

        else if (options.align == "vertical") {

            
                vertical();
                console.log(options.align=="vertical");
 }
   

    }

    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
            else
            {
                source[property] = source[property];
                console.log("no user defined");
            }
        }
        return source;
    }


    function horizontal() 
    {

        var activetab = options.activetab;

                [].forEach.call(rptabs, function (item, index, rpTab)
                
                {
        
                    console.log(item);

                    if(activetab > item.children[0].children.length)
                    {
                        console.log("exceeds tab length");
                        return;
                    }
        
                if (typeof(options.activetab)=='number') 
                
                
                {
        
                    console.log("hi buds");
        
                 if ( (item.children[0].classList.contains('linkvertical')) &&
                    (item.children[1].classList.contains('contentvertical')) )
        
        
                     {
        
                        item.children[0].addEventListener('click', opentab);
                        var len = item.children[0].children.length;
        
                    item.children[0].classList.remove('linkvertical');
                    item.children[1].classList.remove('contentvertical');
                    console.log('alone');
        
                    for (i = 0; i < len; i++) {
                        item.children[0].children[i].classList.remove('active');
                        item.children[1].children[i].style.display = "none";
        
                    }
        
                    item.children[0].children[activetab].classList.add('active');
                    item.children[1].children[activetab].style.display = 'block';
        
                }
        
                   
        
                    else 
                    {
                        item.children[0].addEventListener('click', opentab);
                        var len = item.children[0].children.length;
        
                        item.children[0].classList.add('tablink');
        
                        for (i = 0; i < len; i++) {
                            item.children[0].children[i].classList.add('tabbutton');
                            item.children[0].children[i].classList.remove('active');
        
                        }
        
                        item.children[1].classList.add('tabcontent');
        
                        for (i = 0; i < len; i++) {
                            item.children[1].children[i].style.display = 'none';
                            item.children[1].children[i].classList.add('content');
                        }
                        console.log('two');
                        item.children[0].children[activetab].classList.add('active');
                        item.children[1].children[activetab].style.display = 'block';
        
                    }
        
                }   
        
             });
   
    }

    
    function vertical() {

        var activetab = options.activetab;

        [].forEach.call(rptabs, function (item, index, rpTab)

        {
            console.log(item);
        if (typeof (activetab) == "number") 
        
        {

             if ((item.children[0].classList.contains('tablink')) &&
                (item.children[1].classList.contains('tabcontent')) ) 
                {

                    var len = item.children[0].children.length;
                item.children[0].classList.add('linkvertical');
                item.children[1].classList.add('contentvertical');
                console.log('alone');

                for (i = 0; i < len; i++) {
                    item.children[0].children[i].classList.remove('active');
                    item.children[1].children[i].style.display = 'none';
                    
                    }
                    item.children[0].children[activetab].classList.add('active');
                    item.children[1].children[activetab].style.display = "block";

            }

           
            else {

                item.children[0].addEventListener('click', opentab);
                item.children[0].classList.add('linkvertical');
                item.children[1].classList.add('contentvertical');



                var len = item.children[0].children.length;
                item.children[0].classList.add('tablink');

                for (i = 0; i < len; i++) {
                    item.children[0].children[i].classList.add('tabbutton');
                    item.children[0].children[i].classList.remove('active');

                }

                item.children[1].classList.add('tabcontent');

                for (i = 0; i < len; i++) {
                    item.children[1].children[i].style.display = 'none';
                    item.children[1].children[i].classList.add('content');

                }

                item.children[0].children[activetab].classList.add('active');
                item.children[1].children[activetab].style.display = "block";


            }
        }

        

            });


    }

//rptabs.children[0].classList.add("vaeshagdhg");
//rptabs.children[1].style.display = "none";







/*else {

    // var parentObj;
    //             if(){
    // parentObj = rpTab[active];
    //             }
    //             else{
    //                 parentObj = item;
    //             }

    //             parentObj.children[0].addEventListener('click',opentab);

  
    console.log("im claaed witout");*/


    /* for(var x=0;x<tab.length;x++)
    {
    tab[x].addEventListener('click',open)
    }*/

    function opentab(e) {

        console.log("hi");
        var parent = Array.prototype.slice.call(document.getElementsByClassName('tablink'));
        var parlen = parent.length;
        var parindex = parent.indexOf(e.currentTarget);


        var child = Array.prototype.slice.call(document.getElementsByClassName('tablink')[parindex].children);
        var len = child.length;
        var index = child.indexOf(e.target);


        //console.log(pos.indexOf(pos[1]));
        //console.log(pos[1]);

        //var child1 = document.getElementsByClassName('num');
        //console.log(child1);
        console.log(e.target.parentNode.nextElementSibling);


        for (i = 0; i < len; i++) {
            if (i == index) {
                e.target.parentNode.nextElementSibling.children[index].style.display = 'block';
                e.target.classList.add('active');
            }
            else {
                e.target.parentNode.nextElementSibling.children[i].style.display = 'none';

                e.target.parentNode.children[i].classList.remove('active');

            }
        }
    }


   
    function addTab(rptabs,linkname, contentname) {


       

        if( 'string' == typeof arguments[0] ) {

            
            /*if( (arguments[0].indexOf(',') > -1) || (arguments[0].indexOf('.') > -1) )
            {
                arguments[0] = arguments[0].replace (/[.,]/g, " ");
            console.log(arguments[0]);

            rptabs = document.getElementsByClassName(arguments[0]); 
            }

            else if(arguments[0].indexOf('#') > -1)
            {
                arguments[0] = arguments[0].replace (/#/g, "");
            console.log(arguments[0]);*/

            rptabs = document.querySelectorAll(arguments[0]);
            console.log(rptabs);


           
            }

                       
    else {
        console.error( 'Pass a selector to change' );
        return; 
    }


            [].forEach.call(rptabs, function (item, index, rpTab) {

                if( (typeof(linkname) == "string") && (typeof(contentname) == "string") )
                {

                var btn = document.createElement("button");
                var btntext = document.createTextNode(linkname);
                btn.classList.add('tabbutton');
                btn.appendChild(btntext);
                //console.log(item);


                console.log(linkname);
                var content = document.createElement("div");
                var contenttext = document.createTextNode(contentname);
                content.classList.add('content');
                content.appendChild(contenttext);

                var len = item.children[0].children.length;
                console.log(len);

                console.log(item.children[0].children[0].classList.contains('tabbutton'));
                console.log(item.children[1].children[0].classList.contains('content'));

                for (i = 0; i < len; i++) {
                    if (item.children[0].children[i].classList.contains('tabbutton') && item.children[1].children[i].classList.contains('content')) {

                        item.children[0].appendChild(btn);
                        item.children[1].appendChild(content);

                    }
                }


            }
                // rpTab.children[1].style.display = "none";
        });
            
        }

        
    


    function deleteTab(rptabs,tabnum) {

        if( 'string' == typeof arguments[0] ) {

            
            /*if( (arguments[0].indexOf(',') > -1) || (arguments[0].indexOf('.') > -1) )
            {
                arguments[0] = arguments[0].replace (/[.,]/g, " ");
            console.log(arguments[0]);

            rptabs = document.getElementsByClassName(arguments[0]); 
            }

            else if(arguments[0].indexOf('#') > -1)
            {
                arguments[0] = arguments[0].replace (/#/g, "");
            console.log(arguments[0]);*/

            rptabs = document.querySelectorAll(arguments[0]);
            console.log(rptabs);

            }

            else {
                console.error( 'Pass a selector to change' );
                return;
            }


            [].forEach.call(rptabs, function (item, index, rpTab)
        {

            if( (item.children[0].children.length == 1) || (tabnum >= item.children[0].children.length ) )
            {
                console.log("can't delete this tab");
                return;
            }

       if (typeof (tabnum) == "number")
        {

        if (  (item.children[0].classList.contains('tablink')) 
            || (item.children[0].classList.contains('linkvertical')) ) 
            {
            
                if ((item.children[0].children[0].classList.contains('active')) &&
                (item.children[0].children[tabnum].classList.contains('active'))) {
                item.children[0].children[1].classList.add('active');
                item.children[1].children[1].style.display = 'block';

            }



            if ((item.children[0].children[tabnum].classList.contains('active'))) {
                item.children[0].children[0].classList.add('active');
                item.children[1].children[0].style.display = 'block';

            }



            item.children[0].removeChild(item.children[0].children[tabnum]);
            item.children[1].removeChild(item.children[1].children[tabnum]);
            /*button[active].children[0].style.display = "inline-block";
            content[active].children[0].style.display = "block";*/
            console.log("one");




        }
    }

        else {

                  if ((item.children[0].lastElementChild.classList.contains('active')) &&
                    ((item.children[0].classList.contains('tablink')) || (item.children[0].classList.contains('linkvertical')))) {
                    item.children[0].children[0].classList.add('active');
                    item.children[1].children[0].style.display = 'block';

                }


               else if ((item.children[0].classList.contains('tablink')) || (item.children[0].classList.contains('linkvertical'))) {
                    item.children[0].removeChild(item.children[0].lastElementChild);
                    item.children[1].removeChild(item.children[1].lastElementChild);
                }

                console.log('two');
             }

        });

}

        

    function destroy(rptabs) {



        if( 'string' == typeof arguments[0] ) {

            
           /* if( (arguments[0].indexOf(',') > -1) || (arguments[0].indexOf('.') > -1) )
            {
                arguments[0] = arguments[0].replace (/[.,]/g, " ");
            console.log(arguments[0]);

            rptabs = document.getElementsByClassName(arguments[0]); 
            }

            
        else if(arguments[0].indexOf('#') > -1)
        {
            arguments[0] = arguments[0].replace (/#/g, "");
        console.log(arguments[0]);*/

        rptabs = document.querySelectorAll(arguments[0]);
        console.log(rptabs);

       
        }
            else 
            {
                    console.error( 'Pass a selector to change' );
                    return;
                }

                [].forEach.call(rptabs, function (item, index, rpTab) {

                    console.log(item.children[0]);
                    item.children[0].removeEventListener('click', opentab);
                    item.children[0].classList.remove('linkvertical', 'tablink');
                    item.children[1].classList.remove('contentvertical', 'tabcontent');
            
                    var len = item.children[0].children.length;
                    console.log(len);
                    console.log("fuv");
            
                    for (var i = 0; i < len; i++) {
                        item.children[0].children[i].classList.remove('tabbutton', 'active', 'normal');
                        item.children[1].children[i].classList.remove('content');
                        item.children[1].children[i].style.display = 'block';
                    }
                }
            
            );
        

    }


        window.destroy=destroy;
        window.addTab=addTab;
        window.deleteTab=deleteTab;
        window.init = init;
    

})();





