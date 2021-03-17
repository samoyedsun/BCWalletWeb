<template>
    <span class="login_button">
        <input type="button" />
        <label>登陆</label>
        <label>注册</label>
    </span>
</template>
<style>
.login_button {
    position: relative;
    display: flex;
    flex: 1;
    overflow: hidden;
}
.login_button input {
    display: block;
    flex: 1;
    width: 0;
    height: 40px;
    border: none;
    border-radius: 2px;
    outline: none;
    background: #0066d0;
}
.login_button label {
    position: absolute;
    font-weight: bold;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all .6s ease;
}
</style>
