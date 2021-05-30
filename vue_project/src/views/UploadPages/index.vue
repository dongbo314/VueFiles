<template>
  <el-upload :data="dataObj" :multiple="true" action="Upload" drag>
    <i class="el-icon-upload" />
    <div class="el-upload__text">
      将文件拖到此处，或<em>点击上传</em>
    </div>
  </el-upload>
</template>

<script>
import { UploadFiles } from '@/api/upload-files'

export default {
  data() {
    return {
      dataObj: { token: '', key: '' },
      image_uri: [],
      fileList: []
    }
  },
  methods: {
    Upload() {
      console.log("上传文件")
    }
  }
}
</script>
