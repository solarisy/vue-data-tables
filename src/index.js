import DataTables from './src/DataTables'

DataTables.install = function(Vue) {
  Vue.component(DataTables.name, DataTables)
}

export default DataTables
