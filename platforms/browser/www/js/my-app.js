var myApp = new Framework7({
    modalTitle: 'PEPC DIGITAL ATTENDANCE',
    fastClicks: true,
    tapHold: true,
    tapHoldDelay: 1000,
    tapHoldPreventClicks: true,
   // pushState : true,
    //precompileTemplates: true,
    cache: false
	
	
});

var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false
});

 
  
  
  var useWeb = "https://apps.pertamina.com/api/digital_absensi_pda_dev_v2.4";
 //var useWeb = "http://localhost/api-new";
 var strUsername = localStorage.getItem("LogonUsername");
	 var strPass = localStorage.getItem("LogonPass");
	 var strToken = localStorage.getItem("LogonToken");
	 
	console.log(strUsername);
	 
Date.prototype.yyyymmddOnly = function() {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();

    return yyyy + '-' + (mm[1]
        ? mm
        : '0' + mm[0]) + '-' + (dd[1]
        ? dd
        : '0' + dd[0]); // padding
};
 

myApp.preloaderStart = function()
{
	   
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	  
	  
	   mainView.router.loadPage('1-landing-page.html'  ); 
	   myApp.hidePreloader();
		//if (strUsername!=null){ 
		//   mainView.router.loadPage('1-homepage.html');  
		//   myApp.hidePreloader();
		// }else{
			//mainView.router.loadPage('1-index-login.html'); 
			//myApp.hidePreloader();
		 //}
    },2000 );
	
}

  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
  $.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/fitur", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		console.log(data);
		console.log(data.dataAPIKEY);
		var dataapikey=data.dataAPIKEY;
			var x; 
			
			 var dataapi= []; 
		 for (x = 0; x < dataapikey.length; x++) { 
             
			   console.log(dataapikey[x].FITUR_KEYVALUE);
			    
			    var link_api=dataapikey[x].FITUR_KEYVALUE; 
				dataapi.push(link_api);
		 }
		 
		  if (dataapi==""){
			  
		     document.getElementById("link-google-api").src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDysKq9aGoHq2BmAb5ZyF-cZcdlwn8OCCQ';
			  
		  }
		  else{
		     document.getElementById("link-google-api").src = 'https://maps.googleapis.com/maps/api/js?key='+dataapi+'';
			 }
			 
		 
		 myApp.hidePreloader();
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });		
	
	
			
 
    });

 
   
	  
	  
	
 
$$('.alert-logout').on('click', function () {
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-logout"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Yakin akan keluar?</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Batal</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">Keluar</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				//mainView.router.loadPage('1-index-login.html');
				mainView.router.loadPage('1-landing-page.html');
			
				}
		  }  
		]
	})

});

$$('.profil-user').on('click', function () {
 
 mainView.router.loadPage('6-profil-user.html');

});


 

myApp.preloaderStart();