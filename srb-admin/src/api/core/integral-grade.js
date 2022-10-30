import request from '@/utils/request'

export default{
    getList(){
        return request({
            url:'http://localhost:8110/admin/core/integralGrade/IG',
            method:'get'
        })
    }
}