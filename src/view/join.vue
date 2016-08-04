<template>
  <div class="join">
    <form>
      <h1>报名表</h1>
      <div class="input">
        <input class="input__input" type="text" name='name' placeholder="你的名字"  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        性别：男<input type="radio" name="gender" value="male"> 女<input type="radio" name="gender" value="female"  required="required">
      </div>
      <div class="input">
        宿舍：韵苑<input type="radio" name="live" value="yy"  required="required"> 紫菘<input type="radio" name="live" value="zs"> 沁苑<input type="radio" name="live" value="qy">
      </div>
      <div class="input">
        <input class="input__input" type="text" name='info' placeholder="院系-专业-年级"  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        <input class="input__input" type="text" name="contact" placeholder="联系电话"  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        <input class="input__input" type="text" name='contact' placeholder="备用电话"  required="required">
        <div class="input__bg"></div>
      </div>
      <div class="input">
        报名组别：<br />
        Web<input type="radio" name="group" value="0"  required="required"> Android<input type="radio" name="group" value="1"><br />
        Lab<input type="radio" name="group" value="2">PM<input type="radio" name="group" value="3"><br />
        Design<input type="radio" name="group" value="4"> iOS<input type="radio" name="group" value="5"><br />
        Game<input type="radio" name="group" value="6">
      </div>
      <button class="input__input" onclick="return false">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  name:'join'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    color: #00ffb8;
    font-weight: lighter;
  }

  form{
    margin-left: 20px;
    color: #b9b9b9;
    font-size: 18px;
    width: 268px;
  }

  input[type=radio]{
    margin-left: 20px;
    margin-right: 20px;
  }

  button,.input {
    width: 250px;
    margin-top: 20px;
  }

  .input__input {
    position: relative;
    font-size: 18px;
    width: 100%;
    padding: 0.5em 0.6em;
    line-height: 1.4;
    -webkit-appearance: none;
    border-radius: 2px;
    border: none;
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, #50c56c 0%, #4ec4ce 100%), linear-gradient(to right, #50c56c 0%, #4ec4ce 100%);
    border-left: 3px solid #50c56c;
    border-right: 3px solid #4ec4ce;
    background-position: 0 0, 0 100%;
    background-size: 100% 3px;
    background-color: transparent;
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
    width: 286px;
    height: 43px;
    margin-top: -43px;
    background-image: linear-gradient(to right, #50c56c 0%, #4ec4ce 100%), linear-gradient(to right, #50c56c 0%, #4ec4ce 100%);
    transition: all 0.3s ease-out;
  }
</style>
