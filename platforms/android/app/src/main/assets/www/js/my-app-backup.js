var myApp = new Framework7({
    modalTitle: 'Digital Absensi',
    fastClicks: true,
    tapHold: true,
    tapHoldDelay: 1000,
    tapHoldPreventClicks: true,
    //pushState : true,
    //precompileTemplates: true,
    cache: false, 
	
	
});

var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    dynamicNavbar: false
});
 
var useWebcek = "https://apps.pertamina.com/api/loginprod";
var useWeb = "https://apps.pertamina.com/api/digital_absensi_production_pda_v2.3/";
//var useWeb = "http://localhost/digital_absensi";
 var strUsername = localStorage.getItem("LogonUsername");
	 var strPass = localStorage.getItem("LogonPass");
	 var strToken = localStorage.getItem("LogonToken");
	 
	
	 
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
		
		 if (strUsername==null){
		 var Tuser='alwin';
		 
		 
	 }else {
		 var Tuser=strUsername;
		 
	 }
	 
	  if (strPass==null){
		 var Tpass='alwin';
		 
		 
	 }else {
		 var Tpass=strPass;
		 
	 }console.log(Tuser);
	 console.log(Tpass);
      
	  $.ajax({ 
	
   url: ""+useWebcek+"/Users/loginLDAP",
    type: "POST",
    data:' {"username" : "'+Tuser+'"  ,  "password" : "'+Tpass+'"}' ,
    contentType: "application/json", 
    success: function (data) {
		
		 

       // callback(data);
	   // console.log(data); 
		var statuslogin=data.dataLDAP; 
		 console.log(statuslogin);
		  if (statuslogin.Status=='00'){ 
		   mainView.router.loadPage('1-homepage.html'  ); 
   console.log(statuslogin.Status);
	   myApp.hidePreloader();
		 }
		  else   if (statuslogin.Status=='01'){
			 console.log(statuslogin.Status);  
			   mainView.router.loadPage('1-index-login.html'  ); 
			 
	   myApp.hidePreloader();
		 }
		 else   {
			 console.log(statuslogin.Status);  
			   mainView.router.loadPage('1-index-login.html'  ); 
			 
	   myApp.hidePreloader();
		 }
		  
					
					
					
					
    },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
					
					
				   });
	  
	  
    } );
	
}

 

 
   
	  
	  
	
 
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
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	})

});

$$('.profil-user').on('click', function () {
 
 mainView.router.loadPage('6-profil-user.html');

});


 

myApp.preloaderStart();