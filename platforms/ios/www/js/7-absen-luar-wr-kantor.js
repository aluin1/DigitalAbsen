 
myApp.onPageInit("7-absen-luar-wr-kantor", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');

	
 var strUsername = localStorage.getItem("LogonUsername");
	 var strToken = localStorage.getItem("LogonToken"); 
	   
 var workingsave = [];
 
 $.ajax({
     url: ""+useWeb+"/Attendance/workingreport_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		//console.log(data.data);
		var dtwr=data.data;
		
		  for (i = 0; i < dtwr.length; i++) {
			
			  var dataWorkingSave='<tr><td><span  ><center> <label class="btn-edit-wr badge badge-success"  data-id="'+dtwr[i].Id+'" data-kegiatan="'+dtwr[i].WR_Kegiatan.replace(/<br[^>]*>/g, "\n")+'" data-hasil="'+dtwr[i].WR_Hasil.replace(/<br[^>]*>/g, "\n")+'" data-status="'+dtwr[i].WR_Status+'"> Edit</label> <label class="btn-delete badge badge-danger" data-kegiatan="'+dtwr[i].WR_Kegiatan+'" data-id="'+dtwr[i].Id+'"    > Delete</label> </center></span></td><td>'+dtwr[i].WR_Kegiatan+'</td><td>'+dtwr[i].WR_Hasil+'</td><td>'+dtwr[i].WR_Status+' </td></tr>';	
			 workingsave.push(dataWorkingSave);
			 
		
			 }
		  	 

	 
document.getElementById("data-working").innerHTML = workingsave.join(" ");


$$(".btn-edit-wr").on("click", function(){
	   var strIdVaksin = $$(this).attr("data-id");
	    
 
 
	   var strId = $$(this).attr("data-id");
	   var strKegiatan = $$(this).attr("data-kegiatan");
	   var strHasil = $$(this).attr("data-hasil"); 
	   var strStatus = $$(this).attr("data-status"); 
 
 if (strStatus=="DONE"){
			var c1='checked="checked"';
			var c2='';
			var c3='';
		}else if (strStatus=="IN PROGRESS")
		{
			
			var c1='';
			var c2='checked="checked"';
			var c3='';
		}else{
			
			var c1='';
			var c2='';
			var c3='checked="checked"';
			
		}
		 
	console.log(strIdVaksin);
 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
		
		
		
	
	 var popupHTML = '<div class="popup" style="    background-color: #fff;">'+
	 
		  '<div class="list-block "  >'+
	               '<div class="content-block  " >'+
					 
    ' <center> <h4>Form Edit Working Report</h4></center>'+
     ' <p style="text-align: right;"><a href="#" class="close-popup"   ><label class=" badge badge-danger"   > Close</label></a></p> '+
		 '<table id="myTable" width="100%"  class="table" >'+
    ' <tbody>'+
        ' <tr>'+
        '   <td> '+
          '  <label  ><b  style="color:#047edf">Kegiatan </b></label>  '+
		   ' <input type="hidden" style="height: calc(2rem + 2px);padding: 10px;" value="'+strId+'" id="txtid_edit"  class="form-control txtid_edit" />  <textarea type="text" id="txtKeg_edit"  class="form-control txtKeg_edit "  >'+strKegiatan+'</textarea> '+
           ' </td>'+
         ' </tr>	'+
		 
			 '<tr>'+
          ' <td> '+
           ' <label  ><b  style="color:#047edf">Hasil </b></label>  '+
		    '<textarea type="text"  id="txtHasil_edit" class="form-control txtHasil_edit "  >'+strHasil+'</textarea> '+
           ' </td>'+
         ' </tr>	'+

        ' <tr>'+
         '  <td> '+
          '  <label  ><b  style="color:#047edf">Status Kegiatan: </b></label>  '+
		    '<ul style="margin-top: 0px!important;">  '+
		  '<li style=" border-radius: 50px;    border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
      ' <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+
        
        ' <input type="radio" name="my-radio3-edit" value="DONE" '+c1+'   >'+
        ' <div class="item-media">'+
        '   <i class="icon icon-form-radio"></i>'+
        ' </div>'+
        ' <div class="item-inner">'+
         '  <div class="item-title">DONE</div>'+
        ' </div>'+
      ' </label>'+
    ' </li>'+

	 ' <li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
      ' <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+
     
        ' <input type="radio" name="my-radio3-edit" value="IN PROGRESS"  '+c2+'  >'+
        ' <div class="item-media">'+
         '  <i class="icon icon-form-radio"></i>'+
        ' </div>'+
        ' <div class="item-inner">'+
         '  <div class="item-title">IN PROGRESS</div>'+
        ' </div>'+
      ' </label>'+
    ' </li>'+
	
	 ' <li style=" border-radius: 50px;   border: 1px solid #047edf!important;margin-bottom: 10px!important; ">'+
      ' <label style="margin-bottom: 0px!important;" class="label-radio item-content"  >'+
       
        ' <input type="radio" name="my-radio3-edit" value="ON HOLD"  '+c3+'  >'+
        ' <div class="item-media">'+
         '  <i class="icon icon-form-radio"></i>'+
        ' </div>'+
        ' <div class="item-inner">'+
         '  <div class="item-title">ON HOLD</div>'+
        ' </div>'+
      ' </label>'+
     '</li>'+
	 '</ul>'+
           ' </td>'+
         ' </tr>		'+ 
			 '	 <tr><td>'+
				 
 '<button type="button"   class=" btn-edit-wr2 btn btn-gradient-primary mr-2" style="margin-bottom: 10px;" ><b style="font-size:15px">Edit Activity</b></button> '+
			 '	 </td>'+
			 '	 </tr>'+
    ' </tbody>'+
 '</table>'+
                     
                    '</div>'+
                  '</div></div> ';
  myApp.popup(popupHTML);
  
  
  
  
$$('.btn-edit-wr2').on('click', function () {
	
	 
	
	var ArrayId = $$(".txtid_edit").val();
	var ArrayHasil = $$(".txtHasil_edit").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
		var ArrayKegiatan = $$(".txtKeg_edit").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
		 var radios3edit = document.getElementsByName('my-radio3-edit');
		
		

for (var i = 0, length = radios3edit.length; i < length; i++) {
    if (radios3edit[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios3edit[i].value);
		var valradios3edit=radios3edit[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
		 
		if (ArrayKegiatan=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Kegiatan Kosong Harap diisi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }
 
 else  if (ArrayHasil=='')
 {
	 myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Hasil Kosong Harap diisi</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();
 }else{

 
 
  

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/edit_wr",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  , "id" : "'+ArrayId+'",  "kegiatan" : "'+ArrayKegiatan+'",  "hasil" : "'+ArrayHasil+'",  "status" : "'+valradios3edit+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage();
				  
 
				 } 
		  }  
		]
	}); 
	 
	   

    
 myApp.hidePreloader();
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
 
});	      
	

	
 $$('.btn-delete').on('click', function () {
	   var strId = $$(this).attr("data-id");
	   var strKegiatan = $$(this).attr("data-kegiatan");
	   
	   
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	  myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Hapus data Working Report Kegiatan '+strKegiatan+' ?</p> ',
		buttons: [ 
		   {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  },
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			  onClick: function () {
				$.ajax({
     url: ""+useWeb+"/Attendance/delete_wr",
    type: "POST",
    data:' {"id" : "'+strId+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		// callback(data);
	   console.log(data);
	   
	   
	    myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [ 
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true,
			  onClick: function () {
				 mainView.router.refreshPage()
				 } 
		  }
		]
	});
	    
	  
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
				 } 
		  }
		]
	});
	
 myApp.hidePreloader();
 }); 	   
		      
		} ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   }); 
 

$$('.btn-add-wr').on('click', function () {
	
	var ArrayKeg = $$(".txtKeg").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
		var ArrayHas = $$(".txtHasil").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
		 var radios3 = document.getElementsByName('my-radio3');

for (var i = 0, length = radios3.length; i < length; i++) {
    if (radios3[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios3[i].value);
		var valradios3=radios3[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
		
		if (ArrayKeg=='')
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
 
 else  if (ArrayHas=='')
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
 }else{

//var dataWorking='<tr><td>'+ArrayKeg+'</td><td>'+ArrayHas+'</td><td>'+valradios3+' <span style="padding-left: 50px;"><i style="color: #047edf;font-size: 20px;" class="btn-delete mdi mdi-comment-remove-outline"  "></i></span></td></tr>';	
 

   myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () {
   $.ajax({
     url: ""+useWeb+"/Attendance/workingreport_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "wr_keg" : "'+ArrayKeg+'",  "wr_hasil" : "'+ArrayHas+'",  "wr_status" : "'+valradios3+'"}' ,
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
		
	
	
	
       // callback(data);
	   console.log(data);
	   	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+data.message+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;" class="close-popup" >Ok</div>',
			bold: true ,
			  onClick: function () {
				 mainView.router.refreshPage()
				 } 
		  }  
		]
	}); 
	
		//workingsave.push(dataWorking);  
document.getElementById("txtKeg").value = "";
document.getElementById("txtHasil").value = ""; 
//document.getElementById("data-working").innerHTML = workingsave.join(" ");
//	console.log(workingsave);  
	   
 myApp.hidePreloader();
		} ,
    failure: function (errMsg) {
    alert("ERRO");
    }
	});
 	});

	
	}
 
 
 $$('.btn-delete').on('click', function () {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	 myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Yakin Hapus Data Working Report?</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Cancel</div>',
			bold: true 
		  }  ,
		   {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true 
		  }
		]
	});
 myApp.hidePreloader();
 }); 
 // if (workingsave!=""){
	 // document.getElementById('statBtn').style.display = 'block';
	 
 // }
 // else{
	 // document.getElementById('statBtn').style.display = 'none';
 // }
 
 });
 
 

	
	 

$$('.btn-proses-wr').on('click', function () {
	 

		
		
var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong");
	 
	  
	 var strCondition = page.query.condition; 
	 var strnoted = page.query.note;  
	 var strnote_kondisi = page.query.note_kondisi;  
	 var strnote_lain = page.query.note_lain;  
	 var valradios = page.query.kondisi; 
	 
	  var strfoto = page.query.foto; 
			console.log(strfoto);	
			
	 var strHasil = $$(".txtHasil").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
	 var strKeg = $$(".txtKeg").val().replace(/(?:\r\n|\r|\n)/g, '<br>');
	 var radios3 = document.getElementsByName('my-radio3');

for (var i = 0, length = radios3.length; i < length; i++) {
    if (radios3[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios3[i].value);
		var valradios3=radios3[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}

			console.log(lat);
			console.log(lang);	 
			console.log(strnoted);


 $.ajax({
     url: ""+useWeb+"/Attendance/attend_detail",
    type: "POST",
	 data:' {"username" : "'+strUsername+'"}' , 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		var dtkondisi=data.data;
		var i;
		  for (i = 0; i < dtkondisi.length; i++) {
			   console.log(dtkondisi[i].StatusWR);
			 var  cwr=dtkondisi[i].StatusWR;
		  }
		  		
 
  if(cwr==null){
	  
	  
	   
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Anda Belum Menambahkan Data Working Report</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	  
  }else{

 if(valradios=='0'){
	
	
	 	
 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	  
	 
		 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strnoted+'", "note_kondisi":"'+strnote_kondisi+'", "note_lain":"'+strnote_lain+'",  "kondisi":"'+valradios+'",  "photo":"'+strfoto+'"}' ,
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
else {
	
	
	 	
 
  myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	  
	 
		 $.ajax({
     url: ""+useWeb+"/Attendance/outoffice_attend",
    type: "POST",
    data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strnoted+'", "note_kondisi":"Sehat", "note_lain":"",  "kondisi":"'+valradios+'",  "photo":"'+strfoto+'"}' ,
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
 } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });	
  	
});


		

			
			
 
 myApp.hidePreloader();
}); 