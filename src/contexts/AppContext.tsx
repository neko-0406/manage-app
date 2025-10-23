import { createContext, useContext, useState, ReactNode } from 'react';

// 1. 状態の型定義 (拡張性を考慮)
interface AppState {
  // ここに将来的にプロパティを追加していく
  // 例: userName: string;
  title: string;
  // サイドバーメニューで選択できるメニュー項目
  selectedMenu: 'Home' | 'Todo' | 'Calendar' | 'Settings';
}

// 2. Contextの型定義
interface AppContextType {
  appState: AppState;
  setAppState: React.Dispatch<React.SetStateAction<AppState>>;
}

// 3. Contextの作成 (初期値)
const AppContext = createContext<AppContextType | undefined>(undefined);

// 4. Providerコンポーネントの作成
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [appState, setAppState] = useState<AppState>({
    // 初期状態をここに設定
    title: 'Default Title',
    // サイドバーメニューで選択できるメニュー項目
    selectedMenu: 'Home',
  });

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {children}
    </AppContext.Provider>
  );
};

// 5. カスタムフックの作成
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
