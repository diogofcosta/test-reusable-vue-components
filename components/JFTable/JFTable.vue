<template>
  <table>
    <JFTableRow
      v-for="(values, index) in items"
      :key="index"
      :values="values"
    />
  </table>
</template>

<script>
import JFTableRow from '@diogofcosta/jf-table-row/JFTableRow'
export default {
  name: 'JFTable',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    JFTableRow
  }
}
</script>