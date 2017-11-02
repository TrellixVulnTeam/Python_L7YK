
//�ж��Ƿ�Ϊ�գ��Ƿ���true���񷵻�false
function isEmpty(str) {
	if(str=="") return true;
	else return false;
}

//�ж�ע���˺��Ƿ�Ϸ�
function isusername(s){
	var regu = "^([a-zA-Z]+[_0-9a-zA-Z@.-]*)$"
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
    	return true;
    } else {
        window.alert ("��ʹ�ù淶���˺ţ�")
        return false;
    }
}

//�ж��Ƿ�Ϊ�������룬Ҫ��6λ���֣��Ƿ���true���񷵻�false
function isZip(str) {
	var reg=/^\d{6}$/;
	return reg.test(str);
}


//�ж��Ƿ�Ϊ�����ʼ���Ҫ���ʽabc@163.com���Ƿ���true,�񷵻�false
function isEmail(str) {
	var reg=/^\S+@\S+\.\S+$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ��ַ��Ҫ���ʽhttp://www.163.com���Ƿ���true,�񷵻�false
function isWWW(str) {
	var reg=/^http:\/\/\S+\.\S+$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ�ֻ����룬Ҫ��11λ���֣�ǰ��λΪ13���Ƿ���true,�񷵻�false
function isMovePhone(str) {
		var reg=/^13\d{9}|15\d{9}|18\d{9}|17\d{9}$/;
		return reg.test(str);
	}


//�ж��Ƿ�Ϊ�绰���룬Ҫ���ʽ0571-88888888���Ƿ���true,�񷵻�false
function isPhone(str) {
	var reg=/^0\d{2,3}-\d{6,8}$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ���
function isMoney(str) {
	var reg=/^\-{0,1}\d+\.{0,1}\d{0,2}$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ����С����Ҫ���ʽ���1λС�����Ƿ���true,�񷵻�false
function isNumber(str) {
	var reg=/^\d+\.{0,1}\d{0,1}$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ�������Ƿ���true,�񷵻�false
function isZenshu(str) {
	var reg=/^\-{0,1}\d+$/;
	return reg.test(str);
}

//�ж��Ƿ�������֤����λ��15/18λ
function isIdcard(str) {
    var reg=/^([0-9a-zA-Z]{15}|[0-9a-zA-Z]{18})$/;
	return reg.test(str);
}

//�ж��Ƿ�Ϊ���ڣ�Ҫ���ʽ2000-1-1��2000-01-01���Ƿ���true,�񷵻�false
function isDate(str) {
	var flag;
	//��������ʽ�ж�
	var reg=/^\d{4}-\d{1,2}-\d{1,2}$/;
	flag=reg.test(str);
	if(flag==false) return flag;

	//�ж������Ƿ���ȷ
	var YMD;
	YMD=str.split("-");
	var year,month,date;	//�꣬�£���

	//����һ��0ȥ����������Ϊ8����������
	if(YMD[1].substring(0,1)=="0") YMD[1]=YMD[1].substring(1,2);
	if(YMD[2].substring(0,1)=="0") YMD[2]=YMD[2].substring(1,2);

	year=parseInt(YMD[0]);
	month=parseInt(YMD[1]);
	date=parseInt(YMD[2]);
	if(month>12 || month<1) return false;
	if(date>31 || date<1) return false;
	var maxDate=new Array(12);		//ÿ�µ��������
	if(month==1) maxDate[0]=31;
	if(month==2) maxDate[1]=28;
	if(month==3) maxDate[2]=31;
	if(month==4) maxDate[3]=30;
	if(month==5) maxDate[4]=31;
	if(month==6) maxDate[5]=30;
	if(month==7) maxDate[6]=31;
	if(month==8) maxDate[7]=31;
	if(month==9) maxDate[8]=30;
	if(month==10) maxDate[9]=31;
	if(month==11) maxDate[10]=30;
	if(month==12) maxDate[11]=31;
	//����
	if((year%4==0 && year%100!=0) || (year%400==0)) maxDate[1]=29;
	if(maxDate[month-1]<date) return false;
	else return true;
}
//�ж��Ƿ�Ϊ���ڣ�Ҫ���ʽ2000-1-1��2000-01-01���Ƿ���true,�񷵻�false
function isDate1(str) {
	var flag;
	//��������ʽ�ж�
	var reg=/^\d{4}-\d{1,2}-\d{1,2}$/;
	flag=reg.test(str);
	if(flag==false) return flag;

	//�ж������Ƿ���ȷ
	var YMD;
	YMD=str.split("-");
	var year,month,date;	//�꣬�£���

	//����һ��0ȥ����������Ϊ8����������
	if(YMD[1].substring(0,1)=="0") YMD[1]=YMD[1].substring(1,2);
	if(YMD[2].substring(0,1)=="0") YMD[2]=YMD[2].substring(1,2);

	year=parseInt(YMD[0]);
	month=parseInt(YMD[1]);
	date=parseInt(YMD[2]);
	if(month>12 || month<1) return false;
	if(date>31 || date<1) return false;
	var maxDate=new Array(12);		//ÿ�µ��������
	if(month==1) maxDate[0]=31;
	if(month==2) maxDate[1]=28;
	if(month==3) maxDate[2]=31;
	if(month==4) maxDate[3]=30;
	if(month==5) maxDate[4]=31;
	if(month==6) maxDate[5]=30;
	if(month==7) maxDate[6]=31;
	if(month==8) maxDate[7]=31;
	if(month==9) maxDate[8]=30;
	if(month==10) maxDate[9]=31;
	if(month==11) maxDate[10]=30;
	if(month==12) maxDate[11]=31;
	//����
	if((year%4==0 && year%100!=0) || (year%400==0)) maxDate[1]=29;
	if(maxDate[month-1]<date) return false;
	else return true;
}

//�ж��û������Ƿ�Ϊ����
function isNumPress() {	
	if(window.event.keyCode>=48&&window.event.keyCode<=57) return true;
	else return false;
}

//�ж��û������Ƿ�Ϊ���ֻ�س�
function isNumOrEnterPress() {	
	if((window.event.keyCode>=48 && window.event.keyCode<=57) || window.event.keyCode==13) return true;
	else return false;
}

//�ַ����滻������s1����Ҫ������ַ�����s2����Ҫ���ҵ��ַ�����s3����Ҫ�滻�ɵ��ַ���
function Replace(s1,s2,s3) {
	var str1,str2;
	var i=0;
	while(s1.indexOf(s2,i)>-1) {
		str1=s1.substring(0,s1.indexOf(s2));
		str2=s1.substring(s1.indexOf(s2) + s2.length,s1.length);
		s1=str1 + s3 + str2;
		i=str1.length + s3.length;
	}
	return s1;
}

//ȥ���ַ������ҵĿո�
function RTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(s.length-1)) != -1) {
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {
            i--;
        }
        s = s.substring(0, i+1);
    }
    return s;
}
function LTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);
    if (whitespace.indexOf(s.charAt(0)) != -1) {
        var j=0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}
function Trim(str) {
    return RTrim(LTrim(str));
}
//�ļ��ϴ�����
function upload(url) {
	left1 = (screen.width-300)/2;
	top1 = (screen.height-160)/2;
	
	window.open(url, "", "width=300,height=160,left=" + left1.toString() + ",top=" + top1.toString());
}

//�༶���ѡ��
function lbChange(bdymc, i, js, obj, allOrSelect) {
	for(k = i + 1; k <= js; k++) {
		var lbOption = document.all(bdymc + k);
		lbOption.options.length = 0;
		lbOption.options[0] = new Option(allOrSelect, '');
	}	
	
	objValue = obj.value;
	if(objValue != "") {
		xml = new ActiveXObject("Microsoft.XMLHTTP");  
		xml.open("get", "/includes/lbChange.jsp?bh=" + objValue, false);
		xml.send("");
		var res = Trim(xml.responseText);
		
		if(res != "") {
			var arrayOption = res.split(",");
			k = i + 1;
			var lbOption = document.all(bdymc + k);
			for(i = 0; i < arrayOption.length / 2; i++) {
				lbOption.options[lbOption.options.length] = new Option(arrayOption[2 * i + 1], arrayOption[2 * i]);
			}
		}
	}
}

//��Ϣ�༭����
function xxEdit(id) {	
	idValue = id.value;
	if(idValue != "") {
		xml = new ActiveXObject("Microsoft.XMLHTTP");  
		xml.open("get", "/includes/xxEdit.jsp?id=" + idValue, false);
		xml.send("");		
	}
}

//��ȡ�����
var request_djs;
function createrequest_djs() {//��ʼ����ָ������������������ĺ���
	request_djs = false;
	//��ʼ��ʼ��XMLHttpRequest����
	if(window.XMLHttpRequest) { //Mozilla �����
		request_djs = new XMLHttpRequest();
		if (request_djs.overrideMimeType) {//����MiME���
			request_djs.overrideMimeType('text/html');
		}
	}
	else if (window.ActiveXObject) { // IE�����
		try {
			request_djs = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e) {
			try {
				request_djs = new ActiveXObject("Microsoft.XMLHTTP");
			} 
			catch (e) {}
		}
	}
	if (!request_djs) { // �쳣����������ʵ��ʧ��
		window.alert("���ܴ���XMLHttpRequest����ʵ��.");
		return false;
	}
}
function getDjs(val){
	createrequest_djs();

	var url = "/includes/getDjs.jsp?bh="+escape(val)+"&aa="+Math.random();
	// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���	
	request_djs.open("GET", url, true);
	request_djs.setRequestHeader("Content-Type","text/html")
	request_djs.setRequestHeader("Content-Type", "GBK");
	
	request_djs.onreadystatechange = processrequest_djs;
	request_djs.send(null);
}
// ��������Ϣ�ĺ���
function processrequest_djs() {
	if (request_djs.readyState == 2) {//�����Ѿ��������ڴ���֮��
		document.getElementById("djs").innerHTML="<img src='/includes/animated_loading.gif' width='16' height='16'  align='absmiddle'/>";
	}
	if (request_djs.readyState == 3) {//����ȴ�
		document.getElementById("djs").innerHTML="<img src='/includes/animated_loading.gif' width='16' height='16'  align='absmiddle'/>";
	}
	if (request_djs.readyState == 4) { // �ж϶���״̬
		if (request_djs.status == 200) { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
			var msg = request_djs.responseText;
			//ȡ����Ϣ���,
			document.getElementById("djs").innerText=Trim(msg);			
		}
		else { //ҳ�治����
            //alert("���������ҳ�����쳣��");
        }
	}
}
function getQueryStringRegExp(name) {
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)) 
	return unescape(RegExp.$2.replace(/\+/g, " ")); return ""; 
}
function zd(obj_id,xxid,zdbj){
	if(zdbj=="0"){
		doXXZD(obj_id,"",xxid,zdbj);
		//window.location.reload();
	}
	else if(zdbj=="1"){
		doXXZD(obj_id,"",xxid,zdbj);
		//window.location.reload();
	}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}


// ˵����Javascript ��ȡ����(url)�����ķ���
function getQueryString(loc,name) {
	
	if(loc==""){
		loc=location.href;
	}
	
	// �������û�в��������������в���������Ҫ��ȡ�Ĳ�����ֱ�ӷ��ؿ�     
	if(loc.indexOf("?")==-1 || loc.indexOf(name+'=')==-1) {
		return '';
	}
	// ��ȡ�����в�������
	var queryString = loc.substring(loc.indexOf("?")+1);
	
	// ��������� ?key=value&key2=value2     
	var parameters = queryString.split("&");      
	var pos, paraName, paraValue;     
	for(var i=0; i<parameters.length; i++) {
		// ��ȡ�Ⱥ�λ��         
		pos = parameters[i].indexOf('=');
		if(pos == -1) { continue; }
		// ��ȡname �� value         
		paraName = parameters[i].substring(0, pos);
		paraValue = parameters[i].substring(pos + 1);
		// �����ѯ��name���ڵ�ǰname���ͷ��ص�ǰֵ��ͬʱ���������е�+�Ż�ԭ�ɿո�
		if(paraName == name) {
			return unescape(paraValue.replace(/\+/g, " "));
		}
	}
	return '';
} 

//������ƥ��ķ�ʽ��ȡ����(url)�����ķ���
function getQueryStringRegExp(name) {
	var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");
	if (reg.test(location.href)) return unescape(RegExp.$2.replace(/\+/g, " ")); 
	return ""; 
}
//����������
<!--
function MM_findObj(n, d) { //v4.01
var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
var i,p,v,obj,args=MM_showHideLayers.arguments;
for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
var isshow;if(v=="visible") {isshow="y";}
if(isshow=="y") {document.getElementById("backlay").style.display="";}else{document.getElementById("backlay").style.display="none";}
obj.visibility=v; }
}
//-->
//div���Զ�λ�ľ��ж�λ����Ļ�ֱ��ʿ��-div���-ie���������
//if(window.screen.width>1002){
//	document.write("<style type=\"text/css\">");
//	document.write("#Layer1,#Layer2,#Layer3,#Layer4,#Layer5,#Layer6,#Layer7 {");
//	document.write("margin-left:"+((window.screen.width-1002-22)/2)+"px}");
//	document.write("</style>");
//}	


/*
document.write("<style type=\"text/css\">\n");
document.write("body {\n");
document.write("	filter:Gray;\n");
document.write("	font-size: 12px;\n");
document.write("	color: #000000;\n");
document.write("	text-decoration: none;\n");
document.write("	margin: 0px;\n");
document.write("	line-height: 18px;\n");
document.write("}\n");
document.write("</style>\n");
*/
<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}


function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//ͷ��ҳ��
function chance(obj,id){
	var p = obj.parentNode.getElementsByTagName("span");
	var p1 = document.getElementById(id).getElementsByTagName("div");
	
	for(i=0;i<p.length;i++){
		//alert(i);
		if(obj==p[i]){			
			if(i==0) {//���ơ���ҳ�������ʽ��������������������
				p[i].className = "oo_on_sy";				
			}
			else{
				p[i].className = "oo_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "oo_sy";				
			}
			else{
				p[i].className = "oo";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}
	//var selected_text=obj.innerText;
	//if(selected_text=="���񹫿�" || selected_text=="��Ϣ����" || selected_text=="���߷���" || selected_text=="�ƽ̹���" || selected_text=="��ҵ��չ" || selected_text=="��ȫ����" || selected_text=="��������") 
	//	document.getElementById("div_lm").style.display="";
	//else
	//	document.getElementById("div_lm").style.display="none";
}
function freefocus(obj){
	var p = obj.parentNode.getElementsByTagName("span");
	
	for(i=0;i<p.length;i++){		
		if(obj==p[i]){			
			if(i==0) {//���ơ���ҳ�������ʽ��������������������
				p[i].className = "oo_on_sy";				
			}
			else{
				p[i].className = "oo_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "oo_sy";				
			}
			else{
				p[i].className = "oo";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}		
}

function chance1(obj,id){
	var p = obj.parentNode.getElementsByTagName("span");
	var p1 = document.getElementById(id).getElementsByTagName("div");
	
	for(i=0;i<p.length;i++){
		//alert(i);
		if(obj==p[i]){			
			if(i==0) {//���ơ���ҳ�������ʽ��������������������
				p[i].className = "tt_on_sy";				
			}
			else{
				p[i].className = "tt_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "tt_sy";				
			}
			else{
				p[i].className = "tt";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}
	//var selected_text=obj.innerText;
	//if(selected_text=="���񹫿�" || selected_text=="��Ϣ����" || selected_text=="���߷���" || selected_text=="�ƽ̹���" || selected_text=="��ҵ��չ" || selected_text=="��ȫ����" || selected_text=="��������") 
	//	document.getElementById("div_lm").style.display="";
	//else
	//	document.getElementById("div_lm").style.display="none";
}
function freefocus1(obj){
	var p = obj.parentNode.getElementsByTagName("span");
	
	for(i=0;i<p.length;i++){		
		if(obj==p[i]){			
			if(i==0) {//���ơ���ҳ�������ʽ��������������������
				p[i].className = "tt_on_sy";				
			}
			else{
				p[i].className = "tt_on";
			}
			//if(typeof(p1[i])!="undefined") p1[i].className = "show";
		}
		else{			
			if(i==0) {
				p[i].className = "tt_sy";				
			}
			else{
				p[i].className = "tt";				
			}
			//if(typeof(p1[i])!="undefined")	p1[i].className = "hidden";
		}
	}		
}
function FontSize(size){
	tb1.style.fontSize = size;
}
function getCookie(nm){
	var m=null;
	if(window.RegExp){
		var re=new RegExp(";\\s*"+nm+"=([^;]*)","i");
		m=re.exec(';'+document.cookie);
		}
	return (m?unescape(m[1]):null);
}
function setCookie(name,value,days){
	var expires;
	if(days){
		var date=new Date();
		date.setTime(date.getTime()+(days*86400000));
		expires="; expires="+date.toGMTString();
	}
	document.cookie=name+"="+escape(value)+expires+";path=/";
}