 
 
///load  
myApp.onPageInit("6-edit-data-kesehatan", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	
	 


	
 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
 
var strNopek = localStorage.getItem("LogonNip");
 
 var datavaksinsave = [];
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
		
		if (dtvaksin.length <=1){
			var vaksinicon=' <a href="#"   class="link icon-only notification-default ">'+
						'<i class="mdi"><img src="images/user-notif.png" style="width:25px"></i>'+
						'</a> ';
		}else {
			var vaksinicon='';
			
		}
		vaksinnotif.push(vaksinicon); 
		 
		  for (i = 0; i < dtvaksin.length; i++) {
			
			  
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(dtvaksin[i].VaccineDate);
let formatted_dateVaksinEdit =current_dateVaksin.getFullYear()+"-"+("0" + (current_dateVaksin.getMonth() + 1)).slice(-2)+"-"+    ("0" + current_dateVaksin.getDate()).slice(-2);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();
   var dataVaksin='<tr><td><span  ><center><label class="btn-edit-vaksin badge badge-success"  data-id="'+dtvaksin[i].Id+'"  data-ke="'+dtvaksin[i].VaccineNo+'"  data-vaknama="'+dtvaksin[i].VaccineName+'" data-vakdate="'+formatted_dateVaksinEdit+'"> Edit</label> <label class="btn-delete-vaksin badge badge-danger" data-id="'+dtvaksin[i].Id+'"   > Delete</label> </center></span></td><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td>'+dtvaksin[i].VaccineName+'</td><td>'+formatted_dateVaksin+'  </td><tr>';	
			 console.log(dtvaksin[i].Id);
console.log(formatted_dateVaksinEdit);
			 if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='';
			   }
		
			 datavaksinsave.push(dataVaksin);
			 
		
			 }
		  	 

	 
document.getElementById("data-vaksin").innerHTML = datavaksinsave.join(" ");


 	
$$(".btn-edit-vaksin").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	   
	 var phonenumber = $$(".txtPhone").val();
  var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val(); 
 
 
 
	   var strId = $$(this).attr("data-id");
	   var strVaksinke = $$(this).attr("data-ke");
	   var strVaksinnama = $$(this).attr("data-vaknama");
	   var strVaksindate = $$(this).attr("data-vakdate");
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Edit Data Vaksin</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
					'<table class="table" border="0">'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Vaksin Ke:</th>'+
	 ' <th><input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txteditid"  class="form-control txteditid" />  <input value="'+strVaksinke+'" style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="number" id="txteditvaksinke"  class="form-control txteditvaksinke" /></th>'+
	 ' </tr>'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Nama Vaksin:</th>'+
	 ' <th><input value="'+strVaksinnama+'" style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditVakName"  class="form-control txteditVakName" /></th>'+
	 ' </tr>'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Tanggal Vaksin</th>'+
	  '<th><input value="'+strVaksindate+'" type="date" style="height: calc(2rem + 2px);padding: 10px;" id="txteditDate"  class="form-control txteditDate" /></th>'+
	  '</tr>'+
	  '<tr> '+
	 ' <th></th>'+
	  '<th   > <button type="button"   class=" btn-edit-vaksin btn btn-gradient-primary" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit</b></button></th>'+
	  '</tr>'+
	 ' </table>'+
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-vaksin').on('click', function () {
	
	
	
 var phonenumber = $$(".txtPhone").val();
 var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val();
	
	var ArrayId = $$(".txteditid").val();
	var ArrayKe = $$(".txteditvaksinke").val();
		var ArrayLok = $$(".txteditVakName").val();
		var ArrayDate = $$(".txteditDate").val();
		 
		if (ArrayKe=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tahap Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayLok=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else  if (ArrayDate=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tanggal Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(ArrayDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


// var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete2 mdi mdi-calendar-remove" data-nopek2="'+strNopek+'" data-novak2="'+ArrayKe+'"></i></span></td></tr>';	
 // var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+'  </td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/edit_vaksin",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "id" : "'+ArrayId+'",  "vakke" : "'+ArrayKe+'",  "vaknama" : "'+ArrayLok+'",  "vakdate" : "'+ArrayDate+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }  
		]
	}); 
	
	// vaksinsave.push(dataVaksin);  
document.getElementById("txtvaksinke").value = "";
document.getElementById("txtVakName").value = "";
document.getElementById("txtDate").value = ""; 
// document.getElementById("data-vaksin").innerHTML = vaksinsave.join(" ");
	// console.log(vaksinsave);  
	 
	   

    
 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 	});

	
	}
 
 
 });
	
		 
	   myApp.hidePreloader();
		 });
 
});	      
		   
 	
$$(".btn-delete-vaksin").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	   
	 var phonenumber = $$(".txtPhone").val();
  var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val(); 
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf;    margin: 20px 0 0 ;">Yakin Hapus Data Vaksin? </p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  } ,
{
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			onClick: function () {
				   
 $.ajax({
     url: ""+useWeb+"/Attendance/delete_vaksin",
    type: "POST",
	 data:' {"id" : "'+strIdVaksin+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		console.log(data); 
		 
			 
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }   
		]
	});
		   
		  
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
			
				 }
		  }		  
		]
	});
		 
	   myApp.hidePreloader();
		 });
 
});	      


		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
 
 
 
 
 
 
 
 
 
 
 
 var datavaksinsavekel = []; 
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
let formatted_dateVaksinEdit =current_dateVaksin.getFullYear()+"-"+("0" + (current_dateVaksin.getMonth() + 1)).slice(-2)+"-"+    ("0" + current_dateVaksin.getDate()).slice(-2);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();
   var dataVaksin='<tr><td><span  ><center><label class="btn-edit-vaksin-kel badge badge-success"  data-id="'+dtvaksin[i].Id+'"  data-ke="'+dtvaksin[i].VaccineNo+'" data-nama="'+dtvaksin[i].Name+'" data-vaknama="'+dtvaksin[i].VaccineName+'" data-vakdate="'+formatted_dateVaksinEdit+'"> Edit</label> <label class="btn-delete-vaksin-kel badge badge-danger" data-id="'+dtvaksin[i].Id+'"   > Delete</label> </center></span></td><td><center>'+dtvaksin[i].VaccineNo+'</center></td><td><center>'+dtvaksin[i].Name+'</center></td><td>'+dtvaksin[i].VaccineName+'</td><td>'+formatted_dateVaksin+'  </td><tr>';	
			 console.log(dtvaksin[i].Id);
console.log(formatted_dateVaksinEdit);
			 if(dtvaksin[i].VaccineNo==''){
				   dataVaksin='';
			   }
		
			 datavaksinsavekel.push(dataVaksin);
			 
		
			 }
		  	 

	 
document.getElementById("data-vaksin-kel").innerHTML = datavaksinsavekel.join(" ");


 	
$$(".btn-edit-vaksin-kel").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	   
	 var phonenumber = $$(".txtPhone").val();
  var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val(); 
 
 
 
	   var strId = $$(this).attr("data-id");
	   var strVaksinke = $$(this).attr("data-ke");
	   var strVaksinnama = $$(this).attr("data-vaknama");
	   var strVaksindate = $$(this).attr("data-vakdate");
	   var strNama = $$(this).attr("data-nama");
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Edit Data Vaksin Keluarga</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
					'<table class="table" border="0">'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Vaksin Ke:</th>'+
	 ' <th><input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txteditid"  class="form-control txteditid" />  <input value="'+strVaksinke+'" style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="number" id="txteditvaksinke"  class="form-control txteditvaksinke" /></th>'+
	 ' </tr>'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Nama Vaksin:</th>'+
	 ' <th><input value="'+strNama+'" style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditNama"  class="form-control txteditNama" /></th>'+
	 ' </tr>'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Nama Vaksin:</th>'+
	 ' <th><input value="'+strVaksinnama+'" style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditVakName"  class="form-control txteditVakName" /></th>'+
	 ' </tr>'+
	 ' <tr>'+
	 ' <th style="padding:10px!important">Tanggal Vaksin</th>'+
	  '<th><input value="'+strVaksindate+'" type="date" style="height: calc(2rem + 2px);padding: 10px;" id="txteditDate"  class="form-control txteditDate" /></th>'+
	  '</tr>'+
	  '<tr> '+
	 ' <th></th>'+
	  '<th   > <button type="button"   class=" btn-edit-vaksin-kel btn btn-gradient-primary" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit</b></button></th>'+
	  '</tr>'+
	 ' </table>'+
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-vaksin-kel').on('click', function () {
	
	
	
 var phonenumber = $$(".txtPhone").val();
 var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val();
	
	var ArrayId = $$(".txteditid").val();
	var ArrayKe = $$(".txteditvaksinke").val();
		var ArrayLok = $$(".txteditVakName").val();
		var ArrayDate = $$(".txteditDate").val();
		var ArrayNama = $$(".txteditNama").val();
		 
		if (ArrayKe=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tahap Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else 	if (ArrayNama=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Keluarga kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayLok=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else  if (ArrayDate=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tanggal Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(ArrayDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


// var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete2 mdi mdi-calendar-remove" data-nopek2="'+strNopek+'" data-novak2="'+ArrayKe+'"></i></span></td></tr>';	
 // var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+'  </td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/edit_vaksinkel",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "id" : "'+ArrayId+'",  "vakke" : "'+ArrayKe+'",   "nama" : "'+ArrayNama+'", "vaknama" : "'+ArrayLok+'",  "vakdate" : "'+ArrayDate+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }  
		]
	}); 
	
	// vaksinsave.push(dataVaksin);  
document.getElementById("txtvaksinke").value = "";
document.getElementById("txtVakName").value = "";
document.getElementById("txtDate").value = ""; 
// document.getElementById("data-vaksin").innerHTML = vaksinsave.join(" ");
	// console.log(vaksinsave);  
	 
	   

    
 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 	});

	
	}
 
 
 });
	
		 
	   myApp.hidePreloader();
		 });
 
});	      
		   
 	
$$(".btn-delete-vaksin-kel").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	   
	 var phonenumber = $$(".txtPhone").val();
  var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val(); 
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf;    margin: 20px 0 0 ;">Yakin Hapus Data Vaksin? </p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  } ,
{
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			onClick: function () {
				   
 $.ajax({
     url: ""+useWeb+"/Attendance/delete_vaksin",
    type: "POST",
	 data:' {"id" : "'+strIdVaksin+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		console.log(data); 
		 
			 
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }   
		]
	});
		   
		  
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
			
				 }
		  }		  
		]
	});
		 
	   myApp.hidePreloader();
		 });
 
});	      


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
		 for (i = 0; i < dttm.length; i++) {
			 
			 console.log(dttm[i].PhoneNumber);
			 
			 var Phone= dttm[i].PhoneNumber;
					if (Phone ==''){
						
						Phone=localStorage.getItem("phonenumber");
					}
			 var IsVaccine= dttm[i].IsVaccine;
			 if (IsVaccine ==''){
						
						IsVaccine=localStorage.getItem("statvaksin");
					}
					
			 var IsCovid= dttm[i].IsCovid;
			 if (IsCovid ==''){
						
						IsCovid=localStorage.getItem("statcovid");
					}
			 var BloodType= dttm[i].BloodType;
			 if (BloodType ==''){
						
						BloodType=localStorage.getItem("goldarah");
					}
			 var Rhesus= dttm[i].Rhesus;
			 if (Rhesus ==''){
						
						Rhesus=localStorage.getItem("rhesus");
					}
			 
			 
			  
		  
		  
		  document.getElementById("VstatVaksin").value = IsVaccine;
		  document.getElementById('Vphone').value= Phone;
		  document.getElementById('VstatCovid').value= IsCovid;
		  document.getElementById('VgolDar').value= BloodType;
		  document.getElementById('Vrhesus').value= Rhesus;
			 }
	
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   

$$('.btn-add-vaksin').on('click', function () {
	
	
	
 var phonenumber = $$(".txtPhone").val();
 var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val();
	
	var ArrayKe = $$(".txtvaksinke").val();
		var ArrayLok = $$(".txtVakName").val();
		var ArrayDate = $$(".txtDate").val();
		 
		if (ArrayKe=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tahap Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayLok=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else  if (ArrayDate=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tanggal Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(ArrayDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


// var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete2 mdi mdi-calendar-remove" data-nopek2="'+strNopek+'" data-novak2="'+ArrayKe+'"></i></span></td></tr>';	
 // var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+'  </td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/add_vaksin",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "vakke" : "'+ArrayKe+'",  "vaknama" : "'+ArrayLok+'",  "vakdate" : "'+ArrayDate+'" ,  "flag" : "1"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }  
		]
	}); 
	
	// vaksinsave.push(dataVaksin);  
document.getElementById("txtvaksinke").value = "";
document.getElementById("txtVakName").value = "";
document.getElementById("txtDate").value = ""; 
// document.getElementById("data-vaksin").innerHTML = vaksinsave.join(" ");
	// console.log(vaksinsave);  
	 
	   

    
 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 	});

	
	}
 
 
 });
 
 
 
 
 
 
 
 
 
$$('.btn-add-vaksin-kel').on('click', function () {
	
	
	
 var phonenumber = $$(".txtPhone").val();
 var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val();
	
	var ArrayKe = $$(".txtvaksinke_kel").val();
		var ArrayLok = $$(".txtVakName_kel").val();
		var ArrayDate = $$(".txtDate_kel").val();
		var ArrayName = $$(".txtnama_kel").val();
		 
		if (ArrayKe=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tahap Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else if (ArrayName=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Keluarga kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayLok=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else  if (ArrayDate=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Tanggal Vaksin kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
 
const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_dateVaksin =  new Date(ArrayDate);
let formatted_dateVaksin = current_dateVaksin.getDate() + " " + months[current_dateVaksin.getMonth()] + " " + current_dateVaksin.getFullYear();


// var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete2 mdi mdi-calendar-remove" data-nopek2="'+strNopek+'" data-novak2="'+ArrayKe+'"></i></span></td></tr>';	
 // var dataVaksin='<tr><td><center>'+ArrayKe+'</center></td><td>'+ArrayLok+'</td><td>'+formatted_dateVaksin+'  </td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/add_vaksin_kel",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "vakke" : "'+ArrayKe+'",  "nama" : "'+ArrayName+'",  "vaknama" : "'+ArrayLok+'",  "vakdate" : "'+ArrayDate+'" ,  "flag" : "2"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
 localStorage.setItem('phonenumber', phonenumber);
 localStorage.setItem('statvaksin', statvaksin);
 localStorage.setItem('statcovid', statcovid);
 localStorage.setItem('goldarah', goldarah);
 localStorage.setItem('rhesus', rhesus);
 
				 } 
		  }  
		]
	}); 
	
	// vaksinsave.push(dataVaksin);  
document.getElementById("txtvaksinke").value = "";
document.getElementById("txtVakName").value = "";
document.getElementById("txtDate").value = ""; 
// document.getElementById("data-vaksin").innerHTML = vaksinsave.join(" ");
	// console.log(vaksinsave);  
	 
	   

    
 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 	});

	
	}
 
 
 });
 
 
 
 
	
$$('.btnadd').on('click', function () {
 
 var phonenumber = $$(".txtPhone").val();
 var statvaksin = $$(".txtStatVaksin").val();
 var statcovid =  $$(".txtStatCovid").val();	
 var goldarah =  $$(".txtGolDarah").val();	
 var rhesus =  $$(".txtRhesus").val();
 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	if (phonenumber==''){
		
		
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nomor Handphone harus diisi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
	
 myApp.hidePreloader();
		
		
	}else if (statvaksin==''){
		
		
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Status Vaksin harus dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
	
 myApp.hidePreloader();
		
		
	}else if (statcovid==''){
		
		
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Status Covid harus dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
	
 myApp.hidePreloader();
		
		
	}else if (goldarah==''){
		
		
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Golongan Darah harus dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
	
 myApp.hidePreloader();
		
		
	}else if (rhesus==''){
		
		
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Rhesus harus dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
	
 myApp.hidePreloader();
		
		
	}else{
	
	  
	 
		 $.ajax({
     url: ""+useWeb+"/Attendance/add_dataTambahan",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "phonenumber" : "'+phonenumber+'",  "statvaksin" : "'+statvaksin+'",  "statcovid" : "'+statcovid+'", "goldarah":"'+goldarah+'", "rhesus":"'+rhesus+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		 		
 myApp.hidePreloader();
		var msgabsen=data.message; 
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
 		
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   
				 
	}
					   

   });

});	
	
   
 myApp.hidePreloader();
   
}); 
    
}); 