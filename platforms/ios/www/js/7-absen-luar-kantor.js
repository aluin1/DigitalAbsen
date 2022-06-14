
  function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

 
  function showw1(){
  document.getElementById('div2').style.display ='none';
}
function showw2(){
  document.getElementById('div2').style.display = 'block';
}


 function ShowHideDiv() {
	  
           
			
			 $('.txtLain').click(function(){
                if($(this).is(":checked"))
                {
                   document.getElementById('div4').style.display = 'block';
                }
				else{
					  document.getElementById('div4').style.display = 'none';
					
				}
           });
        }
		
		
///load 
myApp.onPageInit("7-absen-luar-kantor", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
 
  var pictureSource;   // picture source
      var destinationType; // sets the format of returned value 
      var image = "";
	   var file = "";

var sistemKerjaAbsen=localStorage.getItem("Logon-valsisker");
var lokasiKerja=localStorage.getItem("Logon-vallokker");
var ya2_1=localStorage.getItem("Logon-Ya2_1");
var alasanAbsen=localStorage.getItem("Logon-Alasan2_1");

/*
if (sistemKerjaAbsen=="RAPAT DI LUAR KANTOR"){
				  var check='checked="checked"';
				  var check2='';
				  var check3='';
				  var check4='';
				  var check5='';
				  }
else if (sistemKerjaAbsen=="OFFDUTY"){
				  var check='';
				  var check2='checked="checked"';
				  var check3='';
				  var check4='';
				  var check5='';
				  }
else if (sistemKerjaAbsen=="WORK FROM HOME"){
				  var check='';
				  var check2='';
				  var check3='checked="checked"';
				  var check4='';
				  var check5='';
				  }
else if (sistemKerjaAbsen=="WORK FROM OFFICE"){
				  var check='';
				  var check2='';
				  var check3='';
				  var check4='checked="checked"';
				  var check5='';
				  }
else {
				  var check='';
				  var check2='';
				  var check3='';
				  var check4='';
				  var check5='checked="checked"';
				  }
				  
				  */
			
var alasanIso=[];


if (ya2_1=='Ya'){
	
	  
var datanotekondisilain=alasanAbsen.split(",");

console.log(datanotekondisilain);
console.log(datanotekondisilain[0]);
console.log(datanotekondisilain[1]);
console.log(datanotekondisilain[2]);
console.log(datanotekondisilain[3]);
console.log(datanotekondisilain[4]);




var kon1 = datanotekondisilain[0];
var kon2 = datanotekondisilain[1];
var kon3 = datanotekondisilain[2];
var kon4 = datanotekondisilain[3];
var kon5 = datanotekondisilain[4];
var statusFit='0';	
var statusFitNote=datanotekondisilain;	
	
var statIsoman='<h5 class="card-title" style="color:#047edf;text-transform: uppercase; font-size:15px;"> <i style="font-size:20px;" class="mdi mdi-check-circle-outline"></i> Alasan Isolasi Mandiri : </h5>'+
'<h6 class="card-title" style="color:#047edf;font-size:15px;padding-left: 30px;"> ';
alasanIso.push(statIsoman);

if (kon1==''){
	alasanIso.push('');
}else{
	alasanIso.push('- '+kon1+'<br>');
}

if (kon2==''){
	alasanIso.push('');
}else{
	alasanIso.push('- '+kon2+'<br>');
}

if (kon3==''){
	alasanIso.push('');
}else{
	alasanIso.push('- '+kon3+'<br>');
}

if (kon4==''){
	alasanIso.push('');
}else{
	alasanIso.push('- '+kon4+'<br>');
}

if (kon5==''){
	alasanIso.push('');
}else{
	alasanIso.push('- '+kon5);
}


var statIsomanFoot='</h6>';
alasanIso.push(statIsomanFoot);
	
}
else{
	
var statusFit='1';	
var statusFitNote='Sehat';	
	
alasanIso.push('');
}


 

document.getElementById("statIsolasi").innerHTML =  ya2_1;
document.getElementById("alasanIsolasi").innerHTML =  alasanIso.join(" ");

if (kon1=="Kontak Erat"){
	var checkkon1='checked="checked"';
	
}else{
	var checkkon1=' ';
	
}


if (kon2=="Sakit Kepala"){
	var checkkon2='checked="checked"';
	
}else{
	var checkkon2=' ';
	
}

if (kon3=="Batuk"){
	var checkkon3='checked="checked"';
	
}else{
	var checkkon3=' ';
	
}


if (kon4=="Sakit Tenggorokan"){
	var checkkon4='checked="checked"';
	
}else{
	var checkkon4=' ';
	
}

 

/*
var recSisker=[];

var htmlSisker='<h4 class="card-title" style="color:#047edf"> <i style="font-size:20px;text-transform:uppercase;" class="mdi mdi-check-circle-outline"></i>  PILIH SISTEM KERJA ABSEN:</h4>'+
      '<div class="d-flex mt-2 align-items-top">'+
	  '<div class="mb-0 flex-grow"> '+
	  '<form class="forms-sample"> '+
	 ' <ul> '+
   ' <li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
      '<label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
	 ' <input type="radio" name="my-radio" value="RAPAT DI LUAR KANTOR" '+check+'   >'+
       ' <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
         ' <div class="item-title">RAPAT DI LUAR KANTOR</div>'+
       ' </div>'+
     ' </label>'+
    '</li>'+
	'<li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
	 ' <input type="radio" name="my-radio" value="OFFDUTY"   '+check2+'  >'+
       ' <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">OFFDUTY</div>'+
       ' </div>'+
     ' </label>'+
  '  </li>'+
	
	' <li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
      '<label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
	 ' <input type="radio" name="my-radio" value="WORK FROM HOME"  '+check3+'   >'+
       ' <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">WORK FROM HOME</div>'+
        '</div>'+
      '</label>'+
   ' </li>'+
   '<li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
    '  <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
     '   <input type="radio"  name="my-radio" value="WORK FROM OFFICE" '+check4+' >'+
      '  <div class="item-media">'+
       '   <i class="icon icon-form-radio"></i>'+
        '</div>'+
        '<div class="item-inner">'+
        '  <div class="item-title">WORK FROM OFFICE</div>'+
        '</div>'+
      '</label>'+
    '</li>'+
   '<li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
    '  <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
     '   <input type="radio"  name="my-radio" value="DINAS" '+check5+' >'+
      '  <div class="item-media">'+
       '   <i class="icon icon-form-radio"></i>'+
        '</div>'+
        '<div class="item-inner">'+
        '  <div class="item-title">DINAS</div>'+
        '</div>'+
      '</label>'+
    '</li>'+
	'<li style="border-radius: 50px;border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw2();" >'+
      '  <input type="radio"  name="my-radio" value="Other"    />'+
       ' <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
        '</div>'+
        '<div class="item-inner">'+
        '  <div class="item-title">OTHER</div>'+
        '</div>'+
      '</label> '+
	  '</ul>'+
	  '<div id="div2" class="hide">'+
   '<div class="form-group">'+
   '<textarea type="text"   class="form-control txtNote "  ></textarea>'+
   '</div></div>'+
'	</form></div></div>';

recSisker.push(htmlSisker);
document.getElementById("recordSisker").innerHTML =  sistemKerjaAbsen.join(" ");

*/


document.getElementById("recordSisker").innerHTML =  sistemKerjaAbsen;
document.getElementById("recordLoker").innerHTML =  lokasiKerja;

var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen-luar-kantor").innerHTML = formatted;


 document.getElementById("cameraTakePicture").addEventListener 
   ("click", cameraTakePicture); 
   
   function cameraTakePicture() { 
   navigator.camera.getPicture(onSuccess, onFail, {  
      quality: 50, 
      destinationType: Camera.DestinationType.DATA_URL ,
       correctOrientation: true
   });  
   
   function onSuccess(imageData) { 
      var smallImage  = document.getElementById('cameraTakePicture');
			
			smallImage.src = "data:image/jpeg;base64," + imageData;
			image = "data:image/jpeg;base64," + imageData;
   }  
   function onFail(message) {  
	  	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
   } 
}
 

$$('.btn-proses').on('click', function () {


 //  file = 'data:image/jpeg;base64,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';
file = image;


	 var strCondition = page.query.condition; 
 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong"); 	
	 
var strUsername = localStorage.getItem("LogonUsername");
	 var strPass = localStorage.getItem("LogonPass");
	 var strToken = localStorage.getItem("LogonToken");
/* 
	var strpenyakit = [];
           $('.txtPenyakit').each(function(){
                if($(this).is(":checked"))
                {
                    // strpenyakit.push($(this).val());
                     strpenyakit.push($(this).val());
                }else{
					  strpenyakit.push('');
					
				}
           });
    strpenyakit = strpenyakit.toString();	 
var strnoted = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
var strnoted2 = $$(".txtNote2").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
var radios = document.getElementsByName('my-radio');
var radios2 = document.getElementsByName('my-radio2');


for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios[i].value);
		var valradios=radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}


for (var x = 0, length = radios2.length; x < length; x++) {
    if (radios2[x].checked) {
        // do whatever you want with the checked radio
        console.log(radios2[x].value);
		var valradios2=radios2[x].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}


 

if (file==''){
			
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Belum Melakukan Selfie</p> ',
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

if(valradios=='Other' & valradios2=='0'){
	
	
	
	 if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan tidak boleh kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();

}

else if (strnoted2  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan Kondisi tidak boleh kosong</p> ',
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
                   url: ""+useWeb+"/Attendance/upload_base64",
                    type:'post',
                    data:'{"file" : "'+file+'"}',
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){
							console.log(response);
                            
							 
                       
		 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
    data:' {"photo":"'+response.data+'", "username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strnoted+'", "kondisi":"'+valradios2+'", "note_kondisi":"'+strpenyakit+'", "note_lain":"'+strnoted2+'"}' ,
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
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
				   
				    }else{
						
						
							
								myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+response.data+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
                           
                        }
                    }
                });

   });

   

	 }

}

else  if(valradios!='Other' & valradios2=='0'){
	
	
	
	   if (strnoted2  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan Kondisi tidak boleh kosong</p> ',
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
                   url: ""+useWeb+"/Attendance/upload_base64",
                    type:'post',
                 data:'{"file" : "'+file+'"}',
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){
							console.log(response); 

				
		 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
     data:' {"photo":"'+response.data+'", "username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+valradios+'", "kondisi":"'+valradios2+'", "note_kondisi":"'+strpenyakit+'", "note_lain":"'+strnoted2+'"}' ,
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
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
				   
				   
				   
							 
                        }else{
							
								myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+response.data+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
                           
                        }
                    }
                });

   });

   

	 }

}


else  if(valradios=='Other' & valradios2!='0'){
	
	
	
	   if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan Kondisi tidak boleh kosong</p> ',
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
                   url: ""+useWeb+"/Attendance/upload_base64",
                    type:'post',
                 data:'{"file" : "'+file+'"}',
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){


		 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
        data:' {"photo":"'+response.data+'", "username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strnoted+'", "kondisi":"'+valradios2+'", "note_kondisi":"Sehat", "note_lain":""}' ,
   contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	    console.log(data);
		 myApp.hidePreloader();
		var msgabsen=data.message; 
		  console.log(msgabsen);
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
				   
				   						}else{
							
								myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+response.data+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
                           
                        }
                    }
                });	

   });

   

	 }

}		
else{
	 
	
 
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {


 $.ajax({
                   url: ""+useWeb+"/Attendance/upload_base64",
                    type:'post',
                 data:'{"file" : "'+file+'"}',
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){
							console.log(response); 
	
	
	 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
        data:' {"photo":"'+response.data+'", "username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+valradios+'", "kondisi":"'+valradios2+'", "note_kondisi":"Sehat", "note_lain":""}' ,
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
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
				   
				   
							 
                        }else{
							
								myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+response.data+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
                           
                        }
                    }
                });	

   });
	
	 
}	 */

	
 
if (file==''){
			
				myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Belum Melakukan Selfie</p> ',
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
                   url: ""+useWeb+"/Attendance/upload_base64",
                    type:'post',
                 data:'{"file" : "'+file+'"}',
                    contentType: false,
                    processData: false,
                    success:function(response){
                        if(response != 0){
							console.log(response); 
	
	
	 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
	data:' {"photo":"'+response.data+'", "username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+sistemKerjaAbsen+'", "kondisi":"'+statusFit+'", "note_kondisi":"'+statusFitNote+'", "note_lain":"'+kon5+'"}' ,
   contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	    console.log(data);
		 		
 myApp.hidePreloader();
		var msgabsen=data.message; 
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
 
    });
 		
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   
				   
							 
                        }else{
							
								myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+response.data+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
                           
                        }
                    }
                });	
				
				

   });
   
		}
	 
});



			
			
 
 myApp.hidePreloader();
}); 