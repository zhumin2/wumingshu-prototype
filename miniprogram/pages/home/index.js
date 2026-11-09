const mock = require('../../data/mock.js');

Page({
  data: {
    greeting: '你好',
    greetIcon: '☀️',
    user: mock.user,
    openCount: 0,
    activities: [],
    soon: {
      emoji: '🧧',
      title: '寻味中国年 · 家乡推荐官',
      meta: '12月20日 · 节庆文化 · 预约通道即将开启'
    },
    quicks: [
      { icon: '📅', label: '活动日历', bg: 'es' },
      { icon: '🎒', label: '装备清单', bg: 'ek' },
      { icon: '🎫', label: '课时包', bg: 'eg' },
      { icon: '📝', label: '请假登记', bg: 'eb' }
    ]
  },

  onLoad() {
    const h = new Date().getHours();
    let greeting = '晚上好';
    let greetIcon = '🌙';
    if (h < 11) { greeting = '早上好'; greetIcon = '☀️'; }
    else if (h < 14) { greeting = '中午好'; greetIcon = '🌤️'; }
    else if (h < 18) { greeting = '下午好'; greetIcon = '🌤️'; }

    const activities = mock.activities.map(a => {
      const percent = a.seats > 0 ? Math.round(((a.seats - a.left) / a.seats) * 100) : 100;
      return Object.assign({}, a, {
        percent,
        seatsText: a.full ? '已满 ' + a.seats + ' / ' + a.seats : '剩 ' + a.left + ' / ' + a.seats
      });
    });

    this.setData({
      greeting,
      greetIcon,
      activities,
      openCount: mock.activities.filter(a => a.statusType === 'pg').length
    });
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 });
    }
  },

  goDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/index?id=' + e.currentTarget.dataset.id
    });
  },

  onQuick() {
    wx.showToast({ title: 'v0.2 即将开放 🌿', icon: 'none' });
  },

  onBell() {
    wx.showToast({ title: '暂无新通知', icon: 'none' });
  }
});
