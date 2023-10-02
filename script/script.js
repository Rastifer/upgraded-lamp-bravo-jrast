$( document ).ready(function() {
  
 $('#dogeWindows').click( 
   function(
 ){

//code goes here
   // console.log("much windows");
   console.log("position: ", $('#dogeWindows').position() );
  }
 );

  
  $( "#dogeWindows" ).draggable({
      stop: function() {
        if(  $('#dogeWindows').position().left > 500){
        //  alert("you haswss wowzazzz ");
          
           $('#dogeWindows').attr('src','https://pbs.twimg.com/media/BASrCNQCAAEh2Rk?format=jpg&name=small');
    }
     
        else if( $('#dogeWindows').position().left > 300 && $('#dogeWindows').position().left < 500){
          alert("Keep it movin!");
        }    
        else {
          alert("Rock and Roll!");
        }
    }
    
    
  
    
    
  });
  
  
  
  
  
});
  
  //$('#dogeWindows').draggable(function())}
                              
                              
                              
   //$('#dogeWindows').draggable({axis: 'x'});
 //    $( '#dogeWindows').draggable({
 //   stop: function() {
 //     if( $('#dogeWindows').position().left > 900){
//         //alert("you has wowzazzz");
// $('#dogeWindows').attr('src','https://www.leisurebyte.com/wp-content/uploads/2021/10/The-Office-BMC-Crossover-Ft.-Michael-Scott-on-Unvaccinated-People-is-Funny-AF-696x392-1.jpg');
//     }
//         else if( $('#dogeWindows').position().left > 300 && $('#dogeWindows').position().left < 500){
//         alert("You're so close!");
//       }
//       else{
//         alert("keep on movin");
//       }
//    }
 // }
//});