<!-- <template>
  <div class="gameContainer">
    <div class="gamebox"
      v-for="gameOne in dataShow.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      :key="gameOne.id"
    >
      <div class="wrapItem">
        <div class="oLeft">
          <img :src="gameOne.imgSrc" alt="">
        </div>
        <div class="oRight">
          <p class="p1">{{gameOne.txt}}</p>
          <p class="p2">{{gameOne.description | ellipsis}}</p>
          <p class="p3"><a href="####">查看详情>></a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="block">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="dataShow.length">
    </el-pagination>
  </div>
</template>
<script>
</script>
<style scoped>
</style> -->

