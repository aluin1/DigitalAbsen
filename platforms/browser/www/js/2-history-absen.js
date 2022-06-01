 
 
///load  
myApp.onPageInit("2-history-absen", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');


//Try to get tbody first with jquery children. works faster!
var tbody = $('#myTable').children('tbody');

//Then if no tbody just select your table 
var table = tbody.length ? tbody : $('#myTable');


$('button').click(function(){
    //Add row
    table.append('<tr>'+
         ' <td> '+
          ' <label  ><b  style="color:#047edf">Kegiatan </b></label>  '+
		  ' <textarea type="text"   class="form-control txtKeg "  ></textarea> '+
          ' </td>'+
        ' </tr>	'+
		'<tr>'+
         ' <td> '+
          ' <label  ><b  style="color:#047edf">Hasil </b></label>  '+
		  ' <textarea type="text"   class="form-control txtHasil "  ></textarea> '+
          ' </td>'+
        ' </tr>	'+
		'<tr>'+
        '  <td> '+
         '  <label  ><b  style="color:#047edf">Status Kegiatan: </b></label>  '+
		  ' <ul style="margin-top: 0px!important;">  '+
		' <li style=" border-radius: 50px;    border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+ 
       ' <input type="radio" name="my-radio" value="DONE" checked="checked"   >'+
       ' <div class="item-media">'+
         ' <i class="icon icon-form-radio"></i>'+
        '</div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">DONE</div>'+
      '  </div>'+
     ' </label>'+
   ' </li>'+

	' <li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
    '  <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+ 
       ' <input type="radio" name="my-radio" value="IN PROGRESS"    >'+
        '<div class="item-media">'+
       '   <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
        '  <div class="item-title">IN PROGRESS</div>'+
       ' </div>'+
     ' </label>'+
   ' </li>'+
	
	' <li style=" border-radius: 50px;   border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
    '  <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+ 
       ' <input type="radio" name="my-radio" value="ON HOLD"    >'+
      '  <div class="item-media">'+
        '  <i class="icon icon-form-radio"></i>'+
       ' </div>'+
       ' <div class="item-inner">'+
         ' <div class="item-title">ON HOLD</div>'+
       ' </div>'+
    '  </label>'+
   ' </li>'+
'	</ul>'+
       '    </td>'+
       '  </tr>');
})


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

var datadf=[];
 var strPush ='<form class="forms-sample">'+
                   ' <div class="form-group">'+
                    '  <label  ><b  style="color:#047edf">Dari </b></label> '+
					'  <input type="date" value="'+dateFrom+'"   class="form-control txtfroma   "  />'+
                   ' </div>'+
                   
                   ' <div class="form-group"> '+
					' <label  ><b  style="color:#047edf">Sampai</b> </label> '+
					  
               '<input type="date"  value="'+dateTo+'"   class="form-control txttoa   "  />'+
                   ' </div>'+
                     
					'<button type="button" name="submit" class="btnCaria btn btn-gradient-primary mr-2" ><b style="font-size:15px">Cari Data</b></button>'+
				 
				'</form>';
	 datadf.push(strPush);
		
			  
				  document.getElementById("form-cari").innerHTML = datadf; 	

$$('.btnCaria').on('click', function () {
	
	
 var strFrom = $$(".txtfroma").val();
		var strTo = $$(".txttoa").val();
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
	 
	
				mainView.router.loadPage('8-hasil-pencarian-absen.html?from='+strFrom+'&&to='+strTo+'');
				
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

$$('.his-gps').on('click', function () {
	
				mainView.router.loadPage('3-history-gps.html');
});

$$('.btn-notif').on('click', function () {
	
				mainView.router.loadPage('4-history-notifikasi.html');
});

 
 myApp.hidePreloader();
}); 