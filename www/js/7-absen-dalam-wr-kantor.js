 
myApp.onPageInit("7-absen-dalam-wr-kantor", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 



$$('.btn-proses-wr').on('click', function () {
	
	 var strHasil = $$(".txtHasil").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
	 var strKeg = $$(".txtKeg").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
console.log(strHasil);
console.log(strKeg);

 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong");
	 
	 
	 var valradios = page.query.kondisi;  
	 var strCondition = page.query.strCondition; 
	 var strnoted = page.query.note;  
	 var strnote_lain = page.query.note_lain;  
	 
	 
	
	 var radios2 = document.getElementsByName('my-radio2');
for (var i = 0, length = radios2.length; i < length; i++) {
    if (radios2[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios2[i].value);
		var valradios2=radios2[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

			console.log(lat);
			console.log(lang);	 
			console.log(strnoted);		
 
 
 if (strKeg=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan Kegiatan Kosong</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (strHasil=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Keterangan Hasil Kosong</p> ',
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

if(valradios=='0'){
	
	
	 	
 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	  
	 
		 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strnoted+'", "note_lain":"'+strnote_lain+'",  "kondisi":"'+valradios+'"}' ,
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
				   
				    $.ajax({
     url: ""+useWeb+"/Attendance/workingreport_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "wr_keg" : "'+strKeg+'",  "wr_hasil" : "'+strHasil+'",  "wr_status" : "'+valradios2+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	   	
	   
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
				   
					   

   });

   

	  

}
		
else{
	
	myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	
	
	 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"Sehat", "note_lain":"",  "kondisi":"'+valradios+'"}' ,
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
				   
				   
			  $.ajax({
     url: ""+useWeb+"/Attendance/workingreport_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "wr_keg" : "'+strKeg+'",  "wr_hasil" : "'+strHasil+'",  "wr_status" : "'+valradios2+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	   
	   
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
	
		 

   });
	
}

 }	
});



			
			
 
 myApp.hidePreloader();
}); 