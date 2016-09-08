<template>
  <div class="join">
    <form name="join_us" id="join_us">
      <h1>报名表</h1>
      <div class="input">
        你的名字：<br />
        <input class="input__input" type="text" name='userName' placeholder=""  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        性别：<br /><input type="radio" name="gender" value="male">男<br /> <input type="radio" name="gender" value="female"  required="required">女
      </div>
      <div class="input">
        宿舍：<br /><input type="radio" name="dorm" value="yy"  required="required">韵苑<br /> <input type="radio" name="dorm" value="zs">紫菘 <br /><input type="radio" name="dorm" value="qy">沁苑
      </div>
      <div class="input">
        院系-专业-年级:<br />
        <input class="input__input" type="text" name='info' placeholder=""  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        联系电话：<br />
        <input class="input__input" type="text" name="phone" placeholder=""  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        备用电话(选填)：<br />
        <input class="input__input" type="text" name='phone_2' placeholder="">
        <div class="input__bg"></div>
      </div>

      <div class="input">
        报名组别：<br />
        <input type="radio" name="group" value="0" required="required">Web<br /> <input type="radio" name="group" value="1">Android<br />
        <input type="radio" name="group" value="2">Lab<br /><input type="radio" name="group" value="3">PM<br />
        <input type="radio" name="group" value="4">Design<br /><input type="radio" name="group" value="5">iOS<br />
        <input type="radio" name="group" value="6">Game<br /><br />
      </div>
      自我介绍：<br />
      <textarea class="input__input" name="intro"></textarea>
      <div class="input">
        <input class="input__input" type="text" name='text' placeholder="验证码">
        <div class="input__bg"></div>
      </div>
      <img id='kaptcha' src="/pil" />
      <div id="submit_join" class="input__input">提交</div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  ready(){
    var __this=this;

    var verify=document.getElementById('kaptcha');
    verify.onclick=()=>verify.setAttribute('src','/pil?'+Math.random());



    function checkJoin() {
      var form=document.getElementById('join_us');

      console.log(form.group.value);

      if(form.userName.value.length<1||form.userName.value.length>6){
        alert('姓名应该为2-6个字符');
        return false;
      }

      if(form.info.value.length<3||form.info.value.length>9){
        alert('院系-专业-年级应该为2-9个字符');
        return false;
      }

      if(form.userName.value.length<1||form.userName.value.length>6){
        alert('姓名应该为2-6个字符');
        return false;
      }
      if(!(/^1[3|4|5|7|8]\d{9}$/.test(form.phone.value))){
        alert("手机号码有误，请重填");
        return false;
      }

      if(!(/^1[3|4|5|7|8]\d{9}$/.test(form.phone_2.value))||form.phone_2.value==''){
        alert("备用手机号码有误，请重填");
        return false;
      }

      if(form.getElementsByTagName('textarea')[0].value.length>1000||form.getElementsByTagName('textarea')[0].value.length<5){
        alert("自我介绍应控制在5-1000字");
      }

      if(form.text.value.length<4||form.text.value.length>4){
        alert('验证码应该为4个字符');
        return false;
      }

      var bodys={
        name :   form.userName.value ,
        gender:  form.gender.value,
        phone:   form.phone.value,
        phone_2: form.phone_2.value,
        dorm:    form.dorm.value,
        group:   form.group.value,
        intro:   form.intro.value,
        info:    form.info.value,
        text:    form.text.value
      };

      __this.$http.post('/info',bodys,{})
        .then((response) => {
        if(response.data.status==true){
          alert('报名成功')
        }else {
          alert('验证码错误');
        }
          var verify=document.getElementById('kaptcha');
          verify.setAttribute('src','/pil?'+Math.random());
      }, (response) => {
        alert('报名服务器错误');
          console.log(response);
      });

    }

    document.getElementById('submit_join').onclick=checkJoin;

  },
  name:'join'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .join{
    margin: 20px auto;
  }

  h1{
    color: #00ffb8;
    font-weight: lighter;
    font-size: 20px;
    text-align: center;
    margin: 0 0 20px 0;
  }

  form{

    color: #b9b9b9;
    font-size: 18px;
    width: 268px;
    margin: 20px auto;
  }

  input[type=radio]{
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 10px;
  }

  button,.input,textarea {
    width: 250px;
    margin-top: 20px;
  }

  .input__input {
    position: relative;
    font-size: 16px;
    width: 100%;
    padding: 0.5em 0.6em;
    line-height: 1.4;
    -webkit-appearance: none;
    border-bottom: 1px solid gray;
    background: transparent;
    color: white;
  }
  .input__input::-webkit-input-placeholder {
    color: #b9b9b9;
    transition: color 0.2s ease-out;
  }
  .input__input:focus {
    outline: none;
  }
  .input__input:focus::-webkit-input-placeholder {
    color: white;
  }
  .input__input:focus ~ .input__bg {
    opacity: 1;
  }

  .input__bg {
    display: block;
    position: relative;
    z-index: -1;
    opacity: 0;
    top: 0;
    left: 0;
    width: 271px;
    height: 40px;
    margin-top: -40px;
    background-image: linear-gradient(to right, #01a5fa 0%, #4ec4ce 100%), linear-gradient(to right, #01a5fa 0%, #4ec4ce 100%);
    transition: all 0.3s ease-out;
  }
  #submit_join{
    text-align: center;
  }
  textarea{
    height: 400px;
    border-radius: 5px;
    border: 1px gray solid;
  }
  #kaptcha{
    height: 40px;
    width: auto;
    margin: 10px auto;
  }
  .input{
    margin: 15px auto 0 auto;
  }
  input[type='radio'] {
    -webkit-appearance: none; /* remove default */
    display: inline-block;
    margin: 10px 10px 10px 0;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    cursor: pointer;
    vertical-align: middle;
    box-shadow: hsla(0,0%,100%,.15) 0 1px 1px, inset hsla(0,0%,0%,.5) 0 0 0 1px;
    background-color: hsla(0,0%,0%,.2);
    background-image: -webkit-radial-gradient( hsla(200,100%,90%,1) 0%, hsla(200,100%,70%,1) 15%, hsla(200,100%,60%,.3) 28%, hsla(200,100%,30%,0) 70% );
    background-repeat: no-repeat;
    -webkit-transition: background-position .15s cubic-bezier(.8, 0, 1, 1),
    -webkit-transform .25s cubic-bezier(.8, 0, 1, 1);
  }
  input[type='radio']:checked {
    -webkit-transition: background-position .2s .15s cubic-bezier(0, 0, .2, 1),
    -webkit-transform .25s cubic-bezier(0, 0, .2, 1);
  }
  input[type='radio']:active {
    -webkit-transform: scale(1.5);
    -webkit-transition: -webkit-transform .1s cubic-bezier(0, 0, .2, 1);
  }

  /* The up/down direction logic */

  input[type='radio'][type='radio'],
  input[type='radio'][type='radio']:active {
    background-position: 0 24px;
  }
  input[type='radio'][type='radio']:checked {
    background-position: 0 0;
  }
  input[type='radio']:checked ~ input[type='radio'],
  input[type='radio']:checked ~ input[type='radio']:active {
    background-position: 0 -24px;
  }
  #submit_join{
    position: relative;
    font-size: 12px;
    width: 160px;
    line-height: 2.5;
    -webkit-appearance: none;
    border-radius: 30px;
    border: 1px solid gray;
    color: white;
    transition: all 0.3s ease-out;
    margin: 20px auto 0 auto;;
    background: linear-gradient(to right, #1a7dc5 0%, #4ec4ce 100%), linear-gradient(to right, #1a7dc5 0%, #4ec4ce 100%);
  }
</style>
