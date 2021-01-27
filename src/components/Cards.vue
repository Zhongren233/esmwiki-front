<template>
  <div>
    <el-form ref="cardForm" :model="requestBody.data">
      <el-form-item label="星级">
        <el-select v-model="requestBody.data.rarity" placeholder="">
          <el-option label="" value=""></el-option>
          <el-option label="☆5" value="☆5"></el-option>
          <el-option label="☆4" value="☆4"></el-option>
          <el-option label="☆3" value="☆3"></el-option>
          <el-option label="☆2" value="☆2"></el-option>
          <el-option label="☆1" value="☆1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="种类">
        <el-select v-model="requestBody.data.type" placeholder="">
          <el-option label="" value=""></el-option>
          <el-option label="Glitter" value="Glitter"></el-option>
          <el-option label="Brilliant" value="Brilliant"></el-option>
          <el-option label="Flash" value="Flash"></el-option>
          <el-option label="Sparkle" value="Sparkle"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="属性">
        <el-select v-model="requestBody.data.attribute" placeholder="">
          <el-option label="" value=""></el-option>
          <el-option label="Da" value="Da"></el-option>
          <el-option label="Vo" value="Vo"></el-option>
          <el-option label="Pf" value="Pf"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="requestBody.data.character" filterable placeholder="">
          <el-option
            v-for="character in characters"
            :key="character"
            :label="character"
            :value="character">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
      <el-button type="info" icon="el-icon-delete" @click="() => resetForm('cardForm')">重置</el-button>
    </el-form>
    <el-divider/>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="rarity" label="稀有度" width="65%" fixed="left"></el-table-column>
      <el-table-column prop="name" label="卡片名称" width="170%" fixed="left"></el-table-column>
      <el-table-column prop="character" label="角色名称" width="120%" fixed="left"></el-table-column>
      <el-table-column prop="type" label="种类"></el-table-column>
      <el-table-column prop="attribute" label="属性"></el-table-column>
      <el-table-column prop="appendDate" label="实装日期" width="500px"></el-table-column>

      <el-table-column label="一卡数值">
        <el-table-column prop="cardValue.noBreachCompositeValue" label="一卡综合值"></el-table-column>
        <el-table-column prop="cardValue.noBreachDaValue" label="一卡Da值"></el-table-column>
        <el-table-column prop="cardValue.noBreachPfValue" label="一卡Pf值"></el-table-column>
        <el-table-column prop="cardValue.noBreachVoValue" label="一卡Vo值"></el-table-column>
      </el-table-column>
      <el-table-column label="满破数值">
        <el-table-column prop="cardValue.allBreachCompositeValue" label="满破综合值"></el-table-column>
        <el-table-column prop="cardValue.allBreachDaValue" label="满破Da值"></el-table-column>
        <el-table-column prop="cardValue.allBreachPfValue" label="满破Pf值"></el-table-column>
        <el-table-column prop="cardValue.allBreachVoValue" label="满破Vo值"></el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1">
    </el-pagination>
  </div>

</template>

<script>
export default {
  data () {
    return {
      requestBody: {
        page: 1,
        size: 20,
        sort: 'appendDate',
        data: {
          type: '',
          rarity: '',
          character: '',
          attribute: ''
        }
      },
      characters: [
        '', 'HiMERU', '七種 茨', '三毛縞 斑', '乙狩 アドニス', '乱 凪砂', '仁兎 なずな', '仙石 忍', '伏見 弓弦', '佐賀美 陣', '南雲 鉄虎', '大神 晃牙', '天城 一彩', '天城 燐音', '天満 光', '天祥院 英智', '姫宮 桃李', '守沢 千秋', '巴 日和', '影片 みか', '斎宮 宗', '日々樹 渉', '明星 スバル', '春川 宙', '月永 レオ', '朔間 凛月', '朔間 零', '朱桜 司', '桜河 こはく', '椎名 ニキ', '椚 章臣', '氷鷹 北斗', '深海 奏汰', '漣 ジュン', '瀬名 泉', '白鳥 藍良', '真白 友也', '礼瀬 マヨイ', '神崎 颯馬', '紫之 創', '羽風 薫', '葵 ひなた', '葵 ゆうた', '蓮巳 敬人', '衣更 真緒', '逆先 夏目', '遊木 真', '青葉 つむぎ', '風早 巽', '高峯 翠', '鬼龍 紅郎', '鳴上 嵐'
      ],
      tableData: []
    }
  },
  mounted () {
  },
  methods: {
    async search () {
      const requestData = this.requestBody.data
      if (requestData.attribute === '') {
        requestData.attribute = null
      }
      if (requestData.rarity === '') {
        requestData.rarity = null
      }
      if (requestData.rarity === '') {
        requestData.rarity = null
      }
      if (requestData.character === '') {
        requestData.character = null
      }
      const { data: result } = await this.$http.post('api/cards', this.requestBody)
      this.tableData = result.data
      this.$message.success('成功获取')
    },
    resetForm (cardForm) {
      this.$refs[cardForm].resetFields()
      console.log(this.requestBody)
    }
  }
}

</script>

<style scoped>

</style>
