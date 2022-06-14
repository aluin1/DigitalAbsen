 
 
///load 
myApp.onPageInit("4-history-notifikasi", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 

 


$$('.his-absen').on('click', function () {
	
				mainView.router.loadPage('2-history-absen.html');
});

$$('.his-gps').on('click', function () {
	
				mainView.router.loadPage('3-history-gps.html');
});


$$('.his-lok').on('click', function () {
	
				mainView.router.loadPage('1-homepage.html');
});

 
 // Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('ptr:refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () { 
        // When loading done, we need to reset it
		
        myApp.pullToRefreshDone();
		myApp.hidePreloader();
		
    }, 2000);
});   
 myApp.hidePreloader();
}); 