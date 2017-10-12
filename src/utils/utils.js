export const setStore = (name, content) => {
    if(!name) {
        return ;
    }
    if(typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

export const getStore = (name) => {
    if(!name) {
        return ;
    }
    let parseValue,
        value = window.localStorage.getItem(name);
    try {
        parseValue = JSON.parse(value);
    } catch (error) {
        parseValue = value;
    }
    return parseValue;
}

export const removeStore = (name) => {
    if(!name) {
        window.localStorage.clear();
        return ;
    }
    window.localStorage.removeItem(name);
}

/**
 * 格式化时间
 * 
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
    if (!str) return ''
    var date = new Date(str)
    var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return ''
    } else if ((time / 1000 < 30)) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt((time / 1000)) + '秒前'
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前'
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前'
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前'
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前'
    } else {
        return parseInt(time / 31536000000) + '年前'
    }
}