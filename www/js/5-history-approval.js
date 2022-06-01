 
 
///load  
myApp.onPageInit("5-history-approval", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');


	var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
	var date = new Date(asiaTime);
	 date.setDate(date.getDate() - 30);
var dateFrom = date.toISOString().split('T')[0];
  console.log(dateFrom);
  
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

var datadfa=[];
 var strPusha ='<form class="forms-sample">'+
                   ' <div class="form-group">'+
                    '  <label  ><b  style="color:#047edf">Dari </b></label> '+
					'  <input type="date" value="'+dateFrom+'"   class="form-control txtfromc   "  />'+
                   ' </div>'+
                   
                   ' <div class="form-group"> '+
					' <label  ><b  style="color:#047edf">Sampai</b> </label> '+
					  
               '<input type="date"  value="'+dateTo+'"   class="form-control txttoc   "  />'+
                   ' </div>'+
                     
					'<button type="button" name="submit" class="btnCaric btn btn-gradient-primary mr-2" ><b style="font-size:15px">Cari Data</b></button>'+
				 
				'</form>';
	 datadfa.push(strPusha);
		
			  
				  document.getElementById("form-caria").innerHTML = datadfa; 	

$$('.btnCaric').on('click', function () {
	
	
 var strFrom = $$(".txtfromc").val();
		var strTo = $$(".txttoc").val();
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
	
		localStorage.setItem('LogonFrom3', strFrom);
	 localStorage.setItem('LogonTo3', strTo);
	
				mainView.router.loadPage('5-hasil-history-approval.html?from='+strFrom+'&&to='+strTo+'');
				
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

	 
  

 
 myApp.hidePreloader();
}); 