#grunt介绍

grunt是一个任务执行工具。
grunt目前是0.41版本，与0.3版的区别是，grunt已经分成grunt-cli、grunt和grunt-init三个部分。其中grunt-cli必须全局安装，用来
执行各项目中的grunt，只是个执行器。grunt必须在每个项目中本地安装，这是为了避免不同项目中因为插件不同导致冲突。grunt-init
    我们暂时用不到。

1、首先使用它运行express服务器
2、运行前端两种单元测试
3、集成到webstorm，简化运行方式。

#WebStorm7中可在terminal中执行命令
我们无需切换到命令窗口，Terminal窗口本身是在项目的根目录下

#全局安装grunt
    npm install -g grunt-cli
    当然，这部分我们在yeoman整体安装的时候已经解决，所以忽略。
    
#在项目根目录下本地安装grunt，并写入项目的开发依赖
*注意：此时IDE不可打开package.json文件，否则不会自动写入依赖。
npm install grunt  --save-dev

#为了运行express服务器，需要安装两个grunt插件

npm install grunt-contrib-watch --save-dev
npm install grunt-express-server --save-dev
我们将增加GruntFile.js文件，启动和停止express服务器。