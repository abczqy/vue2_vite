/*
 * @Author: L
 * @Date: 2022-03-25 13:40:52
 * @LastEditTime: 2022-03-25 14:31:23
 * @LastEditors: Do not edit
 * @Description: 超长展示省略号
 */

export function ellipsis(value,len){
    if (!value) {
        return ''
    }
    if (value.length > len) {
        return value.slice(0, len) + '...'
    }

    return value
}