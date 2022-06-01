 function showq5_1(){
  document.getElementById('divq5').style.display ='none';
}
function showq5_2(){
  document.getElementById('divq5').style.display = 'block';
}
    
myApp.onPageInit("1-quiz-5", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	

 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 
var strNip = localStorage.getItem("LogonNip");
var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	 
var strId = localStorage.getItem("Logon-IdAbsen");	

var strYa = localStorage.getItem("Logon-Ya5");	


var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen5").innerHTML = formatted; 
 
		  	 


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
   
   var isolasisave2 = [];
 $.ajax({
     url: ""+useWeb+"/Attendance/dataisolasi_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'", "id" : "'+strId+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
   
		
	var isolasisave = [];
	
		//console.log(data.data);
		var dtvaksin=data.data;
		
		  for (i = 0; i < dtvaksin.length; i++) {
			
			 // var dataInsom='<tr><td><center>'+dtvaksin[i].RelativesName+'</center></td><td>'+dtvaksin[i].Note+'  <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete mdi mdi-calendar-remove"  data-id="'+dtvaksin[i].Id+'"></i></span></td></tr>';	
			   var dataInsom='<tr><td><span  ><center><label class="btn-edit-isolasi badge badge-success"  data-id="'+dtvaksin[i].Id+'" data-nama="'+dtvaksin[i].RelativesName+'"  data-keluhan="'+dtvaksin[i].Note+'"> Edit</label> <label class="btn-delete-isolasi badge badge-danger" data-id="'+dtvaksin[i].Id+'"   > Delete</label></center></span></td><td> '+dtvaksin[i].RelativesName+' </td><td>'+dtvaksin[i].Note+'  </td></tr>';	
			  if(dtvaksin[i].Id==''){
				   dataInsom='';
			   }
		
			 isolasisave.push(dataInsom);
			 console.log(isolasisave);
		 
			 }
document.getElementById("data-isolasi2").innerHTML = isolasisave.join(" ");

		myApp.hidePreloader();
	
$$(".btn-edit-isolasi").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	    
 
 
	   var strId = $$(this).attr("data-id");
	   var strNama = $$(this).attr("data-nama");
	   var strKeluhan = $$(this).attr("data-keluhan"); 
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Edit Data Isolasi Mandiri</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
		 '  <table class="table" border="0">'+
	 '   <tr>'+
	  '  <th style="padding:10px!important">Nama:</th>'+
	   ' <th><input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txteditid"  class="form-control txteditid" /> '+
	   ' <input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditnama"  class="form-control txteditnama"  value="'+strNama+'" /></th>'+
	   ' </tr>'+
	   ' <tr>'+
	   ' <th style="padding:10px!important">Keluhan:</th>'+
	   ' <th><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditkeluhanisolasi"  class="form-control txteditkeluhanisolasi" value="'+strKeluhan+'" /></th>'+
	   ' </tr> '+
	   ' <tr> '+
	   ' <th></th>'+
	  '  <th   > <button type="button"   class="btn-edit-isolasi2  btn btn-gradient-primary" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit</b></button></th>'+
	  '  </tr>'+
	  '  </table>'+
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-isolasi2').on('click', function () {
	
	 
	
	var ArrayId = $$(".txteditid").val();
	var ArrayNama = $$(".txteditnama").val();
		var ArrayKeluhan = $$(".txteditkeluhanisolasi").val(); 
		 
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
 
 else  if (ArrayKeluhan=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keluhan Keluarga Kosong</p> ',
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
     url: ""+useWeb+"/Attendance/edit_isolasi",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "id" : "'+ArrayId+'",  "nama" : "'+ArrayNama+'",  "keluhan" : "'+ArrayKeluhan+'"}' ,
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
	

 $$('.btn-delete-isolasi').on('click', function () {
	   var strId = $$(this).attr("data-id");
	   
	   
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 setTimeout(function () { 
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Hapus data Isolasi mandiri ?</p> ',
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
     url: ""+useWeb+"/Attendance/delete_isolasi",
    type: "POST",
    data:' {"id" : "'+strId+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	
	    myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [ 
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage()
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
		var datatxt5= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			
			 var KerabatSerumahIsoman= dttm[i].KerabatSerumahIsoman;
			 var Id= dttm[i].Id;
			 
			 if (KerabatSerumahIsoman=='Ya' || strYa=='Ya'){
				 var rtxt5='checked="checked"';
				 var rtxt52='';
				 var showtxt5='';
	
					}else{
				 var rtxt5=' ';
				 var rtxt52='checked="checked"';
				 var showtxt5='class="hide"';
	
				}
				
		  var txt5='<ul>'+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq5_2();"> '+
					'<input type="radio" name="txt5"   value="Ya" '+rtxt5+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq5_1();">'+
					'<input type="radio" name="txt5"    value="Tidak" '+rtxt52+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>'+
					'</td></tr> </table>'+
					'<div id="divq5" '+showtxt5+'>'+
					'<table  width="100%">'+
					'<tr><td style="padding:10px!important" colspan="3">Sebutkan Orang (Bukan hanya anggota keluarga) yang tinggal serumah dan sedang melakukan Isolasi Mandiri, beserta keluhannya: '+
					 
					//'<table class="table ">'+
					 '<tr>  <td ></td><td ></td><td   >  <label data-popup=".popup-isolasi" class="open-popup badge badge-info"  >Tambah Data Isolasi</label> </td></tr>'+
					
					'<tr> <td style="background-color: #757575; color: #fff;font-size: 12px;"><center><b>Action</b></center></td><td width="50%" style="background-color: #757575; color: #fff;font-size: 12px;"><b>Nama</b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b>Keluhan</b> </td></tr>'+
					'<tbody id="data-isolasi2"></tbody>'+
					//'<tbody id="data-isolasi"></tbody>'+
					//'<tr> <td colspan="2" style="padding:10px!important" width="50%"><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txtnama"  class="form-control txtnama" /></td><td style="padding:10px!important"><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txtkeluhanisolasi"  class="form-control txtkeluhanisolasi" /></td></tr>'+
					//'<tr>  <td ></td><td ></td><td   > <button type="button"  class="btn-add-isolasi  badge badge-info btn-add-isolasi "  ><span style="font-size:15px">Tambah Data Isolasi</span></button> </td></tr>'+
					'  </td></tr>  </table> </div>';
             
			 
			 
					datatxt5.push(txt5);
					
					}
		   document.getElementById("datatxt5").innerHTML = datatxt5.join(" ");
		   var IdKuis=Id;
	localStorage.setItem('Logon-IdAbsen', IdKuis);
		    
	$$('.btn-add-isolasi').on('click', function () {
	
	var Nama = $$(".txtnama").val();
		var Keluhan = $$(".txtkeluhanisolasi").val(); 
		 
		if (Nama=='')
 {
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Nama harus diisi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (Keluhan=='')
 {
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keluhan harus diisi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;"  >Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 else{

 //var dataIsolasi='<tr><td><center>'+Nama+'</center></td><td>'+Keluhan+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete mdi mdi-calendar-remove"   data-nama="'+Nama+'"></i></span></td></tr>';	
//var dataIsolasi='<tr><td> '+Nama+' </td><td>'+Keluhan+' </td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/add_isolasi",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "id":"'+IdKuis+'","nama" : "'+Nama+'",  "keluhan" : "'+Keluhan+'"}' ,
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
			text: '<div style="color:#047edf;font-size:15px;"  class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage()
				 } 
		  }  
		]
	}); 
	
	 localStorage.setItem('Logon-Ya5', 'Ya');
	// isolasisave2.push(dataIsolasi);  
document.getElementById("txtnama").value = "";
document.getElementById("txtkeluhanisolasi").value = "";
 //document.getElementById("data-isolasi").innerHTML = isolasisave2.join(" ");
//	 console.log(isolasisave);  
	 
 




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
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
				   
				   
				   
	 


$$(".btn5").on("click", function(){
	
	var IdKuisVal=localStorage.getItem("Logon-IdAbsen");	 
var quiz5 = document.getElementsByName('txt5');  

for (var i = 0, length = quiz5.length; i < length; i++) {
    if (quiz5[i].checked) {
        // do whatever you want with the checked radio
        console.log(quiz5[i].value);
		var valquiz5=quiz5[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 
	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		if (valquiz5  == 'Ya' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
				$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis5",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "KerabatSerumahIsoman" : "'+valquiz5+'"}' ,
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
	
	
	
		mainView.router.loadPage('1-quiz-6.html'); 
		myApp.hidePreloader();
		 });

}else {
	 
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
 $.ajax({
     url: ""+useWeb+"/Attendance/add_kuis5",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "KerabatSerumahIsoman" : "'+valquiz5+'"}' ,
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
	
	
localStorage.setItem('Logon-Ya5', 'Tidak');
console.log(IdKuisVal);
 $.ajax({
     url: ""+useWeb+"/Attendance/delete_all_insom",
    type: "POST",
    data:' {"id" : "'+IdKuisVal+'", "typedata" : "isolasi_mandiri"}' ,
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
 		
		mainView.router.loadPage('1-quiz-6.html'); 
		myApp.hidePreloader();
		 });
			 

}  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		 
   
 myApp.hidePreloader();
}); 
});  