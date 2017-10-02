//alert("hello");

document.addEventListener('DOMContentLoaded', function(){

	// chrome.tabs.getSelected(null, function(tab){
		
	// 	alert(tab.value);

	// });

	for (var[i] = 0, l = document.links.length; i<l; i++)
	{
		console.log(document.links[i].href);
	}

});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked" ) {
      
    	chrome.tabs.getSelected(null, function(tab){
		
		alert(tab.value);

		});

    }
  }
);