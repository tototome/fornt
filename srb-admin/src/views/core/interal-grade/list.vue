<template>
    <div class="app-container">
    <!-- 表格 -->
    <el-table :data="list" border stripe>
      <el-table-column type="index" width="50" />
      <el-table-column prop="borrowAmount" label="借款额度" />
      <el-table-column prop="integralStart" label="积分区间开始" />
      <el-table-column prop="integralEnd" label="积分区间结束" />
    </el-table>
  </div>
</template>
<script >
// @表示根目录和java中的src/java
 import integralGradeApi from '@/api/core/integral-grade'

export default {
  data () {
    return {
        list:[{"index":1,"borrowAmount":100,"integralStart":1,"integralEnd":5}]
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData(){
        integralGradeApi.getList().then(response=>{
            this.list=response.data.list;
        })
    }
  }
}
</script>
