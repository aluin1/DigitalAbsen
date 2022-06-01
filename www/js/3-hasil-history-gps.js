 
 
///load  
myApp.onPageInit("3-hasil-history-gps", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 
	
var strFrom = page.query.from; 
var strTo = page.query.to; 
var strNama = page.query.nama; 
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken");
	 var strPosid = localStorage.getItem("Logon-EMPLOYEE_POSIDI");
	 
var strLokasi = localStorage.getItem("LogonLOCATION_UPLOAD");
 
	 
	  
	   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
	 $.ajax({
    url: ""+useWeb+"/attendance/approval_all",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "posid" : "'+strPosid+'",  "from" : "'+strFrom+'",  "to" : "'+strTo+'",  "nama" : "'+strNama+'"}' ,
	contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		
var msgabsen=data.message;
		var dstatushis=data.status;
if (dstatushis==false & msgabsen=='Token is Expired.')
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
 else if (dstatushis==false)
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
							 
							 
							 
							 console.log(dtabsenapp[i].WR_Hasil); 
							 
							 
					
						
							  if (dtabsenapp[i].Note_Approve==null){
					 	 var note_a=""; 
						}else{
							var note_a=dtabsenapp[i].Note_Approve; 
							
						}
							 
					 if (dtabsenapp[i].Jam_absen==null){
					 	 var timecome=""; 
						}else{
							var timecome=dtabsenapp[i].Jam_absen.substring(0, 5); 
							
						}
						
						 if (dtabsenapp[i].Jam_keluar==null){
					 	 var timereturn="Belum Absen";   
						}else{
							var timereturn=dtabsenapp[i].Jam_keluar.substring(0, 5); 
							
						}
						
						  if (dtabsenapp[i].Status.substring(0, 1)=="P"){
					 	 var txtstat="<label style='color:#198ae3'>Pending</label>"; 
						}else if (dtabsenapp[i].Status.substring(0, 1)=="A"){
							 var txtstat="<label style='color:#1bcfb4'>Approved</label>";  
							
						}else if (dtabsenapp[i].Status.substring(0, 1)=="R"){  
							 var txtstat="<label style='color:#fe7c96'>Rejected</label>";  
							
						}else    {
							 var txtstat="<label style='color:#198ae3'>Not Found Status</label>";  
							
						}
					
const months = ["Jan", "Feb", "Mar","Apr", "Mei", "jun", "jul", "Ags", "Sep", "Okt", "Nov", "Des"];
let current_datetime = new Date(dtabsenapp[i].date_approve)
let formatted_date_absen = current_datetime.getDate() + " " + months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
formatted_date_absen2 = current_datetime.getFullYear()+'-'
				+ ('0' + (current_datetime.getMonth()+1)).slice(-2) + '-'
				+('0' + current_datetime.getDate()).slice(-2);  
console.log(formatted_date_absen)

				var wr_keg=dtabsenapp[i].StatusWR;
				
					 
						
						console.log(wr_keg);
									
 
  if (wr_keg==1){
	  var btnWR='<label class="wp badge badge-info"  data-nama="'+dtabsenapp[i].nama_karyawan+'" data-wp-read="'+formatted_date_absen+'" data-wp="'+formatted_date_absen2+'" data-nopek="'+dtabsenapp[i].nopek_approve+'" > Open</label> ';
   
   }else{
	   var btnWR='';
  }

					
						 console.log(dtabsenapp[i].Location);	 
						   
	 var dataAbsenUserApproval =  ' <tr>'+
	  '<td align="center">  <label class="container"> <input type="checkbox"  name="my-checkbox"  id="my-checkbox" value="'+dtabsenapp[i].Id+'"/> </label></td>'+
	// '<td align="center">   <button   class="action-app   badge badge-success"   data-id="'+dtabsenapp[i].Id+'" >Approve</button> </td>  '+
	// '<td><button class="action-rjct badge badge-danger" data-id="'+dtabsenapp[i].Id+'" >Reject</button>  </td>'+
	 '<td><label class="detail-absen badge badge-info"  data-masuk="'+timecome+'" data-keluar="'+timereturn+'" data-note="'+dtabsenapp[i].Note+'" data-note-A="'+note_a+'"  data-location="'+dtabsenapp[i].Location+'" data-tipe="'+dtabsenapp[i].Tipe+'"  data-nama="'+dtabsenapp[i].nama_karyawan+'" data-date="'+formatted_date_absen+'"  data-address="'+dtabsenapp[i].Address+'"  data-country="'+dtabsenapp[i].Country+'"  data-area1="'+dtabsenapp[i].administrative_area_level_1+'"  data-area2="'+dtabsenapp[i].administrative_area_level_2+'"  data-area3="'+dtabsenapp[i].administrative_area_level_3+'"  data-ida="'+dtabsenapp[i].Id+'" data-pm="'+dtabsenapp[i].PhotoMasuk+'" data-pk="'+dtabsenapp[i].PhotoKeluar+'" data-stfit="'+dtabsenapp[i].StatusFitNote+'" data-stfitlain="'+dtabsenapp[i].StatusFitNote_Lain+'">Detail</label></td>   '+ 
						    '<td>'+txtstat+'</td>   '+ 
	  '<td> '+dtabsenapp[i].nama_karyawan+' </td>'+
                           '<td> '+formatted_date_absen+' </td> ' +
						   '<td>'+btnWR+' </td>   </tr> ' ;
					 
		
				 datauserapp.push(dataAbsenUserApproval);
					 
				 }
				 
				 
 				
 
	 document.getElementById("data-absen-list-app").innerHTML = datauserapp.join(" ");
	const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
					 
 		let current_from = new Date(strFrom)
let formatted_from = current_from.getDate() + " " + months[current_from.getMonth()] + " " + current_from.getFullYear()

let current_to = new Date(strTo)
let formatted_to = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear()

 		document.getElementById("date-from").innerHTML = formatted_from;
	   document.getElementById("date-to").innerHTML = formatted_to;
			 myApp.hidePreloader();

 $$('.select-all').on('click', function () {
	 
	   var checkboxes = document.getElementsByName('my-checkbox');
  for (var checkbox of checkboxes) {
    checkbox.checked = this.checked;
  }
	 
 });  



 
 $$('.detail-absen').on('click', function () {
	   var strDatawp = $$(this).attr("data-date");
	   var strDataNama = $$(this).attr("data-nama"); 
	   var strDataMasuk = $$(this).attr("data-masuk"); 
	   var strDataKeluar = $$(this).attr("data-keluar"); 
	   var strDataNote = $$(this).attr("data-note");  
	   var strDataTipe = $$(this).attr("data-tipe"); 
	   var strDataNoteA = $$(this).attr("data-note-A");  
	   var strAddress = $$(this).attr("data-address");  
	   var strCountry= $$(this).attr("data-country");  
	   var strArea1 = $$(this).attr("data-area1");  
	   var strArea2 = $$(this).attr("data-area2");  
	   var strArea3 = $$(this).attr("data-area3");   
	   var strId = $$(this).attr("data-ida"); 
	   var strPm = $$(this).attr("data-pm"); 
	   var strPk = $$(this).attr("data-pk");
	   var strFit = $$(this).attr("data-stfit");
	   var strFitlain = $$(this).attr("data-stfitlain");
	   var strFitUnfit = ""
	   	if (strFit == 'Sehat')
	   	{
		   strFitUnfit='FIT'
		} 
		else
		{
			strFitUnfit='UNFIT'
		}
	   
	   var strDataLocation = $$(this).attr("data-location");
	   var filter = strDataLocation.slice(30);
	   console.log(filter);
	 var latlong =  filter.split(',');
  var latitude = parseFloat(latlong[0]);
  var longitude = parseFloat(latlong[1]);
	   
	   function onSuccess2(position) { 
		
		  
             var myLatlng = new google.maps.LatLng(latitude,longitude);
             var mapOptions = {
               zoom: 17,
               center: myLatlng 
            }
            var map = new google.maps.Map(document.getElementById('map-canvas2'), mapOptions);
			
             var marker = new google.maps.Marker({
                 position: myLatlng,
                map: map,
                icon: 'icon/marker.png', 
          animation: google.maps.Animation.DROP				
             });
		 
		}

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    // Options: throw an error if no update is received every 30 seconds.
    //
  //var watchID = navigator.geolocation.watchPosition(onSuccess, onError); 
	     navigator.geolocation.getCurrentPosition(onSuccess2, onError);
	 
	 
	
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	 '<div class="content-block " style="margin: 15px 0;" align="right"><p style="margin-bottom: 0!important;"><a href="#" class="close-popup close-picker"><label class=" badge badge-danger"   > Close</label></a></p></div>'+
                    '<div class="content-block ex4" style="margin: 15px 0;" >'+
					 
					 // ' <iframe  width="100%" height="250" frameborder="0" style="border:0" src="'+strDataLocation+'&output=embed"></iframe>'+
					 ' <div id="map-canvas2"  class="leaflet-container leaflet-fade-anim leaflet-grab  " style="width: 100%;  height:250px;  display:fixed!important;     "tabindex="0">  </div>'+
                     ' <table width="100%" class="table">'+
					 
					 ' <tr>'+
					 ' <td width="40%">Action: </td>'+
					 ' <td><label class="action-app2   badge badge-success"   data-ida="'+strId+'" > APPROVE</label><label class="action-rjct2   badge badge-danger"   data-ida="'+strId+'" > REJECT</label></td>'+
					 ' </tr>'+ 
					 ' <tr>'+
					 ' <td>Nama Karyawan: </td>'+
					 ' <td>'+strDataNama+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Tanggal Absen: </td>'+
					 ' <td>'+strDatawp+'</td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <tr>'+
					 ' <td>Jam Masuk: </td>'+
					 ' <td>'+strDataMasuk+' </td>'+
					 ' </tr>'+
					 ' <tr>'+
					 
					 ' <tr>'+
					 ' <td>Jam Keluar: </td>'+
					 ' <td>'+strDataKeluar+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Note: </td>'+
					 ' <td>'+strDataNote+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Type: </td>'+
					 ' <td>'+strDataTipe+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Approval Comment: </td>'+
					 ' <td>'+strDataNoteA+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td colspan="2"><br> </td>'+
					 ' </tr>'+
					 ' <tr>'+
					 ' <td>Kondisi Kesehatan: </td>'+
					 ' <td>'+ strFitUnfit +'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Gejala: </td>'+
					 ' <td>'+strFit+'</td>'+
					 ' </tr>'+
					 
					 
					 ' <tr>'+
					 ' <td>Keterangan: </td>'+
					 ' <td>'+strFitlain+'</td>'+
					 ' </tr>'+
					 
					 
					 ' <tr>'+
					 ' <td colspan="2"><br> </td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td colspan="2">Position Information: </td>'+
					 
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Address: </td>'+
					 ' <td>'+strAddress+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Address1: </td>'+
					' <td>'+strArea1+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Address2: </td>'+
					 ' <td>'+strArea2+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Address3: </td>'+
					 ' <td>'+strArea3+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Country: </td>'+
					 ' <td>'+strCountry+'</td>'+
					 ' </tr>'+
					 
					 ' <tr>'+
					 ' <td>Photo: </td>'+
					 ' <td><label class=" view-photo badge badge-info"  data-pm="'+strPm+'"  data-pk="'+strPk+'" > VIEW</label></td>'+
					 ' </tr>'+
					 ' </table>';
                     
                    '</div>'+
                  '</div>';
  myApp.popup(popupHTML);
  
  
  
  
  $$('.action-app2').on('click', function () {
	   
	 	 
		var idabs2 = $$(this).attr("data-ida");
		console.log(idabs2);
		 
	 
  
		   
			   myApp.modal({
				  
		 title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Yakin Approve Absen ini?</p> ',
		   buttons: [
		   {
			   text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			   bold: true
		    } , {
			   text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			   bold: true ,
			  onClick: function () {
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
     setTimeout(function () {
		
		 $.ajax({
      url: ""+useWeb+"/Attendance/do_approve",
     type: "POST",
     data:' {"username" : "'+strUsername+'"  ,  "id" : "'+idabs2+'",  "action" : "A",  "noteapp" : "OK"}' ,
     contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
     success: function (data) {
         //callback(data);
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
			 text: '<div style="color:#047edf;font-size:15px;"  class="close-popup close-picker">Ok</div>',
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
				    }); 
					
 });
			  }
		     }  
		   ]
	   });
	 
	   
  }); 	 
   
	 

$$('.action-rjct2').on('click', function () {
	var idabs2 = $$(this).attr("data-ida"); 
 console.log(idabs2);
			myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px; margin: 20px 10px 10px 10px;"> Silahkan input catatan Reject: </p> <div class="list-block">  <textarea type="text"   class="form-control txtnoteRe2 " style="border: 1px solid #047edf!important;padding: 10px;" ></textarea>  </div> ',
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
				 var strAction2 = $$(".txtnoteRe2").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
				 if (strAction2 == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Catatan reject harus diisi. </p><p style="color:#047edf;font-size:12px; margin-bottom: 0px;">Silahkan coba kembali</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 }); 
	  myApp.hidePreloader();	
	} else{
		$.ajax({
     url: ""+useWeb+"/Attendance/do_approve",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "id" : "'+idabs2+'",  "action" : "R",  "noteapp" : "'+strAction2+'"}' ,
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
 		
 }else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"  ><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;"  class="close-popup close-picker">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('3-history-gps.html');
			
				}
		  }  
		]
	}); 
 		
  myApp.hidePreloader();	
					
    } } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
		
	}
			});	 
			
				} 
		  }  
		]
	});
	

}); 

  
  
  
  
  
   $$('.view-photo').on('click', function () {
	   
  // Check first, if we already have opened picker
  if ($$('.picker-modal.modal-in').length > 0) {
    myApp.closeModal('.picker-modal.modal-in');
  }
  
	   var strPm = $$(this).attr("data-pm"); 
	   var strPk = $$(this).attr("data-pk");
	   console.log(strPm);
	   console.log(strPk);
	
	   if (strPm=='null'){
		   var Pmasuk="images/noimages.png";
	   } else{
		    var Pmasuk=useWeb+"/"+strLokasi+""+strPm;
		   
	   }
	   
	   if (strPk=='null'){
		   var Pkeluar="images/noimages.png";
	   } else{
		    var Pkeluar=useWeb+"/"+strLokasi+""+strPk;
		   
	   }
	   
	      myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
  myApp.pickerModal(
    '<div class="picker-modal" style="    background: rgb(255, 255, 255);height:400px">' +
      '<div class="toolbar">' +
        '<div class="toolbar-inner">' +
          '<div class="left"></div>' +
          '<div class="right"><a href="#" class="close-picker" style="color: #ffffff;"> <label class=" badge badge-danger"   > Close</label></a></div>' +
        '</div>' +
      '</div>' +
      '<div class="picker-modal-inner">' +
        '<div class="content-block" style="margin: 0px 0;">' +
		'<table width="100%"><tr>'+
		'<td align="center" style="padding: 10px;">Photo Absen Masuk</td><td align="center"style="padding: 10px;">Photo Absen Keluar</td></tr>'+
		
		'<td align="center"style="padding: 10px;"><img src="'+Pmasuk+'" width="150"></td><td align="center"style="padding: 10px;"><img src="'+Pkeluar+'"  width="150"></td></tr></table>'+
         
        '</div>' +
      '</div>' +
    '</div>'
  )
  
 myApp.hidePreloader();
	   });
	  
  });
	  
  });

    

 
  
  $$('.wp').on('click', function () {
	   var strDatawp = $$(this).attr("data-wp");
	   var strDatawpread = $$(this).attr("data-wp-read");
	   var strNopek = $$(this).attr("data-nopek");
	   var strDataNama = $$(this).attr("data-nama"); 


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
  
  
  
  
  $$('.action-app').on('click', function () {
	   
	 	 
		var idabs = $$(this).attr("data-id");
		console.log(idabs);
		 
	 
  
		   
			   myApp.modal({
				  
		 title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Yakin Approve Absen ini?</p> ',
		   buttons: [
		   {
			   text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			   bold: true
		    } , {
			   text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			   bold: true ,
			  onClick: function () {
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
     setTimeout(function () {
		
		 $.ajax({
      url: ""+useWeb+"/Attendance/do_approve",
     type: "POST",
     data:' {"username" : "'+strUsername+'"  ,  "id" : "'+idabs+'",  "action" : "A",  "noteapp" : "OK"}' ,
     contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
     success: function (data) {
         //callback(data);
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
				    }); 
					
 });
			  }
		     }  
		   ]
	   });
	 
	   
  }); 	 
   
	 

$$('.action-rjct').on('click', function () {
	var idabs = $$(this).attr("data-id"); 
 console.log(idabs);
			myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px; margin: 20px 10px 10px 10px;">Silahkan input catatan Reject: </p> <div class="list-block">  <textarea type="text"   class="form-control txtnoteRe " style="border: 1px solid #047edf!important;padding: 10px;" ></textarea>  </div> ',
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
				 var strAction = $$(".txtnoteRe").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
				 if (strAction == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Catatan reject harus diisi. </p><p style="color:#047edf;font-size:12px; margin-bottom: 0px;">Silahkan coba kembali</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 }); 
	  myApp.hidePreloader();	
	} else{
		$.ajax({
     url: ""+useWeb+"/Attendance/do_approve",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "id" : "'+idabs+'",  "action" : "R",  "noteapp" : "'+strAction+'"}' ,
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
 		
 }else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('3-history-gps.html');
			
				}
		  }  
		]
	}); 
 		
  myApp.hidePreloader();	
					
    } } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
		
	}
			});	 
			
				} 
		  }  
		]
	});
	

}); 





  $$('.action-app-all').on('click', function () {
	   
	 	 
	 
		 
	//Create an Array.
        var selected = new Array();
 
        //Reference the Table.
        var tblData = document.getElementById("tblData");
 
        //Reference all the CheckBoxes in Table.
        var chks = tblData.getElementsByTagName("input");
 
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }
 
        //Display the selected CheckBox values.
        if (selected.length > 0) {
			
			  
		   var dtabsen=selected.join(",");
		 
		  console.log(dtabsen);
			
			 myApp.modal({
				  
		 title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Yakin Approve Absen?</p> ',
		   buttons: [
		   {
			   text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			   bold: true
		    } , {
			   text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			   bold: true ,
			  onClick: function () {
		 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
     setTimeout(function () {
		
		 $.ajax({
      url: ""+useWeb+"/Attendance/do_approve_all",
     type: "POST",
     data:' {"username" : "'+strUsername+'"  ,  "id" : "'+dtabsen+'",  "action" : "A",  "noteapp" : "OK"}' , 
     contentType: "application/json",
	 headers: {
     "Authorization": "" + strToken
   },
     success: function (data) {
         //callback(data);
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
 		 console.log(msgabsen);
  myApp.hidePreloader();	
					
     }} ,
                     failure: function (errMsg) {
                         alert("ERRO");
                     }
				    }); 
					
 });
			  }
		     }  
		   ]
	   });
			
				 
          
        }
		else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Absen Belum ada yang dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true 
		  }  
		]
	}); 
			
		}
	});
   
	 

	 $$('.action-rjct-all').on('click', function () {
	 
	//Create an Array.
        var selected = new Array();
 
        //Reference the Table.
        var tblData = document.getElementById("tblData");
 
        //Reference all the CheckBoxes in Table.
        var chks = tblData.getElementsByTagName("input");
 
        // Loop and push the checked CheckBox value in Array.
        for (var i = 0; i < chks.length; i++) {
            if (chks[i].checked) {
                selected.push(chks[i].value);
            }
        }
 
        //Display the selected CheckBox values.
        if (selected.length > 0) {
			
			 var dtabsen=selected.join(",");
			
		 console.log(dtabsen);
			myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px; margin: 20px 10px 10px 10px;">Silahkan input catatan Reject: </p> <div class="list-block">  <textarea type="text"   class="form-control txtnoteReAll " style="border: 1px solid #047edf!important;padding: 10px;" ></textarea>  </div> ',
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
				 var strAction = $$(".txtnoteReAll").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
				 if (strAction == ''){
			 myApp.modal({
		 title:  '<div style="margin-bottom:5px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i> </div><p style="color:#047edf;font-size:15px; margin-bottom: 0px;   ">Catatan reject harus diisi. </p><p style="color:#047edf;font-size:12px; margin-bottom: 0px;">Silahkan coba kembali</p> ',
		 buttons: [
		    {
		 	text: '<div style="color:#047edf;font-size:15px;">OK</div>',
         bold: true 		
		   }  
	 	]
	 }); 
	  myApp.hidePreloader();	
	} else{
		$.ajax({
     url: ""+useWeb+"/Attendance/do_approve_all",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "id" : "'+dtabsen+'",  "action" : "R",  "noteapp" : "'+strAction+'"}' ,
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
 		
 }else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true,
			 onClick: function () {
				mainView.router.loadPage('3-history-gps.html');
			
				}
		  }  
		]
	}); 
 		
  myApp.hidePreloader();	
					
    } } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   })
		
	}
			});	 
			
				} 
		  }  
		]
	});
			
				 
           console.log(selected.join(","));
        }
		else{
		 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Absen Belum ada yang dipilih</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">OK</div>',
			bold: true 
		  }  
		]
	}); 
			
		}
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