 
 
///load  
myApp.onPageInit("6-profil-user", function(page){
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		

	
$$(".btnedit").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
			mainView.router.loadPage('6-edit-data-kesehatan.html'); 
			 
		 
		 
	   myApp.hidePreloader();
		 });
 
});

  
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
var COSTCENTERNAME = localStorage.getItem("Logon-COSTCENTERNAME"); 
  
   
	

 var vaksinsave = [];
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
		
		  for (i = 0; i < dtvaksin.length; i++) {
			  
			  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(dtvaksin[i].VaccineDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();

			
			  var dataVaksin='<tr><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td >'+dtvaksin[i].VaccineName+'</td><td colspan="2"><center>'+formatted_dateVaksin+'</center></td><tr>';	
			   if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='<tr><td colspan="3"><center style="color:red"><b>Data Vaksin Belum dilengkapi</b></center></td></tr>';
			   }
				
			  
			 vaksinsave.push(dataVaksin);
			  
		}
		  	 

	 
document.getElementById("data-vaksin1").innerHTML = vaksinsave.join(" ");
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   
				   
				   

 var vaksinsavekel = [];
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
		
		  for (i = 0; i < dtvaksin.length; i++) {
			  
			  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(dtvaksin[i].VaccineDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();

			
			  var dataVaksin='<tr><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td>'+dtvaksin[i].Name+'</td> <td>'+dtvaksin[i].VaccineName+'</td><td><center>'+formatted_dateVaksin+'</center></td><tr>';	
			   if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='<tr><td colspan="3"><center style="color:red"><b>Data Vaksin Belum dilengkapi</b></center></td></tr>';
			   }
				
			  
			 vaksinsavekel.push(dataVaksin);
			  
		}
		  	 

	 
document.getElementById("data-vaksin2").innerHTML = vaksinsavekel.join(" ");
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
	
	
				   
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
			 
			 var Phone= dttm[x].PhoneNumber;
			 var IsVaccine= dttm[x].IsVaccine;
			 var IsCovid= dttm[x].IsCovid;
			 var BloodType= dttm[x].BloodType;
			 var Rhesus= dttm[x].Rhesus;
			 
			 if (Phone==''){
				 Phone="<span style='color:red;'>Belum dilengkapi</span>";
			 }
			 
			 if (IsVaccine==''){
				 IsVaccine="<span style='color:red;'>Belum dilengkapi</span>";
			 }
			 if (IsCovid==''){
				 IsCovid="<span style='color:red;'>Belum dilengkapi</span>";
			 }
			 if (BloodType==''){
				 BloodType="<span style='color:red;'>Belum dilengkapi</span>";
			 }
			 if (Rhesus==''){
				 Rhesus="<span style='color:red;'>Belum dilengkapi</span>";
			 }
		  document.getElementById("VastatVaksin").innerHTML = IsVaccine;
		  document.getElementById("Vaphone").innerHTML= Phone;
		  document.getElementById("VastatCovid").innerHTML= IsCovid;
		  document.getElementById("VagolDar").innerHTML= BloodType;
		  document.getElementById("Varhesus").innerHTML= Rhesus;
		  
		  
$$(".btneditphone").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
			mainView.router.loadPage('6-edit-data-kesehatan.html'); 
			 
		 
		 
	   myApp.hidePreloader();
		 });
 
});
			 }
	
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
	 
		
		 
		  
	 var dataprofil= []; 
	 var dataatasan= []; 
	 var datatambahan= []; 
						   
							 
	var dataUserp = '<div class="card">'+
					'<div class="card-body">'+
					'<table class="table ">'+
					'<tbody>'+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Username: </td>'+
					'<td colspan="2">'+strUsername+'</td> </tr> '+
                    '<tr><td class="py-1" style="color: #0d83e1;">  Nopek:  </td>'+
                    '<td colspan="2">'+strNip+'</td></tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;">  Nama Lengkap:</td>'+
                    '<td colspan="2">  '+strEMPLOYEE_NAMA+' </td>  </tr> '+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Email:    </td>'+
                    '<td colspan="2">  '+strEMPLOYEE_EMAIL+' </td>  </tr> '+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Nomor Hp:    </td>'+
                    '<td><span id="Vaphone"> </span></td><td><span><i style="font-size:30px;color:#047edf" class="btneditphone mdi mdi-pencil-box"></i> </span></td>  </tr> '+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Title:    </td>'+
                    '<td colspan="2">  '+strEMPLOYEE_POSTEXT+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Pos Id:    </td>'+
                    //'<td colspan="2">'+strEMPLOYEE_POSIDI+' </td>  </tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;"> Cost Center:    </td>'+
                    '<td colspan="2">'+strEMPLOYEE_CC+' </td>  </tr> '+ 
					'</tbody>'+
					'<tr><td class="py-1" style="color: #0d83e1;"> Cost Center Name:    </td>'+
                    '<td colspan="2">'+COSTCENTERNAME+' </td>  </tr> '+ 
					'</tbody>'+
					'</table>'+
					'</div>'+
					'</div>';

			 			 
	var dataAtasan =  '<div class="card">'+
					'<div class="card-body table-responsive" >'+
					'<table class="table ">'+
					'<tbody>'+
					'<tr> <td class="py-1" style="color: #0d83e1;"> Username Atasan:</td>'+
                    '<td>'+strATASAN_USERNAME+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Nopek Atasan:</td>'+
                    //'<td>'+strATASAN_NOPEK+' </td>  </tr> '+
					'<tr><td class="py-1" style="color: #0d83e1;"> Email Atasan:</td>'+
                    '<td>'+strATASAN_EMAIL+' </td>  </tr> '+
					//'<tr><td class="py-1" style="color: #0d83e1;"> Pos Id Atasan:</td>'+
                    //'<td>  '+strATASAN_POSIDI+' </td>  </tr> '+
					'</tbody>'+
					'</table>'+
					'</div>'+
					'</div>';
			 
		var dataTambahan =  
							'<table class="table ">'+
							'<tr><td colspan="4">Apakah Anda sudah Vaksin?'+
							'<br><br><b  id="VastatVaksin"></b></td></tr>'+
							
							
							'<tr><td colspan="4">Data Vaksin User</td></tr>'+
							'<tr> <td style="background-color: #757575; color: #fff; font-size: 12px;"><b><center>Vaksin ke</center></b> </td><td style="background-color: #757575;font-size: 12px; color: #fff;"><b><center>Nama Vaksin</center></b> </td><td  colspan="2" style="background-color: #757575;font-size: 12px; color: #fff;"><b><center>Tanggal Vaksin</center></b></td></tr>'+
							'<tbody id="data-vaksin1"></tbody>'+
							
							
							'<tr><td colspan="4">Data Vaksin Keluarga</td></tr>'+
							'<tr> <td style="background-color: #757575; color: #fff;font-size: 12px;"><b><center>Vaksin ke</center></b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b><center>Nama</center></b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b><center>Nama Vaksin</center></b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b><center>Tanggal Vaksin</center></b></td></tr>'+
							'<tbody id="data-vaksin2"></tbody>'+
		
		'<tr><td colspan="4">Apakah Anda Pernah terpapar Covid-19?'+ 
		'<br><br><b id="VastatCovid"></b></td></tr>'+
		'<tr><td colspan="4">Apa Golongan Darah Anda? '+
		'<br><br><b id="VagolDar"></td></tr>'+
		'<tr><td colspan="4">Apa Rhesus Anda? '+
		'<br><br><b id="Varhesus"></b></td></tr></table>'
				dataprofil.push(dataUserp);
				dataatasan.push(dataAtasan);
				datatambahan.push(dataTambahan);
 				
 
	document.getElementById("prof-user").innerHTML = dataprofil.join(" ");	
	document.getElementById("prof-atasan").innerHTML = dataatasan.join(" ");	
	document.getElementById("data-tambahan").innerHTML = datatambahan.join(" ");				
				  							 							 
			 
   
 myApp.hidePreloader();
}); 
}); 