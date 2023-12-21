import { Instance, SnapshotOut, types } from "mobx-state-tree"
import * as storage from "../utils/storage"
import { FavoriteAyahModel } from "./FavoriteAyah"
import { BookmarkModel } from "./BookmarkModel"
import { showToast } from "app/utils/ToastMessage"

export const MushafStoreModel = types
  .model("MushafStore")
  .props({
    onboardingCompleted: types.optional(types.boolean, false),
    onboardingSelectMushafCompleted: types.optional(types.boolean, false),
    locale: types.maybeNull(types.string),
    selectedPage: types.optional(types.number, 1),
    selectedVerses: types.optional(types.array(types.number), [1]),
    favoritesAyat: types.optional(types.array(FavoriteAyahModel), []),
    bookmarks: types.optional(types.array(BookmarkModel), [
      {
        verse: 1,
        mushaf: "shirifi2",
        date: new Date(),
      },
    ]),
  })

  .actions((store) => ({
    setOnboardingCompleted(value: boolean) {
      store.onboardingCompleted = value
    },
    setOnboardingSelectMushafCompleted(value: boolean) {
      store.onboardingSelectMushafCompleted = value
    },
    setSelectedPage(value: number) {
      store.selectedPage = value
    },

    setLocale(newLocale: string) {
      store.locale = newLocale
      storage.saveString("locale", newLocale)
    },
  }))

export interface MushafStore extends Instance<typeof MushafStoreModel> {}
export interface MushafStoreSnapshot extends SnapshotOut<typeof MushafStoreModel> {}
