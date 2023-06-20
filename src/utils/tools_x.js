// 处理时间格式
export function getTime(time) {
  const date = time ? new Date(time) : new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate();
  day = day < 10 ? "0" + day : day;
  let hour = date.getHours();
  hour = hour < 10 ? "0" + hour : hour;
  let minute = date.getMinutes();
  minute = minute < 10 ? "0" + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? "0" + second : second;
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}


// 数字保留几位小数
export function getDecimals(num, n = 2, notNumber) {
  if (notNumber) return num;
  if (num == undefined || num == null) return 0;
  return Number(num).toFixed(n);
}

/**
 * 延迟
 * @param {number} duration 
 * @returns 
 */
export function _delay(duration = 2000) {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}


export function down(dom, initHeight = 0, duration = .3) {
  dom.style.transition = 'none';
  dom.style.height = 'auto';
  const h = dom.offsetHeight;
  dom.style.height = initHeight + 'px';
  dom.offsetHeight;
  dom.style.transition = `${duration}s`;
  dom.style.height = h + 'px'
}

export function up(dom, initHeight = 0, duration = .3) {
  dom.style.transition = `${duration}s`
  dom.style.height = initHeight + 'px';
}



export function delChild(arr, str) {
  if (!arr || arr.length === 0) return;
  arr.forEach(ele => {
    if (!ele[str] || ele[str].length === 0) {
      delete ele[str]
    } else {
      delChild(ele[str], str)
    }
  })
}