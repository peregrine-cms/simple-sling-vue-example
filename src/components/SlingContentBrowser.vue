<template>
  <div v-if="tree" >
    <h1>{{path === '' ? 'root': path}}</h1>
    <h2>Propetries</h2>
    <table>
      <thead><th>Name</th><th>Value</th></thead>
      <tbody>
        <tr v-for="(value, name) in tree" v-bind:key="name" v-if="typeof value !== 'object'"><td>{{name}}</td><td>{{value}}</td></tr>
      </tbody>
    </table>
    <h2>Nodes</h2>
    <table>
      <thead><th>Name</th><th>jcr:primaryType</th></thead>
      <tbody>
        <tr v-if="path !== ''"><td><a href="#" v-on:click.prevent.stop="parentPath()">..</a></td><td>parent</td></tr>
        <tr v-for="child in tree.__children__" v-bind:key="child.__name__">
        <td><a v-bind:href="'#'+path+'/'+child.__name__" v-on:click.prevent.stop="setPath(child.__name__)">{{child.__name__}}</a></td>
        <td>{{child['jcr:primaryType']}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SlingContentBrowser',
  data() {
    return { path: '/content', nextpath: '/content', tree: {} }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    setPath(child) {
      this.nextpath = this.path + '/' + child;
    },
    parentPath() {
      const segments = this.path.split('/');
      segments.pop();
      this.nextpath = segments.join('/');
    },
    fetch() {
    axios
      .get(this.nextpath + '.harray.1.json')
      .then(response => (this.tree = response.data)).then( (response) => {
        this.path = this.nextpath;
        window.location.hash = this.path;
        return response;
      })
    }
  },
  watch: {
    nextpath() {
      this.fetch();
    }
  }
}
</script>

<style scoped>
table {
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  text-align: left;
  border-collapse: collapse;
  width: 100%;
  max-width: 400px;
}
table td, table th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
  width: 50%;
}
table tbody td {
  font-size: 13px;
}
table tr:nth-child(even) {
  background: #D0E4F5;
}
table thead {
  background: #1C6EA4;
}
table thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table thead th:first-child {
  border-left: none;
}

table tfoot td {
  font-size: 14px;
}
table tfoot .links {
  text-align: right;
}
table tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>