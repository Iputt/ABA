### Git配置使用

#### 配置

###### 全局参数配置

```bash
//git 用户名
git config --global user.name "yourname"
//git 注册邮箱
git config --global user.email "your_email@youremail.com"
```

###### 生成密钥（SSH key）

```bash
//邮箱
ssh-keygen -t rsa -C "your_email@youremail.com"
//一路回车确认 生成默认路径ssh文件
```

###### Github添加密钥

将上一步骤生成的密钥即.ssh/id_rsa.pub中内容全部复制。在github的 Settings-->SSH and GPG keys-->New SSH key，key中粘贴复制的内容(Title自定义)

###### 验证配置

```bash
a.ssh -T git@github.com
```

#### 使用

###### 链接自己已有的仓库

```bash
git clone git@github.com::yourName/repositoryname.git
```

###### 新建项目

* 远程仓库：在github中New repository 输入Repository name。[例如：TestDemo]

* 项目工程：在自己本地电脑上新建一个与github新项目工程同名的文件夹。[例如：TestDemo]
* 打开bash 输入下列指令：

```bash
//初始化 
git init

//链接远程仓库
git remote add origin git@github.com:yourName/repositoryname.git
//git remote add origin https://github.com/yourName/repositoryname.git

//拉取master分支最新文件
git pull origin master

//查看工作目录的状态
git status

//将文件添加到暂存区 (. 代表所有有改动的文件)
git add <file>

//提交更改,添加备注信息(此时将暂存区的信息提交到本地仓库)
git commit -m "commnet" 　　

//将本地仓库的文件push到远程仓库(若 push 不成功，可加 -f 进行强推操作)
git push origin master 　　 
```

#### 常用指令

```bash
//查看当前仓库配置信息
git config --list

//查看远程连接
git remote -v 

//删除远程链接
git remote rm origin
```

#### 文档链接

* [分支相关指令](https://cloud.tencent.com/developer/article/1386036)

