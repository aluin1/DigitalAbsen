 
 
///load 
myApp.onPageInit("8-hasil-pencarian-absen", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 
var strFrom = page.query.from; 
var strTo = page.query.to; 
  
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken");
	 var strposid = localStorage.getItem("Logon-ATASAN_POSIDI");
	 
var strNamaLengkap = localStorage.getItem("Logon-EMPLOYEE_NAMA"); 
var strTitle = localStorage.getItem("Logon-EMPLOYEE_POSTEXT"); 

console.log(strNamaLengkap);
	 
var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime.replace(/\s/, 'T'));
date.setDate(date.getDate() - 30);
dateFromString = date.getFullYear()+'-'
				+ ('0' + (date.getMonth()+1)).slice(-2) + '-'
				+('0' + date.getDate()).slice(-2);  
let dateFrom =dateFromString ; 
 

var datenow = new Date(asiaTime.replace(/\s/, 'T'));
var datenowString;
datenow.setDate(datenow.getDate());
datenowString = datenow.getFullYear()+'-'
				+ ('0' + (datenow.getMonth()+1)).slice(-2) + '-'
				+('0' + datenow.getDate()).slice(-2);  
let strTo2 = datenowString;	 
console.log(datenowString);


var datenow3 = new Date(asiaTime.replace(/\s/, 'T'));

datenow3.setDate(datenow3.getDate() -1);

strTo3String = datenow3.getFullYear()+'-'
				+ ('0' + (datenow3.getMonth()+1)).slice(-2) + '-'
				+('0' + datenow3.getDate()).slice(-2);
let strTo3 =strTo3String ; 

 
 console.log(strFrom);
  console.log(strTo2);
   console.log(strTo3);
   
   
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	 $.ajax({
    url: ""+useWeb+"/attendance/attend_personal",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "from" : "'+strFrom+'",  "to" : "'+strTo+'"}' ,
	contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		 // callback(data);
	    console.log(data);
var msgabsen=data.message;
		var dstatus=data.status;
 if (dstatus==false & msgabsen=='Token is Expired.')
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
 		
 }
 else if (dstatus==false )
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
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
      
		 	 var dtabsen=data.data;
			var i; 
			
			 var datauserq= []; 
			  
						 	 for (i = 0; i < dtabsen.length; i++) {  
							 console.log(dtabsen[i]);   
					 
					 	var timecom=dtabsen[i].time_come.substring(0, 5);
						var wr_keg=dtabsen[i].StatusWR; 
						
						
						
							
						
						if (dtabsen[i].date_attend_absen <  strTo2 && dtabsen[i].date_attend_absen >= dateFrom  ){
							
							if (dtabsen[i].time_return==null){
							
							var timereturn='<button   class="request  badge badge-info"   data-date="'+dtabsen[i].date_attend_absen+'"  data-jammasuk="'+timecom+'" data-nopek="'+dtabsen[i].EMPLOYEE_NOPEK+'" >Request</button>'; 
						}else{
							var timereturn=dtabsen[i].time_return.substring(0, 5); 
							
						}
							
						}
						else{
							if (dtabsen[i].time_return==null && dtabsen[i].date_attend_absen ==strTo3 ){
							
							var timereturn=''; 
						}else if (dtabsen[i].time_return==null  && dtabsen[i].date_attend_absen < strTo3 && dtabsen[i].date_attend_absen >= dateFrom  ){
							
						var timereturn='<button   class="request  badge badge-info"   data-date="'+dtabsen[i].date_attend_absen+'"  data-jammasuk="'+timecom+'" data-nopek="'+dtabsen[i].EMPLOYEE_NOPEK+'" >Request</button>'; 
						}
						else if (dtabsen[i].time_return==null && dtabsen[i].date_attend_absen <  dateFrom  ){
							
							var timereturn='Expired'; 
						}
						else{
							if (dtabsen[i].time_return==null){
								
								var timereturn=''; 
							}else{
							var timereturn=dtabsen[i].time_return.substring(0, 5); 
							}
							
						}
							
						}
						
						
			if (dtabsen[i].posisi==0){
							
							var strposisi='NO'; 
						}else{
							var strposisi='YES'; 
							
						}			
						
						 
				const months = ["Jan", "Feb", "Mar","Apr", "Mei", "jun", "jul", "Ags", "Sep", "Okt", "Nov", "Des"];
let current_datetime = new Date(dtabsen[i].date_attend_absen)
let formatted_date_absen = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
 formatted_date_absen2 = current_datetime.getFullYear()+'-'
				+ ('0' + (current_datetime.getMonth()+1)).slice(-2) + '-'
				+('0' + current_datetime.getDate()).slice(-2);  

console.log(formatted_date_absen)	

var vstatus=dtabsen[i].status;
if (vstatus==null){
	 var txtstat="Absen Normal"; 
	
}else{
if (vstatus.substring(0, 1)=="P"){
					 	 var txtstat="<label style='color:#198ae3'>Pending</label>"; 
						}else if (vstatus.substring(0, 1)=="A"){
							 var txtstat="<label style='color:#1bcfb4'>Approved</label>";  
							
						}else if (vstatus.substring(0, 1)=="R"){  
							 var txtstat="<label style='color:#fe7c96'>Rejected</label>";  
							
						}else    {
							 var txtstat="<label style='color:#198ae3'>Not Found Status</label>";  
							
						} 	 } 	 

 

				   
  if (wr_keg==1){
	  var btnWR='<label class="wp badge badge-info" data-title="'+strTitle+'" data-nama="'+strNamaLengkap+'" data-wp-read="'+formatted_date_absen+'" data-wp="'+formatted_date_absen2+'" data-nopek="'+dtabsen[i].EMPLOYEE_NOPEK+'"   > Open</label> ';
  
   
   }else{
	   var btnWR='';
  }
 
  if (dtabsen[i].StatusFitNote==null){
	 var strStatusFitNote='';
	 
 }else
 { 
 var strStatusFitNote=dtabsen[i].StatusFitNote;
}

 if (dtabsen[i].StatusFitNote=="Sehat"){
	 var btnFit='Sehat';
	 
 }
 else  if (dtabsen[i].StatusFitNote==""){
	 var btnFit='';
	 
 }
 else if (dtabsen[i].StatusFitNote==null){
	 var btnFit='';
	 
 }
 else
 { 
var btnFit='<label class="btn-fit badge badge-info" data-title="'+strTitle+'" data-nama="'+strNamaLengkap+'" data-wp="'+formatted_date_absen+'" data-ket="'+dtabsen[i].StatusFitNote_Lain+'"  data-gej="'+strStatusFitNote.replace(/,/g,'<br>')+'"> Keterangan</label>';
}
								   
	var dataAbsenUser =  ' <tr>'+
                          '<td> '+formatted_date_absen+' </td>'+
                          '<td> '+timecom+' </td>'+
                          '<td> '+timereturn+' </td>'+
                          '<td> '+strposisi+' </td>'+
                          '<td>  '+dtabsen[i].note+'  </td>' +
                          '<td>  '+txtstat+'  </td> '+
						  '<td> '+btnFit+'  </td>'+
						   '<td> '+btnWR+'</td>  </tr>';
					 
			
				datauserq.push(dataAbsenUser);
					 
				 }
				 
				 
 
	 document.getElementById("data-absen-list").innerHTML = datauserq.join(" ");
	  
  const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
	
let current_from = new Date(strFrom)
let formatted_from = current_from.getDate() + " " + months[current_from.getMonth()] + " " + current_from.getFullYear()

let current_to = new Date(strTo)
let formatted_to = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear()

 		document.getElementById("date-from").innerHTML = formatted_from;
	   document.getElementById("date-to").innerHTML = formatted_to;
					
 myApp.hidePreloader();	
 
 $$('.request').on('click', function () {
	  var strDate = $$(this).attr("data-date");
	   var strJammasuk = $$(this).attr("data-jammasuk");
	   var strNopek = $$(this).attr("data-nopek");
	  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Permintaan Absen Keluar:</p> <div class="list-block"> <label style="color: #047edf; font-size: 12px;  margin: 10px 10px 10px 10px;">Jam Keluar:</label><input type="time"   class="form-control txtjamReq "  style="border: 1px solid #0980df;padding: 10px; " ></input> <label style="color: #047edf; font-size: 12px;  margin: 10px 10px 10px 10px;">Catatan:</label><textarea type="text"   class="form-control txtnoteReq " style="border: 1px solid #047edf!important;"  ></textarea></div>     ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true
		  } , {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
				 var strJam = $$(".txtjamReq").val(); 
				 var strNote = $$(".txtnoteReq").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
				 if (strJam == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Jam Keluar harus diisi. </p><p style="color:#047edf;font-size:12px; margin-bottom: 0px;">Silahkan coba kembali</p> ',
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
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Catatan harus diisi.</p><p style="color:#047edf;font-size:12px; margin-bottom: 0px;">Silahkan coba kembali</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 }); 
	  myApp.hidePreloader();	
	}
	else if (strNote != '' & strNote != ''){
		 
		$.ajax({
    url: ""+useWeb+"/attendance/doapprovekeluar",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "nopek" : "'+strNopek+'", "date" : "'+strDate+'", "posid" : "'+strposid+'", "jammasuk" : "'+strJammasuk+'", "jamkeluar" : "'+strJam+'", "note" : "'+strNote+'"}' ,
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
		 else if (dstatus==false & msgabsen=='Token is Expired.')
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
 		
 }
		 else  
 {
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true 
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
				    	
		
	} else{
		
		
 myApp.hidePreloader();	
		
	}
	});
				} 
		  }  
		]
	});
	  
  });
  
  
  $$('.btn-fit').on('click', function () { 
  
	   var strDatawp = $$(this).attr("data-wp");
	   var strDataNama = $$(this).attr("data-nama");
	   var strDatatitle = $$(this).attr("data-title");
	   var strDataket = $$(this).attr("data-ket");
	   var strDatagej = $$(this).attr("data-gej");
	 var popupHTML = '<div class="popup " style="    background-color: #fff;" >'+
					'<div class="content-block " style="margin: 15px 0;" align="right"><p style="margin-bottom: 0!important;"><a href="#" class="close-popup close-picker"><label class=" badge badge-danger"   > Close</label></a></p></div>'+
     	    '<div class="content-block  " style="margin: 15px 0;" >'+
		'<div align="center"><h4>Keterangan Kesehatan</h4></div>'+
                 
					' <table width="100%" class="table">'+
					 ' <tr>'+
					 ' <td width="40%">Nama: </td>'+
					 ' <td>'+strDataNama+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Posisi: </td>'+
					 ' <td>'+strDatatitle+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Tanggal Absen: </td>'+
					 ' <td>'+strDatawp+'</td>'+
					 ' </tr>'+ 
					 ' <tr>'+
					 ' <td><br></td>'+
					 ' <td> </td>'+
					 ' </tr>'+ 
					 '</table>'+
					  '<div class="table ">'+
					 ' <table width="100%">'+
					' <tr style="margin-top:60px">'+
					 ' <td width="40%"> Gejala: </td>'+
					 ' <td>'+strDatagej+'</td>'+
					 ' </tr>'+
					 ' <tr>'+ 
					 
					 ' <tr>'+
					 ' <td width="40%">Keterangan lain: </td>'+
					 ' <td>'+strDataket+'</td>'+
					 ' </tr>'+
					 ' <tr>'+  
					  
					 ' </table></div>';
                     
                    '</div> '+
                  '</div>';
  myApp.popup(popupHTML);
	  
  }); 
  
 $$('.wp').on('click', function () {
	   var strDatawp = $$(this).attr("data-wp");
	   var strDatawpread = $$(this).attr("data-wp-read");
	   var strDataNama = $$(this).attr("data-nama"); 
	   var strNopek = $$(this).attr("data-nopek"); 

	   var strDatatitle = $$(this).attr("data-title"); 

	   var workingsave=[];	  
			myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {	  	 
 $.ajax({
     url: ""+useWeb+"/Attendance/workingreport_pertanggal",
    type: "POST",
	 data:' {"nopek" : "'+strNopek+'", "date":"'+strDatawp+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		console.log(data.data);
		var dtwr=data.data;
		  for (i = 0; i < dtwr.length; i++) {
			  
			  var dataWorkingSave =   '<div class="table  ">  <table width="100%" >'+
			  ' <tr>'+
					 ' <td colspan="2"><br> </td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td width="40%">Kegiatan: </td>'+
					 ' <td>'+dtwr[i].WR_Kegiatan+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Status: </td>'+
					 ' <td>'+dtwr[i].WR_Status+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Hasil: </td>'+
					 ' <td>'+dtwr[i].WR_Hasil+'</td>'+
					   ' </tr>'+
					    '</table></div>';	
			workingsave.push(dataWorkingSave);
			
 myApp.hidePreloader();
			 }
			  
		document.getElementById("data-working").innerHTML = workingsave.join(" ");
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   });
				   
	   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
	 var popupHTML = '<div class="popup " style="    background-color: #fff;" >'+
                    '<div class="content-block">'+
					 '<div align="right"><p style="margin-bottom: 0!important;"><a href="#" class="close-popup"><label class=" badge badge-danger"   > Close</label></a></p></div>'+
					'<div align="center"><h4>Working Activity</h4></div>'+
                     ' <table width="100%" class="table">'+
					 ' <tr>'+
					 ' <td width="40%">Nama: </td>'+
					 ' <td>'+strDataNama+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td width="40%">Jabatan: </td>'+
					 ' <td>'+strDatatitle+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Tanggal Absen: </td>'+
					 ' <td>'+strDatawpread+'</td>'+
					 ' </tr>'+ 
					 '</table>'+
					  '<div class="table ex4">'+
					 ' <table width="100%">'+
					 ' <tr>'+
					 ' <td colspan="2"><br> </td>'+
					 ' </tr>'+  
					 ' <div  id="data-working"></div>'+ 
					 ' </table></div>';
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
	  
	  
 myApp.hidePreloader();
	   });
  });		
  
 				
    } 
	} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });
				   });
				
 
 
 
 myApp.hidePreloader();
}); 