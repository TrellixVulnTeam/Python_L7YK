



<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html xmlns="��http://www.w3.org/1999/xhtml��"><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title></title>
<link href="/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="/includes/function.js"></script>
</head>
 
<body>
<div class="shousuo">
<form name="sForm" method="post" onSubmit="return ssCheck();" action="/search.jsp?sessrwb=257F14C804BDA4A595482D1B268BE2FC" target="_blank">
<table cellpadding="0" cellspacing="0" width="100%">
             <tr>
                <td height="38" width="465"></td>
                <td width="77" class="wenb_c">��վ������</td>
                <td width="45">�ؼ���</td>
                <td width="164"><input name="query" type="text" class="shou_sr" /></td>
                <td width="164"><select name="lmbh" class="shou_sr">
                           <option value="">==ȫվ����==</option>
                           
              <option value="10002">-֪ͨ����</option>
 
              <option value="10003">-��Ϣ���</option>
 
              <option value="1000310001">--���ؿ�Ѷ</option>
 
              <option value="1000310002">--�ۺ���Ϣ</option>
 
              <option value="10005">-վ����Ϣ</option>
 
              <option value="1000510001">--վ��ƽ̨</option>
 
              <option value="10006">-�ƹ���ϵ</option>
 
              <option value="10007">-������Ϣ</option>
 
              <option value="10008">-�Ƽ��ƹ�</option>
 
              <option value="10009">-�����ʼ�</option>
 
              <option value="10010">-��������</option>
 
              <option value="10011">-������ҵ</option>
 
              <option value="10012">-�����д�</option>
   
                        </select></td>
                <td><input type="image" src="/images/shuost.jpg" /></td>
             </tr>
          </table>
       </form>
	   </div>

<script language="javascript">


function ssCheck()
{
	sForm.query.value=Trim(sForm.query.value);
	if(sForm.query.value=="" || Trim(sForm.query.value)=="")
	{
		alert('�������������ݣ�');
		sForm.query.focus();
		return false;
	}
	
var containSpecial = RegExp(/[(\ )(\~)(\!)(\@)(\��)(\#)(\$)(%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/); 
	
	if(containSpecial.test(sForm.query.value) == true) {
	    alert("�벻Ҫ���������ַ���");
		sForm.query.focus();
		return false;
	}
	
		return true; 
		
	
}

</script>
</body>
</html>
