const mock = require('../../data/mock.js');

function countSel(selected) {
  return Object.keys(selected).filter(k => selected[k]).length;
}

Page({
  data: {
    act: null,
    children: [],
    selected: {},
    sumText: '',
    consent: true,
    sheetOpen: false,
    done: false,
    btnLabel: '立即报名'
  },

  onLoad(query) {
    const act = mock.activities.find(a => a.id === query.id) || mock.activities[0];

    const selected = {};
    mock.children.forEach((c, i) => { selected[c.id] = i === 0; });

    const btnLabel = act.statusType === 'pg'
      ? '立即报名 · 剩 ' + act.left + ' 席'
      : (act.statusType === 'pb' ? '加入候补队列' : '开启预约提醒');

    this.setData({ act, children: mock.children, selected, btnLabel });
    this.updateSum();
  },

  onShareAppMessage() {
    return {
      title: this.data.act.title + ' · 无名树',
      path: '/pages/detail/index?id=' + this.data.act.id
    };
  },

  /* ---------- 报名弹层 ---------- */
  openSheet() {
    this.setData({ sheetOpen: true, done: false });
    this.updateSum();
  },

  closeSheet() {
    this.setData({ sheetOpen: false });
  },

  noop() {},

  toggleKid(e) {
    const id = e.currentTarget.dataset.id;
    const selected = this.data.selected;
    selected[id] = !selected[id];
    this.setData({ selected });
    this.updateSum();
  },

  onConsent(e) {
    this.setData({ consent: e.detail.value.length > 0 });
  },

  updateSum() {
    const n = countSel(this.data.selected);
    const price = this.data.act ? this.data.act.price : 0;
    const sumText = n === 0
      ? '请至少选择 1 个孩子'
      : '已选 ' + n + ' 个孩子 · 合计 ¥' + (n * price) + ' 或扣 ' + n + ' 课时';
    this.setData({ sumText });
  },

  submit() {
    const n = countSel(this.data.selected);
    if (n === 0) {
      wx.showToast({ title: '请至少选择 1 个孩子', icon: 'none' });
      return;
    }
    if (!this.data.consent) {
      wx.showToast({ title: '请先勾选《安全告知书》', icon: 'none' });
      return;
    }

    const chosen = this.data.children
      .filter(c => this.data.selected[c.id])
      .map(c => c.name);

    const regs = wx.getStorageSync('wms_registrations') || [];
    regs.unshift({
      id: Date.now(),
      actId: this.data.act.id,
      title: this.data.act.title,
      kids: chosen.join('、'),
      time: '刚刚',
      waitlist: this.data.act.statusType === 'pb'
    });
    wx.setStorageSync('wms_registrations', regs);

    this.setData({ done: true });
  },

  payNow() {
    wx.showToast({ title: '原型演示：跳转缴费', icon: 'none' });
  },

  goPhotos() {
    this.setData({ sheetOpen: false });
    wx.switchTab({ url: '/pages/photos/index' });
  }
});
