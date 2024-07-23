/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />

interface WebApp {
  MainButton: any;
  close(): void;
  colorScheme: string;
  expand(): void;
  initData: string;
  initDataUnsafe: {
    user?: {
      username: string;
    };
    query_id?: string;
  };
  isExpanded: boolean;
  isVersionAtLeast(ver: string): boolean;
  offEvent(eventType: string, callback: (...args: any[]) => any): void;
  onEvent(eventType: string, callback: (...args: any[]) => any): void;
  openTgLink(url: string): void;
  ready(): void;
  sendData(data: string): void;
  themeParams: object;
  version: string;
  viewportHeight: number;
  viewportStableHeight: number;
}

interface Window {
  Telegram: {
    WebView: any;
    webData: any;
    WebApp: WebApp;
  };
}
