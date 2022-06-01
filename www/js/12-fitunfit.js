 
  function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
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
myApp.onPageInit("12-fitunfit", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 
var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime);
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen-dalam-area").innerHTML = formatted;


 
var ya2_1=localStorage.getItem("Logon-Ya2_1");
var alasanAbsen=localStorage.getItem("Logon-Alasan2_1");
 
		
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

$$('.btn-proses').on('click', function () {
	
	 
 
 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var strCondition = page.query.condition; 
	 
 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong");
	 
	 
	 /*
var strnoted = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
 

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
		   
			console.log(lat);
			console.log(lang);	
			console.log(strnoted.replace(/(?:\r\n|\r|\n)/g, '<br>'));	
var radios = document.getElementsByName('my-radio');


for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios[i].value);
		var valradios=radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 

if(valradios=='0'){
	
	
	
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

}	else{	
 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
		 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" :"'+strCondition+'", "note":"'+strpenyakit+'","note_lain":"'+strnoted+'", "kondisi":"'+valradios+'"}' , 
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

   });

   

	 }

}
		
else{
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'","note":"Sehat", "note_lain":"",  "kondisi":"'+valradios+'"}' ,
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

   });
	
}	

*/



	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" :"'+strCondition+'", "note":"'+statusFitNote+'","note_lain":"'+kon5+'", "kondisi":"'+statusFit+'"}' , 
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

   });
});



			
			
 
 myApp.hidePreloader();
}); 