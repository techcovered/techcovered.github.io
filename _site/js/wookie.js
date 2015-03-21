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
        console.log("Executed3");
      }
      
    }, 2000); // The ad blocker check is performed 2 seconds after the page load 
  }).call(this); 
