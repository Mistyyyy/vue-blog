// localStorage 设置localStorage
export function setStorage (name, value, container = localStorage) {
  container.setItem(name, value)
}
// 获取localStorage
export function getStorage (name, container = localStorage) {
  return container.getItem(name)
}
// 移除本地的localStorage
export function delStorage (name, container = localStorage) {
  container.removeItem(name)
}
