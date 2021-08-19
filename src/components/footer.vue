<template>
    <div class="footer-container">
        <div class="inner-footer">
            <div class="first-section">
            <img src="../assets/brop2.png" alt="brop" height="30" width="80">
        </div>
        <div class="sec-section">
            <ul>
                <li class="first-tag">Features</li>
                <li>Tours</li>
                <li>Flight</li>
            </ul>
        </div>
        <div class="third-section">
            <ul>
                <li class="first-tag">Company</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Joim our team</li>
            </ul>
        </div>
        <div class="for-section">
            <ul>
                <li class="first-tag">Help</li>
                <li>Faq</li>
                <li>Get Help</li>
                <li>Contact Us</li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer-container {
        width: 100%;
        border-top: 1px solid #E7E7E7;
        margin-top: 40px;
    }
    .inner-footer {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 0;
    }
    .first-section, .sec-section,.third-section,.for-section {
        width: 25%;
    }
    ul {
        list-style-type: none;
    }
    ul li {
        font-family: 'poppins';
        font-size: 16px;
        margin-bottom: 30px;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .first-tag {
        color: #0C5FD5;
    }
    @media screen and (max-width: 389px) {
        .first-section, .sec-section,.third-section,.for-section {
        width: 50%;
        text-align: center;
    }
    }
</style>