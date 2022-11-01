<template>
  <div class="app-container">
    <div style="margin-bottom: 10px">
      <el-button
        @click="dialogVisible = true"
        type="primary"
        size="mini"
        icon="el-icon-upload2"
      >
        导入Excel
      </el-button>
      <el-button
        @click="exportData"
        type="primary"
        size="mini"
        icon="el-icon-download"
        >导出Excel</el-button
      >
    </div>

    <el-dialog title="数据字典导入" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="请选择Excel文件">
          <el-upload
            :auto-upload="true"
            :multiple="false"
            :limit="1"
            :on-exceed="fileUploadExceed"
            :on-success="fileUploadSuccess"
            :on-error="fileUploadError"
            :action="BASE_API + '/admin/core/dict/import'"
            name="file"
            accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false"> 取消 </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      dialogVisible: false,
      BASE_API: "http://localhost:8110",
    };
  },
  methods: {
    fileUploadExceed() {
      alert("文件数量超出上限");
    },
    fileUploadSuccess() {
      alert("上传成功");
      this.dialogVisible = false;
    },
    fileUploadError() {
      alert("上传失败");
    },
    exportData() {
    window.location.href = this.BASE_API + '/admin/core/dict/export'
}
  },
};
</script>
