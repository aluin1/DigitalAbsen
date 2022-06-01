 
  function show1(){
  document.getElementById('div1').style.display ='none';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}
///load 
myApp.onPageInit("7-absen-dalam-pulang-kantor", function(page){
myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');
 

var strUsername = localStorage.getItem("LogonUsername"); 
	 var strToken = localStorage.getItem("LogonToken"); 
	 var strCondition = page.query.condition; 

	 var lat = localStorage.getItem("LogonLat");
	 var lang = localStorage.getItem("LogonLong");
var radios = document.getElementsByName('my-radio');

 
var asiaTime = localStorage.getItem("LogonGET_FULL_DATE");
var date = new Date(asiaTime);
console.log(date);


const months = ["Januari", "Februari", "Maret","April", "Mei", "juni", "juli", "Agustus", "September", "Oktober", "November", "Desember"];
let current_to = date;
let formatted = current_to.getDate() + " " + months[current_to.getMonth()] + " " + current_to.getFullYear();
document.getElementById("date-absen-dalam-kantor").innerHTML = formatted;

	 
myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
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
		var datauserq= []; 
		
		  for (i = 0; i < dtkondisi.length; i++) {
			  
			  console.log(dtkondisi[i].username); 
			  if (dtkondisi[i].StatusFit==1){
				  var check='checked="checked"';
				  var check2=''; 
				  var display='display:none';
				  
				  
				  
			  }
			  else if (dtkondisi[i].StatusFit==0){
				   var check='';
				  var check2='checked="checked"'; 
				  var display='display:block';
				  
			  }
			  else{
				    var check='';
				  var  check=''; 
				  var display='';
				  
			  }
			   
var datanotekondisilain=dtkondisi[i].StatusFitNote.split(",");

console.log(datanotekondisilain);
console.log(datanotekondisilain[0]);
console.log(datanotekondisilain[1]);
console.log(datanotekondisilain[2]);
console.log(datanotekondisilain[3]);
console.log(datanotekondisilain[4]);

var kon1 = datanotekondisilain[0];
var kon2 = datanotekondisilain[1];
var kon3 = datanotekondisilain[2];
var kon4 = datanotekondisilain[3];
var kon5 = datanotekondisilain[4];

 
if (kon1=="Kontak Erat"){
	var checkkon1='checked="checked"';
	
}else{
	var checkkon1=' ';
	
}


if (kon2=="PCR +"){
	var checkkon2='checked="checked"';
	
}else{
	var checkkon2=' ';
	
}

if (kon3=="Bergejala Covid"){
	var checkkon3='checked="checked"';
	
}else{
	var checkkon3=' ';
	
}


if (kon4=="Menunggu Hasil PCR"){
	var checkkon4='checked="checked"';
	
}else{
	var checkkon4=' ';
	
}


if (kon5=="Lainnya"){
	var checkkon5='checked="checked"';
	
}else{
	var checkkon5=' ';
	
}

 	  
console.log(checkkon1);


var datanotekondisi=dtkondisi[i].StatusFitNote_Lain.replace(/<br[^>]*>/g, "\n");
  if (datanotekondisi=="undefined")
 {
	 datanotekondisi="";
 }
			var dataAbsenUser =  '<div class="mb-0 flex-grow"> '+
  ' <ul>   <li style=" border-radius: 50px;   border: 1px solid #047edf!important;margin-bottom: 10px!important; "> '+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onchange="show1();" >  '+
       ' <input type="radio" name="my-radio" value="1"   '+check+'   > '+
       ' <div class="item-media">  <i class="icon icon-form-radio"></i>  </div> '+
        '<div class="item-inner">  <div class="item-title">Kondisi Fit</div>  </div> '+
    '  </label> '+
   ' </li> '+
	'<li style=" border-radius: 50px;  border: 1px solid #047edf!important;margin-bottom: 10px!important; "> '+
     ' <label style="margin-bottom: 0px!important;" class="label-radio item-content" onchange="show2();"  > '+
       ' <input type="radio"  name="my-radio" value="0"  '+check2+'   /> '+
       ' <div class="item-media">  <i class="icon icon-form-radio"></i> </div> '+
       ' <div class="item-inner">  <div class="item-title">Kondisi Tidak Fit</div> </div> '+
     ' </label>   </li> </ul> '+
	 ' <div id="div1" class="hide" style="'+display+'"> '+
  ' <div class="form-group">  '+
  	'  <label class="container">Kontak Erat'+
 ' <input type="checkbox"  class="txtPenyakit" value="Kontak Erat" '+checkkon1+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
'<label class="container" >PCR +'+
 ' <input type="checkbox"  class="txtPenyakit" value="PCR +"  '+checkkon2+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
'<label class="container">Bergejala Covid'+
 ' <input type="checkbox"  class="txtPenyakit" value="Bergejala Covid"   '+checkkon3+'>'+
  '<span class="checkmark"></span>'+
'</label>'+
'<label class="container">Menunggu Hasil PCR'+
  '<input type="checkbox"  class="txtPenyakit" value="Menunggu Hasil PCR"  '+checkkon4+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
/*
'<label class="container">Demam'+
 ' <input type="checkbox"  class="txtPenyakit" value="Demam"   '+checkkon5+'>'+
 ' <span class="checkmark"></span>'+
'</label>'+
*/
' <p style=" margin: 10px 10px 10px 10px !important;">Lainnya:</p>'+
   '<textarea type="text"   class="form-control txtNote "  >'+datanotekondisi+'</textarea> '+
  ' </div> '+
'</div>	 '+
 '<button type="button"   class=" btn-proses btn btn-gradient-primary mr-2" ><b style="font-size:15px">Proses</b></button> '+
'</div>'; 
					 
			
				datauserq.push(dataAbsenUser);
				
 myApp.hidePreloader();
			  
		  }
		   document.getElementById("data-kondisi").innerHTML = datauserq.join(" ");
		 
$$('.btn-proses').on('click', function () {
	 var strnoted = $$(".txtNote").val().replace(/(?:\r\n|\r|\n)/g, '<br>'); 
			 console.log(strnoted.replace(/(?:\r\n|\r|\n)/g, '<br>'));	
			 
			 
			 
			 var strpenyakit = [];
           $('.txtPenyakit').each(function(){
                if($(this).is(":checked"))
                {
                     strpenyakit.push($(this).val());
                }else{
					  strpenyakit.push('');
					
				}
           });
    strpenyakit = strpenyakit.toString();

 for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        // do whatever you want with the checked radio
        console.log(radios[i].value);
		var valradios=radios[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
 if (valradios==1){
	 var notekon="";
	 
 }
 else{
	  var notekon=strnoted;
 }
 if(valradios=='0'){
	
	
	
	 if (strnoted  == '' ) {
	myApp.showPreloader('<p style="color:#000;font-size:15px;">Loading <br/> </p>');	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 15px;  margin: 20px 0 0 ;">Jelaskan Kondisi tidak Fit Anda</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true
		  }  
		]
	});
	
 myApp.hidePreloader();

}	else{	
myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	
	 // mainView.router.loadPage('7-absen-dalam-wr-kantor.html?strCondition='+strCondition+'&&note='+strpenyakit+'&&note_lain='+notekon+'&&kondisi='+valradios+''  ); 
	 // myApp.hidePreloader();
	 
	 
	 
		 $.ajax({
     url: ""+useWeb+"/Attendance/inoffice_attend",
    type: "POST",
	  data:' {"username" : "'+strUsername+'"  ,  "latitude" : "'+lat+'",  "longitude" : "'+lang+'",  "condition" : "'+strCondition+'", "note":"'+strpenyakit+'", "note_lain":"'+notekon+'",  "kondisi":"'+valradios+'"}' ,
 
    contentType: "application/json",
	headers: {
    "Authorization": "" + strToken
  },
    success: function (data) {
       // callback(data);
	    console.log(data);
		 var msgabsen=data.message;
				myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			 onClick: function () { 
				mainView.router.loadPage('1-homepage.html');
			
				}
		  }  
		]
	});
 myApp.hidePreloader();

});
 myApp.hidePreloader();
			  
		  
		  
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });

   });			 

 }}
 else{
	 
	 myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	 
	// mainView.router.loadPage('7-absen-dalam-wr-kantor.html?strCondition='+strCondition+'&&note=&&note_lain=&&kondisi='+valradios+''  ); 
	 // myApp.hidePreloader();
	 
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
		 var msgabsen=data.message;
				myApp.showPreloader("<div style='margin-bottom:-15px'><img src='icon/ic_launcher.png' width='50'></div><p style='color: #047edf; font-size: 12px;  margin: 30px 0 0 ; '>Loading Aplikasi</p>");
    setTimeout(function () { 
	
	myApp.modal({
		title:  '<div style="margin-bottom:-15px"><i style="font-size:40px;color:#047edf" class="mdi mdi-information-outline"></i></div><p style="color: #047edf; font-size: 12px;  margin: 20px 0 0 ;">'+msgabsen+'</p> ',
		buttons: [
		  {
			text: '<div style="color:#047edf;font-size:15px;">Ok</div>',
			bold: true ,
			 onClick: function () { 
				mainView.router.loadPage('1-homepage.html');
			
				}
		  }  
		]
	});
 myApp.hidePreloader();

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
					
    } ,
                    failure: function (errMsg) {
                        alert("ERRO");
                    }
				   });

   });


	
			
 
 myApp.hidePreloader();
}); 