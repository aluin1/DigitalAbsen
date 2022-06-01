 
myApp.onPageInit("1-quiz-3", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	

 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
 var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	 
var strZONE= localStorage.getItem("Logon-ZONE");	 



var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen3").innerHTML = formatted; 
 
 
 
 var doktersave = [];
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
			
			 // var dataDokter='<tr><td>'+dtdoktor[x].FieldZone+'</td><td>'+dtdoktor[x].NamaDokter+'</td><td> '+dtdoktor[x].NomorTelepon+'</td><td><center><a href="tel:'+dtdoktor[x].NomorTelepon+'" class="external"><span  ><center><i style="color: #047edf;font-size: 30px;" class="mdi mdi-cellphone-iphone"  ></i></a></center></td><tr>';	
			   var dataDokter='<tr><td>'+dtdoktor[x].FieldZone+'</td><td>'+dtdoktor[x].NamaDokter+'</td><td> '+dtdoktor[x].NomorTelepon+'</td><tr>';	
			  
		
			 doktersave.push(dataDokter);
			  
		
			 }
		  	 

	 
document.getElementById("data-dokter").innerHTML = doktersave.join(" ");

		myApp.hidePreloader();
} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   
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
			  
			 
			
			 var IsolasiMandiri= dttm[i].IsolasiMandiri;
			 if (dttm[i].KonsultasiDokter=='' || dttm[i].KonsultasiDokter==null){
				 var KonsultasiDokter= '';
			 }else{
				 var KonsultasiDokter= dttm[i].KonsultasiDokter;
			 }
			 
					
					} 
		   
		   
		  document.getElementById("statkonsul").value = KonsultasiDokter; 
	var statkonsul = KonsultasiDokter;
	
	
		myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

 

$$(".btn3").on("click", function(){
	
var estatkonsul= document.getElementById("statkonsul");
var valstatkonsul = estatkonsul.value;
console.log(valstatkonsul);
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
			
			if (valstatkonsul==''){
				
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Pilih status konsultasi</p> ',
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
     url: ""+useWeb+"/Attendance/add_kuis3",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "KonsultasiDokter" : "'+valstatkonsul+'"}' ,
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
	
		mainView.router.loadPage('1-quiz-4.html'); 
		myApp.hidePreloader();
		 });
		 }

  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		myApp.hidePreloader();
		   
}); 
});  