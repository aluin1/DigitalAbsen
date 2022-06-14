 
///load service Page  
myApp.onPageInit("1-landing-page", function(page){ 
 
  // Init slider and store its instance in mySwiper variable
 var  mySwiper =  myApp.swiper('.swiper-container', {
     pagination:'.swiper-pagination'
 }); 
   
	
 var strUsername = localStorage.getItem("LogonUsername");
	 var strPass = localStorage.getItem("LogonPass");
	 var strToken = localStorage.getItem("LogonToken");
	  var strLokasiInfo = localStorage.getItem("LogonLOCATION_INFO");
	 
	console.log(strUsername);
$$(".nextbutton").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	if (strUsername!=null){ 
		  mainView.router.loadPage('1-homepage.html');  
		  
		 }else{
			mainView.router.loadPage('1-index-login.html'); 
			 
		 }
		 
	   myApp.hidePreloader();
		 });
 
});

 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
			 var dtlokasiinfo= []; 
$.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/lokasi_info", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		console.log(data);
		console.log(data.dataAPIKEY);
		var dataapikeyloc=data.dataAPIKEY;
			var x; 
			
		 for (x = 0; x < dataapikeyloc.length; x++) { 
              
			   console.log(dataapikeyloc[x].FITUR_KEYVALUE);
			     
			   localStorage.setItem('LogonLOCATION_INFO', dataapikeyloc[x].FITUR_KEYVALUE);
			  var  strLokasiInfo=dataapikeyloc[x].FITUR_KEYVALUE;
			  dtlokasiinfo.push(strLokasiInfo)
			  
			  
		 } 
		 
	 var dtinfo= [];
	 var varinfo="";
  $.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/info", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		  
		 
		var datainfo=data.dataINFO;
			var x; 
			 
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
		  for (x = 0; x < datainfo.length; x++) {  
              	  
			 var varinfo =  '<div  style="padding: 5px;" class="swiper-slide"><img src="'+useWeb+'/'+dtlokasiinfo+datainfo[x].UrlImage+'" width="100%"></div>';
			  
				dtinfo.push(varinfo);
				 
		 } 
			    
		 myApp.hidePreloader();
		   console.log(dtinfo.join(""));  
	document.getElementById("data-info").innerHTML = dtinfo.join("");	 
		   
		
		 myApp.hidePreloader();

     },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    } });	
		 
		 myApp.hidePreloader();
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });		
	},1000);
		
  
 
}); 