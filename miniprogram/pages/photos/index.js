const mock = require('../../data/mock.js');

Page({
  data: {
    album: mock.photos,
    kidName: mock.children[0].name,
    filter: 'all',
    shown: [],
    mineCount: 0,
    cap: ''
  },

  onLoad() {
    const mineCount = mock.photos.tiles.filter(t => t.mine).length;
    this.setData({ mineCount });
    this.applyFilter('all');
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 });
    }
  },

  setFilter(e) {
    this.applyFilter(e.currentTarget.dataset.f);
  },

  applyFilter(mode) {
    const tiles = mock.photos.tiles;
    const shown = mode === 'mine' ? tiles.filter(t => t.mine) : tiles;
    const cap = mode === 'mine'
      ? '已显示标注为「' + this.data.kidName + '」的照片 · ' + shown.length + ' 张'
      : '本相册共 ' + mock.photos.total + ' 张 · 已自动标注孩子姓名 · 点开可保存';
    this.setData({ filter: mode, shown, cap });
  },

  onTapPhoto() {
    wx.showToast({ title: '原型演示：查看大图', icon: 'none' });
  }
});
