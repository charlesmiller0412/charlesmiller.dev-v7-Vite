import create from "zustand";

const useThemeStore = create((set) => ({
    theme: "dark",
    setTheme: (key: any) => set({ theme: key }),
}));

export default useThemeStore;
