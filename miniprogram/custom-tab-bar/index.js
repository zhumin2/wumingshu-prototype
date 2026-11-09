Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/home/index', text: '首页', icon: '🏠' },
      { pagePath: '/pages/photos/index', text: '相册', icon: '📷' },
      { pagePath: '/pages/growth/index', text: '成长', icon: '🌱' },
      { pagePath: '/pages/profile/index', text: '我的', icon: '👤' }
    ]
  },

  methods: {
    switchTab(e) {
      const index = Number(e.currentTarget.dataset.index);
      const target = this.data.list[index];
      if (!target) return;
      wx.switchTab({ url: target.pagePath });
    }
  }
});
