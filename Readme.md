
##使用Bower

###安装Bower
   在安装yeoman的时候，一次解决：
   npm install -g yo grunt-cli bower

###简单使用常识：
1、两个文件：
   项目根目录下
  .bowerrc  描述bower下载回来的库，放在哪个文件夹，这个文件夹我们将在.gitignore文件中忽略掉
   bower.json  描述我们需要的是哪些包，类似"~1.0.8"的写法表示大于1.08版
2、安装指定的Commit和指定的zip：
   bower从0.93版本开始支持安装指定的commit和zip
   指明zip包，在配置文件中这么写：
      "angular-bootstrap":"https://github.com/angular-ui/bootstrap/archive/bootstrap3_bis2.zip"
   或者指明commit的id，这么写：
      "angular-bootstrap":"https://github.com/angular-ui/bootstrap.git#8cbeff0ffe960f5f46b9b886fa3db2d0c1ff2a9f"
       需要重新build，在E:\Queue\app\lib\angular-bootstrap目录中打开命令窗体，然后npm install，再然后grunt build即可
       重新编译的结果在E:\Queue\app\lib\angular-bootstrap\dist目录里。
3、安装命令写入到json
   我们使用bower命令，均在项目根目录下。该目录由bower.json，只要我们加上-F，可写入依赖。加-D，可写入开发依赖。

###所需的包
1、Angular最新版本(稳定版1.08,1.2rc2版本需要指明commit)
    注意写法："1.2.0-rc.2"
    命令方式为：bower install angular#1.2.0-rc.2 -S
2、bootstrap最新版本(3.0)
    已经是正式版，直接处理即可
3、Angular-bootstrap最新版本
    这个比较麻烦，我们指定git所在位置，然后重新编译

###运行e2e测试和单元测试：
1、在命令窗口，设置环境变量，这样chrome才能启动：
E:\Queue>Set CHROME_BIN="C:\Program Files (x86)\Google\Chrome\Application\CHROME\chrome.exe"
2、运行node scripts\web-server.js
3、运行scripts\e2e-test.bat，启动e2e测试
4、运行sctipts\test.bat，启动单元测试
改用无界面的浏览器，需要执行：
1、npm install phantomjs -g
2、npm install karma-phantomjs-launcher -g
3、修改两个karma配置文件的浏览器参数，改为phantomjs、注册phantomjs即可
