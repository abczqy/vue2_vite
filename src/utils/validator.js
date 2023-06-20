/*
 * @Author: L
 * @Date: 2022-08-06 09:13:37
 * @LastEditTime: 2023-02-08 16:51:25
 * @LastEditors: Do not edit
 * @Description: Do not edit
 */
import {
  validIpPort,
  validNumber,
  validEmail,
  validIdCard,
  validPhone,
  validRegionCode,
  validLongitudeAndLatitude,
  validCharacter,
  validPointNum,
} from "@/utils/validate";
/**
 *
 * @param {*} rule 规则
 * @param {*} value 表单中的值
 * @param {*} callback 回调函数
 */
export function checkEmail(rule, value, callback) {
  if (!validEmail(value)) {
    callback("请输入正确的邮箱格式");
  } else {
    callback();
  }
}

export function checkPhone(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validPhone(value)) {
    callback("请输入11位正确手机号码");
  } else {
    callback();
  }
}

export function checkRegionCode(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validRegionCode(value)) {
    callback("请输入12位数行政编码");
  } else {
    callback();
  }
}

export function checkIdCard(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validIdCard(value)) {
    callback("请输入18位有效身份证号码");
  } else {
    callback();
  }
}

export function checkLongitudeAndLatitude(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validLongitudeAndLatitude(value)) {
    callback("请输入正确的经纬度格式");
  } else {
    callback();
  }
}

export function checkIsAllSpace(rule, value, callback) {
  if (String(value).trim() === "" && value) {
    callback("不能全是空格");
  } else callback();
}

export function checkCharacter(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validCharacter(value)) {
    callback("请输入两位大写字母");
  } else {
    callback();
  }
}
export function checkNotChinese(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!(escape(value).indexOf("%u") < 0)) {
    callback("不能包含中文字符");
  } else {
    callback();
  }
}
export function checkNumber(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validNumber(value)) {
    callback("请输入整数数字");
  } else {
    callback();
  }
}
export function checkIpPort(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validIpPort(value)) {
    callback("请输入正确的IP地址及端口号");
  } else {
    callback();
  }
}
export function checkPointNum(rule, value, callback) {
  if (String(value).trim() === "" || !value) {
    callback();
  } else if (!validPointNum(value)) {
    callback("请输入2~40的整数字");
  } else {
    callback();
  }
}
