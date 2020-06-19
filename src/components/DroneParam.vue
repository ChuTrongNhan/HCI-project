<template>
  <div id="param-control">
    <b-collapse class="param-button" aria-id="contentIdForA11y2" animation="slide" :open.sync="isOpen">
        <div slot="trigger" role="button" aria-controls="contentIdForA11y2" class="param-header">
          <b-tooltip label="Thông số drone" type="is-dark" position="is-right">
            <figure class="image is-24x24">
              <img src="../assets/icons/Info.svg">
            </figure>
          </b-tooltip>
        </div>
        <div class="param-container">
          <div class="param-adjust">
            <div>ID</div>
            <div>{{id}}</div>
          </div>
          <div class="param-adjust">
            <div>Tên drone</div>
            <div>{{name}}</div>
          </div>
          <div v-for="param in params" :key="param.id" class="param-adjust">
            <div>{{param.label}}</div>
            <div>{{param.value}}</div>
          </div>
        </div>  
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'param-control',
  props: {
    id: String,
    name: String,
  },
  data() {
    return {
      isOpen: false,
      params: [
        { id: 2, label: 'Vĩ độ', value: `9°53'28.8"N` },
        { id: 3, label: 'Kinh độ', value: `105°30'30.1"E` },
        { id: 4, label: 'Độ cao', value: "20m" },
        { id: 5, label: 'Tốc độ', value: "100mph" },
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#param-control {
  background: white;
  border-radius: 20px;
  padding: 15px;
  width: fit-content;
  height: fit-content;
  box-shadow: 0px 4px 12px rgba(121, 87, 213, 0.15);

  .param-header {
    display: flex;
    justify-content: center;
  }

  .param-container {
  
    .param-adjust {
      display: flex;
      flex-direction: row;
      width: 230px;
      justify-content: space-between;
      padding: 0 15px;
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #d8d8d8;

      &>:first-child { color: #b9b9b9 }
      &>:nth-child(2) { font-weight: 600 }
    }
  }
}
</style>