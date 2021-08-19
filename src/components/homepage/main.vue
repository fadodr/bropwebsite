<template>
    <div class="outer-container">
        <div class="main-homepage">
        <div class="main-left">
            <div class="inner-main-left">
                <h3>Let's <span class="new-color">bring</span> the <span class="new-color">world </span> to you</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button>Make Bookings</button>
            </div>
        </div>
        <div class="main-right">
            <img class="img-responsive" src="../../assets/mainimage.svg" alt="travel-img" height="500" width="700">
        </div>
        </div>
        <div class="second-main">
             <div class="smain-left">
                <img class="img-responsive" src="../../assets/travel.svg" alt="travel-img" height="400" width="300">
             </div>
             <div class="smain-right">
                <div class="inner-smain-right">
                    <h3><span>How</span> It Works</h3>
                <div v-for="i in howinfo" :key="i">
                <div></div>
                    <div class="each-div">
                        <h2>{{i}}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                </div>
             </div>
        </div>
        <div class="latest-tours">
            <h3 class="header">Latest Tours</h3>
            <div class="santorini">
            <div class="san" v-for="i in (1,2,3,4,5,6)" :key="i">
                <img src="../../assets/santorini.svg" alt="travel-img" height="200" width="200">
                <h3>Santorini</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p class="btn">View details</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            howinfo: [
                'Sign Up',
                'Make bookings',
                'Ready to go'
            ]
        }
    }
}
</script>

<style scoped>
.outer-container {
    width: 100%;
}
    .main-homepage {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .main-left, .smain-left, .main-right, .smain-right {
        width: 50%;
    }
    .inner-main-left {
    padding: 0 40px;}
    .main-left h3{
        font-family: 'Poppins';
        font-size: 36px;
    }
    .main-left p {
    font-family: 'Poppins';
    font-size: 14px;
    padding: 12px 0;}
    .imgfluid {
        display: block;
        margin: auto;
    }
    .second-main {
        display: flex;
        width: 100%;
    }
    .smain-right{
        width: 50%;
        display: flex;
        flex-direction: column;
    }
    .each-div {
    padding: 15px 0;}
    .smain-right h3 {
    font-family: 'Poppins';
    font-size: 24px;}
    .smain-right h3 span {
    color: #0C5FD5;}
    .smain-right h2 {
    font-family: 'Poppins';
    font-size: 16px;}
    .smain-right p {
    font-family: 'Poppins';
    font-size: 12px;}
    .header {
        width: 100%;
        height: 40px;
        font-family: 'Poppins';
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
    .santorini {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        text-align: justify;
    }
    .san {
        width: 30%;
        font-family: 'Poppins';
    }
    .san h3 {
    
    font-size: 18px;}
    .btn {
    font-size: 10px;
    color: #0C5FD5;}
    .san p {
        font-size: 13px;
    }
    .new-color {
    color: #0C5FD5;} 
    button {
    font-family: 'Poppins';
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 7px;
    background-color: #0C5FD5;
    color: white;}
    @media screen and (max-width : 712px) {
        .san {
        width: 40%;}
        .main-homepage {
        flex-direction: column-reverse;
    }
    .main-left, .main-right {
    width: 100%;}
    }
    @media screen and (max-width : 510px) {
        .san {
        width: 100%;
        text-align: center;}
        .second-main {
        display: flex;
        flex-direction: column;
    }
    .img-responsive {
    display: block;
    margin-right: auto;
    margin-left: auto;}
    }
    .smain-left, .smain-right {
        width: 100%;
    }
    .inner-smain-right{
    padding: 0 40px;}
    .outer-container {
    margin-top: 80px;}
    .img-responsive {
    display: block;
    max-width: 100%;
    height: auto;}
</style>