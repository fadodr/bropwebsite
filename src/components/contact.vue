<template>
    <div>
        <div class="chat-header">
            <img class="img-responsive" src="../assets/chat.svg" alt="" height="220" width="220">
            <div class="call-info">
                <h3>Chat with Us</h3>
                <p>Phone: +234 811 111 111, +234 911 111 111</p>
                <p>Email: brop.in@gmail.com</p>
            </div>
        </div>
        <form action="">
            <div class="form-input">
                <label>Title</label><br><br>
                <input type="text" placeholder="e.g Mr / Mrs / Miss ">
            </div>
             <div class="form-input">
                <label>Full name</label><br><br>
                <input type="text" placeholder="e.g John Doe ">
            </div>
             <div class="form-input">
                <label>Email</label><br><br>
                <input type="text" placeholder="e.g johndoe@example.com ">
            </div>
             <div class="form-input">
                <label>Contact</label><br><br>
                <input type="text" placeholder="e.g +237 000 000 0000">
            </div>
             <div class="form-input">
                <label>Subject</label><br><br>
                <input type="text" placeholder="e.g I have some issues registering   ">
            </div>
             <div class="form-input">
                <label>Message</label><br><br>
                <textarea name="" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    .chat-header {
        display: flex;
        margin-top: 80px;
        align-items: center;
        padding-left: 50px;
    }
    form {
        padding-left: 50px;
        width: calc(100% - 70px);
    }
    label {
        font-family: 'Poppins';
        font-size: 18px;
    }
    input , textarea{
        width: calc(100% - 60px);
        border: 1px solid #868686;
        border-radius: 7px;
        font-size: 18px;
        padding: 15px 30px;
    }
    input:focus, textarea:focus {
        border-color: #0C5FD5;
    }
    .form-input {
        margin-bottom: 15px;
    }
    button {
        font-family: 'Poppins';
        font-size: 17px;
        padding: 15px 40px;
        border: none;
        border-radius: 7px;
        background-color: #0C5FD5;
        color: white;
    }
    .img-responsive {
        display: block;
        max-width: 100%;
        height: auto;
    }
    @media screen and (max-width: 375px) {
        .chat-header {
            flex-direction: column;
        }
        .call-info {
            margin: 20px 0;
        }
    }
</style>