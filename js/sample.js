(function() {
    var select = document.querySelector('.variation-select');
    select.addEventListener('change', function() {
        addTab( '.specifications', 'Additional Info', 'Summa' );
        addTab( '.specifications', 'Additional Info 2', 'Summa 2' );
    });
})()



/* if(options.align == "horizontal")
               {
                    var activetab = options.activetab;

                if (typeof(options.activetab)=='number') 
        
        
                {
                
                    console.log("hi buds");
                
                 if ( (rptabs.children[0].classList.contains('linkvertical')) &&
                    (rptabs.children[1].classList.contains('contentvertical')) )
                
                
                     {
                
                        rptabs.children[0].addEventListener('click', opentab);
                        var len = rptabs.children[0].children.length;
                
                    rptabs.children[0].classList.remove('linkvertical');
                    rptabs.children[1].classList.remove('contentvertical');
                    console.log('alone');
                
                    for (i = 0; i < len; i++) {
                        rptabs.children[0].children[i].classList.remove('active');
                        rptabs.children[1].children[i].style.display = "none";
                
                    }
                
                    rptabs.children[0].children[activetab].classList.add('active');
                    rptabs.children[1].children[activetab].style.display = 'block';
                
                }
                
                
                else 
                {
                    rptabs.children[0].addEventListener('click', opentab);
                    var len = rptabs.children[0].children.length;
                
                    rptabs.children[0].classList.add('tablink');
                
                    for (i = 0; i < len; i++) {
                        rptabs.children[0].children[i].classList.add('tabbutton');
                        rptabs.children[0].children[i].classList.remove('active');
                
                    }
                
                    rptabs.children[1].classList.add('tabcontent');
                
                    for (i = 0; i < len; i++) {
                        rptabs.children[1].children[i].style.display = 'none';
                        rptabs.children[1].children[i].classList.add('content');
                    }
                    console.log('two');
                    rptabs.children[0].children[activetab].classList.add('active');
                    rptabs.children[1].children[activetab].style.display = 'block';
                
                }
                
               }
            }

              else if(options.align == "vertical")
              {
                  var activetab = options.activetab;

                if (typeof (options.activetab) == "number") 
        
                {
        
        
                     if ((rptabs.children[0].classList.contains('tablink')) &&
                        (rptabs.children[1].classList.contains('tabcontent')) ) 
                        {
        
                            var len = rptabs.children[0].children.length;
                        rptabs.children[0].classList.add('linkvertical');
                        rptabs.children[1].classList.add('contentvertical');
                        console.log('alone');
        
                        for (i = 0; i < len; i++) {
                            rptabs.children[0].children[i].classList.remove('active');
                            rptabs.children[1].children[i].style.display = 'none';
                            
                            }
                            rptabs.children[0].children[activetab].classList.add('active');
                            rptabs.children[1].children[activetab].style.display = "block";
        
                    }
        
                   
                    else {
        
                        rptabs.children[0].addEventListener('click', opentab);
                        rptabs.children[0].classList.add('linkvertical');
                        rptabs.children[1].classList.add('contentvertical');
        
        
        
                        var len = rptabs.children[0].children.length;
                        rptabs.children[0].classList.add('tablink');
        
                        for (i = 0; i < len; i++) {
                            rptabs.children[0].children[i].classList.add('tabbutton');
                            rptabs.children[0].children[i].classList.remove('active');
        
                        }
        
                        rptabs.children[1].classList.add('tabcontent');
        
                        for (i = 0; i < len; i++) {
                            rptabs.children[1].children[i].style.display = 'none';
                            rptabs.children[1].children[i].classList.add('content');
        
                        }
        
                        rptabs.children[0].children[activetab].classList.add('active');
                        rptabs.children[1].children[activetab].style.display = "block";
        
        
                    }
                }

            }*/




            /* if( (typeof(linkname) == "string") && (typeof(contentname) == "string") )
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

                var len = rptabs.children[0].children.length;
                console.log(len);

                console.log(rptabs.children[0].children[0].classList.contains('tabbutton'));
                console.log(rptabs.children[1].children[0].classList.contains('content'));

                for (i = 0; i < len; i++) {
                    if (rptabs.children[0].children[i].classList.contains('tabbutton') && rptabs.children[1].children[i].classList.contains('content')) {

                        rptabs.children[0].appendChild(btn);
                        rptabs.children[1].appendChild(content);

                    }
                }


            }*/


            
         /*   if( (rptabs.children[0].children.length == 1) || (tabnum >= rptabs.children[0].children.length ) )
            {
                console.log("can't delete this tab");
                return;
            }

       if (typeof (tabnum) == "number")
        {

        if (  (rptabs.children[0].classList.contains('tablink')) 
            || (rptabs.children[0].classList.contains('linkvertical')) ) 
            {
            
                if ((rptabs.children[0].children[0].classList.contains('active')) &&
                (rptabs.children[0].children[tabnum].classList.contains('active'))) {
                rptabs.children[0].children[1].classList.add('active');
                rptabs.children[1].children[1].style.display = 'block';

            }



            if ((rptabs.children[0].children[tabnum].classList.contains('active'))) {
                rptabs.children[0].children[0].classList.add('active');
                rptabs.children[1].children[0].style.display = 'block';

            }



            rptabs.children[0].removeChild(item.children[0].children[tabnum]);
            rptabs.children[1].removeChild(item.children[1].children[tabnum]);
            /*button[active].children[0].style.display = "inline-block";
            content[active].children[0].style.display = "block";
            console.log("one");




        }
    }

        else {

                  if ((rptabs.children[0].lastElementChild.classList.contains('active')) &&
                    ((rptabs.children[0].classList.contains('tablink')) || (rptabs.children[0].classList.contains('linkvertical')))) {
                    rptabs.children[0].children[0].classList.add('active');
                    rptabs.children[1].children[0].style.display = 'block';

                }


                if ((rptabs.children[0].classList.contains('tablink')) || (rptabs.children[0].classList.contains('linkvertical'))) {
                    rptabs.children[0].removeChild(item.children[0].lastElementChild);
                    rptabs.children[1].removeChild(item.children[1].lastElementChild);
                }

                console.log('two');
        }*/


       /* console.log("hi");
        rptabs.children[0].removeEventListener('click', opentab);
            rptabs.children[0].classList.remove('linkvertical', 'tablink');
            rptabs.children[1].classList.remove('contentvertical', 'tabcontent');

            var len = rptabs.children[0].children.length;
            console.log(len);
            console.log("fuv");

            for (var i = 0; i < len; i++) {
                rptabs.children[0].children[i].classList.remove('tabbutton', 'active', 'normal');
                rptabs.children[1].children[i].classList.remove('content');
                rptabs.children[1].children[i].style.display = 'block';
            }*/