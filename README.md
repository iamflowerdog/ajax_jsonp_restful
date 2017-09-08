## 学习API接口方法

#### 目录结构

* 用nodeJS搭建的静态服务器，项目根资源配置在 '/public' 文件夹下面
* 可以在前端模拟数据的发送请求和接收数据

#### AJAX

* XMLHttpRequest 是一个构造函数，创建 XMLHttpRequest 实例对象 ;

  ```
  let xhr = new XMLHttpRequest()
  ```

* 构造函数里面的方法有：

  ```
      XMLHttpRequest.UNSENT = 0;
      XMLHttpRequest.OPENED = 1;
      XMLHttpRequest.HEADERS_RECEIVED = 2;
      XMLHttpRequest.DONE = 4;
  
  ```
* 构造函数的原型对象里面的方法有:
    1. 普通状态值变化
    
          ```
              XMLHttpRequest.prototype.readyState = 0;
              XMLHttpRequest.prototype.responseText = null;
              XMLHttpRequest.prototype.statusText = null;
              XMLHttpRequest.prototype.status = 0;
          
          ```  
    2. 实例对象有 `open` 方法， 里面可以传 请求信息 和参数
        
        1. Method 请求的方法 get或post
        2. url 请求的地址，get请求可以通过地址发送请求参数
        3. async 是一个布尔值，是否以异步的形式发送请求 默认值是true 一般都使用默认值
          
          ```
              XMLHttpRequest.prototype.open = function(method,url,async,user,password) {};
              /**
              @param {String|ArrayBuffer|Blob|Document|FormData} [data]
              */
          ```
    3. 实例对象有 `send` 方法，用来中断AJAX请求 
         
          ```
          XMLHttpRequest.prototype.send = function(data) {};
          /**
          @param {string} header
          @param {string} value
          */
          ```
    4. 实例对象有 `abort` 方法，用来中断AJAX请求

          ```
              function XMLHttpRequest(options) {}
                XMLHttpRequest.prototype.abort = function() {};
                /**
                @return {string}
                */
          
          ```
    5. 实例对象有 `setRequestHeader` 方法，在发送post 请求时候，设置请求头，供服务器解析
    
          ```
            XMLHttpRequest.prototype.setRequestHeader = function(header,value) {};
            
            /**
            @static
            @type {number}
            @const
            */
          
          ```

          
          
#### jQuery 发送 Ajax请求
     
   * 学习链接 http://www.runoob.com/jquery/ajax-post.html
   * 语法： `$(selector).post(URL,data,function(data,status,xhr),dataType)`
   * dataType 可以传 jsonp 用来解决跨域资源加载
  
   
   
   
   
   
   
   
   
   
   
   
   