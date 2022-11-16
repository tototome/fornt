import request from '@/utils/request'
export default{
   getList(){
    return request({
        url:'/admin/core/lend/getList',
        method:'get'
    })
   },
   getLendInfoDetail(lendId){
    return request({
        url:`/admin/core/lend/getLendInfoDetail/${lendId}`,
        method:'get'
    })
   }
}