import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/slides.css';

/**
 * Educational Design System:
 * - Color Palette: Deep Blue (#1e3a8a) + Emerald Green (#10b981) + White
 * - Typography: Playfair Display (titles) + Outfit (subtitles) + Inter (body)
 * - Layout: Card-based, clear visual hierarchy, ample whitespace
 * - Interaction: Smooth transitions (200ms), hover effects, progress indicators
 * 
 * Slides 8-10 Optimization:
 * - Slide 8: "我没兴趣" = "我不会" (Self-Efficacy & Competence)
 * - Slide 9: The Awkward Phase (Clumsy Period) - The #1 reason for quitting
 * - Slide 10: Myelination & Flow State - The critical point breakthrough
 */

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: string;
  notes?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: '大脑的魔法建筑师',
    subtitle: '学习、专注与热爱的生物学秘密',
    content: (
      <div className="slide-content flex flex-col items-center justify-center gap-8">
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357903112/hXbiJRdqX2LFBWjU2pL35w/brain-hero-1-WwPqoKZi78CLvnmNiAF4nf.webp"
          alt="大脑插画"
          className="w-80 h-auto rounded-lg shadow-lg"
        />
        <div className="text-center space-y-4">
          <p className="text-xl text-slate-600">为什么觉得难是一件好事？</p>
          <p className="text-xl text-slate-600">怎样让大脑长出"高速公路"？</p>
        </div>
      </div>
    ),
    notes: '开场可以问孩子们一个问题："你们还记得第一次学骑自行车，或者第一次玩一个复杂游戏时的感觉吗？是不是觉得手脚不听使唤，脑子转不过弯？今天我们就来看看，这时候你的大脑里到底发生了什么神奇的物理变化。"'
  },
  {
    id: 2,
    title: '大脑里的"修路"游戏',
    subtitle: '1000亿个小人在工作',
    content: (
      <div className="slide-content space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-emerald-500/50">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">1000亿个小人</h3>
              <p className="text-slate-200">你的大脑里住着大约 1000 亿个脑细胞，我们叫它们"神经元"。</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-blue-500/50">
              <h3 className="text-blue-400 font-bold text-lg mb-2">沟通的桥梁</h3>
              <p className="text-slate-200">神经元之间通过叫作"突触"的桥梁来交流。</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-emerald-500/50">
              <h3 className="text-emerald-400 font-bold text-lg mb-2">终极魔法咒语</h3>
              <p className="text-slate-200">科学家唐纳德·赫布发现了一个秘密：</p>
              <p className="text-emerald-400 font-bold italic mt-2">"一起放电的神经元，会连接在一起"</p>
            </div>
          </div>
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357903112/hXbiJRdqX2LFBWjU2pL35w/neural-network-EwsLkufCmyvwCB5GBs4RXz.webp"
            alt="神经网络"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-slate-800 border-l-4 border-amber-500 p-4">
          <p className="text-slate-200"><span className="font-bold text-amber-400">讲者提示：</span> 当你们尝试去学一个新东西时，相关的神经元就会被"点亮"。如果它们频繁地一起活跃，它们之间就会伸出小手，物理上真的连接在一起！</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: '为什么刚开始学新东西会觉得"笨笨的"？',
    subtitle: '这是大脑正在搭建新桥梁的信号',
    content: (
      <div className="slide-content space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-red-700 font-bold text-lg mb-2">不稳定的初期</h3>
              <p className="text-slate-700">遇到陌生的、困难的事物，觉得吃力是大脑最正常的生理反应。</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-orange-700 font-bold text-lg mb-2">纤细的"树突棘"</h3>
              <p className="text-slate-700">科学家用显微镜观察小鼠发现，在刚开始学习新任务时，大脑记忆回路里的连接是非常"不稳定"的。</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="text-yellow-700 font-bold text-lg mb-2">施工重地</h3>
              <p className="text-slate-700">此时的连接就像细细的走钢丝，动作当然会摇晃！</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">🏗️</div>
              <p className="text-xl text-slate-600 font-semibold">大脑施工中...</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 所以，千万不要害怕"觉得难"。觉得难，只是因为你们的大脑正在搭建新的桥梁，它在对你说："施工重地，请多给我一点时间！"</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: '重复的魔力：让记忆"结晶"',
    subtitle: '从泥泞小路到高速公路',
    content: (
      <div className="slide-content space-y-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-blue-700 font-bold text-lg mb-3">高频放电与长时程增强 (LTP)</h3>
            <p className="text-slate-700">不断重复练习，神经元之间就会产生持续的强电信号刺激，让连接变强。</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-100 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <p className="text-sm font-semibold text-slate-700">第一次练习</p>
              <p className="text-xs text-slate-600 mt-1">连接很弱</p>
            </div>
            <div className="bg-slate-200 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">🔄</div>
              <p className="text-sm font-semibold text-slate-700">多次重复</p>
              <p className="text-xs text-slate-600 mt-1">连接变强</p>
            </div>
            <div className="bg-emerald-100 p-4 rounded-lg text-center">
              <div className="text-3xl mb-2">💎</div>
              <p className="text-sm font-semibold text-slate-700">结晶完成</p>
              <p className="text-xs text-slate-600 mt-1">连接牢固</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg border-2 border-emerald-200">
            <h3 className="text-emerald-700 font-bold text-lg mb-3">记忆的"结晶"</h3>
            <p className="text-slate-700">科学家发现，随着练习时间的推移，原本摇摆不定的记忆模式会开始变得牢固，就像"结晶"一样。</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h3 className="text-blue-700 font-bold text-lg mb-3">铺设高速公路</h3>
            <p className="text-slate-700">经常走的泥泞小路，会被大脑铺上"柏油"（髓鞘化），让动作变成不需要思考的本能！</p>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 困难是大脑最好的"健身教练"。那些需要付出巨大努力的复杂任务，能拯救大脑中的新细胞，让它们长久存活。</p>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: '警惕大脑的"垃圾食品"',
    subtitle: '短视频的危害',
    content: (
      <div className="slide-content space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-red-700 font-bold text-lg mb-2">喂给大脑什么，它就变成什么</h3>
              <p className="text-slate-700">只有克服困难，大脑才会长肌肉。</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
              <h3 className="text-orange-700 font-bold text-lg mb-2">《娱乐至死》的警告</h3>
              <p className="text-slate-700">尼尔·波兹曼提出，人类可能不会被我们害怕的东西毁掉，而是会毁于我们太热爱、太让我们感到快乐的东西。</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
              <h3 className="text-yellow-700 font-bold text-lg mb-2">可怕的"现在请看这个"</h3>
              <p className="text-slate-700">所有的内容（哪怕是严肃的知识）都被包装成了搞笑的、没有上下文的娱乐碎片。</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-6xl">📱</div>
              <p className="text-xl text-slate-600 font-semibold">短视频 = 大脑糖果</p>
              <p className="text-sm text-slate-500">太容易得到，太容易上瘾</p>
            </div>
          </div>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 手机上的短视频就是这样的"糖果"。它们太容易得到了，画面一闪而过，不需要你动脑筋。吃糖很开心，但只吃糖会长不高。</p>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: '为什么短视频会让我们失去思考力？',
    subtitle: '被动参与 vs 主动思考',
    content: (
      <div className="slide-content space-y-8">
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="text-red-700 font-bold text-lg mb-2">大脑在"偷懒"</h3>
            <p className="text-slate-700">看视频是一种<span className="font-bold">"被动参与"</span>。大脑不需要主动去想象，连接就不会变强。</p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <h3 className="text-orange-700 font-bold text-lg mb-2">摧毁注意力和逻辑</h3>
            <p className="text-slate-700">短视频带来了极快的速度，这消灭了内容的深度，也消灭了人们的注意力。</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <h3 className="text-yellow-700 font-bold text-lg mb-2">失去耐心</h3>
            <p className="text-slate-700">习惯了十几秒就要一个新刺激，一旦遇到需要安静思考的难题（比如数学题），大脑就会因为觉得"无聊"而罢工。</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-100 p-6 rounded-lg">
            <h4 className="font-bold text-red-700 mb-3">❌ 短视频的影响</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• 被动接收信息</li>
              <li>• 注意力碎片化</li>
              <li>• 无法深度思考</li>
              <li>• 大脑不长肌肉</li>
            </ul>
          </div>
          <div className="bg-emerald-100 p-6 rounded-lg">
            <h4 className="font-bold text-emerald-700 mb-3">✅ 深度阅读的好处</h4>
            <ul className="text-sm text-slate-700 space-y-2">
              <li>• 主动思考</li>
              <li>• 注意力集中</li>
              <li>• 深度理解</li>
              <li>• 大脑长肌肉</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 这就是信息时代带来的问题——我们接收了太多让人分心的碎片信息，却没有采取行动的能力。我们会被娱乐麻醉，忘记怎么面对真正的困难。</p>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: '真正的"大脑健身房"',
    subtitle: '深度阅读与专注',
    content: (
      <div className="slide-content space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h3 className="text-emerald-700 font-bold text-lg mb-2">最高级的智力体操</h3>
              <p className="text-slate-700">波兹曼指出，阅读一本书需要你跟随作者的逻辑，这要求极强的<span className="font-bold">"主动智力参与"</span>。</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-blue-700 font-bold text-lg mb-2">搭建强壮桥梁</h3>
              <p className="text-slate-700">当你专注地阅读、不被打断时，神经元不仅在一起放电，而且在持续、稳定地放电。</p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
              <h3 className="text-emerald-700 font-bold text-lg mb-2">对抗碎片化</h3>
              <p className="text-slate-700">保持专注，主动施工建桥，不做只会被动接收快乐的"沙发土豆"。</p>
            </div>
          </div>
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357903112/hXbiJRdqX2LFBWjU2pL35w/focus-meditation-j9FLya6VEMt4Dso6vZhXhq.webp"
            alt="专注冥想"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 阅读虽然一开始比看视频费力，但这正是你的大脑在举哑铃！专注力是保护你不被"娱乐至死"吞噬的最强盾牌。</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: '关于学习的巨大谎言',
    subtitle: '"我没兴趣" 其实是 "我不会"',
    content: (
      <div className="slide-content space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 rounded-lg border-2 border-red-200">
            <h3 className="text-red-700 font-bold text-2xl mb-4">❌ 谎言</h3>
            <p className="text-lg text-slate-700 font-semibold">"因为热爱，所以坚持。"</p>
            <p className="text-sm text-slate-600 mt-3">这是最毒的鸡汤。</p>
          </div>
          <div className="bg-emerald-50 p-8 rounded-lg border-2 border-emerald-200">
            <h3 className="text-emerald-700 font-bold text-2xl mb-4">✅ 真相</h3>
            <p className="text-lg text-slate-700 font-semibold">你先变厉害了，热爱才会像条摇尾巴的宠物一样追上来。</p>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200 space-y-4">
          <h3 className="text-slate-700 font-bold text-lg">🎮 游戏 vs 学习</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-100 p-4 rounded">
              <p className="font-semibold text-slate-700 mb-2">❌ 你说的"没兴趣"</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 学吉他练三天</li>
                <li>• 健身办卡去两次</li>
                <li>• 读书、写作、编程</li>
              </ul>
            </div>
            <div className="bg-emerald-100 p-4 rounded">
              <p className="font-semibold text-slate-700 mb-2">✅ 你真正"擅长"的</p>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• 刷短视频到凌晨三点</li>
                <li>• 打游戏忘记吃饭</li>
                <li>• 这叫你刚好擅长</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="text-blue-700 font-bold text-lg mb-3">🧠 自我效能感（Self-Efficacy）</h3>
          <p className="text-slate-700 mb-3">斯坦福大学班杜拉教授研究发现：一个人愿不愿意持续做一件事，<span className="font-bold">跟兴趣的关系微乎其微</span>，几乎完全取决于<span className="font-bold">他在早期有没有尝到过甜头</span>。</p>
          <p className="text-slate-600 text-sm italic">"我觉得我能搞定"——这三个字就是全世界最烈性的精神兴奋剂。</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 把"我没兴趣"翻译过来就是"我不会"。我们只会对自己能拿捏的事情上瘾。</p>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: '笨拙期：放弃一切的头号凶手',
    subtitle: '为什么你觉得自己很笨？',
    content: (
      <div className="slide-content space-y-8">
        <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200 space-y-4">
          <h3 className="text-red-700 font-bold text-lg">🚨 笨拙期是什么？</h3>
          <p className="text-slate-700">第一天去健身房，连器械怎么调都不知道。第一次打开写作软件，对着空白文档发了半小时呆。这个阶段叫"笨拙期"。</p>
          <p className="text-slate-700 font-semibold">笨拙期是人类放弃一切技能的头号凶手。</p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
          <h3 className="text-orange-700 font-bold text-lg mb-3">🧠 大脑的疼痛信号</h3>
          <p className="text-slate-700 mb-3">当你觉得自己不胜任时，大脑的"前扣带回皮层"会剧烈活跃。这个脑区专门负责处理什么？</p>
          <div className="bg-white p-4 rounded border-l-4 border-orange-400">
            <p className="text-slate-700 font-semibold">社会排斥和疼痛信号。</p>
            <p className="text-slate-600 text-sm mt-2">换句话说，觉得自己很笨这件事，对大脑而言和被人扇了一巴掌激活的是同一套疼痛回路。</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
          <h3 className="text-yellow-700 font-bold text-lg mb-3">💭 大脑的高级借口</h3>
          <p className="text-slate-700 mb-3">所以你不是在逃避困难，你是在<span className="font-bold">逃避疼痛</span>。</p>
          <p className="text-slate-700">大脑非常体贴地帮你编了一个借口：</p>
          <p className="text-yellow-700 font-bold text-lg mt-2 italic">"我只是不热爱而已"</p>
          <p className="text-slate-600 text-sm mt-2">这个借口太完美了，既保全了你的自尊，又让你心安理得地退回舒适区。</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300">
          <p className="text-center text-red-700 font-bold text-lg">全世界90%的"我没找到热爱"</p>
          <p className="text-center text-slate-700 mt-2">拆开包装纸一看，里面装的都是同一句话：</p>
          <p className="text-center text-red-700 font-bold mt-2">"我没熬过笨拙期"</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 笨拙期不是你的问题，是大脑在自卫。但那些咬碎牙撑过去的人，会经历一次不可逆的变化...</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: '跨越临界点：髓鞘化与热爱的诞生',
    subtitle: '从驾校到开车高手的蜕变',
    content: (
      <div className="slide-content space-y-8">
        <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200 space-y-4">
          <h3 className="text-emerald-700 font-bold text-lg">🚗 你还记得学车吗？</h3>
          <p className="text-slate-700">第一次坐进驾校那辆破车：左脚踩离合，右脚踩刹车，眼睛盯前方还要瞄后视镜，教练在吼你...</p>
          <p className="text-slate-700 font-semibold mt-3">现在呢？</p>
          <p className="text-slate-700">方向盘另一只手拿着咖啡，脑子里盘算晚上吃什么，副驾跟你聊天你还能接话，遇到加塞一脚油门一把方向闪过去。</p>
          <p className="text-slate-700 text-sm italic mt-2">不是车变简单了，是你的大脑完成了一次静默升级。</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <h3 className="text-blue-700 font-bold text-lg mb-3">🧠 髓鞘化：大脑的超级升级</h3>
          <p className="text-slate-700 mb-3">神经科学管这个过程叫"髓鞘化"：</p>
          <div className="bg-white p-4 rounded space-y-2">
            <p className="text-slate-700">• 你每重复练习一个动作</p>
            <p className="text-slate-700">• 神经元外层就会包裹上一层叫"髓鞘"的绝缘物质</p>
            <p className="text-slate-700 font-bold text-blue-600">• 信号传导速度暴增100倍</p>
          </div>
          <p className="text-slate-700 mt-3">原本需要前额叶皮层费劲调度的动作被打包下放到基底神经节，变成自动化程序。</p>
          <p className="text-slate-700 font-semibold text-emerald-600 mt-2">大脑腾出了内存，你不再觉得累。</p>
        </div>

        <div className="bg-gradient-to-r from-slate-100 to-emerald-100 p-6 rounded-lg border-2 border-emerald-300">
          <h3 className="text-center text-emerald-700 font-bold text-lg mb-4">临界点的魔力</h3>
          <p className="text-center text-slate-700 mb-4">跨过临界点之后，一件事的本质属性在你的主观感受里会发生根本性的翻转：</p>
          <div className="space-y-2 text-center">
            <p className="text-slate-700"><span className="font-bold">耗能的</span> → 变成 <span className="font-bold text-emerald-600">省力的</span></p>
            <p className="text-slate-700"><span className="font-bold">痛苦的</span> → 变成 <span className="font-bold text-emerald-600">舒服的</span></p>
            <p className="text-slate-700"><span className="font-bold">被迫的</span> → 变成 <span className="font-bold text-emerald-600">主动的</span></p>
          </div>
        </div>

        <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
          <h3 className="text-emerald-700 font-bold text-lg mb-3">🎯 流心态（Flow State）</h3>
          <p className="text-slate-700 mb-3">匈牙利心理学家米哈里追踪了数千名高手，从外科医生到攀岩运动员到国际象棋大师。他发现：</p>
          <p className="text-slate-700 font-semibold">你的技能水平必须略高于当前挑战的难度。</p>
          <p className="text-slate-700 text-sm mt-2">碾压眼前这件事的瞬间，多巴胺不请自来，你不需要靠意志力逼自己，大脑会主动催着你继续干。</p>
          <p className="text-emerald-700 font-bold mt-3">这就是所谓热爱的真面目。</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 热爱不是从天而降的神秘召唤，它是胜任感累积到临界之后，大脑自动触发的奖励程序。</p>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: '打怪升级：欺骗大脑的3个通关秘籍',
    subtitle: '科学的学习方法',
    content: (
      <div className="slide-content space-y-8">
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
            <h3 className="text-emerald-700 font-bold text-lg mb-3">🎯 秘籍1：15分钟启动法（降低抗拒）</h3>
            <p className="text-slate-700">遇到困难任务，告诉大脑"只做 15 分钟就停"。门槛降到极低，大脑就不抗拒了。</p>
            <p className="text-slate-600 text-sm mt-2">这是在利用大脑的"启动能耗原理"。抗拒最强烈的时刻不是做的过程中，而是按下开始键的那一瞬间。</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-blue-700 font-bold text-lg mb-3">🎯 秘籍2：极小闭环反馈（切碎大怪兽）</h3>
            <p className="text-slate-700">把大目标拆成几分钟就能验证的小目标（比如"今天只默写对3个单词"）。立刻看到成功，骗取大脑的多巴胺！</p>
            <p className="text-slate-600 text-sm mt-2">游戏为什么让人上瘾？因为它每30秒就给你发一次奖励。你需要做的就是在现实里人为制造同样密度的奖励节点。</p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
            <h3 className="text-emerald-700 font-bold text-lg mb-3">🎯 秘籍3：降维碾压（获得胜任感）</h3>
            <p className="text-slate-700">把技能练到 60 分，然后去教完全不会的新手（哥哥教弟弟，或者教爸爸妈妈），在"当老师"中获得巨大的自信激励！</p>
            <p className="text-slate-600 text-sm mt-2">当你亲眼看到对方脸上那种"你好厉害"的表情，你已经上瘾了。</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-emerald-100 p-6 rounded-lg border-2 border-blue-300">
          <h3 className="text-center text-blue-700 font-bold text-lg mb-4">三个秘籍的共同点</h3>
          <p className="text-center text-slate-700">都是在<span className="font-bold">给大脑创造早期的正向反馈</span>，让它觉得"这件事我能做好"</p>
          <p className="text-center text-slate-600 text-sm mt-3 italic">别对抗你的大脑，去贿赂它。</p>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
          <p className="text-slate-700"><span className="font-bold text-amber-700">讲者提示：</span> 不要和大脑硬碰硬，我们要用科学的方法顺应它的机制，给它创造早期的正向反馈。</p>
        </div>
      </div>
    )
  },
  {
    id: 12,
    title: '写给你们的最终宣言',
    subtitle: '总结与展望',
    content: (
      <div className="slide-content space-y-8">
        <div className="space-y-6">
          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-shadow">
            <h3 className="text-emerald-700 font-bold text-lg mb-2">💡 第一条宣言</h3>
            <p className="text-slate-700">遇到困难不要怕，那是大脑在长出新突触、铺设高速公路！</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <h3 className="text-blue-700 font-bold text-lg mb-2">💡 第二条宣言</h3>
            <p className="text-slate-700">警惕被动娱乐，通过深度阅读和专注，主动锻炼强大的大脑逻辑！</p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200 hover:shadow-lg transition-shadow">
            <h3 className="text-emerald-700 font-bold text-lg mb-2">💡 第三条宣言</h3>
            <p className="text-slate-700">热爱不是起点，用小目标积累"胜任感"，总有一天，曾经觉得难如登天的事，会变得像呼吸一样自然！</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 via-emerald-100 to-blue-100 p-8 rounded-lg border-2 border-emerald-300">
          <h3 className="text-center text-emerald-700 font-bold text-xl mb-4">🧠 最后的话</h3>
          <p className="text-center text-slate-700 text-lg">下一次觉得一件事很难、想放弃，或者想立刻打开短视频逃避时，想一想你脑子里那 <span className="font-bold">1000 亿个正在努力"搭桥"的小人</span>。</p>
          <p className="text-center text-emerald-700 font-bold text-lg mt-4">给它们一点时间，它们会还你一个超级强大的大脑！</p>
        </div>

        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663357903112/hXbiJRdqX2LFBWjU2pL35w/learning-journey-TxetaPL52bTH3yNPvioaF9.webp"
          alt="学习之旅"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    )
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8 shadow-2xl border-b border-blue-500/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 text-blue-300">大脑的魔法建筑师</h1>
          <p className="text-lg text-blue-200">学习、专注与热爱的生物学秘密</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Slide Container */}
          <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden mb-8 border border-blue-500/20">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 min-h-96">
              <div className="slide-number text-right text-sm font-semibold text-blue-400 mb-4">
                {currentSlide + 1} / {slides.length}
              </div>
              
              <h2 className="text-4xl font-bold text-blue-300 mb-2 font-playfair">
                {slide.title}
              </h2>
              
              {slide.subtitle && (
                <p className="text-xl text-emerald-300 mb-8 font-outfit">
                  {slide.subtitle}
                </p>
              )}

              <div className="slide-body">
                {slide.content}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200 font-semibold shadow-lg border border-blue-500/50"
            >
              <ChevronLeft size={20} />
              上一页
            </button>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border ${
                isAutoPlay
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-500/50'
                  : 'bg-slate-700 text-slate-200 hover:bg-slate-600 border-slate-600/50'
              }`}
            >
              {isAutoPlay ? '⏸ 暂停' : '▶ 自动播放'}
            </button>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors duration-200 font-semibold shadow-lg border border-emerald-500/50"
            >
              下一页
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slide Thumbnails */}
          <div className="bg-slate-900 rounded-lg p-6 shadow-md border border-slate-700">
            <p className="text-sm font-semibold text-blue-300 mb-4">快速导航</p>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`aspect-square rounded-lg font-semibold text-sm transition-all duration-200 border ${
                    index === currentSlide
                      ? 'bg-emerald-600 text-white shadow-lg scale-110 border-emerald-500'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Speaker Notes */}
          {slide.notes && (
            <div className="mt-8 bg-slate-800 border-l-4 border-amber-500 p-6 rounded-r-lg border border-slate-700">
              <p className="text-sm font-semibold text-amber-400 mb-2">📝 讲者提示</p>
              <p className="text-slate-200">{slide.notes}</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p className="text-sm">
            这是一份为孩子们设计的科学教育课程，融合了神经科学、心理学与教育学的最新研究。
          </p>
          <p className="text-xs text-slate-500 mt-2">
            适合 8-12 岁儿童 | 课程时长：约 30-45 分钟 | 共 {slides.length} 个幻灯片
          </p>
        </div>
      </footer>
    </div>
  );
}
