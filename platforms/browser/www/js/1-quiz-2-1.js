 function showq2_1(){
  document.getElementById('divq3').style.display ='none';
}
function showq2_2(){
  document.getElementById('divq3').style.display = 'block';
}
    
myApp.onPageInit("1-quiz-2-1", function(page){
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
 var strUsername = localStorage.getItem("LogonUsername");
 var strToken = localStorage.getItem("LogonToken"); 	
 var strNip = localStorage.getItem("LogonNip");

var strEMPLOYEE_NAMA = localStorage.getItem("Logon-EMPLOYEE_NAMA");	
var quiz1 = $$(".txt1").val();



var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen2_1").innerHTML = formatted; 
 
 
		  
 $.ajax({
     url: ""+useWeb+"/Attendance/datakuis2_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
		
		var datatxt3= []; 
		console.log(data.data);
		var dttm=data.data;
		 for (i = 0; i < dttm.length; i++) {
			  
			  
			
			 var IsolasiMandiri= dttm[i].IsolasiMandiri;
			 
			 
			 if (dttm[i].AlasanIsolasiMandiri=='' || dttm[i].AlasanIsolasiMandiri==null){
				var AlasanIsolasiMandiri=',,,,,'
				 
			 }else{
				 var AlasanIsolasiMandiri= dttm[i].AlasanIsolasiMandiri.split(",");
			 }
var kon1 = AlasanIsolasiMandiri[0];
var kon2 = AlasanIsolasiMandiri[1];
var kon3 = AlasanIsolasiMandiri[2];
var kon4 = AlasanIsolasiMandiri[3];
var kon5 = AlasanIsolasiMandiri[4];



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


if (kon5==","){
	var Valkon5='';
	
}else{
	var Valkon5=kon5;
	
}		

var datanotekondisi=Valkon5.replace(/<br[^>]*>/g, "\n");	  
			 if (IsolasiMandiri=='Ya'){
				 var rtxt3='checked="checked"';
				 var rtxt32='';
				 var showtxt3='';
	
					}else{
				 var rtxt3=' ';
				 var rtxt32='checked="checked"';
				 var showtxt3='class="hide"';
	
				}
				
		  var txt3='<ul>'+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq2_2();">'+
					'<input type="radio" name="txt3"   value="Ya" '+rtxt3+' >'+
					'<div class="item-media">'+
					'<i class="icon icon-form-checkbox"></i>'+
					'</div>'+
					'<div class="item-inner">'+
					'<div class="item-title">Ya</div>'+
					'</div>'+
					'</label>'+
					'</li>'+
					'<li>'+
					'<label class="label-checkbox item-content" onclick="showq2_1();">'+
					'<input type="radio" name="txt3"    value="Tidak" '+rtxt32+'>'+
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
					'<div id="divq3" '+showtxt3+'>'+
					'<table  width="100%">'+
					'<tr><td style="padding:10px!important" colspan="3">Alasan Isolasi Mandiri: '+
  
					'<div class="form-group" style="margin: 1.0rem 0.5rem 0.5rem 0.5rem"> '+
					'<label class="container">Kontak Erat'+
					'<input type="checkbox"  class="txtAlasan" value="Kontak Erat" '+checkkon1+'>'+
					'<span class="checkmark"></span>'+
					'</label>'+
					'<label class="container" >PCR +'+
					'<input type="checkbox"  class="txtAlasan" value="PCR +" '+checkkon2+'>'+
					'<span class="checkmark"></span>'+
					'</label>'+
					'<label class="container">Bergejala Covid'+
					'<input type="checkbox"  class="txtAlasan" value="Bergejala Covid" '+checkkon3+'>'+
					'<span class="checkmark"></span>'+
					'</label>'+
					'<label class="container">Menunggu Hasil PCR'+
					'<input type="checkbox"  class="txtAlasan" value="Menunggu Hasil PCR" '+checkkon4+'>'+
					'<span class="checkmark"></span>'+
					'</label>'+
' <p style=" margin: 10px 10px 10px 10px !important;">Lainnya:</p>'+
   '<textarea type="text"   class="form-control txtNote "  >'+datanotekondisi+'</textarea> '+
  ' </div> '+
					'</div> </td></tr></table></div>';
             
			 
			 
	localStorage.setItem('Logon-IdAbsen', dttm[i].Id);
					datatxt3.push(txt3);
					
					
					 
					
					}
		   document.getElementById("datatxt3").innerHTML = datatxt3.join(" ");
		   
		   	
  myApp.hidePreloader();
		   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 

	
		   

$$(".btn2_1").on("click", function(){
	
	
	 var strnoted = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
var quiz3 = document.getElementsByName('txt3'); 

var strAlasan = [];
           $('.txtAlasan').each(function(){
                if($(this).is(":checked"))
                {
                     strAlasan.push($(this).val());
                }else{
					  strAlasan.push('');
					
				}
           });
		    strAlasan.push(strnoted);
    strAlasan = strAlasan.toString();	

for (var i = 0, length = quiz3.length; i < length; i++) {
    if (quiz3[i].checked) {
        // do whatever you want with the checked radio
        console.log(quiz3[i].value);
		var valquiz3=quiz3[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

	
		myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		if (valquiz3  == 'Ya' ) {
			if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Alasan Isolasi Mandiri</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();

}else{
			
	
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
 setTimeout(function () {
	 
	 		$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis2_1",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "isolasimandiri" : "'+valquiz3+'", "alasanisolasimandiri" : "'+strAlasan+'"}' ,
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
	
	
	localStorage.setItem('Logon-Ya2_1', valquiz3); 
	localStorage.setItem('Logon-Alasan2_1', strAlasan); 
	 
		mainView.router.loadPage('1-quiz-3.html'); 
		myApp.hidePreloader();
		 }); 
}

}else {
	  
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	setTimeout(function () {
		$.ajax({
     url: ""+useWeb+"/Attendance/add_kuis2_1",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,   "isolasimandiri" : "'+valquiz3+'", "alasanisolasimandiri" : ""}' ,
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
	
	localStorage.setItem('Logon-Ya2_1', valquiz3); 
		mainView.router.loadPage('1-quiz-5.html'); 
		myApp.hidePreloader();
		 });
	
	/*myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">page 13 M</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});*/
	 myApp.hidePreloader();
			 

}  
		myApp.hidePreloader();
		 });
		 
		 

		 });

		
document.getElementById("nopek2_1").innerHTML = strNip;	
document.getElementById("full-name-user2_1").innerHTML = strEMPLOYEE_NAMA;	
    myApp.hidePreloader();
 
 });
});  