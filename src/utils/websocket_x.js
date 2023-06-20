/**
 * @param {object} obj 配置对象
 * @param {string} obj.channel_name 参数 可选，根据实例情况
 * @param {string} obj.url websocket地址 "/ws/gate/log/" 必填
 * @param {string} obj.testName 哪个模块在调用websocket，用于测试 可选
 * @param {boolean} obj.needToken 是否需要token，默认是需要 可选
 * @param {e=>void} obj.onopen socket连接成功的回调函数 可选
 * @param {e=>void} obj.onmessage socket接收到消息的回调函数 可选
 * @param {e=>void} obj.onclose socket断开连接后的回调函数 可选
 * @param {e=>void} obj.onerror socket发生错误时的回调函数 可选
 */
export class MyWebSocket {
    socket_url = '';
    token = sessionStorage.getItem("token");
    /**
     * socket实例对象
     */
    instanceObj = null;
    constructor(obj = {}) {
        this._channel_name = obj.channel_name || '';
        this.url = obj.url || '';
        this.needToken = obj.needToken === undefined ? true : obj.needToken;
        this.testName = obj.testName || '测试案例-'
        this.onopen = obj.onopen;
        this.onmessage = obj.onmessage;
        this.onerror = obj.onerror;
        this.onclose = obj.onclose;
        // 通过传递的参数，获取socket_url
        this.getWebSocketUrl();
        // socket 初始化
        this.init();
    }
    /**
     * 通过传递的参数和url地址生成socket地址
     */
    getWebSocketUrl() {
        const APPLICATION_URL = process.env.VUE_APP_APPLICATION_URL;
        const { _channel_name, url } = this
        if (APPLICATION_URL === "") {
            let ws_scheme = window.location.protocol === "https" ? "wss" : "ws";
            this.socket_url = `${ws_scheme}://${window.location.host}${url}${_channel_name}`
        } else {
            //指定API
            var url_http = APPLICATION_URL.split(":")[0];
            var url_http_host = APPLICATION_URL.split("//")[1];
            let ws_scheme = url_http == "https" ? "wss" : "ws";
            this.socket_url = `${ws_scheme}://${url_http_host}${url}${_channel_name}`
        }
    }
    /**
     * socket初始化
     */
    init() {
        // 先生成websocket实例
        if (this.needToken) {
            this.instanceObj = new WebSocket(this.socket_url, [this.token])
        } else {
            this.instanceObj = new WebSocket(this.socket_url);
        }
        this.bindEvent();
    }
    /**
     * 给socket实例绑定回调事件
     */
    bindEvent() {
        const {
            instanceObj,
            testName,
            onopen,
            onmessage,
            onclose,
            onerror
        } = this;
        /**
         * 连接成功的回调函数
         */
        instanceObj.onopen = (e) => {
            console.log(`${testName}连接成功`, e, this.onopen);
            if (onopen && typeof onopen === 'function') {
                this.onopen(e)
            }
        }
        /**
         * socket接收到消息的回调函数
         */
        instanceObj.onmessage = (e) => {
            // console.log(`${testName}正在接收数据`, e);
            // 是否传递接收数据的回调函数
            // 先判断返回的数据是否是 HeartBeat，如果是，修改healthy状态
            if (e.data === 'pong') {
                // 说明接收到了心跳
                this.heartCheck.healthy = true;
                this.heartCheck.start(this.instanceObj);
                console.log(`${testName}心跳正常`)
            } else if (onmessage && typeof onmessage === 'function') {
                onmessage(e);
            }
        }
        /**
         * socket断开连接后的回调函数
         */
        instanceObj.onclose = (e) => {
            console.log(`${testName}断开连接`, e);
            if (onclose && typeof onclose === 'function') {
                onclose(e)
            }
        }
        /**
         * 发生错误时的回调函数
         */
        instanceObj.onerror = (e) => {
            console.log(`${testName}发生了错误`, e);
            if (onerror && typeof onerror === 'function') {
                onerror(e)
            }

        }

    }
    /**
     * 手动关闭socket
     */
    close() {
        if (this.instanceObj === null) return;
        this.instanceObj.close();
        this.instanceObj = null;
    }
    /**
     * 当参数改变后需要做的事情
     */
    set channel_name(val) {
        // 断开之前的链接
        this.close();
        // 重新设置参数
        this._channel_name = val;
        // 重新获得websocket地址
        this.getWebSocketUrl();
        // 初始化
        this.init();
    }
    /**
     * 心跳监测，查看websocket是否正常连接
     */
    heartCheck = {
        timeout: 10000,
        timeoutObj: null,
        serverTimeoutObj: null,
        healthy: true,
        that: this,
        max: 3,
        current: 0,
        start: ()=> {
            const that = this.heartCheck;
            const ws = this.instanceObj;
            that.timeoutObj && clearTimeout(that.timeoutObj)
            that.serverTimeoutObj && clearTimeout(that.serverTimeoutObj)
            that.timeoutObj = setTimeout(() => {
                // 这里发送一个心跳，后端收到后，返回一个心跳消息，
                if (ws.readyState === 3) {
                    return
                }
                console.log(`${this.testName}发送了心跳检测`)
                ws.send('HeartBeat')
                that.healthy = false;
                that.serverTimeoutObj = setTimeout(() => {
                    if (!that.healthy) {
                        console.log(`${this.testName}检测不到心跳`);
                        that.current++;
                        if (that.current < that.max) {
                            this.relink();
                        } else {
                            console.log(`${this.testName}超过最大连接次数！`)
                        }
                    } else {
                        // 有可能重新连上了，并且正常返回数据，将当前最大重连次数归零
                        that.current = 0;
                    }
                }, that.timeout)
            }, that.timeout)
        }
    }
    /**
     * 获取最新状态
     */
    getCurStatus = {
        start: function (ws) {
            const {
                testName,
            } = this;
            console.log(`${testName}发送了获取最新状态请求。`)
            ws.send('Open')
        }
    }
    /**
     * 重连
     */
    relink() {
        this.close();
        this.getWebSocketUrl();
        this.init();
    }
}