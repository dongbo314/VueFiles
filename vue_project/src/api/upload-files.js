
export function UploadFiles(files) {
    return request({
      url: '/Tool/FileTransferStation/upload',
      method: 'post',
      files
    })
  }