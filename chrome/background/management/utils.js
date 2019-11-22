/*
 * @Author: elegantYU
 * @Date: 2019-11-16 11:19:05
 * @Last Modified by: elegantYU
 * @Last Modified time: 2019-11-22 10:49:17
 */
// 插件本身id
const APPID = chrome.runtime.id;

// 获取自己的信息
const getSelf = () =>
  new Promise(resolve => {
    chrome.management.getSelf(info => {
      resolve(info);
    });
  });

// 获取所有插件
const getAll = () =>
  new Promise(resolve => {
    chrome.management.getAll(plgs => {
      resolve(plgs);
    });
  });

// 启用或禁用插件
const setEnabled = (id, enabled) =>
  new Promise(resolve => {
    chrome.management.setEnabled(id, enabled, () => resolve());
  });

// 卸载
const uninstall = id =>
  new Promise((resolve, reject) => {
    chrome.management.uninstall(id, () => {
      if (chrome.runtime.lastError) reject(chrome.runtime.lastError.message);
      resolve();
    });
  });

export { APPID, getSelf, getAll, setEnabled, uninstall };
