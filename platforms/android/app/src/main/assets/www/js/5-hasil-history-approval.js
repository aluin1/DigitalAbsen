 
 
///load 
myApp.onPageInit("5-hasil-history-approval", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	 
var strFrom = page.query.from; 
var strTo = page.query.to; 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken");
	 var strposid = localStorage.getItem("Logon-ATASAN_POSIDI");
	 
	 
var strNamaLengkap = localStorage.getItem("Logon-EMPLOYEE_NAMA"); 
var strTitle = localStorage.getItem("Logon-EMPLOYEE_POSTEXT"); 
	 
 
 console.log(strUsername);
 console.log(strToken);
  
	 var strNip = localStorage.getItem("LogonNip");
	 
 console.log(strUsername);
 console.log(strToken);
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		
	 $.ajax({
    url: ""+useWeb+"/attendance/view_approve",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "nip" : "'+strNip+'",  "from" : "'+strFrom+'",  "to" : "'+strTo+'"}' ,
	contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		
var msgabsen=data.message;
		var dstatushisapp=data.status;
		if (dstatushisapp==false & msgabsen=='Token is Expired.')
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
  else if (dstatushisapp==false)
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
 

 
 else{
		var dtabsenapp=data.data;
		 	 var i; 
			
			 var datauserapp= []; 
			  
						 	 for (i = 0; i < dtabsenapp.length; i++) {  
							 console.log(dtabsenapp[i]); 
							 
							 
						          var wr_keg=dtabsenapp[i].StatusWR; 
								   
						     if (dtabsenapp[i].WR_Status==null){
					 	          var wr_stat=''
						     }else{
						          var wr_stat=dtabsenapp[i].WR_Status;
							
						           }
								   
							 if (dtabsenapp[i].WR_Hasil==null){
					 	          var wr_hasil=''
						     }else{
						          var wr_hasil=dtabsenapp[i].WR_Hasil;
							
						           }
								   
							  if (dtabsenapp[i].COSTCENTERNAME==null){
					 	          var strCOSTCENTERNAME=''
						     }else{
						          var strCOSTCENTERNAME=dtabsenapp[i].COSTCENTERNAME;
							
						           }
							 
							   if (dtabsenapp[i].ATASAN_USERNAME==null){
					 	          var strATASAN_USERNAME=''
						     }else{
						          var strATASAN_USERNAME=dtabsenapp[i].ATASAN_USERNAME;
							
						           }
								   
								      if (dtabsenapp[i].approve_by==null){
					 	          var strapprove_by=''
						     }else{
						          var strapprove_by=dtabsenapp[i].approve_by;
							
						           }
							 
							 
							 
					 if (dtabsenapp[i].time_come==null){
					 	 var timecome=""; 
						}else{
							var timecome=dtabsenapp[i].time_come.substring(0, 5); 
							
						}
						
						if (dtabsenapp[i].time_return==null){
					 	 var timereturn=""; 
						}else{
							var timereturn=dtabsenapp[i].time_return.substring(0, 5); 
							
						}
						
						  if (dtabsenapp[i].status.substring(0, 1)=="P"){
					 	  var txtstat="<label style='color:#198ae3'>Pending</label>"; 
						  var btnEdit='';
						}else if (dtabsenapp[i].status.substring(0, 1)=="A"){
							 var txtstat="<label style='color:#1bcfb4'>Approved</label>";   
						  var btnEdit='';
							
						}else if (dtabsenapp[i].status.substring(0, 1)=="R"){  
							 var txtstat="<label style='color:#fe7c96'>Reject</label>";  
						  var btnEdit='<span><i style="font-size:30px;color:#047edf" class="btneditAbsen mdi mdi-pencil-box" dateAbsen="'+dtabsenapp[i].date_attend+'" idAbsen="'+dtabsenapp[i].Id+'" ></i> </span>';
							
						}else    {
							 var txtstat="<label style='color:#198ae3'>Not Found Status</label>";   
							
						}
						
					 	 if (dtabsenapp[i].note_approve==null){
					 	 var note_approve=""; 
						}else{
							var note_approve=dtabsenapp[i].note_approve; 
							
						}
						
	
						
 const months = ["Jan", "Feb", "Mar","Apr", "Mei", "jun", "jul", "Ags", "Sep", "Okt", "Nov", "Des"];
let current_datetime = new Date(dtabsenapp[i].date_attend)
let formatted_date_absen = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
formatted_date_absen2 = current_datetime.getFullYear()+'-'
				+ ('0' + (current_datetime.getMonth()+1)).slice(-2) + '-'
				+('0' + current_datetime.getDate()).slice(-2);  
console.log(formatted_date_absen)	

 if (wr_keg==1){
	  var btnWR='<label class="wp badge badge-info" data-title="'+strTitle+'" data-nama="'+strNamaLengkap+'" data-wp-read="'+formatted_date_absen+'" data-wp="'+formatted_date_absen2+'"  data-nopek="'+dtabsenapp[i].nopek+'"    > Open</label> ';
  
   
   }else{
	   var btnWR='';
  }			

			   
	 var dataAbsenUserApproval =  ' <tr>'+
	   '<td>'+btnEdit+'</td>  '+
	   '<td>'+txtstat+'</td>  '+
                           '<td> '+formatted_date_absen+' </td>'+
                           '<td> '+timecome+' </td>'+
                           '<td> '+timereturn+' </td>'+
						   '<td> '+dtabsenapp[i].note+' </td>'+
						   '<td> '+strCOSTCENTERNAME+' </td>'  +
						   '<td> '+strATASAN_USERNAME+' </td>'  +
						   '<td> '+strapprove_by+' </td>'  +
						   '<td> '+note_approve+' </td>'  +
						   '<td> '+dtabsenapp[i].Tipe+' </td>'+
						   '<td>'+btnWR+' </td>  </tr>';
					 
			
				 datauserapp.push(dataAbsenUserApproval);
					 
				 }
				 
			 
	 document.getElementById("data-app-list").innerHTML = datauserapp.join(" ");
	const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
	
 		let current_from = new Date(strFrom)
let formatted_from = current_from.getDate() + " " + months[current_from.getMonth()] + " " + current_from.getFullYear()

let current_to = new Date(strTo)
let formatted_to = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear()

 		document.getElementById("date-from").innerHTML = formatted_from;
	   document.getElementById("date-to").innerHTML = formatted_to;
	   
			 myApp.hidePreloader();	
			 

 $$('.btneditAbsen').on('click', function () {
	 
	   var strDateAbsen = $$(this).attr("dateAbsen");
	   var strIdAbsen = $$(this).attr("idAbsen");
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Yakin Edit Absen Reject??</p> ',
		buttons: [
		{
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  }  ,
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			 onClick: function () { 
				mainView.router.loadPage('5-edit-absen-reject.html?dateAbsen='+strDateAbsen+'&&id='+strIdAbsen+''); 
			
				}
		  }  
		]
	});
 myApp.hidePreloader();
 }); 
			 
 $$('.wp').on('click', function () {
	   var strDatawp = $$(this).attr("data-wp");
	   var strDatawpread = $$(this).attr("data-wp-read");
	   var strDataNama = $$(this).attr("data-nama"); 
	   var strDatatitle = $$(this).attr("data-title"); 
	   var strNopek = $$(this).attr("data-nopek"); 


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
				   
				    myApp.hidePreloader();
				   });
				
 
 
     
}); 