 
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
myApp.onPageInit("12-fitunfitnon", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime);
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen").innerHTML = formatted;


$$('.btn-proses').on('click', function () {
	
	 
 
 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var strCondition = page.query.condition; 
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
		   
 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong");
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
	
}	
});



			
			
 
 myApp.hidePreloader();
}); 