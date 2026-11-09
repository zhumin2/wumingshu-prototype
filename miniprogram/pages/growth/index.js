const mock = require('../../data/mock.js');

Page({
  data: {
    children: mock.children,
    activeIdx: 0,
    child: null,
    active: null
  },

  onLoad() {
    this.apply(0);
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 });
    }
  },

  switchKid(e) {
    this.apply(Number(e.currentTarget.dataset.idx));
  },

  apply(idx) {
    const child = mock.children[idx];
    this.setData({
      activeIdx: idx,
      child,
      active: mock.growth[child.id]
    });
  }
});
