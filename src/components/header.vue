<template>
  <div class="app-inner-header">
    <div class="inner-header">
        <div><img src="../assets/brop2.png" alt="brop" height="30" width="80"></div>
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="bokings">Bookings</router-link></li>
            </ul>
        </div>
        <app-navicon class="navicon" @togglebutton="btnclicked" :shownavsinfo="shownavs"></app-navicon>
    </div>
  </div>
</template>

<script>
import navicon from '@/components/navicon'
export default {
    props: ["navinfo"],
  components : {
      appNavicon : navicon
  },
  data(){
      return {
          shownavs: false
      }
  },
  methods: {
      btnclicked(){
          this.$emit("clickedbutton")
      }
  },
  watch: {
    navinfo: function (value) {
      this.shownavs = value;
    },
  },
}
</script>

<style scoped>
    .app-inner-header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: white;
        box-shadow: white;
    }
    .inner-header {
        width: calc(100% -80px) ;
        height: 80px;
        padding: 0 40px;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
    ul {
        display: flex;
        list-style-type: none;
    }
    ul li {
        margin: 0 40px;
        font-family: 'poppins';
        font-size: 16px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .router-link-exact-active {
        color: #0C5FD5;
    }
    .navicon {
        display: none;
    }
    @media screen and (max-width : 750px) {
        ul {
            display: none;
        }
        .navicon {
            display: block;
        }
    }
    
</style>