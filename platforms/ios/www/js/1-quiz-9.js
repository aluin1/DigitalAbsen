 
myApp.onPageInit("1-quiz-9", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	

var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	 

var lat=localStorage.getItem("LogonLat");	
var lang=localStorage.getItem("LogonLong");	
var strZONE= localStorage.getItem("Logon-ZONE");	 
 
 
 var strEmail = localStorage.getItem("Logon-EMPLOYEE_EMAIL");
 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen9").innerHTML = formatted; 
 /*
 var doktersave = [];
 var doktersaveTable = [];
 $.ajax({
     url: ""+useWeb+"/Attendance/datadoktor",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Data Doktor</p>");
   
		 console.log(data.data);
		var dtdoktor=data.data;
		
		  for (x = 0; x < dtdoktor.length; x++) {
		
			   var dataDokterTable='<tr><td style=font-size:12px>'+dtdoktor[x].NamaDokter+'</td><td style=font-size:12px>'+dtdoktor[x].Email+'</td><td style=font-size:12px> '+dtdoktor[x].NomorTelepon+'</td><tr>';	
			    var dataDokter=' '+dtdoktor[x].Email+'';	
			  
		
			 doktersave.push(dataDokter);
			 doktersaveTable.push(dataDokterTable);
			  
			 }
		  	 
		console.log(doktersaveTable.join(" "));
	 //localStorage.setItem('email-dokter', doktersave);
	// localStorage.setItem('email-dokter-table', doktersaveTable.join(" "));

	  

		myApp.hidePreloader();
} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   

*/				   
$.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
		 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			 
			 if (dttm[i].KondisiDalamBekerja=='' || dttm[i].KondisiDalamBekerja==null){
				 var KondisiDalamBekerja= '';
			 }else{
				 var KondisiDalamBekerja= dttm[i].KondisiDalamBekerja;
			 }
			 
			  
			     
			 
					
					} 
		   
		   
		  document.getElementById("txtKondisikerja").value = KondisiDalamBekerja.replace(/<br[^>]*>/g, "\n");   
	
 myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 


$$(".btn9").on("click", function(){
	

var strKondisikerja = $$(".txtKondisikerja").val().replace(/(?:\r\n|\r|\n)/g, '<br>');	
 

 
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 if (strKondisikerja  == '' ) {
			 
	
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">jelaskan Kondisi Bekerja</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();

}
 else {
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	 
	 $.ajax({
     url: ""+useWeb+"/Attendance/add_kuis9",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "KondisiDalamBekerja" : "'+strKondisikerja+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	   
				     
			console.log(strToken); 	
 			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {



				   
				   

 $.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
	 
		
		var datatxt6= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			// var emailDokter=localStorage.getItem("email-dokter");
			// var emailDokterTable=localStorage.getItem("email-dokter-table");
			
			 var KeluhanKesehatanPekerja= dttm[i].KeluhanKesehatanPekerja;			 
			 var KondisiSaatIni= dttm[i].KondisiSaatIni;		
			 
			 var IsolasiMandiri= dttm[i].IsolasiMandiri;	 
			 var KeluhanPekerja= dttm[i].KeluhanPekerja;
			 var Id= dttm[i].Id;
			 
			 if (KeluhanKesehatanPekerja=='Ya' && IsolasiMandiri=='Ya'){
				 console.log("Status Keluhan Kesehatan - "+KeluhanKesehatanPekerja+" - jadi kirim Email");	
				 console.log("Status Isolasi Mandiri - "+IsolasiMandiri+" - jadi kirim Email"); 
					
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'" , "keluhan" : "'+KeluhanPekerja+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   
				   
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemailPersonel",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'",  "keluhan" : "'+KeluhanPekerja+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
	
	}else  if (KeluhanKesehatanPekerja=='Ya' && IsolasiMandiri=='Tidak'){
				 console.log("Status Keluhan Kesehatan - "+KeluhanKesehatanPekerja+" - jadi kirim Email");	
				 console.log("Status Isolasi Mandiri - "+IsolasiMandiri+" - jadi kirim Email"); 
					
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'" , "keluhan" : "'+KondisiSaatIni+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   
		   
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemailPersonel",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'", "keluhan" : "'+KondisiSaatIni+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
	
	}else if (KeluhanKesehatanPekerja=='Tidak' && IsolasiMandiri=='Ya'){
				 console.log("Status Keluhan Kesehatan - "+KeluhanKesehatanPekerja+" - jadi kirim Email");	
				 console.log("Status Isolasi Mandiri - "+IsolasiMandiri+" - jadi kirim Email"); 
					
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'" , "keluhan" : "'+KeluhanPekerja+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });


   
 $.ajax({
     url: ""+useWeb+"/Attendance/sendemailPersonel",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "zone" : "'+strZONE+'", "keluhan" : "'+KeluhanPekerja+'"}' , 
    contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
    success: function (data) {		 
		console.log(data);  		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });

				   
	}else{
				
				 console.log("Status Keluhan Kesehatan - "+KeluhanKesehatanPekerja+" - jadi tidak kirim Email");	
				 console.log("Status Isolasi Mandiri - "+IsolasiMandiri+" - jadi tidak kirim Email"); 
				
			}
		   } 

		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });



		
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
	 
	  if (kondisi  == 'DALAMKANTORFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		 /* {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , */

		  {
			text: '<div style="color:#047edf;font-size:15px;">Lanjukan</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('12-fitunfit.html?condition=come');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}



else if (kondisi  == 'LUARKANTORFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  /* {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , */
		  {
			text: '<div style="color:#047edf;font-size:15px;">Lanjukan</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-luar-kantor.html?condition=come');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}

 



else if (kondisi  == 'LUARKANTORNONFIT' ){
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		   /* {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , */
		  {
			text: '<div style="color:#047edf;font-size:15px;">Lanjukan</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('7-absen-luar-kantornon.html?condition=come');
			
				}
		  }  
		]
	});
	
 myApp.hidePreloader();
	
	
}



else if (kondisi  == 'SUDAHABSEN' ){
	
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
  $.ajax({ 
        type: 'GET', 
        url: ""+useWeb+"/Attendance/fitur_url_aktif", 
        data: { get_param: 'value' }, 
        success: function (data) { 
		
		 
		var dataurl=data.dataURL;
			var x; 
			 
		 for (x = 0; x < dataurl.length; x++) { 
             
			 console.log(new Date(dataurl[x].GET_FULL_DATE));
			 console.log(dataurl[x].FITUR_ACTIVE);
			 var varurl=dataurl[x].FITUR_ACTIVE; 
			 var valurl=dataurl[x].FITUR_KEYVALUE;
			 if(varurl==''){
				 
 myApp.hidePreloader();
				  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 mainView.router.loadPage('1-homepage.html');
				 }
		  }  
		]
	}); 
				 
				 
				 
			 }else{
				 
 myApp.hidePreloader();
				  myApp.modal({
		
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Silahkan melanjutkan pengisian absensi melalui link <br><span style="font-size:12px"> '+dataurl[x].FITUR_KEYVALUE+'</span></p> ',
		buttons: [
		
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 
				 window.open(valurl, '_system');
				mainView.router.loadPage('1-homepage.html');
			// inAppBrowserRef = cordova.InAppBrowser.open('https://apps.pertamina.com/MyAttendance', '_blank', 'location=yes');
			 //inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
 
				}
		  }  
		]
	}); 
				 
			 } 
		 }
		 
		 
	
        },
                    failure: function (errMsg) {
                        alert("ERRO");
						   
                    }
    });		
 
 myApp.hidePreloader();
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
	
}}
 		
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
				 });   
  
	    
	/* myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			 onClick: function () { 
				mainView.router.loadPage('1-homepage.html'); 
			
				}
		  }  
		]
	});
	
	 	 
	 myApp.hidePreloader(); */
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
	 
		myApp.hidePreloader();
		
			 
 });
}  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		 
   
 myApp.hidePreloader();
}); 
});  