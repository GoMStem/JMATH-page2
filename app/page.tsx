export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <i className="fas fa-exclamation-circle"></i>
            수능.내신 망한 학생 필독
          </div>
          <h1 className="hero-h1">
            이 등급으로<br />
            <span className="hero-h1-point">진짜 합격?</span><br />
            영상으로 보세요
          </h1>
          <a href="#contact" className="btn-hero">
            내 성적으로 가능성 보기 <i className="fas fa-arrow-right"></i>
          </a>

          <div className="hero-badges">
            <div className="badge">
              <div className="badge-icon"><i className="fas fa-crown"></i></div>
              <div className="badge-body">
                <span className="badge-lbl">김과외 수학</span>
                <span className="badge-val">랭킹 1위</span>
                <span className="badge-date">2026년 5월 기준</span>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon"><i className="fas fa-users"></i></div>
              <div className="badge-body">
                <span className="badge-lbl">누적 수강생</span>
                <span className="badge-val">5,000명+</span>
                <span className="badge-date">2026년 5월 기준</span>
              </div>
            </div>
            <div className="badge">
              <div className="badge-icon"><i className="fas fa-won-sign"></i></div>
              <div className="badge-body">
                <span className="badge-lbl">프리미엄 1:1 관리</span>
                <span className="badge-val">월 39만원</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div className="hero-photo">
            <img src="/teacher.png" alt="현정호 대표강사" />
          </div>
          <div className="hero-creds">
            <div className="hc-name">현정호</div>
            <div className="hc-role">J-MATH 대표강사</div>
            <div className="hc-divider"></div>
            <ul className="hc-list">
              <li className="hc-item">김과외 전체 과목 과외성사&nbsp;<strong>1위</strong><span className="hc-sub">(2026.05 기준)</span></li>
              <li className="hc-item">누적 수강생&nbsp;<strong>5,000명+</strong></li>
              <li className="hc-item">연세대학교(신촌) 공대&nbsp;<strong>학사, 석사</strong></li>
              <li className="hc-item">약술형 논술&nbsp;<strong>전문 강사</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 약술형 논술 */}
      <section id="essay" className="sec-essay">
        <div className="essay-intro reveal">
          <div className="big-label">수시 전략</div>
          <h2>약술형 논술,<br />지금 이 전형이 기회입니다</h2>
          <p>수능 성적이 전부가 아닙니다. 약술형 논술은 철저한 준비로 상위권 대학 합격을 현실로 만드는 가장 현실적인 전략입니다.</p>
        </div>

        <div className="essay-blocks">

          {/* 01 */}
          <div className="essay-block reveal-left">
            <div className="eb-left">
              <div className="eb-num">01</div>
              <div className="eb-title">약술형 논술이란?</div>
              <div className="eb-subtitle">What is it</div>
            </div>
            <div className="eb-right">
              <p className="eb-desc">약술형 논술은 수학·과학 개념을 바탕으로 짧고 명확하게 풀어내는 논술 전형입니다. 긴 서술보다 핵심 논리를 정확히 표현하는 능력이 핵심이며, 수학적 사고력이 뛰어난 학생에게 절대적으로 유리합니다.</p>
              <div className="eb-points">
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-pen"></i></div>
                  <div className="eb-point-text">
                    <strong>수학 개념 기반 단답형 서술</strong>
                    <span>공식 암기가 아닌, 개념 이해와 적용 능력을 평가합니다</span>
                  </div>
                </div>
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-university"></i></div>
                  <div className="eb-point-text">
                    <strong>주요 시행 대학</strong>
                    <span>연세대·성균관대·한양대·이화여대·숙명여대 등 수도권 상위권 대학 다수</span>
                  </div>
                </div>
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-clock"></i></div>
                  <div className="eb-point-text">
                    <strong>시험 형태</strong>
                    <span>보통 60~90분, 수학 문제 4~8문항을 논리적으로 서술</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="essay-block reverse reveal-right">
            <div className="eb-left">
              <div className="eb-num">02</div>
              <div className="eb-title">왜 지금<br />중요한가</div>
              <div className="eb-subtitle">Why now</div>
            </div>
            <div className="eb-right">
              <div className="eb-stats">
                <div className="eb-stat">
                  <div className="eb-stat-val">3<span>배+</span></div>
                  <div className="eb-stat-lbl">최근 5년간<br />약술형 전형 확대</div>
                </div>
                <div className="eb-stat">
                  <div className="eb-stat-val">70<span>%</span></div>
                  <div className="eb-stat-lbl">수능 최저 충족<br />실질 경쟁률 감소</div>
                </div>
                <div className="eb-stat">
                  <div className="eb-stat-val">2<span>배</span></div>
                  <div className="eb-stat-lbl">논술 전형<br />합격선 유리</div>
                </div>
              </div>
              <div className="eb-points">
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-chart-line"></i></div>
                  <div className="eb-point-text">
                    <strong>전형 규모 지속 확대</strong>
                    <span>정시·교과 전형 축소 추세 속에서 논술 전형은 꾸준히 늘고 있습니다</span>
                  </div>
                </div>
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-filter"></i></div>
                  <div className="eb-point-text">
                    <strong>수능 최저 충족만으로 실질 경쟁 격감</strong>
                    <span>응시자 중 최저를 통과하는 비율이 낮아, 실제 경쟁은 생각보다 훨씬 좁습니다</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="essay-block reveal-left">
            <div className="eb-left">
              <div className="eb-num">03</div>
              <div className="eb-title">어떤 학생에게<br />유리한가</div>
              <div className="eb-subtitle">Who benefits</div>
            </div>
            <div className="eb-right">
              <p className="eb-desc">모든 학생에게 열려 있지만, 특히 이런 학생들에게 약술형 논술은 최고의 카드입니다.</p>
              <div className="eb-profiles">
                <div className="eb-profile">
                  <div className="eb-profile-dot"></div>
                  <strong>내신은 아쉽지만 수학 실력은 탄탄한 학생</strong>
                  <span>내신 불리 극복 가능</span>
                </div>
                <div className="eb-profile">
                  <div className="eb-profile-dot"></div>
                  <strong>수능 최저 등급 충족이 가능한 학생</strong>
                  <span>실질 경쟁률 급감</span>
                </div>
                <div className="eb-profile">
                  <div className="eb-profile-dot"></div>
                  <strong>개념 이해와 논리적 서술에 강한 학생</strong>
                  <span>핵심 역량 직결</span>
                </div>
                <div className="eb-profile">
                  <div className="eb-profile-dot"></div>
                  <strong>목표 대학의 정시 컷이 부담스러운 학생</strong>
                  <span>수시 합격 루트 확보</span>
                </div>
              </div>
            </div>
          </div>

          {/* 04 */}
          <div id="strategy" className="essay-block reverse reveal-right">
            <div className="eb-left">
              <div className="eb-num">04</div>
              <div className="eb-title">J-MATH<br />합격 전략</div>
              <div className="eb-subtitle">Our strategy</div>
            </div>
            <div className="eb-right">
              <p className="eb-desc">약술형 논술은 단순 문제풀이가 아닙니다. 개념의 구조를 정확히 이해하고 서술하는 훈련이 필요합니다.</p>
              <div className="eb-strategy">
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 01</div>
                  <div className="eb-strat-ttl">개념 구조화</div>
                  <div className="eb-strat-dsc">단순 암기가 아닌, 개념 간 연결과 논리 흐름을 잡는 훈련</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 02</div>
                  <div className="eb-strat-ttl">기출 패턴 분석</div>
                  <div className="eb-strat-dsc">대학별 출제 경향을 분석해 핵심 유형을 집중 공략</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 03</div>
                  <div className="eb-strat-ttl">서술 표현 훈련</div>
                  <div className="eb-strat-dsc">채점 기준에 맞는 논리적 서술 방식 반복 훈련</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 04</div>
                  <div className="eb-strat-ttl">실전 모의 &amp; 첨삭</div>
                  <div className="eb-strat-dsc">실제 시험과 동일한 조건의 모의 답안 작성 및 1:1 피드백</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 상담 신청 */}
      <section id="contact" className="sec-contact">
        <div className="contact-inner">

          <div className="contact-head reveal">
            <div className="contact-kicker">상담 신청</div>
            <h2 className="contact-title">지금 바로<br /><em>무료 상담</em>을 시작하세요</h2>
            <p className="contact-desc">편한 방법으로 연락주세요. 빠르게 안내드립니다.</p>
          </div>

          <div className="contact-grid">

            <div className="contact-channel reveal-left">
              <div className="ch-icon-wrap kakao">
                <i className="fas fa-comment"></i>
              </div>
              <div className="ch-label">간편 상담</div>
              <div className="ch-title">카카오톡 상담</div>
              <p className="ch-desc">채팅으로 편하게 문의하세요.<br />빠르게 답변드립니다.</p>
              <div className="ch-info">
                <div className="ch-info-item"><i className="fas fa-clock"></i> 평일 오전 10시 – 오후 10시</div>
                <div className="ch-info-item"><i className="fas fa-bolt"></i> 보통 1시간 이내 응답</div>
              </div>
              <button className="btn-kakao">
                <i className="fas fa-comment"></i> 카카오톡으로 문의하기
              </button>
            </div>

            <div className="contact-channel reveal-fade">
              <div className="ch-icon-wrap phone">
                <i className="fas fa-phone"></i>
              </div>
              <div className="ch-label">전화 문의</div>
              <div className="ch-title">전화 상담</div>
              <p className="ch-desc">직접 통화로 궁금한 점을<br />바로 해결하세요.</p>
              <div className="ch-info">
                <div className="ch-info-item"><i className="fas fa-clock"></i> 평일 오전 10시 – 오후 9시</div>
                <div className="ch-info-item"><i className="fas fa-phone"></i> 010-0000-0000</div>
              </div>
              <button className="btn-phone">
                <i className="fas fa-phone"></i> 전화로 문의하기
              </button>
            </div>

            <div className="contact-form-box reveal-right">
              <div className="cfb-title">간편 상담 신청</div>
              <p className="cfb-sub">남겨주시면 직접 연락드립니다.</p>
              <div className="cf-row">
                <div className="cf">
                  <label>학생 이름</label>
                  <input type="text" placeholder="이름" />
                </div>
                <div className="cf">
                  <label>학년</label>
                  <select defaultValue="">
                    <option value="">선택</option>
                    <option>고1</option>
                    <option>고2</option>
                    <option>고3</option>
                    <option>재수생</option>
                    <option>중3</option>
                  </select>
                </div>
              </div>
              <div className="cf">
                <label>연락처</label>
                <input type="tel" placeholder="010-0000-0000" />
              </div>
              <div className="cf">
                <label>문의 내용 (선택)</label>
                <textarea placeholder="궁금한 점이나 현재 상황을 간단히 적어주세요."></textarea>
              </div>
              <button className="btn-submit">무료 상담 신청하기 &nbsp;›</button>
              <p className="cf-privacy">개인정보는 상담 목적 외에 사용되지 않습니다.</p>
            </div>

            <div className="contact-insta-wrap">
              <a
                href="https://www.instagram.com/yonsei_hossam/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-insta"
              >
                <i className="fab fa-instagram"></i> 인스타그램 팔로우하기
              </a>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,.25)', marginTop: '10px' }}>
                @yonsei_hossam
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="f-logo-main">J-MATH</div>
            <div className="f-logo-sub">진단 · 맞춤 개념조합 · 피드백</div>
          </div>
          <ul className="f-nav">
            <li><a href="#essay">약술형 논술</a></li>
            <li><a href="#strategy">합격 전략</a></li>
            <li><a href="#contact">상담 신청</a></li>
          </ul>
          <a href="#contact" className="btn-f">상담 신청</a>
        </div>
        <div className="footer-info">
          <span>대표강사 현정호</span>
          <span>사업자등록번호 000-00-00000</span>
          <span>전화 010-0000-0000</span>
        </div>
        <div className="footer-copy">© 2026 J-MATH. All rights reserved.</div>
      </footer>
    </>
  )
}
