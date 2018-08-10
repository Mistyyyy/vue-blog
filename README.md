## 基于Vue2.0+Vue-Router+Vuex+axios开发的仿博客系统项目

**先占个坑，本项目是我第一个vue-cli项目，后期会优化功能，所有数据来源也会使用mock来获取，后期我会把整个项目完善好**

**此外，本项目是仿照简书PC端来仿的一个博客项目**
  ### 现在完成的功能点有

- 博客账号注册，账号登录功能
- 游客访问功能，浏览文章，浏览文章详情，评论引导到登录页功能
- 游客和已登录账户的权限分配
- 用户浏览，发布，修改，删除文章，用户获取评论，发布评论，修改评论，删除评论的功能。

## start project

````
# clone project

git clone https://github.com/Mistyyyy/vue-blog.git

# install module related

npm install

# run project

npm run dev
````

## 注意点

**项目目前存在的问题：本项目所使用的数据暂时依赖于公司的后端提供的接口，之后会统一改为mock的数据，此外，本项目先注重vue技巧的使用，后端逻辑方面的接口数据可能会比较简单些，后面会逐渐做优化**

### 近期会添加的功能 

- 加入第三方组件库 element-Ui的使用
- 使用自定义指令来完成表单的验证
- 对于vue中transition属性的应用
- 优化vue-router和vuex 
- 组件的懒加载
- 方法的抽象和分离



