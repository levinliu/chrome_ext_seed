console.log("[雷学委浏览器插件] load extension")

function checkUrl(){
    var url = window.location.href
    if(url.includes("csdn")){
        alert("[雷学委浏览器插件] 您正在访问csdn");
    }else if(url.includes("baidu")){
        alert("[雷学委浏览器插件] 您正在访问百度!");
    }
}

checkUrl();
console.log("done checking")
