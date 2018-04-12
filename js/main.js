  function init() { 

    console.log("Début de l'animation");

    /* 1st Paragraph : Ready Section */
    console.log("Première phase");

    var ready1 = document.getElementById('ready-1').classList.add('show');
    
    var ready2 = setTimeout( function(){ 
        document.getElementById('ready-2').classList.add('show');
    }, 200); 

    var ready3 = setTimeout( function(){ 
        document.getElementById('ready-3').classList.add('show');
    }, 400); 

    /* 2nd Paragraph : connectedPack Section */
    console.log("Deuxième phase");

    var logo = setTimeout( function(){ 
      document.querySelector('.logoKrys').classList.add('topLeft'); // Move logo top left corner
      var readyParagraphs = document.querySelectorAll('.ready > p');
      // Remove .show class and Hide the p of .ready Section 
      readyParagraphs.forEach(para => {
        para.classList.add('hide');
        // Remove Element of DOM
        setTimeout( function(){ para.parentNode.removeChild(para) }, 1500);
      });
    }, 1500); 

    var cPack1 = setTimeout( function(){ 
        document.getElementById('cPack-1').classList.add('show');
    }, 1700); 
    var cPack2 = setTimeout( function(){ 
      document.getElementById('cPack-2').classList.add('show');
    }, 1900); 
    var cPack3 = setTimeout( function(){ 
        document.getElementById('cPack-3').classList.add('show');
    }, 2100); 
    var cPack4 = setTimeout( function(){ 
      document.getElementById('cPack-4').classList.add('show');
    }, 2300); 

    
    


  }