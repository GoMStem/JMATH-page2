export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <i className="fas fa-exclamation-circle"></i>
            수능·내신 망한 학생 필독
          </div>
          <h1 className="hero-h1">
            이 등급으로<br />
            <span className="hero-h1-point">진짜 합격?</span><br />
            영상으로 보세요
          </h1>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScn-jtlFDesu11b2il9gEqP6aO3MxPQegIWjfoGQXWzvjCD_Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn-hero">
            내 성적으로 가능성 보기 <i className="fas fa-arrow-right"></i>
          </a>

          <div className="hero-case-divider"></div>

          <div className="hero-cases">
            <div className="case-card">
              <div className="case-left">
                <span className="case-label">가천대 합격 사례</span>
                <div className="case-grades">
                  <span className="cg-red">수능수학 5등급!</span>
                  <span className="cg-blue">국어 6등급!</span>
                  <span className="cg-white">내신 6등급!</span>
                </div>
                <div className="case-result">
                  <i className="fas fa-arrow-right"></i> 2주만에 가천대 합격!
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=N7tjkizK2NA"
                target="_blank"
                rel="noopener noreferrer"
                className="case-video"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="case-play case-play-thumb" style={{backgroundImage:"url('https://img.youtube.com/vi/N7tjkizK2NA/hqdefault.jpg')"}}>
                  <i className="fas fa-play"></i>
                </div>
                <div className="case-video-label">가천대 합격 인터뷰</div>
              </a>
            </div>
            <div className="case-card">
              <div className="case-left">
                <span className="case-label">서경대 합격 사례</span>
                <div className="case-grades">
                  <span className="cg-red">수능수학 4등급!</span>
                  <span className="cg-blue">국어 5등급!</span>
                  <span className="cg-white">내신 8등급!</span>
                </div>
                <div className="case-result">
                  <i className="fas fa-arrow-right"></i> 서경대 미래융합학부 합격!
                </div>
              </div>
              <a
                href="https://www.youtube.com/watch?v=Ab6_2TD0pyQ&t=19s"
                target="_blank"
                rel="noopener noreferrer"
                className="case-video"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="case-play case-play-thumb" style={{backgroundImage:"url('https://img.youtube.com/vi/Ab6_2TD0pyQ/hqdefault.jpg')"}}>
                  <i className="fas fa-play"></i>
                </div>
                <div className="case-video-label">서경대 합격생 인터뷰</div>
              </a>
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

      {/* 소셜 배너 */}
      <section className="sec-social-banner">
        <div className="social-banner-inner">
          <a href="https://www.instagram.com/yonsei_hossam/" target="_blank" rel="noopener noreferrer" className="sb-card sb-insta">
            <div className="sb-icon"><i className="fab fa-instagram"></i></div>
            <div className="sb-text">
              <div className="sb-name">인스타그램</div>
              <div className="sb-handle">@yonsei_hossam</div>
            </div>
          </a>
          <a href="https://www.youtube.com/@H_Math-f4k" target="_blank" rel="noopener noreferrer" className="sb-card sb-yt">
            <div className="sb-icon"><i className="fab fa-youtube"></i></div>
            <div className="sb-text">
              <div className="sb-name">유튜브</div>
              <div className="sb-handle">합격 인터뷰 보기</div>
            </div>
          </a>
          <a href="https://blog.naver.com/hyeonjeongho" target="_blank" rel="noopener noreferrer" className="sb-card sb-blog">
            <div className="sb-icon"><span className="sb-blog-n">N</span></div>
            <div className="sb-text">
              <div className="sb-name">네이버 블로그</div>
              <div className="sb-handle">수업 후기 보기</div>
            </div>
          </a>
          <a href="https://open.kakao.com/o/sebtKowh" target="_blank" rel="noopener noreferrer" className="sb-card sb-kakao">
            <div className="sb-icon"><i className="fas fa-comment"></i></div>
            <div className="sb-text">
              <div className="sb-name">카카오톡 상담</div>
              <div className="sb-handle">무료 상담 신청</div>
            </div>
          </a>
        </div>
      </section>

      {/* 약술형 논술 */}
      <section id="essay" className="sec-essay">
        <div className="essay-blocks">

          {/* 01 */}
          <div className="essay-block reveal-left">
            <div className="eb-left">
              <div className="eb-num">01</div>
              <div className="eb-title">포기하지 마세요.<br />아직 길이 있습니다.</div>
              <div className="eb-subtitle">Hope first</div>
            </div>
            <div className="eb-right">
              <p className="eb-desc">성적이 무너지면 학생은 공부를 놓기 쉽습니다. 의지가 없는 게 아니라, 될 수 있다는 희망을 못 봤기 때문입니다.</p>
              <div className="eb-points">
                <div className="eb-point">
                  <div className="eb-point-icon"><i className="fas fa-heart"></i></div>
                  <div className="eb-point-text">
                    <strong>학부모님, 아이에게 먼저 희망을 주세요.<br />지금 등급으로도 인서울 가능성을 확인할 수 있습니다.</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className="essay-block reverse reveal-right">
            <div className="eb-left">
              <div className="eb-num">02</div>
              <div className="eb-title">왜 지금<br />확인해야 하나</div>
              <div className="eb-subtitle">Why now</div>
            </div>
            <div className="eb-right">
              <div className="eb-stats">
                <div className="eb-stat">
                  <div className="eb-stat-val">5<span>등급</span></div>
                  <div className="eb-stat-lbl">수능 수학<br />가천대 합격</div>
                </div>
                <div className="eb-stat">
                  <div className="eb-stat-val">8<span>등급</span></div>
                  <div className="eb-stat-lbl">내신<br />서경대 합격</div>
                </div>
                <div className="eb-stat">
                  <div className="eb-stat-val">2<span>주</span></div>
                  <div className="eb-stat-lbl">단기 준비<br />합격 사례</div>
                </div>
              </div>
              <div className="eb-points">
                <div className="eb-point eb-point-text-only">
                  <div className="eb-point-text">
                    <strong>성적표만 보고 끝났다고 생각한 학생</strong>
                  </div>
                  <span className="eb-point-tag">가능성 확인</span>
                </div>
                <div className="eb-point eb-point-text-only">
                  <div className="eb-point-text">
                    <strong>정시만 바라보기 불안한 학생</strong>
                  </div>
                  <span className="eb-point-tag">다른 길 확인</span>
                </div>
              </div>
            </div>
          </div>

          {/* 03 */}
          <div className="essay-block reveal-left">
            <div className="eb-left">
              <div className="eb-num">03</div>
              <div className="eb-title">긴 설명보다<br />먼저 볼 것</div>
              <div className="eb-subtitle">Check first</div>
            </div>
            <div className="eb-right">
              <div className="eb-strategy">
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 01</div>
                  <div className="eb-strat-ttl">내 등급</div>
                  <div className="eb-strat-dsc">내신 · 모의고사 · 수능 등급 확인</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 02</div>
                  <div className="eb-strat-ttl">가능 대학</div>
                  <div className="eb-strat-dsc">지금 노려볼 수 있는 대학 확인</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 03</div>
                  <div className="eb-strat-ttl">합격 루트</div>
                  <div className="eb-strat-dsc">약술형 논술이 맞는지 판단</div>
                </div>
                <div className="eb-strat-card">
                  <div className="eb-strat-num">STEP 04</div>
                  <div className="eb-strat-ttl">바로 시작</div>
                  <div className="eb-strat-dsc">가능하면 늦기 전에 시작</div>
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
            <h2 className="contact-title">성적표만 보고<br /><em>포기하지 마세요</em></h2>
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
              <a href="https://open.kakao.com/o/sebtKowh" target="_blank" rel="noopener noreferrer" className="btn-kakao">
                <i className="fas fa-comment"></i> 카카오톡으로 문의하기
              </a>
            </div>

            <div className="contact-social reveal-fade">
              <div className="ch-label">SNS</div>
              <div className="ch-title">소셜 미디어</div>
              <div className="social-btns">
                <a href="https://www.instagram.com/yonsei_hossam/" target="_blank" rel="noopener noreferrer" className="btn-social btn-social-insta">
                  <div className="btn-social-icon"><i className="fab fa-instagram"></i></div>
                  <div className="btn-social-info">
                    <div className="btn-social-name">인스타그램</div>
                    <div className="btn-social-sub">@yonsei_hossam</div>
                  </div>
                  <i className="fas fa-chevron-right btn-social-arrow"></i>
                </a>
                <a href="https://www.youtube.com/@H_Math-f4k" target="_blank" rel="noopener noreferrer" className="btn-social btn-social-yt">
                  <div className="btn-social-icon"><i className="fab fa-youtube"></i></div>
                  <div className="btn-social-info">
                    <div className="btn-social-name">유튜브</div>
                    <div className="btn-social-sub">채널 바로가기</div>
                  </div>
                  <i className="fas fa-chevron-right btn-social-arrow"></i>
                </a>
                <a href="https://blog.naver.com/hyeonjeongho" target="_blank" rel="noopener noreferrer" className="btn-social btn-social-blog">
                  <div className="btn-social-icon"><span className="blog-n">N</span></div>
                  <div className="btn-social-info">
                    <div className="btn-social-name">네이버 블로그</div>
                    <div className="btn-social-sub">블로그 바로가기</div>
                  </div>
                  <i className="fas fa-chevron-right btn-social-arrow"></i>
                </a>
              </div>
            </div>

            <div className="contact-form-box reveal-right">
              <div className="cfb-title">내 성적으로 가능한 대학 진단</div>
              <ul className="cfb-checklist">
                <li>내 등급으로 가능한지</li>
                <li>지금 시작해도 되는지</li>
                <li>약술형 논술이 맞는지</li>
                <li>어디까지 노려볼 수 있는지</li>
              </ul>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScn-jtlFDesu11b2il9gEqP6aO3MxPQegIWjfoGQXWzvjCD_Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="btn-submit cfb-btn">약술형 논술 상담 신청 &nbsp;›</a>
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
