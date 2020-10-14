/**
 * isType 判断数据类型
 * @param obj 要检验类型的数据,必填
 * @param type 要检验的数据类型，选填
 * @returns {String|Boolean} 返回对应数据格式的字符串,或者与type参数比较的布尔值
 */
export const isType = function(obj, type) {
    // tostring会返回对应不同的标签的构造函数
    const toString = Object.prototype.toString
    const map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    }
    if (obj instanceof HTMLElement) {
      return type ? type === 'element' : 'element'
    }
    return type ? type === map[toString.call(obj)] : map[toString.call(obj)]
  }

  
  /**
   * cloneDeep 对象或数组的拷贝函数
   * @param obj 要拷贝的数据(对象/数组)
   * @returns {Object/Array} 返回对象或数组
   */
  export const cloneDeep = function(obj, parent = null) {
    //parent用于递归循环引用爆栈处理
    // 创建一个新对象
    let result = new obj.constructor() //保持继承链
    let keys = Object.keys(obj),
      key = null,
      temp = null,
      _parent = parent
    // 该字段若有父级则需要追溯该字段的父级
    while (_parent) {
      // 如果该字段引用了它的父级则为循环引用
      if (_parent.originalParent === obj) {
        return _parent.currentParent // 循环引用直接返回同级的新对象
      }
      _parent = _parent.parent
    }
    for (let i = 0; i < keys.length; i++) {
      key = keys[i]
      temp = obj[key]
      if (temp && isType(temp) === 'date') {
        result[key] = new Date(temp)
        continue
      }
      if (temp && isType(temp) === 'regExp') {
        result[key] = new RegExp(temp)
        continue
      }
      // 若字段的值是一个对象/数组
      if (temp && (isType(temp) === 'object' || isType(temp) === 'array')) {
        // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
        result[key] = cloneDeep(temp, {
          originalParent: obj,
          currentParent: result,
          parent: parent
        })
      } else {
        result[key] = temp
      }
    }
    return result
  }
  