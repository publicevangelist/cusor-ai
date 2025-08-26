import { initializeApp } from 'firebase/app';
import { getAI } from 'firebase/ai';

// Firebase 설정
const firebaseConfig = {
  // 실제 Firebase 프로젝트 설정으로 교체해야 합니다
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase AI Logic 초기화
export const ai = getAI(app);

export default app;
