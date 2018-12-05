var show = (function (){



    var i; 

    var rptabs = document.getElementsByClassName('rp-tabs');

    var len = rptabs.length;
    console.log(rptabs.length);
    console.log(rptabs);
    console.log("hi bud");

   /* var options = 
    {
        vertical:"vertical",
        horizontal:"horizontal",
        addtab:"addtab",
        deletetab:"deletetab",
        destroy:"destroy"
    };
    */


    function init(active)

    {

       

        if(typeof(active)=='number')
        {
            

            if( (rptabs[active].children[0].classList.contains('linkvertical')) && 
            (rptabs[active].children[1].classList.contains('contentvertical')) )
            {
                rptabs[active].children[0].classList.remove('linkvertical');
                rptabs[active].children[1].classList.remove('contentvertical');
                console.log('alone');
            }

            else
            {
                rptabs[active].children[0].addEventListener('click',opentab);
                var len = rptabs[active].children[0].children.length;

                rptabs[active].children[0].classList.add('tablink');
                
                for(i=0;i<len;i++)
                {
                    rptabs[active].children[0].children[i].classList.add('tabbutton');
                    rptabs[active].children[0].children[i].classList.remove('active');   
    
                }
    
            rptabs[active].children[1].classList.add('tabcontent');
                
                for(i=0;i<len;i++)
                {
                   rptabs[active].children[1].children[i].style.display = 'none';
                    rptabs[active].children[1].children[i].classList.add('content');   
                 }
    console.log('not alone');
                rptabs[active].children[0].children[0].classList.add('active');
                rptabs[active].children[1].children[0].style.display = 'block';
                
            }


            
            
        }

        
        else{

             [].forEach.call( rptabs, function( item,index,rpTab) 
        {
// var parentObj;
//             if(){
// parentObj = rpTab[active];
//             }
//             else{
//                 parentObj = item;
//             }

//             parentObj.children[0].addEventListener('click',opentab);

var button = document.getElementsByClassName('tablink');
    var content = document.getElementsByClassName('tabcontent');
var len  = button.length;

if( (item.children[0].classList.contains('linkvertical')) && (item.children[1].classList.contains('contentvertical'))
&& typeof(active)!=="number")
{
item.children[0].classList.remove('linkvertical');
item.children[1].classList.remove('contentvertical');

console.log('original');
} 



        else
        {

            item.children[0].addEventListener('click',opentab);

            item.children[0].classList.remove('linkvertical');
            item.children[1].classList.remove('contentvertical');
    
                var len = item.children[0].children.length;
                item.children[0].classList.add('tablink');
                
                for(i=0;i<len;i++)
                {
                    item.children[0].children[i].classList.add('tabbutton');
                    item.children[0].children[i].classList.remove('active');   
    
                }
    
                item.children[1].classList.add('tabcontent');
                
                for(i=0;i<len;i++)
                {

                    //after original all tabs will get displayed
                    item.children[1].children[i].style.display = 'none';
                    item.children[1].children[i].classList.add('content');   
    
                }
                console.log("else");
                item.children[0].children[0].classList.add('active');
                item.children[1].children[0].style.display = 'block';

         }

        



         

        } );
   
    }
}


function vertical(active)
{


    if(typeof(active)=="number")
    {
        if( (rptabs[active].children[0].classList.contains('tablink')) && 
        (rptabs[active].children[1].classList.contains('tabcontent')) )
        {
            rptabs[active].children[0].classList.add('linkvertical');
            rptabs[active].children[1].classList.add('contentvertical');
            console.log('alone');
        }

        else
        
        {

            rptabs[active].children[0].addEventListener('click',opentab);
        rptabs[active].children[0].classList.add('linkvertical');
        rptabs[active].children[1].classList.add('contentvertical');


        
        var len = rptabs[active].children[0].children.length;
        rptabs[active].children[0].classList.add('tablink');

        for(i=0;i<len;i++)
        {
            rptabs[active].children[0].children[i].classList.add('tabbutton');
            rptabs[active].children[0].children[i].classList.remove('active');   

        }

        rptabs[active].children[1].classList.add('tabcontent');
        
        for(i=0;i<len;i++)
        {
           rptabs[active].children[1].children[i].style.display = 'none';
            rptabs[active].children[1].children[i].classList.add('content');
            
            }

        rptabs[active].children[0].children[0].classList.add('active');
        rptabs[active].children[1].children[0].style.display = "block";


        }
    }

    else
    {

    

    [].forEach.call( rptabs, function( item,index,rpTab ) 
    {

        console.log(rpTab);


        if((item.children[0].classList.contains('tablink')) && (item.children[1].classList.contains('tabcontent') &&
        typeof(active)!=='number'))
        {
        item.children[0].classList.add('linkvertical');
        item.children[1].classList.add('contentvertical');
    
        }
    

        else
        {

            item.children[0].addEventListener('click',opentab);
        item.children[0].classList.add('linkvertical');
        item.children[1].classList.add('contentvertical');

        
        var len = item.children[0].children.length;
        item.children[0].classList.add('tablink');

        for(i=0;i<len;i++)
        {
            item.children[0].children[i].classList.add('tabbutton');
            item.children[0].children[i].classList.remove('active');   

        }

        item.children[1].classList.add('tabcontent');
        
        for(i=0;i<len;i++)
        {
            item.children[1].children[i].style.display = 'none';
            item.children[1].children[i].classList.add('content');
            
            }

            item.children[0].children[0].classList.add('active');
            item.children[1].children[0].style.display = 'block';
            
        }   
    

    } );
} 
   
}
   
/* for(var x=0;x<tab.length;x++)
{
tab[x].addEventListener('click',open)
}*/

function opentab(e)
{

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
    //console.log(child1[0].nextElementSibling.children[0]);


     for(i=0;i<len;i++)
    {
        if(i==index)
        {
            e.target.parentNode.nextElementSibling.children[index].style.display='block';
            e.target.classList.add('active');
        }
        else
        {
            e.target.parentNode.nextElementSibling.children[i].style.display='none';
        
            e.target.parentNode.children[i].classList.remove('active');
              
        }
    }
}


/*function original(e)
{
    


    for(i=0;i<tab.length;i++)
    {
        tab[i].classList.add('reset');
    }
    for(i=0;i<tabcontent.length;i++)
    {
        for(var j=0;j<tabcontent[i].children.length;j++)
        {
        tabcontent[i].children[j].classList.add('reset');
    }
    }
    

}*/

function addTab(linkname,contentname,active)
{

   
    if(typeof(active)=="number")
    {   
        var btn  = document.createElement("button");
        var btntext = document.createTextNode(linkname); 
        btn.classList.add('tabbutton');
        btn.appendChild(btntext);
        //console.log(item);
    
    
         console.log(linkname);
         var content = document.createElement("div");
        var contenttext = document.createTextNode(contentname);
        content.classList.add('content');
        content.appendChild(contenttext);

   
        var len = rptabs[active].children[0].children.length;
     console.log(rptabs[active]);
     console.log(len);

     for(i=0;i<len;i++)
     {
         if(rptabs[active].children[0].children[i].classList.contains('tabbutton') && rptabs[active].children[1].children[i].classList.contains('content'))
         {
             rptabs[active].children[0].appendChild(btn);
             rptabs[active].children[1].appendChild(content);
         }
     }
    }

        else
        {
            [].forEach.call( rptabs, function(item,index,rpTab) 
            {

                var btn  = document.createElement("button");
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

     for(i=0;i<len;i++)
     {
         if(item.children[0].children[i].classList.contains('tabbutton') && item.children[1].children[i].classList.contains('content'))
         {
            
     item.children[0].appendChild(btn);
       item.children[1].appendChild(content);

         }
     }

    
       
      // rpTab.children[1].style.display = "none";
    
        

    } );
 
}
}


function deleteTab(active,tabnum)
{


         if( (typeof(active)=="number") && (typeof(tabnum)=="number") && ( (rptabs[active].children[0].classList.contains('tablink'))
        || (rptabs[active].children[0].classList.contains('linkvertical')) ) )
        {

            if( (rptabs[active].children[0].children[tabnum].classList.contains('active')) )
            {
                rptabs[active].children[0].children[0].classList.add('active');
                rptabs[active].children[1].children[0].style.display = 'block';
               
               }    
            
            
            
            if( (rptabs[active].children[0].children[0].classList.contains('active')) &&
            (rptabs[active].children[0].children[tabnum].classList.contains('active')) )
            {
                rptabs[active].children[0].children[1].classList.add('active');
                rptabs[active].children[1].children[1].style.display = 'block';
               
               }
               
            
           

                rptabs[active].children[0].removeChild(rptabs[active].children[0].children[tabnum]);
                rptabs[active].children[1].removeChild(rptabs[active].children[1].children[tabnum]);
                /*button[active].children[0].style.display = "inline-block";
                content[active].children[0].style.display = "block";*/
                 console.log("one");

                

                 
     }
  

        else
        {
               
            for(i=0;i<len;i++)
            {


                if( (rptabs[i].children[0].lastElementChild.classList.contains('active')) &&
                ((rptabs[i].children[0].classList.contains('tablink')) || (rptabs[i].children[0].classList.contains('linkvertical'))) )
                {
                    rptabs[i].children[0].children[0].classList.add('active');
                    rptabs[i].children[1].children[0].style.display = 'block';
                   
                   }
                

                if( (rptabs[i].children[0].classList.contains('tablink')) || (rptabs[i].children[0].classList.contains('linkvertical')) )

                {
                rptabs[i].children[0].removeChild(rptabs[i].children[0].lastElementChild);
                rptabs[i].children[1].removeChild(rptabs[i].children[1].lastElementChild);
                }
            
                console.log('two');
            

                
               
                 
                }
                
                }

    }

function original(active)
{

    //tab[0].children[0].classList.remove('tabbutton');

    if(typeof(active)=="number")
    {
        console.log(rptabs[active].children[0]);

        rptabs[active].children[0].removeEventListener('click',opentab);
        rptabs[active].children[0].classList.remove('linkvertical','tablink');
        rptabs[active].children[1].classList.remove('contentvertical','tabcontent');


        var len = rptabs[active].children[0].children.length;
        console.log(len);

        for(var i=0;i<len;i++)  
        {
            rptabs[active].children[0].children[i].classList.remove('tabbutton','active','normal');
            rptabs[active].children[1].children[i].classList.remove('content');
            rptabs[active].children[1].children[i].style.display='block';
        }
    }

else
{

   
 [].forEach.call( rptabs, function( item,index,rpTab ){

        console.log(item.children[0]);
        item.children[0].removeEventListener('click',opentab);
        item.children[0].classList.remove('linkvertical','tablink');
        item.children[1].classList.remove('contentvertical','tabcontent');

        var len = item.children[0].children.length;
        console.log(len);

        for(var i=0;i<len;i++)
        {
            item.children[0].children[i].classList.remove('tabbutton','active','normal');
            item.children[1].children[i].classList.remove('content');
            item.children[1].children[i].style.display='block';
        }



    });

}

   }




return {
    
    init:init,
    vertical:vertical,
    original:original,
    addTab:addTab,
    deleteTab:deleteTab
}

})();
