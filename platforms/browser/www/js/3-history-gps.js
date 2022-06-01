 
 
///load  
myApp.onPageInit("3-history-gps", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');

 

var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime);
var dateString;
date.setDate(date.getDate()-30);
dateString = date.getFullYear()+'-'
				+ ('0' + (date.getMonth()+1)).slice(-2) + '-'
				+('0' + date.getDate()).slice(-2);  
var dateFrom = dateString;
  console.log(dateString);
  
   

var datenow = new Date(asiaTime);
var datenowString;
datenow.setDate(datenow.getDate());
datenowString = datenow.getFullYear()+'-'
				+ ('0' + (datenow.getMonth()+1)).slice(-2) + '-'
				+('0' + datenow.getDate()).slice(-2);  
let dateTo = datenowString;	 
console.log(datenowString);
  

var datadfab=[];
 var strPushab ='<form class="forms-sample">'+
                   ' <div class="form-group">'+
                    '  <label  ><b  style="color:#047edf">Dari </b></label> '+
					'  <input type="date" value="'+dateFrom+'"   class="form-control txtfromb   "  />'+
                   ' </div>'+
                   
                   ' <div class="form-group"> '+
					' <label  ><b  style="color:#047edf">Sampai</b> </label> '+
					  
               '<input type="date"  value="'+dateTo+'"   class="form-control txttob   "  />'+
                   ' </div>'+
				   
				     ' <div class="form-group"> '+
					' <label  ><b  style="color:#047edf">Nama</b> </label> '+
					  
               '<input type="text"  value=""   class="form-control txtnama   " style="padding: 0px 0px 0px 10px;  line-height: 44px;  border: 1px solid #047edf;" />'+
                   ' </div>'+
                     
					'<button type="button" name="submit" class="btnCarib btn btn-gradient-primary mr-2" ><b style="font-size:15px">Cari Data</b></button>'+
				 
				'</form>';
	 datadfab.push(strPushab);
		
			  
				  document.getElementById("form-cariab").innerHTML = datadfab; 	

$$('.btnCarib').on('click', function () {
	
	
 var strFrom = $$(".txtfromb").val();
		var strTo = $$(".txttob").val();
		var strNama = $$(".txtnama").val();
if  (strFrom == '' ) { 
		  myApp.modal({
		title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-calendar-text"></i> </div><p style="color:#047edf;font-size:13px;text-transform: uppercase;margin-bottom: 0px;">Dari Tanggal  Kosong</p> ',
		buttons: [
		   {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>' 
		  }  
		]
	})
	 }
	else  if  (strTo == '' ) { 
		  myApp.modal({
		title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-calendar-text"></i> </div><p style="color:#047edf;font-size:13px;text-transform: uppercase;margin-bottom: 0px;">Sampai Tanggal  Kosong</p> ',
		buttons: [
		   {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>' 
		  }  
		]
	})
	 }
	 else   if (strFrom != '' & strTo != ''){
	
		 
	
				mainView.router.loadPage('3-hasil-history-gps.html?from='+strFrom+'&&to='+strTo+'&&nama='+strNama+'');
				
	 }
	 
	  else {
			 	
	
			  myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-close-circle-outline"></i> </div><p style="color:#047edf;font-size:12px;">Maaf Data Kosong</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>' 
		   }  
	 	]
	 })
				
				  							 							 
					 
			 	}
});	 

	 
  

$$('.his-lok').on('click', function () {
	
				mainView.router.loadPage('1-homepage.html');
});

$$('.his-absen').on('click', function () {
	
				mainView.router.loadPage('2-history-absen.html');
});
$$('.btn-notif').on('click', function () {
	
				mainView.router.loadPage('4-history-notifikasi.html');
});

 
 myApp.hidePreloader();
}); 