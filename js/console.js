if (window.console) {
    Function.prototype.makeMulti = function () {
      let l = new String(this);
      l = l.substring(l.indexOf("/*") + 3, l.lastIndexOf("*/"));
      return l;
    };
    let string = function () {
      /*

██╗  ██╗   ██╗ ██████╗██╗  ██╗███████╗███████╗
██║  ╚██╗ ██╔╝██╔════╝██║  ██║██╔════╝██╔════╝
██║   ╚████╔╝ ██║     ███████║█████╗  █████╗  
██║    ╚██╔╝  ██║     ██╔══██║██╔══╝  ██╔══╝  
███████╗██║   ╚██████╗██║  ██║███████╗███████╗
╚══════╝╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝
                                                                                       
*/
     
    };
    var date_begin=new Date("2022,12,4")
    var date_now=new Date()
    var Difference_In_Time = date_now.getTime() - date_begin.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    console.log("%c"+string.makeMulti()+"%c本站已运行 %c%d %c天\n\n"+"%c©2022 By Lychee🍒","color:#b399ff","color:#1e90ff","",Difference_In_Days,"color:#1e90ff","");
    console.log("%c WELCOME %c  🐳欢迎访问%cLychee%c的小窝","background:#ffbf00", "","background:#ff866f;color:#00e28d;font-weight:bold","");
    console.log("%c WARNING %c  ⛔系统已检测到您打开控制台","background:#ff2400","")
  }