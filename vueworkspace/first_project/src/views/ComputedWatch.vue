<!-- views/ComputedWatch.vue-->
 <template>
    <div>
      <input type="number" v-model="price"> 원
      <br>
      <input type="number" v-model="count"> 개
      <p> 과세 금액 : {{ amount }}</p>
      <p> 부과세 10% : {{ tax }}</p>
      <p> 결제 금액 : {{ total }}</p>
      <p :class="{'warn' : isShallow}"> 결제 금액이 5만원을 초과했습니다.</p>
    </div>
 </template>
 <script>
import { isShallow } from 'vue';

export default{
  data(){
    return{
      price : 0,
      count : 0,
      isShow : true,
    }
  },
  computed : {
    amount(){
      return this.price * this.count;
    },
    tax(){
      return this.amount * 0.1;
    },
    total(){
      return this.amount + this.tax;
    }
  },
  watch : {
    total(){
      if(this.total > 5000){
        this.isShow = false;
      }else{
        this.isShow = true;
      }
    }
  }
}
</script>
<style>
  .warn {
    display: none;
  }
</style>