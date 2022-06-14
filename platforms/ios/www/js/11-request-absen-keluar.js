 
 
///load 
myApp.onPageInit("11-request-absen-keluar", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	  
 
var strdate = page.query.date;
var strjammasuk = page.query.jammasuk;
var strnopek = page.query.nopek;
var strposid = page.query.posid;
	
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
 
  console.log(strdate);
   console.log(strjammasuk); 
   
   var dtabsenmintaappkeluar= []; 
	 var dataPermintaanAppkeluar =  '<div class="d-flex">'+
                   ' <div class="d-flex align-items-center mr-4 text-muted font-weight-light">'+
                     ' <i class="mdi mdi-account-outline icon-sm mr-2"></i>'+
                     ' <span>'+strUsername+''+
                    '</div>'+
                   ' <div class="d-flex align-items-center text-muted font-weight-light">'+
                     ' <i class="mdi mdi-calendar-text icon-sm mr-2"></i>'+
                     ' <span>'+strdate+'</span>'+
                   ' </div>'+
					' <div style="padding-left: 20px;" class="d-flex align-items-center text-muted font-weight-light">'+
                    '  <i class="mdi mdi-clock icon-sm mr-2"></i>'+
                    '  <span>'+strjammasuk+'</span>'+
                   ' </div>'+
                 ' </div>'+
				 '<div class="d-flex mt-2 align-items-top">'+ 
				  '  </div>';
					 
		
				 dtabsenmintaappkeluar.push(dataPermintaanAppkeluar);
					 
	 
	 document.getElementById("data-absen-keluar-minta-app").innerHTML = dtabsenmintaappkeluar.join(" ");
 
 
 $$('.btn-action-approve').on('click', function () {
	 var strJam = $$(".txtJam").val(); 
	 var strNote = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>');


	 
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		
		if (strJam != '' && strNote !=''){
			
			$.ajax({
    url: ""+useWeb+"/attendance/doapprovekeluar",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "nopek" : "'+strnopek+'", "date" : "'+strdate+'", "posid" : "'+strposid+'", "jammasuk" : "'+strjammasuk+'", "jamkeluar" : "'+strJam+'", "note" : "'+strNote+'"}' ,
	contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		
var msgabsen=data.message;
		var dstatus=data.status;
		 if (dstatus== true){
			 
			 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('2-history-absen.html');
			
				}
		  }  
		]
	});  
	
	  myApp.hidePreloader();
			 
		 }
		 else  
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	});

 myApp.hidePreloader();	
 		
 }
 		
  	 
 				 
 
						 
				 
 			 
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
	}
		
	else if (strJam == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Jam keluar harus diisi</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 });
	  myApp.hidePreloader();
	}
	else if (strNote == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Catatan harus diisi</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 });
	  myApp.hidePreloader();
	}
	
	 });
 });
 myApp.hidePreloader();
}); 