






<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html xmlns="��http://www.w3.org/1999/xhtml��"><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title></title>
<link href="/css/index.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" language="javascript" src="/includes/function.js"></script>
<script language="javascript">
var http_request = false;
	function send_request(url) {//��ʼ����ָ������������������ĺ���
		http_request = false;
		//��ʼ��ʼ��XMLHttpRequest����
		if(window.XMLHttpRequest) { //Mozilla �����
			http_request = new XMLHttpRequest();
			if (http_request.overrideMimeType) {//����MiME���
				http_request.overrideMimeType('text/xml');
			}
		}
		else if (window.ActiveXObject) { // IE�����
			try {
				http_request = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					http_request = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {}
			}
		}
		if (!http_request) { // �쳣����������ʵ��ʧ��
			window.alert("���ܴ���XMLHttpRequest����ʵ��.");
			return false;
		}
		http_request.onreadystatechange = processRequest;
		// ȷ����������ķ�ʽ��URL�Լ��Ƿ�ͬ��ִ���¶δ���
		http_request.open("GET", url, true);
		http_request.send(null);
	}
	// ��������Ϣ�ĺ���
    function processRequest() {
        if (http_request.readyState == 4) { // �ж϶���״̬
            if (http_request.status == 200) { // ��Ϣ�Ѿ��ɹ����أ���ʼ������Ϣ
                //alert(http_request.responseText);
            } else { //ҳ�治����
                //alert("���������ҳ�����쳣��");
            }
        }
    }
    send_request("/includes/fwl.jsp");

</script>
</head>
 
<body>
<div class="top">
          <div class="top_nwen">
             <div class="dinquan">
                 <span class="shijian fl"><script language="javascript">
				var curDate = new Date();
		
		var xinqi = "";
		if(6 == 0) xinqi = "��";
		else if(6 == 1) xinqi = "һ";
		else if(6 == 2) xinqi = "��";
		else if(6 == 3) xinqi = "��";
		else if(6 == 4) xinqi = "��";
		else if(6 == 5) xinqi = "��";
		else if(6 == 6) xinqi = "��";
		else xinqi = "";
		document.write(""+2017 + "��" + 06 + "��" + 03 + "�� ����" + xinqi);
		</script></span>
                 <span class="shouc fr">
                     <a href="/sitemap/sitemap.html" target="_blank">��վ��ͼ</a> |
                     <a href="javascript:;" onClick="javascript:addfavor('http://www.hzfishery.com','�����漼��');">�ղر�վ</a> |
                     <a href="javascript:void(0)" onClick="javascript:SetHome(this,'http://www.hzfishery.com');">��Ϊ��ҳ</a>
                 </span>
             </div>
             <div class="logo">
               <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="1000" height="218">
                   <param name="movie" value="/images/tbflash.swf">
                   <param name="quality" value="high">
                   <embed src="/images/tbflash.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="1000" height="218"></embed>
               </object>
            </div>
             <div class="daohang">
                <table cellpadding="0" cellspacing="0" width="100%" background="/images/daoz.jpg">
                   <tr>
                     <td width="20"><img src="/images/daol.jpg" /></td>
                      <td align="center"><a href="/html/main/gb2312/" target="_top">��վ��ҳ</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/hzyy/" target="_top">������ҵ</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="http://www.hz-agri.gov.cn:8180/programs/xxgk/" target="_blank">���񹫿�</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/bdkx/" target="_top">��Ϣ���</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/tzgg/" target="_top">֪ͨ����</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/programs/main/jghq/" target="_top">ˮ������</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/zwpt/" target="_top">վ����Ϣ</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/gqxx/" target="_top">������Ϣ</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/kjtg/" target="_top">�Ƽ��ƹ�</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/bfzj/" target="_top">�����ʼ�</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/yltt/" target="_top">��������</a></td>
                      <td width="3" align="center"><img src="/images/shux.jpg" /></td>
                      <td align="center"><a href="/html/main/xxyy/" target="_top">������ҵ</a></td>
                      <td width="20"><img src="/images/daor.jpg" /></td>
                   </tr>
                </table>
            </div>
          </div>
      </div>

<script language="javascript">

function addfavor(url,title) {
    if(confirm("��վ���ƣ�"+title+"\n��ַ��"+url+"\nȷ������ղ�?")){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            external.AddToFavoritesBar(url,title,'�����漼��');//IE8
        }else{
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(title, url, "");//firefox
                } catch(e) {
                    alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
                }
            }
        }
    }
    return false;
}
function SetHome(obj,url){

    try{

        obj.style.behavior='url(#default#homepage)';

       obj.setHomePage(url);

   }catch(e){

       if(window.netscape){

          try{

              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

         }catch(e){

              alert("��Ǹ���˲�����������ܾ���\n\n�����������ַ�����롰about:config�����س�Ȼ��[signed.applets.codebase_principal_support]����Ϊ'true'");

          }

       }else{

        alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n����Ҫ�ֶ�����"+url+"������Ϊ��ҳ��");

       }

  }

}


</script>
</body>
</html>
