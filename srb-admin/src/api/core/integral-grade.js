import request from '@/utils/request'

export default{
    getList(){
        return request({
            url:'http://localhost:8110/admin/core/integralGrade/IG',
            method:'get'
        })
    },
    save(integralGrade){
        return request({
            url:'http://localhost:8110/admin/core/integralGrade/IG',
            method:'post',
            data: integralGrade
        })
    },
    deleteById(id){
        return request({
            url:`http://localhost:8110/admin/core/integralGrade/IG/${id}`,
            method:'delete'
        })
    },
    getById(id){
        return request({
            url:`http://localhost:8110/admin/core/integralGrade/IG/${id}`,
            method:'get'
        })
    },
    updateById (integralGrade) {
        return request({
            url:`http://localhost:8110/admin/core/integralGrade/IG`,
            method:'put',
            data:integralGrade
        })
    }
}