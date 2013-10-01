#使用说明

##获取yeoman-bootstrap3-angular-express-seed

    使用Webstorm7，启动时选择check out from version control:
    1.git的url：https://github.com/by90/yeoman-bootstrap3-angular-express-seed.git
    2.本地路径：E:\
    3.项目名称：yeoman-bootstrap3-angular-express-seed
    注意，我们的默认分支是develop，此后需要将master分支pull到本地。

##运行yeoman-bootstrap3-angular-express-seed

    1.全局安装yeoman及相应的npm包：
        npm install -g yo bower grunt-cli karma jasmine phantomjs
    2.在yeoman-bootstrap3-angular-express-seed目录下，打开命令行窗口
        npm install
        bower install
    3.设置环境变量：
        对于phantomjs，应设置：set PHANTOMJS_BIN=C:/Users/Administrator/AppData/Roaming/npm/node_modules/phantomjs/lib/phantom/phantomjs.exe
        本机为win2012，不同机器和账户有所不同。
        如使用chorme等，亦应设置相应环境变量
        Set CHROME_BIN="C:\Program Files (x86)\Google\Chrome\Application\CHROME\chrome.exe"

    4.运行app.js，相关运行配置已经创建
    5.运行e2e测试：命令窗口下执行scripts\e2e-test.bat
    6.运行前端单元测试：命令窗口下执行scripts\test.bat

##使用的前端包：

1.Angular最新版本(稳定版1.08,1.2rc2版本需要指明commit)注意写法："1.2.0-rc.2"，命令方式为：
  bower install angular#1.2.0-rc.2 -S
2.bootstrap最新版本(3.0)已经是正式版，直接处理即可
3.angular-bootstrap最新版本,这个比较麻烦，我们指定git所在位置，然后重新编译

##简单常识：

1.项目根目录bower的两个配置文件含义：
    .bowerrc  描述bower下载回来的库，放在哪个文件夹，这个文件夹我们将在.gitignore文件中忽略掉
     bower.json  描述我们需要的是哪些包，类似"~1.0.8"的写法表示大于1.08版
2.安装指定的Commit和指定的zip：
    bower从0.93版本开始支持安装指定的commit和zip，由于angular-bootstrap不支持bs3，这里使用的是其/bootstrap3_bis2分支：
    指明zip包，在配置文件中这么写：
    "angular-bootstrap":"https://github.com/angular-ui/bootstrap/archive/bootstrap3_bis2.zip"
    或者指明commit的id，这么写：
    "angular-bootstrap":"https://github.com/angular-ui/bootstrap.git#8cbeff0ffe960f5f46b9b886fa3db2d0c1ff2a9f"
    需要重新build，在E:\Queue\app\lib\angular-bootstrap目录中打开命令窗体，然后npm install，再然后grunt build即可,重新
    编译的结果在E:\Queue\app\lib\angular-bootstrap\dist目录里。
3.安装命令写入到json
    我们使用bower命令，均在项目根目录下。该目录由bower.json，只要我们加上-F，可写入依赖。加-D，可写入开发依赖。
4.局域网访问：windows下，进入控制面板\所有控制面板项\Windows 防火墙，然后在左侧选择：允许应用通过windows防火墙进行通信。
    此后，选node.js，在网络类型中将专用和共用都勾上。通过手机的安卓浏览器访问，本模版的字体非常小，后面需要使用bootstrap3
    优化。不过angular的表现不错，导航按钮能正常工作。这样测试下，能增进些感性的认知。

