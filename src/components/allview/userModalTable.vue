<template>
  <a-modal v-model:visible="show" wrapClassName="table-modal-list-box" width="75%">
    <a-table :columns="columns" :data-source="data" :pagination="false" :scroll="{ y: 240 }" />
  </a-modal>
</template>

<script>
import { defineComponent, watch, watchEffect, ref } from 'vue'
export default defineComponent({
  name: 'userModalTable',
  props: {
    isShowTabe: {
      type: Boolean,
      required: true,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    //显示弹框
    const show = ref(false)
    const pageType = ref('')
    watchEffect(() => {
      const { isShowTabe, type } = props
      show.value = isShowTabe
      pageType.value = type
    })
    watch(show, (nval, oval) => {
      context.emit('change', nval)
    })
    //弹框数据
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        width: 150
      },
      {
        title: 'Age',
        dataIndex: 'age',
        width: 150
      },
      {
        title: 'Address',
        dataIndex: 'address'
      },
      {
        title: 'Address2',
        dataIndex: 'address2'
      },
      {
        title: 'Address3',
        dataIndex: 'address3'
      }
    ]
    const data = []
    for (let i = 0; i < 100; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        address2: `London, Park Lane no. ${i}`,
        address3: `London, Park Lane no. ${i}`
      })
    }
    return {
      show,
      columns,
      data
    }
  }
})
</script>
<style lang="scss">
//元素在body下的最外层，没有被createApp实例成vue对象里的元素，所以不需要/deep/ ::v-deep之类的穿透，也不生效
.table-modal-list-box {
  .ant-modal .ant-modal-content {
    background-color: #0e154c;
    .ant-modal-close-icon {
      color: #333c87;
    }
    .ant-modal-close-x {
      height: 40px;
      width: 50px;
      line-height: 40px;
    }
    .ant-modal-body {
      padding-top: 35px;
    }
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-table-content {
    .ant-table-header {
      background-color: #243082;
    }
    ant-table-body .ant-table-body {
      background-color: #243082;
    }
    .ant-table-thead > tr > th {
      background-color: #243082;
      color: #fff;
      border-bottom-color: rgba(0, 0, 0, 0);
    }
    .ant-table-tbody > tr > td {
      background-color: #0e154c;
      border-bottom-color: rgba(0, 0, 0, 0);
      color: #17d5d3;
    }
    .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
    .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
      background-color: #323f8e;
    }
  }
  .ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {
    background-color: #0e154c;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 10px 10px;
  }
}
</style>
