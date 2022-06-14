 
  
myApp.onPageInit("1-quiz-7", function(page){
	
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 

var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	 


 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
var strNip = localStorage.getItem("LogonNip");

var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);

var strYa = localStorage.getItem("Logon-Ya7");	
var strYa2 = localStorage.getItem("Logon-Ya72");	
var strId = localStorage.getItem("Logon-IdAbsen");	

const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen7").innerHTML = formatted; 
 
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
   
		 
		var datatxt71= []; 
		var datatxt72= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			 
			// if (dttm[i].ApakahDalamPerawatan=='' || dttm[i].ApakahDalamPerawatan==null){
				// var ApakahDalamPerawatan= localStorage.getItem("valquiz7");
			// }else{
			//	 var ApakahDalamPerawatan= dttm[i].ApakahDalamPerawatan;
			// }
			 
			 
			 var ApakahDalamPerawatan= dttm[i].ApakahDalamPerawatan; 
			 if (ApakahDalamPerawatan=='Ya' || strYa=='Ya'){
				 var rtxt71='checked="checked"';
				 var rtxt72=''; 
	
					}else{
				 var rtxt71=' ';
				 var rtxt72='checked="checked"'; 
	
				}
			 
			 
			 
			 
			 
			 // if (dttm[i].DemamBatukLainnyaSaatIni=='' || dttm[i].DemamBatukLainnyaSaatIni==null){
				// var DemamBatukLainnyaSaatIni=  localStorage.getItem("valquiz8");	
			// }else{
				// var DemamBatukLainnyaSaatIni= dttm[i].DemamBatukLainnyaSaatIni;
			 //}
			 
			 
			 var DemamBatukLainnyaSaatIni= dttm[i].DemamBatukLainnyaSaatIni; 
			 if (DemamBatukLainnyaSaatIni=='Ya' || strYa2=='Ya'){
				 var rtxt771='checked="checked"';
				 var rtxt772=''; 
	
					}else{
				 var rtxt771=' ';
				 var rtxt772='checked="checked"'; 
	
				}
			 
			 
			 
			 
			  if (dttm[i].KondisiSaatIni=='' || dttm[i].KondisiSaatIni==null){
				 var KondisiSaatIni= localStorage.getItem("strKondisi");
			 }else{
				 var KondisiSaatIni= dttm[i].KondisiSaatIni;
			 }
			 
			 } 
			 
			 
			 
			  var quiz7=' <ul>  <li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txtPerawatan"   value="Ya" '+rtxt71+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txtPerawatan"    value="Tidak"  '+rtxt72+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
				
				
			  var quiz72=' <ul>  <li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txtDemamBatukLainnya"   value="Ya" '+rtxt771+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content"  ">'+
					'<input type="radio" name="txtDemamBatukLainnya"    value="Tidak"  '+rtxt772+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
					
					datatxt71.push(quiz7);
					datatxt72.push(quiz72);
		   
		   
		   document.getElementById("quiz7").innerHTML = datatxt71.join(" ");
		   document.getElementById("quiz72").innerHTML = datatxt72.join(" ");
		 // document.getElementById("txt7").value = ApakahDalamPerawatan; 
		 // document.getElementById("txt8").value = DemamBatukLainnyaSaatIni; 
		  document.getElementById("txtKondisi").value = KondisiSaatIni.replace(/<br[^>]*>/g, "\n");  
	
	 myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

	var phonesave = [];
 
  $.ajax({
     url: ""+useWeb+"/Attendance/dataphone_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "id" : "'+strId+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
		
	
		//console.log(data.data);
		var dtvaksin=data.data;
		
		  for (i = 0; i < dtvaksin.length; i++) {
			
			 // var dataPhoneKel='<tr><td><center>'+dtvaksin[i].RelativesName+'</center></td><td>'+dtvaksin[i].Note+'  <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete mdi mdi-calendar-remove"  data-id="'+dtvaksin[i].Id+'"></i></span></td><tr>';	
			   var dataPhoneKel='<tr> <td><span  ><center><label class="btn-edit-phone badge badge-success"  data-id="'+dtvaksin[i].Id+'" data-nama="'+dtvaksin[i].RelativesName+'"  data-phone="'+dtvaksin[i].PhoneNumber+'"> Edit</label> <label class="btn-delete-phone badge badge-danger" data-id="'+dtvaksin[i].Id+'"   > Delete</label></center></span></td><td> '+dtvaksin[i].RelativesName+' </td><td>'+dtvaksin[i].PhoneNumber+'  </td></tr>';	
			  if(dtvaksin[i].Id==''){
				   dataPhoneKel='';
			   }
		
			 phonesave.push(dataPhoneKel);
			 console.log(phonesave);
		
	 myApp.hidePreloader();
			 }
document.getElementById("data-phone").innerHTML = phonesave.join(" ");;

	
$$(".btn-edit-phone").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	    
 
 
	   var strId = $$(this).attr("data-id");
	   var strNama = $$(this).attr("data-nama");
	   var strPhone = $$(this).attr("data-phone"); 
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Edit Data No. Telepon Keluarga</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
		 '  <table class="table" border="0">'+
	 '   <tr>'+
	  '  <th style="padding:10px!important">Nama:</th>'+
	   ' <th><input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txteditid"  class="form-control txteditid" /> '+
	   ' <input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditnama"  class="form-control txteditnama"  value="'+strNama+'" /></th>'+
	   ' </tr>'+
	   ' <tr>'+
	   ' <th style="padding:10px!important">No. Telpon:</th>'+
	   ' <th><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditphoneKel"  class="form-control txteditphoneKel" value="'+strPhone+'" /></th>'+
	   ' </tr> '+
	   ' <tr> '+
	   ' <th></th>'+
	  '  <th   > <button type="button"   class="btn-edit-phone2  btn btn-gradient-primary" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit</b></button></th>'+
	  '  </tr>'+
	  '  </table>'+
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-phone2').on('click', function () {
	
	 
var txtPerawatan= document.getElementsByName('txtPerawatan');
for (var i = 0, length = txtPerawatan.length; i < length; i++) {
    if (txtPerawatan[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtPerawatan[i].value);
		var valtxtPerawatan=txtPerawatan[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}



var txtDemamBatukLainnya= document.getElementsByName('txtDemamBatukLainnya');
for (var i = 0, length = txtDemamBatukLainnya.length; i < length; i++) {
    if (txtDemamBatukLainnya[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtDemamBatukLainnya[i].value);
		var valtxtDemamBatukLainnya=txtDemamBatukLainnya[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
	
	var ArrayId = $$(".txteditid").val();
	var ArrayNama = $$(".txteditnama").val();
		var ArrayPhone = $$(".txteditphoneKel").val(); 
		 
		if (ArrayNama=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama Keluarga Kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayPhone=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">No. Telepon Keluarga Kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
  

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/edit_phone",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "id" : "'+ArrayId+'",  "nama" : "'+ArrayNama+'",  "phone" : "'+ArrayPhone+'"}' ,
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
				  
 


	 localStorage.setItem('Logon-Ya72', valtxtDemamBatukLainnya);
	 localStorage.setItem('Logon-Ya7', valtxtPerawatan);
				 } 
		  }  
		]
	}); 
	 
	   

    
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
	


 $$('.btn-delete-phone').on('click', function () {
	   var strId = $$(this).attr("data-id");
	   
	
var strKondisi = $$(".txtKondisi").val().replace(/(?:\r\n|\r|\n)/g, '<br>');	
   
  
 
var txtPerawatan= document.getElementsByName('txtPerawatan');
for (var i = 0, length = txtPerawatan.length; i < length; i++) {
    if (txtPerawatan[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtPerawatan[i].value);
		var valtxtPerawatan=txtPerawatan[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}



var txtDemamBatukLainnya= document.getElementsByName('txtDemamBatukLainnya');
for (var i = 0, length = txtDemamBatukLainnya.length; i < length; i++) {
    if (txtDemamBatukLainnya[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtDemamBatukLainnya[i].value);
		var valtxtDemamBatukLainnya=txtDemamBatukLainnya[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Hapus data Phone Number ?</p> ',
		buttons: [ 
		   {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  },
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			  onClick: function () {
				$.ajax({
     url: ""+useWeb+"/Attendance/delete_phone",
    type: "POST",
    data:' {"id" : "'+strId+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	   
	    myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [ 
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				 
	
				


	 localStorage.setItem('Logon-Ya72', valtxtDemamBatukLainnya);
	 localStorage.setItem('Logon-Ya7', valtxtPerawatan);			 
				 
				 
 localStorage.setItem('strKondisi', strKondisi);
 //localStorage.setItem('valquiz7', valquiz7);
 //localStorage.setItem('valquiz8', valquiz8);
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
 
 
 
} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

				   
				   
				   


$$(".btn7").on("click", function(){
	

var strKondisi = $$(".txtKondisi").val().replace(/(?:\r\n|\r|\n)/g, '<br>');	
   

//var equiz7= document.getElementById("txt7");
//var valquiz7 = equiz7.value;
//console.log(valquiz7);


//var equiz8= document.getElementById("txt8");
//var valquiz8 = equiz8.value;
//console.log(valquiz8);

 

var txtPerawatan= document.getElementsByName('txtPerawatan');
for (var i = 0, length = txtPerawatan.length; i < length; i++) {
    if (txtPerawatan[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtPerawatan[i].value);
		var valtxtPerawatan=txtPerawatan[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}



var txtDemamBatukLainnya= document.getElementsByName('txtDemamBatukLainnya');
for (var i = 0, length = txtDemamBatukLainnya.length; i < length; i++) {
    if (txtDemamBatukLainnya[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtDemamBatukLainnya[i].value);
		var valtxtDemamBatukLainnya=txtDemamBatukLainnya[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		//if (valquiz7  == '' ) {
			 
	
	//myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	//myApp.modal({
	//	title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Status Perawatan Belum dipilih</p> ',
	//	buttons: [
		//  {
		//	text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
		//	bold: true
		//  }  
		//]
	//});
	// myApp.hidePreloader();

//} else 
	//if (valquiz8  == '' ) {
			 
	
//myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 //	myApp.modal({
	//	title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Kondisi Kesehatan Belum dipilih</p> ',
		//buttons: [
		//  {
		//	text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
		//	bold: true
		//  }  
		//]
	//});
	// myApp.hidePreloader();

//}else 
	
if (strKondisi  == '' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">jelaskan Kondisi saat ini</p> ',
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
     url: ""+useWeb+"/Attendance/add_kuis7",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "ApakahDalamPerawatan" : "'+valtxtPerawatan+'",   "DemamBatukLainnyaSaatIni" : "'+valtxtDemamBatukLainnya+'",   "KondisiSaatIni" : "'+strKondisi+'"}' ,
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
	
		mainView.router.loadPage('1-quiz-8.html'); 
		myApp.hidePreloader();
		 });
	 myApp.hidePreloader();
			 

}  
		myApp.hidePreloader();
		 });
		 
		 

		 });

				   
$$(".btn-add-phone").on("click", function(){
	
	
	
var strKondisi = $$(".txtKondisi").val().replace(/(?:\r\n|\r|\n)/g, '<br>');	
   

//var equiz7= document.getElementById("txt7");
//var valquiz7 = equiz7.value;
//console.log(valquiz7);


//var equiz8= document.getElementById("txt8");
//var valquiz8 = equiz8.value;
//console.log(valquiz8);

	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	 
var txtnamaKel = $$(".txtnamaKel").val();
var txtphoneKel = $$(".txtphoneKel").val();
 
var strId = localStorage.getItem("Logon-IdAbsen");	



var txtPerawatan= document.getElementsByName('txtPerawatan');
for (var i = 0, length = txtPerawatan.length; i < length; i++) {
    if (txtPerawatan[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtPerawatan[i].value);
		var valtxtPerawatan=txtPerawatan[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}



var txtDemamBatukLainnya= document.getElementsByName('txtDemamBatukLainnya');
for (var i = 0, length = txtDemamBatukLainnya.length; i < length; i++) {
    if (txtDemamBatukLainnya[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtDemamBatukLainnya[i].value);
		var valtxtDemamBatukLainnya=txtDemamBatukLainnya[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

if (txtnamaKel  == '' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
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
else if (txtphoneKel  == '' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">No. telepon Keluarga kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();

} else{


  //var dataPhoneKel='<tr><td> '+txtnamaKel+' </td><td>'+txtphoneKel+' </td></tr>';	
 
		// var phonesave=[];
 	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
			$.ajax({
     url: ""+useWeb+"/Attendance/add_phonekel",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "id" : "'+strId+'",   "nama" : "'+txtnamaKel+'",   "phone" : "'+txtphoneKel+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	 
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;"  class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();

				  
 


	 localStorage.setItem('Logon-Ya72', valtxtDemamBatukLainnya);
	 localStorage.setItem('Logon-Ya7', valtxtPerawatan);				 
				 } 
		  }  
		]
	}); 
	
	
 localStorage.setItem('strKondisi', strKondisi);
 //localStorage.setItem('valquiz7', valquiz7);
 //localStorage.setItem('valquiz8', valquiz8);
//phonesave.push(dataPhoneKel); 
	
	// localStorage.setItem('Logon-Ya7', 'Ya');
	// localStorage.setItem('Logon-Ya72', 'Ya');
document.getElementById("txtnamaKel").value = "";
document.getElementById("txtphoneKel").value = "";
// document.getElementById("data-phone").innerHTML = phonesave.join(" ");
	 
	 myApp.hidePreloader();
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