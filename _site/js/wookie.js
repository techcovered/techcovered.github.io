(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


	(function() {
	var $body = document.body
	, $inmenu_trigger = $body.getElementsByClassName('inmenu-trigger')[0];

	if ( typeof $inmenu_trigger !== 'undefined' ) {
		$inmenu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);


//Adblock appeal function
(function(){ 

    setTimeout(function() { 

      // We are targeting the first banner ad of AdSense
      var ad = document.querySelector("ins.adsbygoogle");
      // If the ad contains no innerHTML, ad blockers are at work
      if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
        
        // Since ad blocks hide ads using CSS too
        ad.style.cssText = 'display:block !important'; 
        
        // You can put any text, image or even IFRAME tags here
        ad.innerHTML = '<img src="http://www.techcovered.org/images/adblock-plead.png"/>';
        //document.getElementById("showadblock").innerHTML='<img src="http://img.techcovered.org/adblock.png"/>';
      }
      
    }, 2000); // The ad blocker check is performed 2 seconds after the page load 
  }).call(this); 


(function() {
	//Function to change color scheme on reload
		var colors = ["0080AA","#1E7145","#00aba9","#603CBA","#6C3A1B","#B91D47","#2B5797","#800000"];
	//To find random
	 	var colorindex = Math.floor((Math.random() * 10) + 1); 
	 	while(colorindex>7||colorindex<1) {
	 		colorindex = Math.floor((Math.random() * 10) + 1);
	 	}
	 	console.log(colorindex);
		$(".container-fluid.header").css("background-color", colors[colorindex]);
		$(".col-xs-10 > h2  a").css("color", colors[colorindex]);
		$(".pagination > ul > li a").css("background-color", colors[colorindex]);
		$(".pagination > ul > li a").css("border-color", colors[colorindex]);
		$(".pagination > ul > li.active").css("border-color", colors[colorindex]);
		$(".pagination > ul > li.active").css("color", colors[colorindex]);
		$("footer > span > a").css("color", colors[colorindex]);
		$(".button").css("background-color", colors[colorindex]);
		$(".button").css("border-color", colors[colorindex]);
		$("#thepost a").css("color", colors[colorindex]);
		$("nav#slide-menu").css("background-color", colors[colorindex]);
		$("#mc_embed_signup").css("background-color", colors[colorindex]);
		$("#relatedones").css("background-color", colors[colorindex]);
		$(".mc-field-group > input").css("background-color", colors[colorindex]);
		$("<style> ::selection{ background-color:"+colors[colorindex]+"; } ::-moz-selection{ background-color:"+colors[colorindex]+"; }</style>").insertAfter("body *:last");


}).call(this);