# ExpandZoom

一个可以通过 button 控制,展开 div 内容的插件

# Usage


```script
$(button).expandzoom(container_ele,options)
```

## options

```shell
{
        height: 200,  // 默认展开的高度,单位 px
        display: false, // 默认是否展开
        speed: 0.6 // 展开的速度,单位 s
}
```

参数

| Tables        | defualt        | remark  |
| ------------- |:-------------:| -----:|
| height     | 200 | 默认展开的高度,单位px |
| display      | false      |   默认是否展开,false |
| speed | 0.6     |    默认收缩时间,单位 s |

## demo
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="path_to/jquery.min.js"></script>
    <script src="path_to/expandzoom.js"></script>
</head>
<body>
<a href="javascript:" id="button">点击我</a>
<div id="container">
    需要展开的内容
</div>
<script>
    var pele = $('#container'); // 容器
    $('#button').expandzoom(pele);
</script>
</body>
</html>
```

[在线demo](http://www.leetao94.cn/expandzoom/index.html)