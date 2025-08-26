'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../chatbot.module.css';

export default function AIChatbot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  // 이동한님의 프로필 정보 (AI가 참고할 수 있도록)
  const profileContext = `
    이동한님은 SW QA Engineer로, 다음과 같은 경력과 전문성을 가지고 있습니다:

    **현재 직책**: QA팀 팀장 (제노레이, 2025.08~현재)
    - Mobile C-arm, Mamography, Dental Software QA 업무 수행
    - QA 프로세스 개선

    **주요 경력**:
    - 보안솔루션 기술지원 엔지니어 (빅씨엔에스, 2022.11~2025.01)
      * Endpoint Protector 기술 지원
      * 고객사 정보/정기점검/버전·환경·라이선스 관리 체계화
      * Confluence 지식 베이스 수립

    - QA팀 팀장 (카카오엔터테인먼트, 2021.02~2022.11)
      * QA팀 리빌딩, 카카오웹툰 신규 서비스 오픈
      * API/백오피스 테스트 수행

    - QA 파트 리더 (발카리, 2020.05~2021.01)
      * SW QA 프로세스 수립 및 블록체인 메신저 검증/출시

    - 엔터프라이즈 엔지니어 (ICONLOOP, 2018.02~2020.05)
      * 엔터프라이즈 블록체인 소프트웨어 QA 프로세스 수립
      * Technical Document 및 교육 자료 작성
      * 외부 발표 및 강의 다수 진행
      * 해커톤 블록체인 기술 지원 및 멘토링

    **강점**:
    - 지속 학습과 자기주도적 성장
    - 프로세스 표준화/문서화로 조직 효율 향상
    - 기능·비기능 요구를 모두 고려한 품질 관점
    - 고객 기술 지원과 커뮤니케이션 역량

    **학력**: 인하대학교 컴퓨터공학과 학사

    **외부 활동**:
    - 2018/07/12: 전자신문 / Blackchain & DApp Dev Summit 2018
    - 2018/06/08: IEEE / IEEE Blockchain Summit Korea 2018
    - 2018/08/07: Fastcampus / 블록체인 전문가 과정 특강
    - 2019/01/07~01/10: 백석대학교 / 블록체인 스페셜리스트 양성 교육(총 40시간)
    - 2018/06/01~06/03: NH-KISA 핀테크×블록체인 해커톤
    - 2018/08/30~09/01: 제5회 대한민국 SW 융합해커톤

    **수상 경력**: 제6회 대한민국 SW 품질대상 2등 수상
  `;

  // 초기 메시지 설정
  useEffect(() => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        content: '안녕하세요! 👋 이동한님에 대해 궁금한 점이 있으시면 언제든 질문해주세요. 경력, 전문성, 프로젝트 등 어떤 것이든 물어보실 수 있습니다!',
        timestamp: new Date().toLocaleTimeString('ko-KR')
      }
    ]);
  }, []);

  // 메시지 스크롤 자동 이동
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // AI 응답 생성 (Firebase AI Logic 대신 로컬 로직 사용)
  const generateAIResponse = async (userQuestion) => {
    // 실제 Firebase AI Logic을 사용할 때는 여기서 Gemini API 호출
    // 현재는 로컬 로직으로 응답 생성
    
    const responses = {
      '경력': '이동한님은 2018년부터 현재까지 다양한 기업에서 QA 업무를 수행해왔습니다. ICONLOOP에서 블록체인 QA를 시작으로, 발카리, 카카오엔터테인먼트, 빅씨엔에스를 거쳐 현재 제노레이에서 QA팀 팀장으로 일하고 계십니다.',
      '전문성': 'SW QA 프로세스 수립, 기술 문서화, 고객 기술 지원, 블록체인 기술 등 다양한 도메인에서 전문성을 보유하고 있습니다. 특히 프로세스 표준화와 문서화를 통해 조직의 효율성을 높이는 데 탁월한 역량을 가지고 계십니다.',
      '블록체인': 'ICONLOOP에서 엔터프라이즈 블록체인 소프트웨어 QA 프로세스를 수립하고, 다수의 외부 발표와 강의, 해커톤 멘토링을 진행했습니다. 블록체인 기술에 대한 깊은 이해와 경험을 보유하고 계십니다.',
      '교육': '백석대학교에서 총 40시간의 블록체인 스페셜리스트 양성 교육을 진행했으며, Fastcampus와 IEEE 등 다양한 기관에서 강의와 발표를 해왔습니다.',
      '수상': '제6회 대한민국 SW 품질대상에서 2등을 수상했습니다. 서류 작성, 발표, 대면 심사 대응 등 전 과정을 담당했습니다.',
      '학력': '인하대학교 컴퓨터공학과를 졸업했습니다.',
      '강점': '지속적인 학습과 자기주도적 성장, 프로세스 표준화, 문서화를 통한 조직 효율 향상, 기능과 비기능 요구사항을 모두 고려한 품질 관점, 고객 기술 지원과 커뮤니케이션 역량을 주요 강점으로 가지고 계십니다.'
    };

    // 키워드 기반 응답 생성
    let response = '죄송합니다. 이동한님에 대한 더 구체적인 질문을 해주시면 자세히 답변드리겠습니다.';
    
    for (const [keyword, answer] of Object.entries(responses)) {
      if (userQuestion.includes(keyword)) {
        response = answer;
        break;
      }
    }

    // 일반적인 질문에 대한 응답
    if (userQuestion.includes('안녕') || userQuestion.includes('소개')) {
      response = '안녕하세요! 이동한님은 SW QA Engineer로, 지속적인 학습과 표준화된 프로세스 구축을 통해 제품과 조직의 품질을 높이는 전문가입니다. 다양한 도메인 경험을 바탕으로 기능과 비기능 요구사항까지 고려한 품질 관리와 문서화, 협업을 통해 실행력을 높이는 것이 특징입니다.';
    }

    if (userQuestion.includes('현재') || userQuestion.includes('지금')) {
      response = '현재 제노레이에서 QA팀 팀장으로 일하고 계시며, Mobile C-arm, Mamography, Dental Software QA 업무를 수행하고 있습니다. QA 프로세스 개선에도 힘쓰고 계십니다.';
    }

    return response;
  };

  // 메시지 전송
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString('ko-KR')
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // AI 응답 생성
      const aiResponse = await generateAIResponse(inputValue.trim());
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString('ko-KR')
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('AI 응답 생성 오류:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'bot',
        content: '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        timestamp: new Date().toLocaleTimeString('ko-KR')
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 챗봇 토글 버튼 */}
      <button 
        className={styles.chatbotToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="AI 챗봇 열기/닫기"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* 챗봇 패널 */}
      {isOpen && (
        <div className={styles.chatbotPanel}>
          <div className={styles.chatbotHeader}>
            <h3>🤖 AI 어시스턴트</h3>
            <p>이동한님에 대해 궁금한 점을 물어보세요!</p>
          </div>

          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${styles[message.type]}`}
              >
                <div className={styles.messageContent}>
                  {message.content}
                </div>
                <div className={styles.messageTimestamp}>
                  {message.timestamp}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.bot}`}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="이동한님에 대해 궁금한 점을 물어보세요..."
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={isLoading || !inputValue.trim()}
            >
              전송
            </button>
          </form>
        </div>
      )}
    </>
  );
}
