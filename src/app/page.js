import styles from "./linkedin.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.banner} />

      {/* 한국어 환영 메시지 추가 */}
      <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f8f9fa', marginBottom: '2rem' }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>안녕하세요! 👋</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', margin: 0 }}>
          이동한의 포트폴리오에 오신 것을 환영합니다
        </p>
      </div>

      <div className={styles.profileWrap}>
        <section className={styles.profileCard}>
          <img src="/이동한_증명사진.jpg" alt="이동한 증명사진" className={styles.avatar} />
          <div className={styles.info}>
            <div className={styles.name}>이동한</div>
            <div className={styles.headline}>SW QA Engineer · 프로세스 표준화 · 기술문서화 · 고객 기술 지원</div>
          </div>
        </section>
      </div>

      <div className={styles.grid}>
        <section className={`${styles.card} ${styles.full}`}>
          <h2 className={styles.cardTitle}>소개</h2>
          <p>지속 학습과 표준화된 프로세스 구축을 통해 제품과 조직의 품질을 높이는 SW QA Engineer입니다. 다양한 도메인 경험으로 기능/비기능 요구까지 고려하고, 문서화와 협업을 통해 실행력을 높입니다.</p>
        </section>

        

        <section className={`${styles.card} ${styles.full}`}>
          <h2 className={styles.cardTitle}>경력</h2>
          <div className={styles.expItem}>
            <div className={styles.expRole}>QA팀 팀장 · 제노레이</div>
            <div className={styles.expWhen}>2025.08 – 현재</div>
            <ul className={styles.list}>
              <li>Mobile C-arm, Mamography, Dental Software QA 업무 수행</li>
              <li>QA 프로세스 개선</li>
            </ul>
          </div>
          <div className={styles.expItem}>
            <div className={styles.expRole}>보안솔루션 기술지원 엔지니어 · 빅씨엔에스</div>
            <div className={styles.expWhen}>2022.11 – 2025.01</div>
            <ul className={styles.list}>
              <li>Endpoint Protector 기술 지원, 고객사 정보/정기점검/버전·환경·라이선스 관리 체계화</li>
              <li>문의 응대 이메일 전환, 그룹메일 운영, Confluence 지식 베이스 수립</li>
            </ul>
          </div>

          <div className={styles.expItem}>
            <div className={styles.expRole}>QA팀 팀장 · 카카오엔터테인먼트</div>
            <div className={styles.expWhen}>2021.02 – 2022.11</div>
            <ul className={styles.list}>
              <li>QA팀 리빌딩, 카카오웹툰 신규 서비스 오픈</li>
              <li>계획/일정/채용/외주 협업 관리 및 API/백오피스 테스트 수행</li>
            </ul>
          </div>

          <div className={styles.expItem}>
            <div className={styles.expRole}>QA 파트 리더 · 발카리</div>
            <div className={styles.expWhen}>2020.05 – 2021.01</div>
            <ul className={styles.list}>
              <li>SW QA 프로세스 수립 및 블록체인 메신저 검증/출시</li>
            </ul>
          </div>

          <div className={styles.expItem}>
            <div className={styles.expRole}>엔터프라이즈 엔지니어 · ICONLOOP</div>
            <div className={styles.expWhen}>2018.02 – 2020.05</div>
            <ul className={styles.list}>
              <li>엔터프라이즈 블록체인 소프트웨어 QA 프로세스 수립 및 수행</li>
              <li>Technical Document 및 교육 자료 작성</li>
              <li>외부 발표 및 강의</li>
              <li>해커톤 블록체인 기술 지원 및 멘토링</li>
              <li>외부 고객 기술 지원 및 설치 지원</li>
            </ul>
            <div className={styles.block}>
              <strong>외부 발표/강의</strong>
              <ul className={styles.list}>
                <li>2018/07/12: 전자신문 / Blackchain & DApp Dev Summit 2018 / ICON을 위한 Dapp 개발환경</li>
                <li>2018/06/08: IEEE / IEEE Blockchain Summit Korea 2018 / Loopchain 101, Dapp Development</li>
                <li>2018/08/07: Fastcampus / 블록체인 전문가 과정 특강 / SCORE Development on ICON</li>
                <li>2019/01/07~01/10: 백석대학교 / 블록체인 스페셜리스트 양성 교육(총 40시간)</li>
              </ul>
            </div>
            <div className={styles.block}>
              <strong>해커톤 교육 및 기술 지원, 멘토링 제공</strong>
              <ul className={styles.list}>
                <li>2018/06/01~06/03: NH-KISA 핀테크×블록체인 해커톤 / 사전 교육, 행사 기술 지원</li>
                <li>2018/08/30~09/01: 제5회 대한민국 SW 융합해커톤 / 사전 교육, 행사 기술 지원, 팀 멘토링</li>
              </ul>
            </div>
            <ul className={styles.list}>
              <li>엔터프라이즈 사용자 매뉴얼 포함 다양한 기술 문서 작성</li>
              <li>엔터프라이즈 고객 대상 loopchain 설치 및 운영 훈련</li>
              <li>블록체인 입문 교육(Blockchain 101) 사내·사외 다수 진행</li>
              <li>엔터프라이즈 블록체인 SW QA 프로세스 및 관련 문서 체계화</li>
              <li>TTA GS 인증 1등급 취득 관련 업무 수행</li>
              <li>제6회 대한민국 SW 품질대상 2등 수상(서류 작성·발표 및 대면 심사 대응)</li>
            </ul>
          </div>
        </section>

        <aside className={styles.card}>
          <h2 className={styles.cardTitle}>강점</h2>
          <ul className={styles.list}>
            <li>지속 학습과 자기주도적 성장</li>
            <li>프로세스 표준화/문서화로 조직 효율 향상</li>
            <li>기능·비기능 요구를 모두 고려한 품질 관점</li>
            <li>고객 기술 지원과 커뮤니케이션 역량</li>
          </ul>
        </aside>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>학력</h2>
          <div>인하대학교 컴퓨터공학과 학사</div>
        </section>
      </div>
    </>
  );
}
