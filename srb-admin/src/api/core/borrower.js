import request from '@/utils/request'

export default{
    getPageList(limit,page,keyword){
        return request({
            // 这里需要注意参数的传递 参数要怎么传过去
            url:`/admin/core/borrower/getPageList/${limit}/${page}`,
            method:'get',
            //使用请求传参?k=v的形式
            //key和value相同可以简写成一下的形式 相当于keyword:keword
            params:{keyword}

        })
    },
    getBorrower(borrowerId){
        return request({
            url:`/admin/core/borrower/getBorrower/${borrowerId}`,
            method:'get'
        })
    },
    approvalSubmit(approvalSubmit){
        return request({
            url:'/admin/core/borrower/approvalSubmit',
            method:'post',
            data:approvalSubmit
        })
    }
}
