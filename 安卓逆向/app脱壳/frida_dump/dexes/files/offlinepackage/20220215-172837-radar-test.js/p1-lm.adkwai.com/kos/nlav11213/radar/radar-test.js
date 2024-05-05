try {
  var logConfig = {
    fps: false,
    timing: false,
    radar: {
      projectId: '033af54362', // 雷达平台上的唯一标识
      sampling: 1, // 上报采样率，1 为全部上报
      radarCost: true, // 上报radar自耗时
    },
  };
  window.weblog = new Weblog(logConfig, {
    product_name: 'union_cards', // 产品标识
  });
} catch (err) {
  console.error(err);
}
