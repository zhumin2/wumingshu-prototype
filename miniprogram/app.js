const mock = require('./data/mock.js');

App({
  globalData: {
    user: mock.user,
    children: mock.children
  },

  onLaunch() {
    // 恢复本地报名记录的占位逻辑：真实版本中这里会同步云端
    const regs = wx.getStorageSync('wms_registrations');
    if (!Array.isArray(regs)) {
      wx.setStorageSync('wms_registrations', []);
    }
  }
});
