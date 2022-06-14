 
 function showq8(){
  document.getElementById('divq82').style.display ='none';
}
function showq82(){
  document.getElementById('divq82').style.display = 'block';
}
  
 
///load service Page  
myApp.onPageInit("1-quiz-8", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi 123456</p>");
    setTimeout(function () { 
	
 var strUsername = localStorage.getItem("LogonUsername");
	 var strPass = localStorage.getItem("LogonPass");
	 var strToken = localStorage.getItem("LogonToken");
	  var strLokasiInfo = localStorage.getItem("LogonLOCATION_INFO");
	 
var strId = localStorage.getItem("Logon-IdAbsen");	

var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);

var strYa = localStorage.getItem("Logon-Ya8");	
var strYa2 = localStorage.getItem("Logon-Ya82");	

const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen8").innerHTML = formatted; 

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
   
		 
		var datatxt81= []; 
		var datatxt881= []; 
		var datatxt82= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			 
			 
			// if (dttm[i].KontakEratDenganPasienCovid=='' || dttm[i].KontakEratDenganPasienCovid==null){
				// var KontakEratDenganPasienCovid= localStorage.getItem("valtxt9");
			// }else{
				// var KontakEratDenganPasienCovid= dttm[i].KontakEratDenganPasienCovid;
			//}
			 
			 
			   var KontakEratDenganPasienCovid= dttm[i].KontakEratDenganPasienCovid; 
			 if (KontakEratDenganPasienCovid=='Ya'|| strYa2=='Ya' ){
				 var rtxt881='checked="checked"';
				 var rtxt882=''; 
	
					}else{
				 var rtxt881=' ';
				 var rtxt882='checked="checked"'; 
	
				}
			 
			  
			 
			 
			   var KerabatSerumahKeluhanKesehatan= dttm[i].KerabatSerumahKeluhanKesehatan; 
			 if (KerabatSerumahKeluhanKesehatan=='Ya' || strYa=='Ya'){
				 var rtxt81='checked="checked"';
				 var rtxt82='';
				 var show8='';
	
					}else{
				 var rtxt81=' ';
				 var rtxt82='checked="checked"';
				 var show8='class="hide"';
	
				}
			  var quiz1=' <ul>  <li>'+
					'<label class="label-checkbox item-content" onclick="showq82();">'+
					'<input type="radio" name="txtKelKeluarga"   value="Ya" '+rtxt81+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq8();">'+
					'<input type="radio" name="txtKelKeluarga"    value="Tidak"  '+rtxt82+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
					
					var quiz2='<div id="divq82" '+show8+'>'+
					'<table class="table" >'+
					'<tr>  <td style="text-align: right;" colspan="3"   >  <label data-popup=".popup-keluhan2" class="open-popup badge badge-info"  >Tambah Data Keluhan</label> </td></tr>'+
					' <tr> <td style="background-color: #757575; color: #fff;font-size: 12px;"><b><center>Action</center></b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b>Nama</b> </td><td style="background-color: #757575; color: #fff;font-size: 12px;"><b>Keluhan</b> </td></tr>'+
					' <tbody id="data-keluhankel"></tbody>'+
					//' <tr> <td colspan="2" style="padding:10px!important" width="50%"><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txtnamaKeluhan"  class="form-control txtnamaKeluhan" /></td><td style="padding:10px!important"><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txtkeluhanKel"  class="form-control txtkeluhanKel" /></td></tr>'+
					//'<tr><td></td> <td></td><td> <button type="button"  class="btn-add-keluhanKel  badge badge-info   "  ><span style="font-size:15px">Tambah Data Keluhan</span></button> </td></tr>'+
					' </table>'+
					'</div>';
			     
			 var quiz81=' <ul>  <li>'+
					'<label class="label-checkbox item-content"  >'+
					'<input type="radio" name="txtKontakErat"   value="Ya" '+rtxt881+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content"   >'+
					'<input type="radio" name="txtKontakErat"    value="Tidak"  '+rtxt882+'>'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Tidak</div>'+
					'</div>'+
					'</label>'+
					'</li> '+
					'</ul>';
					datatxt81.push(quiz1);
					datatxt82.push(quiz2);
					datatxt881.push(quiz81);
					
					} 
		   
		   
		 // document.getElementById("txt9").value = KontakEratDenganPasienCovid; 
	
		   document.getElementById("quiz1").innerHTML = datatxt81.join(" ");
		   document.getElementById("quiz81").innerHTML = datatxt881.join(" ");
		   document.getElementById("quiz2").innerHTML = datatxt82.join(" ");
		   
 myApp.hidePreloader();
		
 $.ajax({
     url: ""+useWeb+"/Attendance/datakeluhankel_detail",
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
			
			  var dataKelkel='<tr><td><span  ><center> <label class="btn-edit-keluhan badge badge-success"  data-id="'+dtvaksin[i].Id+'" data-nama="'+dtvaksin[i].RelativesName+'"  data-keluhan="'+dtvaksin[i].Note+'"> Edit</label> <label class="btn-delete-keluhan badge badge-danger" data-id="'+dtvaksin[i].Id+'"   > Delete</label> </center></span></td><td> '+dtvaksin[i].RelativesName+' </td><td>'+dtvaksin[i].Note+'  </td></tr>';	
			  if(dtvaksin[i].Id==''){
				   dataKelkel='';
			   }
		
 myApp.hidePreloader();
			 keluhankelsave.push(dataKelkel);
			 console.log(keluhankelsave);
		
			 }
document.getElementById("data-keluhankel").innerHTML = keluhankelsave.join(" ");;



$$(".btn-edit-keluhan").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	    
 
 
	   var strId = $$(this).attr("data-id");
	   var strNama = $$(this).attr("data-nama");
	   var strKeluhan = $$(this).attr("data-keluhan"); 
 
 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		 
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Edit Data Keluhan</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
		 '  <table class="table" border="0">'+
	 '   <tr>'+
	  '  <th style="padding:10px!important">Nama:</th>'+
	   ' <th><input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txteditid"  class="form-control txteditid" /> '+
	   ' <input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditnama"  class="form-control txteditnama"  value="'+strNama+'" /></th>'+
	   ' </tr>'+
	   ' <tr>'+
	   ' <th style="padding:10px!important">Keluhan:</th>'+
	   ' <th><input style="outline: 1px solid #1085e1!important;height: calc(2rem + 2px);padding: 10px;" type="text" id="txteditkeluhan"  class="form-control txteditkeluhan" value="'+strKeluhan+'" /></th>'+
	   ' </tr> '+
	   ' <tr> '+
	   ' <th></th>'+
	  '  <th   > <button type="button"   class="btn-edit-keluhan2  btn btn-gradient-primary" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit</b></button></th>'+
	  '  </tr>'+
	  '  </table>'+
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-keluhan2').on('click', function () {
	
	 
var txtKontakErat = document.getElementsByName('txtKontakErat');
for (var i = 0, length = txtKontakErat.length; i < length; i++) {
    if (txtKontakErat[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtKontakErat[i].value);
		var valtxtKontakErat=txtKontakErat[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
	
	var ArrayId = $$(".txteditid").val();
	var ArrayNama = $$(".txteditnama").val();
		var ArrayKeluhan = $$(".txteditkeluhan").val(); 
		 
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
     url: ""+useWeb+"/Attendance/edit_keluhan",
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
				 
 


	 localStorage.setItem('Logon-Ya82', valtxtKontakErat);
	 localStorage.setItem('Logon-Ya8', 'Ya');
				  
 
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
	


 $$('.btn-delete-keluhan').on('click', function () {
	   var strId8 = $$(this).attr("data-id");
	   
	   
var txtKontakErat = document.getElementsByName('txtKontakErat');
for (var i = 0, length = txtKontakErat.length; i < length; i++) {
    if (txtKontakErat[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtKontakErat[i].value);
		var valtxtKontakErat=txtKontakErat[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
	   
	   
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Hapus data Keluhan ?</p> ',
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
     url: ""+useWeb+"/Attendance/delete_keluhan",
    type: "POST",
    data:' {"id" : "'+strId8+'"}' ,
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
 //localStorage.setItem('valtxt9', valtxt9);
 
 


	 localStorage.setItem('Logon-Ya82', valtxtKontakErat);
	 localStorage.setItem('Logon-Ya8', 'Ya');
	 
	 
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

$$(".btn-add-keluhanKel").on("click", function(){
	
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	 
var txtnamaKeluhan = $$(".txtnamaKeluhan").val();
var txtkeluhanKel = $$(".txtkeluhanKel").val();


var txtKontakErat = document.getElementsByName('txtKontakErat');
for (var i = 0, length = txtKontakErat.length; i < length; i++) {
    if (txtKontakErat[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtKontakErat[i].value);
		var valtxtKontakErat=txtKontakErat[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

 
var strId = localStorage.getItem("Logon-IdAbsen");	

if (txtnamaKeluhan  == '' ) {
			 
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
else if (txtkeluhanKel  == '' ) {
			 
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keluhan kesehatan kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	 myApp.hidePreloader();

} else{


 // var dataKeluhanKel='<tr><td> '+txtnamaKeluhan+' </td><td>'+txtkeluhanKel+' </td></tr>';	
 
		// var phonesave=[];
 	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
			$.ajax({
     url: ""+useWeb+"/Attendance/add_keluhankel",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "id" : "'+strId+'",   "nama" : "'+txtnamaKeluhan+'",   "keluhan" : "'+txtkeluhanKel+'"}' ,
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
				 
				 } 
		  }  
		]
	}); 
	
	
 //localStorage.setItem('valtxt9', valtxt9);
	
	//keluhankelsave.push(dataKeluhanKel); 
	

	 localStorage.setItem('Logon-Ya82', valtxtKontakErat);
	 localStorage.setItem('Logon-Ya8', 'Ya');
document.getElementById("txtnamaKeluhan").value = "";
document.getElementById("txtkeluhanKel").value = "";
// document.getElementById("data-keluhankel").innerHTML = keluhankelsave.join(" ");
	 
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

				   
	      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
	 
	 
	var keluhankelsave = [];

				   
			   

				   





$$(".btn8").on("click", function(){
	
	
//var etxt9= document.getElementById("txt9");
//var valtxt9= etxt9.value;
//console.log(valtxt9);

var txtKelKeluarga = document.getElementsByName('txtKelKeluarga');
for (var i = 0, length = txtKelKeluarga.length; i < length; i++) {
    if (txtKelKeluarga[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtKelKeluarga[i].value);
		var valtxtKelKeluarga=txtKelKeluarga[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}


var txtKontakErat = document.getElementsByName('txtKontakErat');
for (var i = 0, length = txtKontakErat.length; i < length; i++) {
    if (txtKontakErat[i].checked) {
        // do whatever you want with the checked radio
        console.log(txtKontakErat[i].value);
		var valtxtKontakErat=txtKontakErat[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		if (valtxtKelKeluarga=='Ya'){
		//if(valtxt9==''){
	//myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	//myApp.modal({
	//	title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">riwayat kontak erat dengan kasus  positif covid belum dipilih</p> ',
	//	buttons: [
		//  {
		//	text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
		//	bold: true
		// }  
		//]
	//});
	// myApp.hidePreloader();
			
		//}
		//else {
			
			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {	
			$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis8",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "KontakEratDenganPasienCovid" : "'+valtxtKontakErat+'",   "KerabatSerumahKeluhanKesehatan" : "'+valtxtKelKeluarga+'",   "Status" : "0"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	   mainView.router.loadPage('1-quiz-9.html');
	 
	 myApp.hidePreloader();
	} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
			 myApp.hidePreloader();
			 });
		//}
		
		}
		else{
		//	if(valtxt9==''){
			//myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	//myApp.modal({
		//title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">riwayat kontak erat dengan kasus  positif covid belum dipilih</p> ',
		//buttons: [
		 // {
		//	text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
		//	bold: true
		  //}  
		//]
	//});
	// myApp.hidePreloader();
			
		//}
		//else {
			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {	
				$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis8",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "KontakEratDenganPasienCovid" : "'+valtxtKontakErat+'",   "KerabatSerumahKeluhanKesehatan" : "'+valtxtKelKeluarga+'",   "Status" : "0"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	  $.ajax({
     url: ""+useWeb+"/Attendance/delete_all_keluhan",
    type: "POST",
    data:' {"id" : "'+strId+'", "typedata" : "keluhan_keluarga"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	    
	  
	 localStorage.setItem('Logon-Ya8', 'Tidak');
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 
  /*
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
 	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Terimakasih sudah melengkapi data Kuesioner Absen!</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			 onClick: function () { 
				mainView.router.loadPage('1-homepage.html'); 
			
				}
		  }  
		]
	}); */
	
	
	   mainView.router.loadPage('1-quiz-9.html');
	  
	 
	 myApp.hidePreloader();
	} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
		 myApp.hidePreloader();
		 
		 });
			
		//}
			
		}
		
		 
	   myApp.hidePreloader();
		 });
 
});

	   myApp.hidePreloader();
 
}); 
  
}); 