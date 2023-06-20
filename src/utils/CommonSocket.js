class CommonSocket {
    constructor(options) {
        // 网关
        this.options.service = options.service || "";
        // 拼接的参数
        this.channel_name = options.channel_name || "";
        // 拼接的url
        this.url = options.url || "";
        // 是否需要token
        this.hasToken = options.hasToken || false;
        // 打印信息时的提示名称
        this.webSocketName = options.webSocketName || "test example ";
        // 是个函数
        this.webSocketOnMessage = options.webSocketOnMessage;
        // webSocket 地址
        this.webSocketUrl = "";
        // webSocket 对象
        this.webSocketObj = null;
    }

    init() {
        // 得到webSocket地址
        this.webSocketUrl = this.getWebsocketUrl(this.url, this.channel_name, this.service, this.webSocketName);
        // 生成webSocket对象
        this.webSocketObj = this.getWebsocketObj(this.hasToken, this.webSocketUrl);
        // 绑定事件
        this.bindEvent();
    }
    // 获得websocket连接地址
    getWebsocketUrl(url, channel_name, service, webSocketName) {
        const APPLICATION_URL = process.env.VUE_APP_APPLICATION_URL;
        let webSocketUrl = "";
        if (APPLICATION_URL === "") {
            const ws_scheme = window.location.protocol == "https" ? "wss" : "ws";
            webSocketUrl = ws_scheme + "://" + window.location.host + url + channel_name + "/";
        } else {
            //指定API
            const url_http = APPLICATION_URL.split(":")[0];
            const url_http_host = APPLICATION_URL.split("//")[1] + service;
            const ws_scheme = url_http == "https" ? "wss" : "ws";
            webSocketUrl = ws_scheme + "://" + url_http_host + url + channel_name + "";
        }
        console.log(webSocketName + "的连接地址为:" + webSocketUrl);
        return webSocketUrl;
    }
    // 生成webSocket实例对象
    getWebsocketObj(hasToken, webSocketUrl) {
        if (hasToken) {
            const token = sessionStorage.getItem("token");
            return new WebSocket(webSocketUrl, [token]);
        } else {
            return new WebSocket(webSocketUrl, [token]);
        }
    }
    // 绑定事件
    bindEvent() {
        // 绑定事件,开始建立连接
        this.webSocketObj.onopen = () => {
            console.log(this.webSocketName + "开始建立连接");
        };
        // 绑定事件，建立连接，接收数据
        this.webSocketObj.onmessage = (e) => {
            console.log(this.webSocketName + "已经建立连接，正在接收数据");
            typeof this.webSocketOnMessage === 'function' && this.webSocketOnMessage(e);
        };
        // 绑定事件，发生错误时，给与提示
        this.webSocketObj.onerror = (e) => {
            console.log(this.webSocketName + "发生了错误！", e)
        };
        // 绑定事件，断开连接时，给与提示
        this.webSocketObj.onclose = e => {
            console.log(this.webSocketName + "已断开连接", e)
        }
    }
    // 断开连接
    close() {
        this.webSocketObj.close();
    }
}


export default CommonSocket;