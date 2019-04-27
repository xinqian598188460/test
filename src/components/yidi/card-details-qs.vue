<template>
  <div class="wrap">
    <div class="card-img"><img :src="cardInfo.cardImgUrl"/></div>
    <div class="card-head">
      <h2>{{ cardInfo.cardContactsName }}</h2>
      <p>{{ cardInfo.position || "-" }}</p>
      <p>{{ cardInfo.entpName || "-" }}</p>
    </div>
    <div class="card-info">
      <ul>
        <li v-if="cardInfo.phoneNumbers && cardInfo.phoneNumbers.length > 0">
          <span>手机</span>
          <p v-for="(i, j) in cardInfo.phoneNumbers" :key="j">
            {{ i }}
          </p>
        </li>
        <li v-if="cardInfo.entpNumbers && cardInfo.entpNumbers.length > 0">
          <span>电话</span>
          <p v-for="(i, j) in cardInfo.entpNumbers" :key="j">
            {{ i }}
          </p>
        </li>
        <li>
          <span>邮件</span>
          <p>{{ cardInfo.entpFax || "-" }}</p>
        </li>
        <li>
          <span>公司</span>
          <p>{{ cardInfo.entpName || "-" }}</p>
        </li>
        <li v-if="cardInfo.entpAddressList && cardInfo.entpAddressList.length > 0">
          <span>地址</span>
          <p v-for="(i, j) in cardInfo.entpAddressList" :key="j">
            {{ i || "-" }}
          </p>
        </li>
        <li v-if="cardInfo.entpWebsiteList && cardInfo.entpWebsiteList.length > 0">
          <span>网站</span>
          <p v-for="(i, j) in cardInfo.entpWebsiteList" :key="j">
            {{ i }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import utils from '@/commons/utils'

export default {
  components: {},
  data () {
    return {
      cardInfo: {},
      cardId: ''
    }
  },
  mounted () {

  },
  watch: {},
  methods: {
    getData () {
      this.$http.post('/yidiApi/card/getCardInfo?cardId=' + this.cardId).then((resp) => {
        this.cardInfo = resp.data.result
      }).catch((err) => {
        window.console.log('网络异常', err)
      })
    }
  },
  created () {
    document.title = '名片详情'
    this.cardId = utils.getUrlParams().cardId
    this.getData()
  }
}
</script>
<style scoped>
  li{
    display: inline;
  }
  .wrap {
    background: #fff;
    width: 300px;
    margin: auto;
  }

  .card-img {
    text-align: center;
  }

  .card-img img {
    width: 100%;
    vertical-align: middle;
  }

  .card-head {
    background: #eee;
    padding: 10px 20px;
    text-align: center;
    line-height: 1.8;
  }

  .card-head h2 {
    font-size: 20px;
    color: #333;
  }

  .card-head p {
    font-size: 14px;
    color: #666;
  }

  .card-info li:first-child {
    border-top: 1px solid #ddd;
  }

  .card-info li {
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
  }

  .card-info .li span {
    display: block;
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
  }

  .card-info .li p {
    text-indent: 32px;
    line-height: 1.5;
    font-size: 14px;
    color: #666;
  }
</style>
