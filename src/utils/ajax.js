// import axios from 'axios'

function formatObject(obj){
    if(typeof obj !== 'object'){
        return obj;
    }
    let keys = Object.keys(obj),
        result = '';

    keys.forEach((key, index) => {
        let value = obj[key];
        if(typeof value === 'object'){
            value = JSON.stringify(value);
        }
        if(index < keys.length - 1){
            result += `${key}=${value}&`;
        }else {
            result += `${key}=${value}`
        }
    })
    return result;
}

/**
 * 17.9.28
 * 使用ajax获取数据
 */
export default async(type="GET",url = "", data = {}, method = "ajax", header ={'Content-type':'application/json; charset=utf-8'}) => {
    type = type.toLocaleUpperCase();    
    let xhr;

    if(window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }else {
        xhr = new ActiveXObject;
    }

    if(type === 'GET'){
        let dataStr = '';
        dataStr = formatObject(data);
        
        if(dataStr !== ''){
            url = `${url}?${dataStr}`;
        }
    }

    let p = new Promise((resolve, reject) => {
        var result ; 
        //  打开连接
        xhr.open(type, url, true);
        // 设置表头
        
        if(type === 'POST') {
            Object.keys(header).forEach((key, index) => {
                xhr.setRequestHeader(key, header[key]);
            })
            xhr.send(JSON.stringify(data));
        } else if(type === 'GET') {
            xhr.send()
        }
        
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    let obj = xhr.response;
                    if (typeof obj !== 'object') {
                        obj = JSON.parse(obj);
                    }
                    resolve(obj);
                }else {
                    reject(xhr.response);
                }
            }
        }

    })

    return p;

}