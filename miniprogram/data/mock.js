// 无名树 · 演示数据（全部虚构）
// 真实版本中这些数据将来自后端服务

const user = {
  name: '小满妈妈',
  vipYear: 2,
  season: '2026 秋季活动季',
  hoursLeft: 4,
  hoursTotal: 8,
  hoursExpire: '2026-12-31'
};

const children = [
  {
    id: 'xiaoshu',
    name: '小树',
    emoji: '🧒',
    age: 8,
    grade: '三年级',
    allergy: '🥜 花生过敏',
    emergency: '妈妈',
    photoAuth: true,
    joinedDays: 486,
    seasonCount: 6
  },
  {
    id: 'xiaoguo',
    name: '小果',
    emoji: '👧',
    age: 5,
    grade: '学前',
    allergy: '无过敏史',
    emergency: '妈妈',
    photoAuth: true,
    joinedDays: 486,
    seasonCount: 4
  }
];

const activities = [
  {
    id: 'survival',
    emoji: '🌲',
    emoBg: 'eg',
    title: '荒野与文明 · 小小野外生存家',
    tags: [
      { t: '户外体能', c: 'tg' },
      { t: '自然野趣', c: 'ts' }
    ],
    status: '报名中',
    statusType: 'pg',
    date: '11月15日 周六 09:00–16:30',
    place: '无名树基地 · 东门集合',
    ages: '6–12 岁 · 限 24 组家庭',
    checkin: '08:50 起东门签到 · 迟到请电话老师',
    seats: 24,
    left: 6,
    price: 288,
    perUnit: '孩子',
    heroTags: ['户外体能', '自然野趣', '6–12 岁'],
    gear: ['🥾 防滑运动鞋', '🧦 备用袜子', '🧢 遮阳帽', '💧 水壶 500ml+', '🧥 长袖长裤', '🎒 双肩小背包'],
    schedule: [
      { t: '09:00', d: '破冰热身 · 分小队', c: 'd1' },
      { t: '10:00', d: '山径徒步 · 平衡与攀爬训练', c: 'd2' },
      { t: '12:00', d: '荒野午餐 · 补给休整', c: 'd3' },
      { t: '14:00', d: '爬树挑战 · 突破自我时刻', c: 'd4' },
      { t: '16:00', d: '围圈复盘 · 颁发勇气徽章', c: 'd5' }
    ],
    feeNote: '费用含：导师带队、活动材料、当日保险；集合前 48 小时可免费取消。'
  },
  {
    id: 'signage',
    emoji: '🪧',
    emoBg: 'ek',
    title: '共建无名树 · 公共标识大挑战',
    tags: [
      { t: 'PBL 项目制', c: 'tp' },
      { t: '美术 × 数学', c: 'tk' }
    ],
    status: '报名中',
    statusType: 'pg',
    date: '11月22日 周六 09:30–15:30',
    place: '无名树基地 · 南门集合',
    ages: '6–12 岁 · 限 20 组家庭',
    checkin: '09:20 起南门签到',
    seats: 20,
    left: 12,
    price: 258,
    perUnit: '孩子',
    heroTags: ['PBL 项目制', '美术 × 数学', '6–12 岁'],
    gear: ['🖍️ 彩色画笔', '📏 直尺', '🧢 遮阳帽', '💧 水壶 500ml+', '👟 舒适运动鞋'],
    schedule: [
      { t: '09:30', d: '基地踏勘 · 空间感知', c: 'd1' },
      { t: '10:30', d: '动线规划 · 数学测量', c: 'd2' },
      { t: '12:00', d: '野餐补给', c: 'd3' },
      { t: '13:30', d: '标识设计与绘制', c: 'd4' },
      { t: '15:00', d: '挂牌仪式 · 每片土地拥有名字', c: 'd5' }
    ],
    feeNote: '费用含：导师带队、标识制作材料、当日保险；集合前 48 小时可免费取消。'
  },
  {
    id: 'drama',
    emoji: '🎭',
    emoBg: 'eb',
    title: '豆蔻镇的秋日狂欢 · 两日戏剧营',
    tags: [
      { t: '文学戏剧', c: 'tb' },
      { t: '经典保留', c: 'tg' }
    ],
    status: '候补中',
    statusType: 'pb',
    date: '11月28日–29日 两日营',
    place: '无名树基地 · 露营区',
    ages: '7–12 岁 · 限 24 组家庭',
    checkin: '第一天 09:00 集合 · 过夜营需自带寝具',
    seats: 24,
    left: 0,
    price: 498,
    perUnit: '孩子·两日',
    full: true,
    fullNote: '名额已满 · 报名自动进入候补队列，有家庭请假将按顺序递补',
    heroTags: ['文学戏剧', '经典保留', '两日营'],
    gear: ['🛏️ 睡袋与寝具', '🧥 保暖外套', '🦺 小提灯', '🎭 角色服装（可选）', '💧 水壶 500ml+'],
    schedule: [
      { t: 'D1 上午', d: '徒步寻线索 · 搭建舞台', c: 'd1' },
      { t: 'D1 下午', d: '道具工坊 · 自然手工', c: 'd2' },
      { t: 'D1 夜晚', d: '篝火故事会', c: 'd3' },
      { t: 'D2 上午', d: '彩排 · 服装化妆', c: 'd4' },
      { t: 'D2 下午', d: '正式上演《豆蔻镇的居民与强盗》', c: 'd5' }
    ],
    feeNote: '费用含：两日餐饮与保险、道具材料、导师团队；开营前 72 小时可免费取消。'
  }
];

const photos = {
  albumName: '荒野与文明 · 10月场',
  albumMeta: '10月27日上传 · 松果老师',
  total: 86,
  tagged: 62,
  tiles: [
    { emoji: '🌳', bg: 'pg1', mine: true },
    { emoji: '⛺', bg: 'pg2', mine: false },
    { emoji: '🧗', bg: 'pg3', mine: true },
    { emoji: '🍂', bg: 'pg4', mine: true },
    { emoji: '🎭', bg: 'pg5', mine: true },
    { emoji: '🔥', bg: 'pg6', mine: false },
    { emoji: '🧭', bg: 'pg1', mine: true },
    { emoji: '🍎', bg: 'pg2', mine: true },
    { emoji: '🪵', bg: 'pg3', mine: false },
    { emoji: '🦋', bg: 'pg4', mine: true },
    { emoji: '🍓', bg: 'pg5', mine: true },
    { emoji: '🐛', bg: 'pg6', mine: true }
  ],
  nextAlbum: { name: '豆蔻镇排练场 · 10月', meta: '42 张 · 上周四更新', emoji: '🎭' }
};

const growth = {
  xiaoshu: {
    badges: [
      { t: '🧗 爬树小达人', c: 'b1' },
      { t: '🎭 故事大王', c: 'b2' },
      { t: '🧭 小小定向员', c: 'b3' }
    ],
    stats: [
      { v: '18.5', l: '徒步公里' },
      { v: '12', l: '独立任务' },
      { v: '9', l: '新朋友' }
    ],
    notes: [
      {
        date: '10.26',
        dot: '',
        title: '荒野与文明 · 秋季第 3 场',
        quote: '第一次不用牵手走完了独木桥，落地之后自己回头看了很久，然后笑了。',
        by: '—— 松果老师 · 户外主带',
        photos: ['pg1', 'pg3'],
        photoEmoji: ['🌳', '🪵']
      },
      {
        date: '9.21',
        dot: 'sun',
        title: '建营日 · 基地共建',
        quote: '主动把自己包里最后一块饼干分给了新来的伙伴，还教他搭天幕。',
        by: '—— 芳芳老师 · 生活导师',
        photos: [],
        photoEmoji: []
      },
      {
        date: '9.07',
        dot: 'plum',
        title: '豆蔻镇 · 排练第一期',
        quote: '为了演好强盗，自己在家里对着镜子练了三天的"凶狠"表情。',
        by: '—— 松果老师 · 戏剧导演',
        photos: [],
        photoEmoji: []
      }
    ]
  },
  xiaoguo: {
    badges: [
      { t: '🎨 涂鸦小画家', c: 'b1' },
      { t: '🎶 律动之星', c: 'b3' }
    ],
    stats: [
      { v: '3.2', l: '徒步公里' },
      { v: '4', l: '独立任务' },
      { v: '6', l: '新朋友' }
    ],
    notes: [
      {
        date: '10.26',
        dot: '',
        title: '荒野与文明 · 秋季第 3 场',
        quote: '捡了一整口袋的落叶，说要带回家给每片叶子起一个名字。',
        by: '—— 芳芳老师 · 生活导师',
        photos: ['pg4'],
        photoEmoji: ['🍂']
      },
      {
        date: '9.21',
        dot: 'sun',
        title: '建营日 · 基地共建',
        quote: '一开始不敢碰泥巴，半小时后成了全队挖水渠最起劲的一个。',
        by: '—— 松果老师 · 户外主带',
        photos: [],
        photoEmoji: []
      }
    ]
  }
};

module.exports = { user, children, activities, photos, growth };
