import { createContext } from 'react';

// アプリケーション全体で使用するコンテキストを一つだけ作成
// アプリの規模により、複数のコンテキストを作ることになる
const AppContext = createContext();

export default AppContext;
