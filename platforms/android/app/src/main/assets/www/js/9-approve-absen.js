 
 
///load 
myApp.onPageInit("9-approve-absen", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 
	var strId = page.query.Id; 
	var strdate = page.query.date; 
	var strjam = page.query.jam; 
	var strjammasuk = page.query.jammasuk; 
	var strnote = page.query.note; 
	var strnama = page.query.nama; 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 

 console.log(strId);
  console.log(strdate);
   console.log(strjam);
    console.log(strnote);
	 var dtabsenmintaapp= []; 
	 var dataPermintaanApp =  '<div class="d-flex">'+
                   ' <div class="d-flex align-items-center mr-4 text-muted font-weight-light">'+
                     ' <i class="mdi mdi-account-outline icon-sm mr-2"></i>'+
                     ' <span>'+strnama+''+
                    '</div>'+
                   ' <div class="d-flex align-items-center text-muted font-weight-light">'+
                     ' <i class="mdi mdi-calendar-text icon-sm mr-2"></i>'+
                     ' <span>'+strdate+'</span>'+
                   ' </div>'+ 
                 ' </div>'+
				 '<div class="d-flex">'+
                   ' <div class="d-flex align-items-center mr-4 text-muted font-weight-light">'+
                     '  <i class="mdi mdi-clock icon-sm mr-2"></i>'+
                     ' <span>Masuk: '+strjammasuk+''+
                    '</div>'+
                   ' <div class="d-flex align-items-center text-muted font-weight-light">'+
                    '  <i class="mdi mdi-clock icon-sm mr-2"></i>'+
                     ' <span>Keluar: '+strjam+'</span>'+
                   ' </div>'+ 
                 ' </div>'+
				 '<div class="d-flex mt-2 align-items-top">'+ 
				  '<div class="mb-0 flex-grow">  <br> <p class="mb-0  " style="color:#047edf"><b>Note:</b></p><p><b>'+strnote+' </b></p> <br></div> </div>';
					 
		
				 dtabsenmintaapp.push(dataPermintaanApp);
					 
	 
	 document.getElementById("data-absen-minta-app").innerHTML = dtabsenmintaapp.join(" ");
 
 
 $$('.btn-action-approve').on('click', function () {
	 
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		$.ajax({
     url: ""+useWeb+"/Attendance/do_approve",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "id" : "'+strId+'",  "action" : "A",  "noteapp" : "OK"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		 
	
var msgabsen=data.message;
		var dstatus=data.status;
 if (dstatus==false)
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			 onClick: function () {
				 localStorage.clear();
				mainView.router.loadPage('1-index-login.html');
			
				}
		  }  
		]
	});

 myApp.hidePreloader();	
 		
 }else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('3-history-gps.html');
			
				}
		  }  
		]
	}); 
 		
 myApp.hidePreloader();	
					
    }} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
		
		 
		
		
	 
	 
	 
	  
	 
});
});
 
 myApp.hidePreloader();
}); 