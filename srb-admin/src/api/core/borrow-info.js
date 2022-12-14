import request from '@/utils/request'

export default{
    getList(){
        return request({
            url:`/admin/core/borrowInfo/list`,
            method:'get'
        })
    },
    getBorrowInfoDetail(borrowInfoId){
        return request({
            url:`/admin/core/borrowInfo/getBorrowInfoDetail/${borrowInfoId}`,
            method:'get'
        })
    },
    approval(borrowInfoApproval){
        return request({
            url:'/admin/core/borrowInfo/approval',
            method:'post',
            data:borrowInfoApproval
        })
    }
}