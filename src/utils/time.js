import Vue from 'vue'

/**
 * 实时时间转换指令，大于一个月则返回具体的年月日
 * @param { string } timeStamp - 时间 格式：年-月-日 时:分:秒 或 时间戳
 * @returns { string }
 */
function getFormatTime(timeStamp) {
    var dateTime = new Date(timeStamp);
    var no1new = dateTime.valueOf();
    var year = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var now = new Date();
    var now_new = now.valueOf();
    var milliseconds = 0;
    var timeSpanStr;

    milliseconds = now_new - no1new;

    if (milliseconds <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚';
    } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
    } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
        // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        timeSpanStr = year + '-' + month + '-' + day
    } else {
        // timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
        timeSpanStr = year + '-' + month + '-' + day
    }

    return timeSpanStr;
}

Vue.directive('time', {
    bind: function (el, binding) {
        el.innerHTML = getFormatTime(binding.value);
        //每隔一分钟更新一次
        el.__timeout__ = setInterval(function () {
            el.innerHTML = getFormatTime(binding.value);
        }, 60000);
    },
    unbind: function (el) {
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
});


/**
 * title: 时间、日期对象的格式化
 * date：毫秒时间
 * format：事件格式"yyyy-MM-dd hh:mm:ss"，年-月-日 时：分：秒
 * flag:计算剩余时间则为true(d天h时m分s秒)
 **/
export function dateFormat(date, format, flag) {
    var o = {};
    if (!flag) {
        //eg:format="yyyy-MM-dd hh:mm:ss";
        format = format || "yyyy-MM-dd hh:mm:ss";
        date = new Date(Number(date));
        o = {
            "M+": date.getMonth() + 1, // month
            "d+": date.getDate(), // day
            "h+": date.getHours(), // hour
            "m+": date.getMinutes(), // minute
            "s+": date.getSeconds(), // second
            "q+": Math.floor((date.getMonth() + 3) / 3), // quarter
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
    } else { //剩余日期
        format = format || '年-月-日';
        var day = 0,
            hour = 0,
            minute = 0,
            second = 0;
        if (date > 0) {
            date = date / 1000;
            day = Math.floor(date / (60 * 60 * 24));
            hour = Math.floor(date / (60 * 60)) - day * 24;
            minute = Math.floor(date / 60) - day * 24 * 60 - hour * 60;
            second = Math.floor(date) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
        }
        o = {
            "d+": day, // day
            "h+": hour, // hour
            "m+": minute, // minute
            "s+": second //second
        };
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 * 模拟延迟时间
 * @param {Number} duration 时间间隔
 * @returns promise
 */
export function _delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, duration)
    })
}

/**
 * @param {Number|String} str 
 * @returns String
 * 是否需要补0
 */
 function replenishZero(str) {
    return +str < 10 ? "0" + str : str
}

export function getTimeString(date) {

    const time = date ? new Date(date) : new Date();
    // 得到年月日时分秒
    const year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    // 补0
    month = replenishZero(month);
    day = replenishZero(day);
    hour = replenishZero(hour);
    minute = replenishZero(minute);
    second = replenishZero(second);
    // date dateTime
    // const _dateTime = [hour, minute, second].join(".");
    // const _date = [year, month, day].join("-")
    return `${year}年${month}月${day}日 ${hour}时${minute}分${second}秒`
}