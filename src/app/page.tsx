export default function Home() {
  return (
    <>
      <header className="page-header">
        <p className="eyebrow">App Concept Design</p>
        <h1>Pitch A <em>Friend</em></h1>
        <p className="sub">讓最了解你的人，替你找到對的人。以好友推薦為核心的全新約會體驗。</p>
      </header>

      <div className="phones-row">

        {/* PHONE 1: DISCOVER */}
        <div className="phone">
          <span className="phone-label">首頁・探索</span>
          <div className="phone-frame">
            <div className="phone-screen screen-home">
              <div className="top-bar">
                <div className="app-logo">pitch<span>✦</span>friend</div>
                <div className="notif-btn">🔔<div className="notif-dot"></div></div>
              </div>
              <div className="greeting">
                <div className="time">早安，Mei 👋</div>
                <h2>今天有 <em>6 位</em><br />新朋友等著你</h2>
              </div>
              <div className="section-title">朋友最近推薦了</div>
              <div className="cards-scroll">
                <div className="pitch-card">
                  <div className="avatar-wrap">
                    <div className="avatar amber-grad">J</div>
                    <div className="pitched-by">👤</div>
                  </div>
                  <div className="card-info">
                    <div className="card-name">Jason, 29</div>
                    <div className="card-meta">軟體工程師・台北</div>
                    <div className="card-pitch-line">「他是那種會記得你說過想試的餐廳，然後下週就訂好位的人…」</div>
                    <div className="card-tags">
                      <span className="tag accent">🐕 有養狗</span>
                      <span className="tag">登山</span>
                      <span className="tag">料理</span>
                    </div>
                  </div>
                </div>
                <div className="pitch-card">
                  <div className="avatar-wrap">
                    <div className="avatar rose-grad">S</div>
                    <div className="pitched-by">👤</div>
                  </div>
                  <div className="card-info">
                    <div className="card-name">Sarah, 27</div>
                    <div className="card-meta">室內設計師・新竹</div>
                    <div className="card-pitch-line">「她可以把任何空間變得很有溫度，連她的冰箱都排列得很美…」</div>
                    <div className="card-tags">
                      <span className="tag accent">🎨 藝術控</span>
                      <span className="tag">咖啡</span>
                      <span className="tag">旅行</span>
                    </div>
                  </div>
                </div>
                <div className="pitch-card">
                  <div className="avatar-wrap">
                    <div className="avatar sage-grad">K</div>
                    <div className="pitched-by">👤</div>
                  </div>
                  <div className="card-info">
                    <div className="card-name">Kevin, 31</div>
                    <div className="card-meta">醫生・台中</div>
                    <div className="card-pitch-line">「他在工作上超認真，但私底下是個很搞笑的人，笑話很爛但很可愛…」</div>
                    <div className="card-tags">
                      <span className="tag accent">🏃 跑步</span>
                      <span className="tag">電影</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-nav">
                <div className="nav-item active"><div className="nav-icon">✦</div><span>探索</span></div>
                <div className="nav-item"><div className="nav-icon">💬</div><span>配對</span></div>
                <div className="nav-item"><div className="nav-icon">＋</div><span>推薦</span></div>
                <div className="nav-item"><div className="nav-icon">👤</div><span>我的</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* PHONE 2: DETAIL */}
        <div className="phone">
          <span className="phone-label">Pitch 詳情</span>
          <div className="phone-frame">
            <div className="phone-screen screen-detail">
              <div className="detail-hero">
                <div className="detail-avatar">J</div>
                <div className="detail-hero-info">
                  <div className="detail-name">Jason Chen, 29</div>
                  <div className="detail-sub">軟體工程師・台北信義區</div>
                </div>
              </div>
              <div className="detail-body">
                <div className="pitcher-badge">
                  <div className="pitcher-ava">A</div>
                  <div className="pitcher-text">
                    <strong>由 Amy 推薦</strong><br />
                    <span>你們有 3 位共同朋友</span>
                  </div>
                </div>
                <div className="pitch-quote">
                  <p>他是那種會記得你說過想試的餐廳，然後下週就訂好位的人。而且他的貓比他還帥，但也只有一點點。</p>
                </div>
                <div className="detail-section-title">基本資料</div>
                <div className="facts-grid">
                  <div className="fact-item"><div className="fact-label">職業</div><div className="fact-value">軟體工程師</div></div>
                  <div className="fact-item"><div className="fact-label">星座</div><div className="fact-value">♉ 金牛座</div></div>
                  <div className="fact-item"><div className="fact-label">興趣</div><div className="fact-value">登山・料理</div></div>
                  <div className="fact-item"><div className="fact-label">尋找</div><div className="fact-value">認真交往</div></div>
                </div>
                <div className="detail-section-title">Pitch 投影片 (4 頁)</div>
                <div className="slide-previews">
                  <div className="slide-thumb">介紹<br />Jason</div>
                  <div className="slide-thumb">他的<br />優點</div>
                  <div className="slide-thumb">他在<br />找誰</div>
                  <div className="slide-thumb">推薦人<br />話語</div>
                </div>
              </div>
              <div className="action-bar">
                <div className="btn-pass">✕</div>
                <button className="btn-primary">👋 向 Amy 表達興趣</button>
                <div className="btn-wave">❤️</div>
              </div>
            </div>
          </div>
        </div>

        {/* PHONE 3: CREATE PITCH */}
        <div className="phone">
          <span className="phone-label">建立 Pitch</span>
          <div className="phone-frame">
            <div className="phone-screen screen-create">
              <div className="create-header">
                <span className="back-btn">←</span>
                <h3>替好友做 Pitch</h3>
                <p>步驟 2／4 — 描述他們的特質</p>
              </div>
              <div className="progress-bar"><div className="progress-fill"></div></div>
              <div className="create-body">
                <div className="input-block active">
                  <div className="input-icon">👤</div>
                  <div className="input-content">
                    <div className="ilabel">推薦的朋友</div>
                    <div className="ival">Jason Chen</div>
                  </div>
                  <span style={{ color: 'var(--sage)', fontSize: '14px' }}>✓</span>
                </div>
                <div className="step-label">步驟 2</div>
                <div className="step-q">選擇最能描述 Jason 的特質</div>
                <div className="trait-chips">
                  <div className="trait-chip selected">有趣</div>
                  <div className="trait-chip amber-sel">體貼</div>
                  <div className="trait-chip">積極</div>
                  <div className="trait-chip selected">會煮飯</div>
                  <div className="trait-chip">顧家</div>
                  <div className="trait-chip amber-sel">有上進心</div>
                  <div className="trait-chip">愛動物</div>
                  <div className="trait-chip">有幽默感</div>
                  <div className="trait-chip">穩定</div>
                </div>
                <div className="step-label" style={{ marginTop: '12px' }}>投影片預覽</div>
                <div className="slide-builder">
                  <div className="slide-block filled">
                    <div className="slide-no">SLIDE 1</div>
                    <div className="slide-title-sm">認識 Jason</div>
                  </div>
                  <div className="slide-block filled2">
                    <div className="slide-no">SLIDE 2</div>
                    <div className="slide-title-sm">他的優點</div>
                  </div>
                  <div className="slide-block">
                    <div className="plus">＋</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted)' }}>他在找誰</div>
                  </div>
                  <div className="slide-block">
                    <div className="plus">＋</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted)' }}>推薦人的話</div>
                  </div>
                </div>
              </div>
              <div className="create-footer">
                <button className="btn-next">下一步：描述他在找的人 →</button>
              </div>
            </div>
          </div>
        </div>

        {/* PHONE 4: MATCHES */}
        <div className="phone">
          <span className="phone-label">配對・訊息</span>
          <div className="phone-frame">
            <div className="phone-screen screen-matches">
              <div className="matches-header">
                <h3>你的配對</h3>
                <p>3 個新配對等待回覆 ✨</p>
              </div>
              <div className="matches-tabs">
                <div className="mtab active">全部</div>
                <div className="mtab">新配對</div>
                <div className="mtab">訊息中</div>
              </div>
              <div className="match-list">
                <div className="match-item">
                  <div className="match-ava-wrap">
                    <div className="match-ava" style={{ background: 'linear-gradient(135deg, var(--amber-light), var(--amber))' }}>J</div>
                    <div className="online-dot"></div>
                  </div>
                  <div className="match-info">
                    <div className="match-name">Jason Chen <span className="via">via Amy</span></div>
                    <div className="match-preview unread-text">嗨！Amy 說你也喜歡爬山，下週…</div>
                  </div>
                  <div className="match-meta">
                    <div className="match-time">剛剛</div>
                    <div className="unread-badge">2</div>
                  </div>
                </div>
                <div className="match-item">
                  <div className="match-ava-wrap">
                    <div className="match-ava" style={{ background: 'linear-gradient(135deg, #E87AA0, var(--rose))' }}>L</div>
                  </div>
                  <div className="match-info">
                    <div className="match-name">Lisa Wang <span className="via">via Mark</span></div>
                    <div className="match-preview">好啊！那週六午餐怎麼樣？</div>
                  </div>
                  <div className="match-meta"><div className="match-time">昨天</div></div>
                </div>
                <div className="match-item">
                  <div className="match-ava-wrap">
                    <div className="match-ava" style={{ background: 'linear-gradient(135deg, var(--sage), #4A7A6A)' }}>D</div>
                    <div className="online-dot"></div>
                  </div>
                  <div className="match-info">
                    <div className="match-name">David Lin <span className="via">via Chloe</span></div>
                    <div className="match-preview unread-text">新配對！Chloe 說你們都…</div>
                  </div>
                  <div className="match-meta">
                    <div className="match-time">2小時前</div>
                    <div className="unread-badge">1</div>
                  </div>
                </div>
                <div className="match-item">
                  <div className="match-ava-wrap">
                    <div className="match-ava" style={{ background: 'linear-gradient(135deg, #C4A87A, #8C6840)' }}>T</div>
                  </div>
                  <div className="match-info">
                    <div className="match-name">Tom Huang <span className="via">via Nina</span></div>
                    <div className="match-preview">我也是金牛座！哈哈真的嗎</div>
                  </div>
                  <div className="match-meta"><div className="match-time">3天前</div></div>
                </div>
                <div className="new-match-banner">
                  <div style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--amber)', fontWeight: 600, marginBottom: '6px' }}>✨ 推薦人通知</div>
                  <div style={{ fontSize: '12px', color: 'var(--ink)', lineHeight: 1.5 }}>有人對你推薦的 <strong>Sarah</strong> 感興趣！需要你協助做初步介紹。</div>
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ height: '30px', borderRadius: '15px', background: 'var(--ink)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600 }}>幫忙介紹 →</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* FEATURES */}
      <div className="section-heading">
        <p className="sh-eye">核心功能設計</p>
        <h2>App 的六大特色</h2>
      </div>

      <div className="features-grid">
        <div className="feat-card">
          <div className="feat-icon amber">🎤</div>
          <div className="feat-title">好友代為 Pitch</div>
          <div className="feat-desc">朋友透過引導式流程，用文字、圖片、投影片為你建立個人檔案。比自我介紹更真實、更可信。</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon rose">🤝</div>
          <div className="feat-title">三方媒合機制</div>
          <div className="feat-desc">對某個 Pitch 感興趣時，先向推薦人「送出興趣」——由推薦人作為橋樑，讓介紹更自然溫暖。</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon sage">🔗</div>
          <div className="feat-title">共同好友圖譜</div>
          <div className="feat-desc">顯示雙方共同朋友，讓陌生感降低。讓每一個配對都有可靠的「社交背書」作為信任基礎。</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon ink">🎯</div>
          <div className="feat-title">Pitch 信譽評分</div>
          <div className="feat-desc">用戶可對 Pitch 的真實性與完整度評分。推薦人信譽越高，Pitch 曝光就越廣。</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon amber">📍</div>
          <div className="feat-title">線下活動整合</div>
          <div className="feat-desc">將現實中的 Pitch-A-Friend 實體活動同步進 App，讓線上配對也能自然走向真實見面。</div>
        </div>
        <div className="feat-card">
          <div className="feat-icon rose">🎁</div>
          <div className="feat-title">推薦人獎勵機制</div>
          <div className="feat-desc">配對成功後，推薦人可獲得特別徽章與解鎖功能——讓幫忙這件事本身也變得值得期待。</div>
        </div>
      </div>
    </>
  );
}
