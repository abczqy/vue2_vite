/**
 * 根据两个dom元素和方向得出一个需要切割的数据，是一个数组
 * @param {HTMLElement} dom 
 * @param {HTMLElement} player 
 * @param {String} direction
 * @returns 返回一个数组 [left,top,width,height]
 */
function getArray(dom, player, direction = 'left', otherH = 0) {
    if (!dom || !player) {
        return null;
    }
    const { width: w, left: l, right: r, top: t, bottom: b } = dom.getBoundingClientRect();
    const { width, left, right, top, bottom } = player.getBoundingClientRect();
    const h = parseFloat(window.getComputedStyle(dom, null).height) + otherH;
    const height = parseFloat(window.getComputedStyle(player, null).height);
    // const paddingT = parseInt(window.getComputedStyle(dom, null).paddingTop)
    // const paddingB = parseInt(window.getComputedStyle(dom, null).paddingBottom)
    // const paddingB = parseInt(window.getComputedStyle(dom, null).paddingBottom)



    switch (direction) {
        case 'left':
            return [l - left, t - top, w, h];
        case 'right':
            return [0, t - top, w - (left - l), h];
        case 'top':
            return [l - left, 0, w, h - (top - t)];
        case 'bottom':
            return [l - left, t - top, w, h]
    }
    return null;
}

/**
 * 切割或补上
 * @param {function} fn 
 * @param {HTMLElement} dom 
 * @param {HTMLElement} player 
 * @param {String} direction
 */
function switchCut(fn, dom, player, direction = 'left', otherH) {
    const arr = getArray(dom, player, direction, otherH);
    if (!arr) {
        fn()
    } else {
        fn(...arr)
    }
}

export default switchCut;
