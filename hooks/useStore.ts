import { create } from "zustand";

type User = {
  user_name: string;
  score: number;
};
export const useUser = create<User>((set) => ({
  user_name: "Shohan",
  score: 10,
  change_name: (new_name: string) =>
    set((old_state) => ({
      user_name: new_name,
    })),

  increase_score: () =>
    set((old_state) => ({ ...old_state, score: old_state.score + 1 })),
  decrease_score: () =>
    set((old_state) => {
      return {
        ...old_state,
        score: old_state.score - 1,
      };
    }),
}));
