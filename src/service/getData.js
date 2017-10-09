import ajax from '@/utils/ajax'
import * as postList from '../../mock/postList'

const REQUEST_TYPE = 'ajax'
// const REQUEST_TYPE = 'test'

const setPromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

if(REQUEST_TYPE === 'ajax') {
    
    // 发送acesstoken请求
    var login = (info) => ajax('POST', 'https://www.vue-js.com/api/v1/accesstoken', info);

    // 发送topic主题请求
    var reqTopic = (info) => ajax('GET', 'https://www.vue-js.com/api/v1/topics', info);
    // 发送user信息请求
    var getUserInfo = (username) => ajax('GET', 'https://www.vue-js.com/api/v1/user/'+username);

    var reqPostList = () => setPromise(postList); 
}else {

}

export {
    login,
    reqTopic,
    reqPostList,
    getUserInfo
}