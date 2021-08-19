<template>
  <div>
    <button @click="togglebtn">
      <div class="btniconbefore" :class="{ isactivebefore: shownavs }"></div>
      <div class="btnicon" :class="{ isactivemiddle: shownavs }"></div>
      <div class="btniconafter" :class="{ isactiveafter: shownavs }"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: ["shownavsinfo"],
  data() {
    return {
      shownavs: false,
    };
  },
  methods: {
    togglebtn() {
      this.shownavs = !this.shownavs;
      this.$emit("togglebutton");
    },
  },
  watch: {
    shownavsinfo: function (value) {
      this.shownavs = value;
    },
  },
};
</script>

<style scoped>
.btnicon {
  height: 2px;
  width: 20px;
  background-color: black;
  margin: 3px 0;
}
.btniconbefore,
.btniconafter {
  height: 2px;
  width: 20px;
  background-color: black;
  margin: 3px 0;
}
button {
  border: none;
  background: none;
}
button:focus {
  outline: none;
}
.isactivemiddle {
  background: transparent;
}
.isactivebefore {
  transform: translate(-5px, 5px) rotate(45deg);
}
.isactiveafter {
  transform: translate(-5px, -5px) rotate(-45deg);
}
@media screen and (max-width: 1140px) {
  .btnrow {
    display: block;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
    border-bottom: 2px solid #ccc;
    box-shadow: 1px 1px 10px 1px #ccc;
  }
}
</style>