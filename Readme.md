
##使用Bower

###安装Bower
   在安装yeoman的时候，一次解决：
   npm install -g yo grunt-cli bower

###简单使用常识：
1、两个文件：
   项目根目录下
  .bowerrc  描述bower下载回来的库，放在哪个文件夹，这个文件夹我们将在.gitignore文件中忽略掉
   bower.json  描述我们需要的是哪些包
2、安装指定的Commit和指定的zip：
   bower从0.93版本开始支持安装指定的commit和zip
   指明zip包，在配置文件中这么写：
      "bootstrap": "https://github.com/twbs/bootstrap/archive/3.0.0-wip.zip"
   或者指明commit的id，使用命令这么写：
      bower install 'git://github.com/yeoman/stringify-object.git#d2895fb97d'
   当然，"~1.0.8"表示大于1.08版
3、安装命令写入到json
   我们使用bower命令，均在项目根目录下。该目录由bower.json，只要我们加上-F，可写入依赖。加-D，可写入开发依赖。

###所需的包
1、Angular最新版本(稳定版1.08,1.2rc2版本需要指明commit)
    注意写法："1.2.0-rc.2"
    命令方式为：bower install angular#1.2.0-rc.2 -S
2、bootstrap最新版本(3.0)

3、Angular-bootstrap最新版本

