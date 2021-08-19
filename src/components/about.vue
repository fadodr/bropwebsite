<template>
    <div class="about-container">
        <h3 class="header"><span>Who</span> we are</h3>
        <div class="about-top">
            <div class="top-left-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="top-right-div">
                <img class="img-responsive" src="../assets/travel.svg" alt="travel-img" height="400" width="300">
            </div>
        </div>
        <div class="about-bottom">
            <div class="bottom-left-div">
                <img class="img-responsive shake-img" src="../assets/shake.svg" alt="travel-img" height="300" width="300">
            </div>
            <div class="bottom-right-div">
                <div class="inner-div">
                    <h3><span>Our</span> mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipng elit, 
                        sed do labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="inner-div">
                    <h3><span>Our</span> Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipng elit, 
                        sed do labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .about-container {
        margin-top: 80px;
    }
    .header {
        text-align: center;
        font-family: 'Poppins';
        font-size: 24px;
    }
    .header span {
        color: #0C5FD5;
    }
    .about-top, .about-bottom {
        width: 100%;
        display: flex;
    }
    .top-left-div, .top-right-div {
        width: 50%;
    }
    .top-left-div p {
        text-align: justify;
        padding: 50px 30px;
        font-family: 'Poppins';
        font-size: 14px;
    }
    .bottom-left-div img , .img-responsive{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .bottom-left-div, .bottom-right-div{
        width: 50%;
    }
    .bottom-right-div .inner-div{
        padding: 0 20px;
    }
    .bottom-right-div h3 {
        font-family: 'Poppins';
        font: 24px;
    }
    .bottom-right-div h3 span{
        color: #0C5FD5;
    }
    .bottom-right-div p {
        font-family: 'Poppins';
        font-size: 13px;
    }
    .inner-div {
        margin-top: 40px;
    }
    .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .shake-img {
        margin-top: 20px;
    }
    @media screen and (max-width : 712px) {
        .about-top {
            flex-direction: column;
        }
        .about-bottom {
            flex-direction: column-reverse;
        }
        .bottom-left-div, .bottom-right-div, .top-left-div, .top-right-div{
            width: 100%;
        }
        .bottom-right-div {
            display: flex;
        }
    }
</style>