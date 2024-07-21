import create from 'zustand';
import { Menu } from '../utils/types';

const useMenuStore = create<Menu>((set) => ({
  selectedMenu: 'sohyeon kim',
  setSelectedMenu: (menu) => set({ selectedMenu: menu }),
}));

export default useMenuStore;
