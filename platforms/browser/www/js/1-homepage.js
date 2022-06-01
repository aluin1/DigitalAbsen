 
 		    
///load service Page  
myApp.onPageInit("1-homepage", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 

 


	$$(".quizbtn").on("click", function(){
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		mainView.router.loadPage('1-quiz-1.html'); 
		myApp.hidePreloader();
		 });
		 });

		 
		 
		 
		 
		 
var dt = new Date(); 
console.log(dt);  
  



var strToken = localStorage.getItem("LogonToken");

var strUsername = localStorage.getItem("LogonUsername");
var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");
var strEMPLOYEE_POSIDI = localStorage.getItem("Logon-EMPLOYEE_POSIDI");
var strEMPLOYEE_POSTEXT = localStorage.getItem("Logon-EMPLOYEE_POSTEXT");
var strEMPLOYEE_CC = localStorage.getItem("Logon-EMPLOYEE_CC");
var strEMPLOYEE_LAYER = localStorage.getItem("Logon-EMPLOYEE_LAYER");
var strEMPLOYEESUBGROUP = localStorage.getItem("Logon-EMPLOYEESUBGROUP");
var strEMPLOYEE_EMAIL = localStorage.getItem("Logon-EMPLOYEE_EMAIL");
var strGENDER = localStorage.getItem("Logon-GENDER");
var strISCHIEF = localStorage.getItem("Logon-ISCHIEF");
var strATASAN_USERNAME = localStorage.getItem("Logon-ATASAN_USERNAME");
var strATASAN_NOPEK = localStorage.getItem("Logon-ATASAN_NOPEK");
var strATASAN_POSIDI = localStorage.getItem("Logon-ATASAN_POSIDI");
var strATASAN_EMAIL = localStorage.getItem("Logon-ATASAN_EMAIL");
var strATASAN_LAYER = localStorage.getItem("Logon-ATASAN_LAYER");
var strATASAN_EMPLOYEESUBGROUP = localStorage.getItem("Logon-ATASAN_EMPLOYEESUBGROUP"); 


	  
		 localStorage.setItem('phonenumber', '');
 localStorage.setItem('statvaksin', '');
 localStorage.setItem('statcovid', '');
 localStorage.setItem('goldarah', '');
 localStorage.setItem('rhesus', '');
 
 
 
 localStorage.setItem('strKondisi', '');
 localStorage.setItem('valquiz7', '');
 localStorage.setItem('valquiz8', '');
 localStorage.setItem('valtxt9', '');
 localStorage.setItem('Logon-valsisker', '');
 localStorage.setItem('Logon-vallokker', '');

	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
 var vaksinsave = [];
 var vaksinsavekel = [];
 var vaksinnotif = [];
 $.ajax({
     url: ""+useWeb+"/Attendance/datavaksin_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		//console.log(data.data);
		var dtvaksin=data.data;
		console.log(dtvaksin.length);
		
		if (dtvaksin.length <=1){
			var vaksinicon=' <a href="#"   class="link icon-only notification-default ">'+
						'<i class="mdi"><img src="images/user-notif.png" style="width:25px"></i>'+
						'</a> ';
		}else {
			var vaksinicon='';
			
		}
		vaksinnotif.push(vaksinicon);
document.getElementById("vaksinnotif").innerHTML = vaksinnotif;

$$('.notification-default').on('click', function () {
  /*  myApp.addNotification({
        title: 'Informasi',
       message: '<span style="text-transform: uppercase;padding: 10px;">Data Vaksin Anda belum lengkap,</span><br> <span style="text-transform: uppercase;padding: 10px;">Klik Tombol dibawah ini untuk melengkapi</span><br> <a href="6-edit-data-kesehatan.html" class="close-notification" style="opacity:1!important" > <button type="button" name="submit" class="btn btn-gradient-primary mr-2 " style="margin-top:10px!important" >Lengkapi</button></a>'
    });
	*/
	
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Data Vaksin Anda belum lengkap. Silahkan lengkapi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () { 
				mainView.router.loadPage('6-edit-data-kesehatan.html'); 
			
				}
		  }  
		]
	});
 myApp.hidePreloader();
 
 
});
		
		  for (i = 0; i < dtvaksin.length; i++) {
			
			  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(dtvaksin[i].VaccineDate.replace(/\s/, 'T'));
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


			  var dataVaksin='<tr><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td>'+dtvaksin[i].VaccineName+'</td><td colspan="2"><center>'+formatted_dateVaksin+'</center></td><tr>';	
			   if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='<tr><td colspan="3"><center style="color:red"><b>Data Vaksin Belum dilengkapi</b></center></td></tr>';
			  
			  }
			  
				
			  var VaccineNo1 = dtvaksin[i].VaccineNo;
			 vaksinsave.push(dataVaksin);
			 
		
			 }  

	 
document.getElementById("data-vaksin1").innerHTML = vaksinsave.join(" ");
		   
		    
 myApp.hidePreloader();  
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   

 $.ajax({
     url: ""+useWeb+"/Attendance/datavaksinkeluarga_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		//console.log(data.data);
		var dtvaksin=data.data;
		console.log(dtvaksin.length);
		 
 
		
		  for (i = 0; i < dtvaksin.length; i++) {
			
			  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(dtvaksin[i].VaccineDate.replace(/\s/, 'T'));
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


			  var dataVaksin='<tr><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td>'+dtvaksin[i].Name+'</td><td>'+dtvaksin[i].VaccineName+'</td><td ><center>'+formatted_dateVaksin+'</center></td><tr>';	
			   if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='<tr><td colspan="3"><center style="color:red"><b>Data Vaksin Belum dilengkapi</b></center></td></tr>';
			  
			  }
			  
				
			  var VaccineNo1 = dtvaksin[i].VaccineNo;
			 vaksinsavekel.push(dataVaksin);
			 
		
			 }  

	 
document.getElementById("data-vaksin2").innerHTML = vaksinsavekel.join(" ");
		   
		    
 myApp.hidePreloader();  
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   
      
	 var datauserq= []; 
						   
	var dataUser = ' <table width="80%" border="0" style="margin:20px;">'+
  '<tr >'+
    '<td width="25%" rowspan="3"><i style="font-size:40px;color:#047edf" class="mdi mdi-account-circle"></i></td>'+
    '<td>'+strEMPLOYEE_NAMA+'</td>'+
  '</tr>'+ 
  '<tr>'+
   ' <td style="color: #0a82e0 !important;  font-size: 13px;">'+strEMPLOYEE_POSTEXT+'</td>'+
  '</tr>'+
'</table>';
				datauserq.push(dataUser);
 				
 
	document.getElementById("data-user").innerHTML = datauserq.join(" ");	
document.getElementById("full-name-user-homepage").innerHTML = strEMPLOYEE_NAMA;	
				  							 							 
					 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
  $.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/fiturfit", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		 
		var datafit=data.dataFIT;
			var x; 
			
			 var dtfit= []; 
		 for (x = 0; x < datafit.length; x++) { 
             
			 console.log(new Date(datafit[x].GET_FULL_DATE));
			   localStorage.setItem('LogonGET_FULL_DATE', datafit[x].GET_FULL_DATE);
			 
			 
			   console.log(datafit[x].FITUR_ACTIVE);
			   
			    var varfit=datafit[x].FITUR_ACTIVE; 
				dtfit.push(varfit);
		 }
		 
		  if (dtfit==""){
			  
			  	 var datamenu= []; 
						   
	var dtmenu =  	' <a href="#" class="absen-masuk   btn btn-gradient-primary btn-sm" style="margin-bottom: 16px;">'+
					'  <i class="mdi  mdi-login-variant" style="font-size: 20px;"></i> Absen Masuk'+
					'  </a>'+
	  
					' <a href="#" class="absen-keluar   btn btn-gradient-primary btn-sm">'+
					'  <i class="mdi  mdi-logout-variant" style="font-size: 20px;"></i> Absen Keluar'+
					' </a>'+

					' <a href="#" class="btn-approv   btn btn-gradient-primary btn-sm">'+
					'   <i class="mdi mdi-checkbox-marked-outline" style="font-size: 20px;"></i> Status Approval'+
					' </a>';
				datamenu.push(dtmenu);
			  
		   
	document.getElementById("data-menu").innerHTML = datamenu.join(" ");
			  
		  }
		  else{
			   var datamenu= []; 
						   
	var dtmenu =  	' <a href="#" class="absen-masuk   btn btn-gradient-primary btn-sm" style="margin-bottom: 16px;">'+
					'  <i class="mdi  mdi-login-variant" style="font-size: 20px;"></i> Absen Masuk'+
					'  </a>'+
	  
					' <a href="#" class="absen-keluar   btn btn-gradient-primary btn-sm">'+
					'  <i class="mdi  mdi-logout-variant" style="font-size: 20px;"></i> Absen Keluar'+
					' </a>'+
	  
					' <a href="#" class="absen-kondisi btn btn-gradient-primary btn-sm">'+
					'   <i class="mdi mdi-heart-pulse" style="font-size: 20px;"></i> Cek Kondisi'+
					' </a>'+
	 
					' <a href="#" class="btn-approv   btn btn-gradient-primary btn-sm">'+
					'   <i class="mdi mdi-checkbox-marked-outline" style="font-size: 20px;"></i> Status Approval'+
					' </a>';
					
				datamenu.push(dtmenu);
			  
	document.getElementById("data-menu").innerHTML = datamenu.join(" ");
			 }
		 myApp.hidePreloader();

    // onSuccess Callback
    //   This method accepts a `Position` object, which contains
    //   the current GPS coordinates
    //
	
	
    function onSuccess(position) {
         
            // Lokasi di luar Green Area
			  //var lat = '-6.116838'; 
              //var lang = '106.540249'; 
			 
			// Lokasi di dalam Area 
			        	// var lat = '-6.233469'; 
                  	//   var lang = '106.823299';  
             
             
             // Lokasi Sesuai GPS coordinates Mobile Device
			    var lat = position.coords.latitude;
				var lang = position.coords.longitude;
			
			
	 localStorage.setItem('LogonLat', lat); 
	 localStorage.setItem('LogonLong', lang);
			console.log(lat);
			console.log(lang);
			
	 

		  //Google Maps
		  
             var myLatlng = new google.maps.LatLng(lat, lang);
             var mapOptions = {
               zoom: 17,
               center: myLatlng, 
          animation: google.maps.Animation.DROP	
            }
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
             var marker = new google.maps.Marker({
                 position: myLatlng,
                map: map,
                icon: 'icon/marker.png',
                title: strEMPLOYEE_NAMA
             });
	   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {	 
	  $.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/dtlocationmobile", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		console.log(data);
		
		var dataloc=data.dataLocation;
		console.log(dataloc);
		 for (i = 0; i < dataloc.length; i++) { 
             
			  //console.log(parseFloat(dataloc[2].LongLat1.split(" ")[0]));
			   
			    new google.maps.Polygon({
    path: [{lat: parseFloat(dataloc[i].LongLat1.split(" ")[0]), lng: parseFloat(dataloc[i].LongLat1.split(" ")[1])},
	{lat: parseFloat(dataloc[i].LongLat2.split(" ")[0]), lng: parseFloat(dataloc[i].LongLat2.split(" ")[1])},
	{lat: parseFloat(dataloc[i].LongLat3.split(" ")[0]), lng: parseFloat(dataloc[i].LongLat3.split(" ")[1])}, 
	{lat: parseFloat(dataloc[i].LongLat4.split(" ")[0]), lng: parseFloat(dataloc[i].LongLat4.split(" ")[1])}, 
	{lat: parseFloat(dataloc[i].LongLat5.split(" ")[0]), lng: parseFloat(dataloc[i].LongLat5.split(" ")[1])}], 
    strokeColor: '#047edf', 
    strokeWidth: 2,
	 fillColor  : '#047edf57'
  }).setMap(map);
			 
		 }
		 myApp.hidePreloader();
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });		
 });
 
		
$.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/lokasi_upload", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		console.log(data);
		console.log(data.dataAPIKEY);
		var dataapikeyloc=data.dataAPIKEY;
			var x; 
			
			 var dataapi= []; 
		 for (x = 0; x < dataapikeyloc.length; x++) { 
             
			   console.log(dataapikeyloc[x].FITUR_KEYVALUE);
			     
			   localStorage.setItem('LogonLOCATION_UPLOAD', dataapikeyloc[x].FITUR_KEYVALUE);
		 ;	
		 }
		 
		  
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });	
		 	

var DataTambahan=[];   
 $.ajax({
     url: ""+useWeb+"/Attendance/dataTambahan_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		console.log(data.data);
		var dttm=data.data;
			 console.log(dttm.length);
		 for (x = 0; x < dttm.length; x++) {
			 
			 console.log(dttm[x].PhoneNumber);
			 
			 var xPhone= dttm[x].PhoneNumber;
			 DataTambahan.push(dttm[x].PhoneNumber);
			 }


	console.log(DataTambahan);
	localStorage.setItem('DataTambahan',  DataTambahan);

			 } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 	 
  

var IdDataKemarin=[];   
$.ajax({
     url: ""+useWeb+"/Attendance/cekbelumabsen",
    type: "POST",
	 data:' {"nopek" : "'+strNip+'", "username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		 
		
		var dtkemarin=data.data;
		 for (i = 0; i < dtkemarin.length; i++) {
			 console.log(dtkemarin[i].Id);
			 IdDataKemarin.push(dtkemarin[i].Id);
		 }

	console.log(IdDataKemarin);
	localStorage.setItem('IdDataKemarin', IdDataKemarin);
		 },
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
		 }); 
		 

var KelengkapanData=[];   
$.ajax({
     url: ""+useWeb+"/Attendance/cekkuesioner",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		 
		
		var dtlengkap=data.data;
		 for (i = 0; i < dtlengkap.length; i++) {
			 console.log(dtlengkap[i].Id);
			 KelengkapanData.push(dtlengkap[i].Id);
		 } 


	console.log(KelengkapanData);
	localStorage.setItem('KelengkapanData', KelengkapanData);
		 },
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
		 }); 	
	
		 
	 
	
		 myApp.hidePreloader();	
		 
$$('.absen-masuk').on('click', function () {
	
	
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   		 
	
	
	var CekTambahan=localStorage.getItem("DataTambahan"); 
	var IdAbsenKemarin=localStorage.getItem("IdDataKemarin"); 
	var DataLengkap=localStorage.getItem("KelengkapanData"); 
	
	console.log(CekTambahan);
	
		 myApp.hidePreloader();	
			     
			console.log(strToken); 	
 			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {	
$.ajax({
     url: ""+useWeb+"/Attendance/attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "come", "note":"ABSEN STANDAR"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		var kondisi=data.kondisi;
		 console.log(kondisi);
		var msgabsen=data.message;
		var dstatus=data.status;
 if (dstatus==false &   msgabsen == "Token is Expired.")
 {
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{
	  
  if (kondisi  == 'SUDAHABSEN' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
} else{
	
			 
	if (CekTambahan==''){
		myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Belum Melengkapi Data Tambahan. Silahkan lengkapi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () { 
				mainView.router.loadPage('6-edit-data-kesehatan.html'); 
			
				}
		  }  
		]
	});
 myApp.hidePreloader();
		
	}
	else{
	if (IdAbsenKemarin==''){
		myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Terdaftar Tidak Melakukan Pengisian Absensi Pada 1 (satu) Hari Sebelumnya.<br><span style="font-size:12px">Silahkan isi kuesioner berikut</span></p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () { 
				mainView.router.loadPage('1-quiz-1.html'); 
			
				}
		  }  
		]
	});
 myApp.hidePreloader();
	} 
	else   {
		myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	mainView.router.loadPage('1-quiz-2.html'); 
 myApp.hidePreloader();
	} 
	
	 
	 
	}
	
 myApp.hidePreloader();
	
}
 

}
 		
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
				 });   
 
	
	

});


$$('.absen-keluar').on('click', function () {

console.log(strToken); 	
 			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
 				
$.ajax({
     url: ""+useWeb+"/Attendance/attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "return", "note":"Absen Pulang"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		var kondisi=data.kondisi;
		var msgabsen=data.message;
		var dstatus=data.status;
 if (dstatus==false & msgabsen == "Token is Expired.")
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	});

 myApp.hidePreloader();	
 		
 }
else{
	
  if (kondisi  == 'SUDAHABSEN' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}

else if (kondisi  == 'LUARKANTOR' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-luar-kantor.html?condition=return');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}

else if (kondisi  == 'LUARPULANGNONFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-luar-pulang-kantornon.html?condition=return');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}

else if (kondisi  == 'LUARPULANGFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-luar-pulang-kantor.html?condition=return');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}

else if (kondisi  == 'DALAMPULANGFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-dalam-pulang-kantor.html?condition=return');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}


else{
	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true 
		  }  
		]
	});
	
 myApp.hidePreloader();
	
}
	
	
} 
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })

});

});

 
$$('.btn-approv').on('click', function () {
	
				mainView.router.loadPage('5-history-approval.html');
});

 

$$('.absen-kondisi').on('click', function () {

console.log(strToken); 	
 			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
 				
$.ajax({
     url: ""+useWeb+"/Attendance/attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "cek_kondisi", "note":"CEKKONDISI"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		var kondisi=data.kondisi;
		var msgabsen=data.message;
		var dstatus=data.status;
 if (dstatus==false & msgabsen == "Token is Expired.")
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	});

 myApp.hidePreloader();	
 		
 }
else{ 
 if (kondisi  == 'edit_cek_kondisi' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		   {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true ,
			 onClick: function () {
				 
				mainView.router.loadPage('12-edit-fitunfit.html');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}
 else if (kondisi  == 'cek_kondisi' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		    {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true  
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}
else{
	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true 
		  }  
		]
	});
	
 myApp.hidePreloader();
	
}
	
	
} 
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })

});

});

 

	 
			
			 }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
  //var watchID = navigator.geolocation.watchPosition(onSuccess, onError); 
	     navigator.geolocation.getCurrentPosition(onSuccess, onError);
	  
    
	
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });		
 
    });
 
	 
$$('.his-absen').on('click', function () {
	
				mainView.router.loadPage('2-history-absen.html');
});

$$('.his-gps').on('click', function () {
	
				mainView.router.loadPage('3-history-gps.html');
});


$$('.btn-notif').on('click', function () {
	
			mainView.router.loadPage('4-history-notifikasi.html');
});


 
 



  
 myApp.hidePreloader();
}); 