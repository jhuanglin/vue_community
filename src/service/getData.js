import ajax from '@/utils/axios'

const REQUEST_TYPE = 'ajax'

if(REQUEST_TYPE === 'ajax') {
    
    // 发送acesstoken请求
    var login = (info) => ajax('POST', 'https://www.vue-js.com/api/v1/accesstoken', info);

}

export {
    login
}