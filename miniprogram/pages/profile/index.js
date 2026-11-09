const mock = require('../../data/mock.js');

Page({
  data: {
    user: mock.user,
    children: mock.children,
    regs: [],
    hoursPercent: 0,
    moreRows: [
      { icon: '📅', label: '报名日历', bg: 'sun' },
      { icon: '📝', label: '请假与补课', bg: 'plum' },
      { icon: '💬', label: '联系老师', bg: 'sky' }
    ]
  },

  onLoad() {
    const u = mock.user;
    this.setData({
      hoursPercent: Math.round((u.hoursLeft / u.hoursTotal) * 100)
    });
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 3 });
    }
    // 每次进入刷新报名记录（报名弹层提交后会写入本地存储）
    const regs = wx.getStorageSync('wms_registrations') || [];
    this.setData({ regs: regs.slice(0, 3) });
  },

  onRenew() {
    wx.showToast({ title: '原型演示：续费', icon: 'none' });
  },

  onRow() {
    wx.showToast({ title: 'v0.2 即将开放 🌿', icon: 'none' });
  }
});
