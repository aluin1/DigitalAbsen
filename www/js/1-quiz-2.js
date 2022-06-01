 function showq2_1(){
  document.getElementById('divq3').style.display ='none';
}
function showq2_2(){
  document.getElementById('divq3').style.display = 'block';
}
    
myApp.onPageInit("1-quiz-2", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
 var strNip = localStorage.getItem("LogonNip");
var lat=localStorage.getItem("LogonLat");	
var lang=localStorage.getItem("LogonLong");	

var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	
var quiz1 = $$(".txt1").val();



var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen").innerHTML = formatted; 
 
 
 $.ajax({
     url: ""+useWeb+"/Attendance/datalokasikerja",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
		 var dataLOK=[];
		console.log(data.data);
		var dttm=data.data; 
		var listLokasi='<select name="lokker" id="VLokasiKerja1" class=" form-control"  style=" height: calc(2rem + 2px);">'+
		'<option value="">Pilih:</option>';
		dataLOK.push(listLokasi);
		 for (i = 0; i < dttm.length; i++) { 
			   var listLokasi='<option value="'+dttm[i].Name_Location+'">'+dttm[i].Name_Location+'</option>';
					
					dataLOK.push(listLokasi);
					} 
					  
		   var listLokasi='</select>';
		   dataLOK.push(listLokasi);
		  document.getElementById("datalist_lok").innerHTML = dataLOK.join(" "); 
		  
 $.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			 if (dttm[i].SistemKerja=='' || dttm[i].SistemKerja==null){
				 var SistemKerja= '';
			 }else{
				 var SistemKerja= dttm[i].SistemKerja;
			 }
			 
			 if (dttm[i].LokasiKerja=='' || dttm[i].LokasiKerja==null){
				 var LokasiKerja= '';
			 }else{
				  var LokasiKerja= dttm[i].LokasiKerja;
			 }
			 
			    
			 
	localStorage.setItem('Logon-IdAbsen', dttm[i].Id); 
					
					 
					
					}	   
		   
		  document.getElementById("VSistemKerja").value = SistemKerja;
		  document.getElementById("VLokasiKerja1").value = LokasiKerja;
	
 myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

	
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

$$(".btn2").on("click", function(){
	 

var e = document.getElementById("VSistemKerja");
var valsisker = e.value;
console.log(valsisker);


var elok = document.getElementById("VLokasiKerja1");
var vallokker = elok.value;
console.log(vallokker);
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
			
			if (valsisker==''){
				
				myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Sistem kerja belum dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			
			else if (vallokker==''){
				
				myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Lokasi kerja belum dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();
			}
			
			
			else{
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   setTimeout(function () {
	 
	 		$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis2",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "sistemkerja" : "'+valsisker+'",  "lokasikerja" : "'+vallokker+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	    
	 
	 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
	
myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
  setTimeout(function () {
	 
	 		$.ajax({
     type: 'GET', 
        url: ""+useWeb+"/Attendance/fiturkuis", 
        data: { get_param: 'value' }, 
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	   
		var datakuis=data.dataKUIS;
			var x; 
			  
			 var dtkuis= []; 
		 for (x = 0; x < datakuis.length; x++) { 
		 console.log(datakuis[x].FITUR_ACTIVE);
		 var varkuis=datakuis[x].FITUR_ACTIVE; 
		 dtkuis.push(varkuis);
		 
		  if (dtkuis==""){
			  
	localStorage.setItem('Logon-valsisker', valsisker); 
	localStorage.setItem('Logon-vallokker', vallokker); 
	
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
			  
		  }else{
			  
	localStorage.setItem('Logon-valsisker', valsisker); 
	localStorage.setItem('Logon-vallokker', vallokker); 
	mainView.router.loadPage('1-quiz-2-1.html'); 
	 myApp.hidePreloader();
			  
		  }
		 
				
		 }
	    
	 
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
	
	  
		
		
		
		 });
	
	 
	
	
	
		myApp.hidePreloader();
		
		
		
		 });
		 }

   
		myApp.hidePreloader();
		 });
		 
		 

		 });

		
document.getElementById("nopek").innerHTML = strNip;	
document.getElementById("full-name-user").innerHTML = strEMPLOYEE_NAMA;	
     myApp.hidePreloader();
 
 });
});  