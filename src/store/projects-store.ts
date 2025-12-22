import { create } from "zustand";

type State = {
    q: string;
    tag: string;
    setQ: (q: string) => void;
    setTag: (tag: string) => void;
    clear: () => void;
};

export const useProjectsStore = create<State>((set) => ({
    q: "",
    tag: "All",
    setQ: (q) => set({ q }),
    setTag: (tag) => set({ tag }),
    clear: () => set({ q: "", tag: "All" })
}));
