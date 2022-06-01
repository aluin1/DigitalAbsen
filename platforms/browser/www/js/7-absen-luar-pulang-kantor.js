 
  function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

 
  function show1(){
  document.getElementById('div2').style.display ='none';
}
function show2(){
  document.getElementById('div2').style.display = 'block';
}
///load 
myApp.onPageInit("7-absen-luar-pulang-kantor", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');

 var pictureSource;   // picture source
      var destinationType; // sets the format of returned value 
      var image = "";
	   var file = "";



var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var strCondition = page.query.condition; 

var radios = document.getElementsByName('my-radio');
var radios2 = document.getElementsByName('my-radio2');

var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
//document.getElementById("date-absen").innerHTML = formatted;

	 
myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
		 $.ajax({
     url: ""+useWeb+"/Attendance/attend_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		var dtkondisi=data.data;
		var i;
		var datauserq= []; 
		
		  for (i = 0; i < dtkondisi.length; i++) {
			   console.log(dtkondisi[i].Id);
				var Id= dtkondisi[i].Id;
			  console.log(dtkondisi[i].username); 
			  if (dtkondisi[i].StatusFit==1){
				  var check='checked="checked"';
				  var check2=''; 
				  var display='display:none';
				  
				  
				  
			  }
			  else if (dtkondisi[i].StatusFit==0){
				   var check='';
				  var check2='checked="checked"'; 
				  var display='display:block';
				  
			  }
			  else{
				    var check='';
				  var  check=''; 
				  var display='';
				  
			  }
			   
var datanotekondisilain=dtkondisi[i].StatusFitNote.split(",");

var alasan_absen= dtkondisi[i].note;
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

 

if (kon1=="Kontak Erat"){
	var checkkon1='checked="checked"';
	
}else{
	var checkkon1=' ';
	
}


if (kon2=="PCR +"){
	var checkkon2='checked="checked"';
	
}else{
	var checkkon2=' ';
	
}

if (kon3=="Bergejala Covid"){
	var checkkon3='checked="checked"';
	
}else{
	var checkkon3=' ';
	
}


if (kon4=="Menunggu Hasil PCR"){
	var checkkon4='checked="checked"';
	
}else{
	var checkkon4=' ';
	
}


if (kon5=="Lainnya"){
	var checkkon5='checked="checked"';
	
}else{
	var checkkon5=' ';
	
}


 
 	  
console.log(dtkondisi[i].note);

  if (alasan_absen!="DINAS" & alasan_absen!="OFFDUTY" & alasan_absen!="RAPAT DI LUAR KANTOR"  & alasan_absen!="WORK FROM HOME" & dtkondisi[i].idLocation==0){
				  var checknote='checked="checked"'; 
				  var check2al=dtkondisi[i].note.replace(/<br[^>]*>/g, "\n");
				  var displayal='display:block';
				  var checkalsn1='';
				  var checkalsn2='';
				  var checkalsn3=''; 
				  var checkalsn4=''; 
				  } 
			   
	 if (alasan_absen!="DINAS" & alasan_absen!="OFFDUTY" & alasan_absen=="RAPAT DI LUAR KANTOR" & alasan_absen!="WORK FROM HOME"  & dtkondisi[i].idLocation==0){
				  var checknote='';
				  var check2al='';  
				  var displayal='display:none';
				  var checkalsn1='checked="checked"';
				  var checkalsn2='';
				  var checkalsn3=''; 
				  var checkalsn4=''; 
				  } 
			   	
	 if (alasan_absen!="DINAS" & alasan_absen=="OFFDUTY" & alasan_absen!="RAPAT DI LUAR KANTOR"  & alasan_absen!="WORK FROM HOME" & dtkondisi[i].idLocation==0){
				  var checknote='';
				   var check2al=''; 
				  var displayal='display:none';
				  var checkalsn1='';
				  var checkalsn2='checked="checked"';
				  var checkalsn3=''; 
				  var checkalsn4=''; 
				  } 	   
					   	
	 if (alasan_absen=="DINAS" & alasan_absen!="OFFDUTY" & alasan_absen!="RAPAT DI LUAR KANTOR"  & alasan_absen!="WORK FROM HOME" & dtkondisi[i].idLocation==0){
				  var checknote='';
				  var check2al=''; 
				  var displayal='display:none';
				  var checkalsn1='';
				  var checkalsn2='';
				  var checkalsn3='checked="checked"'; 
				  } 	   
					   	
	 if (alasan_absen!="DINAS" & alasan_absen!="OFFDUTY" & alasan_absen!="RAPAT DI LUAR KANTOR" & alasan_absen=="WORK FROM HOME" & dtkondisi[i].idLocation==0){
				  var checknote='';
				  var check2al=''; 
				  var displayal='display:none';
				  var checkalsn1='';
				  var checkalsn2='';
				  var checkalsn3=''; 
				  var checkalsn4='checked="checked"'; 
				  } 	     
			   
var datanotekondisi=dtkondisi[i].StatusFitNote_Lain.replace(/<br[^>]*>/g, "\n");
  if (datanotekondisi=="undefined")
 {
	 datanotekondisi="";
 }
			var dataAbsenUser =  '<div class="col-12 grid-margin ">'+
             ' <div class="card">'+
              '  <div class="card-body">'+
			 //' <form method="post" action="" > <div >  <input type="file" id="file" name="file" /> </div>  </form>'+
			'<table width="100%" class="table" > <tr> <td width="90%">    <h4 class="card-title" style="color:#047edf"> <i style="font-size:20px;" class="mdi mdi-calendar-check" ></i> '+
			'Tanggal Absen:<br> '+formatted+'</h4> '+
			' <h6   style="color:#fe7c96">*tanggal menyesuaikan WIB</h6>  '+
			' <h6   style="color:#fe7c96">*Tekan Tombol Kamera untuk mengambil Foto Selfie</h6></td>'+
		'<td><div class="preview"> <img src="images/icon8.png"  width="100" height="100" id = "cameraTakePicture" > </div></td> </tr> </table>'+
		'<h4 class="card-title" style="color:#047edf"> <i style="font-size:20px;" class="mdi mdi-check-circle-outline"></i>  Pilih Keterangan Absen:</h4>'+
		' <div class="d-flex mt-2 align-items-top">'+
		'  <div class="mb-0 flex-grow"> '+
		' <form class="forms-sample"> '+
		'   <ul>'+
		' <li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
       
       ' <input type="radio" name="my-radio2" value="RAPAT DI LUAR KANTOR" '+checkalsn1+'    >'+
       ' <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">RAPAT DI LUAR KANTOR</div>'+
       ' </div>'+
     ' </label>'+
  '  </li>'+ 
	 
   ' <li style=" border-radius: 50px; border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
       
       ' <input type="radio" name="my-radio2" value="OFFDUTY"  '+checkalsn2+' >'+
       ' <div class="item-media">'+
       '   <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">OFFDUTY</div>'+
       ' </div>'+
     ' </label>'+
   ' </li>'+
	 
   ' <li style=" border-radius: 50px; border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
       
       ' <input type="radio" name="my-radio2" value="WORK FROM HOME"  '+checkalsn4+' >'+
       ' <div class="item-media">'+
       '   <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">WORK FROM HOME</div>'+
       ' </div>'+
     ' </label>'+
   ' </li>'+
  ' <li style=" border-radius: 50px;     border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
    '  <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw1();">'+
      '  <input type="radio"  name="my-radio2" value="DINAS"  '+checkalsn3+' >'+
       ' <div class="item-media">'+
         ' <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
       '   <div class="item-title">DINAS</div>'+
      '  </div>'+
     ' </label>'+
  '  </li>'+
	 
	
	'<li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onclick="showw2();" >'+
     '   <input type="radio"  name="my-radio2" value="Other"  '+checknote+'  />'+
     '   <div class="item-media">'+
      '    <i class="icon icon-form-radio"></i>'+
      '  </div>'+
      '  <div class="item-inner">'+
        '  <div class="item-title">OTHER</div>'+
      '  </div>'+
    '  </label> '+
	' </ul>'+
	' <div id="div2" class="hide" style="'+displayal+'">'+
  ' <div class="form-group">'+
  ' <textarea type="text"   class="form-control txtNote2 "  >'+check2al+'</textarea>'+
  ' </div>'+
  ' </div>		 '+
  ' 	</form>'+
  '</div>    </div>  </div>  </div> </div>  </div>'+
				  '<div class="col-12   ">   <div class="card">   <div class="card-body">'+
			'<h4 class="card-title" style="color:#047edf;text-transform: uppercase;"> '+
			'<i style="font-size:20px;" class="mdi mdi-check-circle-outline"></i>  Pilih Kondisi Kesehatan:</h4>'+
			'<div class="mb-0 flex-grow "> '+
  ' <ul>   <li style=" border-radius: 50px;   border: 1px solid #047edf!important;margin-bottom: 10px!important; "> '+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onchange="show1();" >  '+
       ' <input type="radio" name="my-radio" value="1"   '+check+'   > '+
       ' <div class="item-media">  <i class="icon icon-form-radio"></i>  </div> '+
        '<div class="item-inner">  <div class="item-title">Kondisi Fit</div>  </div> '+
    '  </label> '+
   ' </li> '+
	'<li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; "> '+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onchange="show2();"  > '+
       ' <input type="radio"  name="my-radio" value="0"  '+check2+'   /> '+
       ' <div class="item-media">  <i class="icon icon-form-radio"></i> </div> '+
       ' <div class="item-inner">  <div class="item-title">Kondisi Tidak Fit</div> </div> '+
     ' </label>   </li> </ul> '+
	 ' <div id="div1" class="hide" style="'+display+'"> '+
  ' <div class="form-group">  '+
  	'  <label class="container">Kontak Erat'+
 ' <input type="checkbox"  class="txtPenyakit" value="Kontak Erat" '+checkkon1+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
'<label class="container" >PCR +'+
 ' <input type="checkbox"  class="txtPenyakit" value="PCR +"  '+checkkon2+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
'<label class="container">Bergejala Covid'+
 ' <input type="checkbox"  class="txtPenyakit" value="Bergejala Covid"   '+checkkon3+'>'+
  '<span class="checkmark"></span>'+
'</label>'+
'<label class="container">Menunggu Hasil PCR'+
  '<input type="checkbox"  class="txtPenyakit" value="Menunggu Hasil PCR"  '+checkkon4+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
/*
'<label class="container">Demam'+
 ' <input type="checkbox"  class="txtPenyakit" value="Demam"   '+checkkon5+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
*/
' <p style=" margin: 10px 10px 10px 10px !important;">Lainnya:</p>'+
   '<textarea type="text"   class="form-control txtNote "  >'+datanotekondisi+'</textarea> '+
  ' </div> '+
'</div>	 '+
 '<button type="button"   class=" btn-proses btn btn-gradient-primary mr-2" ><b style="font-size:15px">Next</b></button> '+
'</div></div>  </div>  </div>'; 
					 
			
				datauserq.push(dataAbsenUser);
				
 myApp.hidePreloader();
			  
		  }
		   document.getElementById("data-kondisi").innerHTML = datauserq.join(" ");
	
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
	 var strnoted = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
	 var strnoted2 = $$(".txtNote2").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
			 console.log(strnoted.replace(/(?:\r\n|\r|\n)/g, '<br>'));	
		
   // file = 'data:image/jpeg;base64,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';
	  file = image;	

		var strpenyakit = [];
           $('.txtPenyakit').each(function(){
                if($(this).is(":checked"))
                {
                     strpenyakit.push($(this).val());
                }else{
					  strpenyakit.push('');
					
				}
           });
    strpenyakit = strpenyakit.toString();

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
 
 if(valradios=='0' & valradios2=='Other'){
	
	 
	
 if (strnoted2  == '' ) {
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
else if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Kondisi tidak Fit Anda</p> ',
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
                            
 mainView.router.loadPage('7-absen-luar-wr-kantor.html?Id='+Id+'&&condition='+strCondition+'&&note='+strnoted2+'&&note_kondisi='+strpenyakit+'&&note_lain='+strnoted+'&&kondisi='+valradios+'&&foto='+response.data+''  ); 
	 myApp.hidePreloader();	
							 
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
 else if(valradios!='0' & valradios2=='Other'){
	
	
	
	  if (strnoted2  == '' ) {
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

}	else{	
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
							
							
	 
	 	mainView.router.loadPage('7-absen-luar-wr-kantor.html?Id='+Id+'&&condition='+strCondition+'&&note='+strnoted2+'&&note_kondisi=Sehat&&note_lain=&&kondisi='+valradios+'&&foto='+response.data+''  ); 
	 myApp.hidePreloader();
							 
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
 
 else if(valradios=='0' & valradios2!='Other'){
	
	
	
	 if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Kondisi tidak Fit Anda</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();

} else{	

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
							
							 
	 
	 
	 mainView.router.loadPage('7-absen-luar-wr-kantor.html?Id='+Id+'&&condition='+strCondition+'&&note='+valradios2+'&&note_kondisi='+strpenyakit+'&&note_lain='+strnoted+'&&kondisi='+valradios+'&&foto='+response.data+''  );  
 myApp.hidePreloader(); 
							 
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
							console.log(response.data);
                            
							  mainView.router.loadPage('7-absen-luar-wr-kantor.html?Id='+Id+'&&condition='+strCondition+'&&note='+valradios2+'&&note_kondisi=Sehat&&note_lain=&&kondisi='+valradios+'&&foto='+response.data+''  ); 
	 myApp.hidePreloader();
                        }else{
							console.log(response);
                           
                        }
                    }
                });
	 
		 
	 
	});
	 
	 
 }
  }

	}); 	
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });

   });


	
			
 
 myApp.hidePreloader();
}); 