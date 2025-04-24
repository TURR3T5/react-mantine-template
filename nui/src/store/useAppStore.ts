import { create } from 'zustand';

interface AppState {
  isOpen: boolean;
  data: any;
  open: (data?: any) => void;
  close: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  isOpen: true,
  data: null,
  open: (data = null) => set({ isOpen: true, data }),
  close: () => set({ isOpen: false, data: null }),
}));
