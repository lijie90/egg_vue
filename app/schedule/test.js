const Subscription = require("egg").Subscription;
const path = require("path");
const dele = require("../test/deleteP");
module.exports = {
  schedule: {
    // interval: '1s', // 1 分钟间隔
    cron: "0 15 15 * * *",
    type: "all" // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const filePath = path.join(ctx.app.baseDir, "app", "/logs");
    dele(filePath);
    ctx.logger.info(filePath);
    ctx.logger.info("删除文件");
  }
};
