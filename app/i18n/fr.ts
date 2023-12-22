import { Translations } from "./en"

const fr: Translations = {
  common: {
    ok: "OK !",
    cancel: "Annuler",
    back: "Retour",
    underConstruction: "Cette fonctionnalité est en cours de développement",
  },
  loadingScreen: {
    loading: "Préparation de l'application en cours...",
  },
  welcomeScreen: {
    description:
      "Cet écran sera la première chose que les utilisateurs verront lorsqu'ils ouvriront l'application. Il est utilisé pour présenter l'application et guider l'utilisateur.",
    appName: "Mushaf App",
    shortDescription: "Mushaf App est un Coran électronique pour apprendre le Saint Coran",
    continue: "Continuer",
    downloadInBackground: "Parcourir pendant le téléchargement en arrière-plan",
  },
  errorScreen: {
    title: "Quelque chose s'est mal passé !",
    friendlySubtitle: "Réessayez.",
    reset: "RÉINITIALISER L'APPLICATION",
  },
  emptyStateComponent: {
    generic: {
      heading: "Aucune donnée trouvée.",
      content: "Appuyez sur le bouton pour réessayer.",
      button: "Actualiser",
    },
  },
  menus: {
    masahif: "Masahef",
    reciters: "Récitateurs",
    tafaseer: "Tafaseer",
    tarajim: "Traduction",
    search: "Recherche",
    bookmarks: "Signets",
    favorites: "Favoris",
    settings: "Paramètres",
    home: "Accueil",
    about: "À propos",
    languages: "Langue de l'interface",
    portfolio:"Portefeuille",
    contact: "Nous contacter",
    share: "Partager",
    services: "Services",
    skills: "Compétences",
  },
  index: {
    gotoAyah: "aller à l'ayah sélectionnée",
    page: "Page",
    surah: "Sourate",
    ayah: "Ayah",
    suwar: "Suwar",
    ajzaa: "Ajzaa",
    juz: "Juz",
    hizb: "Hizb",
    eighth: "Huitième",
    eighths: "Huitièmes",
    quarter: "Quart",
    searchPlaceholder: "Rechercher via le nom de sourate",
    eighth1: "Huitième 1",
    eighth2: "Huitième 2",
    eighth3: "Huitième 3",
    eighth4: "Huitième 4",
    eighth5: "Huitième 5",
    eighth6: "Huitième 6",
    eighth7: "Huitième 7",
    eighth8: "Huitième 8",
  },
  search: {
    quran: "Coran",
    tafaseer: "Tafaseer",
    tarajim: "Traductions",
    placeholder: "Recherchez dans le coran en arabe.",
    resultsCount: "Résultats : {{count}}",
  },
  tafaseer: {
    noResult: "Aucun tafseer trouvé pour l'ayah sélectionnée",
    loading: "Chargement du tafseer...",
    partNumber: "Partie {{part}}",
    notDownload: "(Non téléchargé)",
    showBooks: "Afficher les interprétations",
    selectedBook: "Tafseer sélectionné",
    otherBooks: "Autres tafaseer",
    select: "Sélectionner le tafseer",
  },
  tarajim: {
    noResult: "Aucune traduction trouvée pour l'ayah sélectionnée",
    loading: "Chargement du tafsir...",
    partNumber: "Partie {{part}}",
    notDownload: "(Non téléchargé)",
    showBooks: "Afficher les traductions",
    selectedBook: "Traduction sélectionnée",
    otherBooks: "Autres traductions",
    select: "Sélectionner la traduction",
  },
  selectAyahModal: {
    voice: "Récitation",
    favorite: "Favori",
    tarajim: "Traductions",
    tafaseer: "Tafaseer",
    share: "Partager",
  },
  quran: {
    MK: "Makkiyah",
    MD: "Madaniyah",
    surahDetail: "{{number}}. $t(quran.{{type}})، Ayat : {{count}}",
    numberOfPages: "{{pages}} pages",
    surahAyah: "{{surah}} Ayah {{ayah}} ",
    ayahSeparator: " et",
    surah: "Sourate {{surah}}",
    juz: "Juz {{juz}}",
    hizb: "Hizb {{hizb}}",
    eighth_1: "Huitième",
    eighth_2: "Quart",
    eighth_3: "Huitième",
    eighth_4: "Moitié",
    eighth_5: "Huitième",
    eighth_6: "Quart",
    eighth_7: "Huitième",
    eighth_8: "Hizb",
  },
  download: {
    downloadingMushafImages: "Téléchargement des pages {{mushaf}}",
    finishedDownloadingMushafImages: "Téléchargement des pages {{mushaf}} terminé",
    canceledDownloadingMushafImages: "Téléchargement des pages {{mushaf}} annulé",
  },
  bookmarks: {
    page: "page {{page}} ",
    bookmarkTitle: "Signet actuel",
    previousBookmarks: "Signets précédents",
    noFavoriteAyah: "Aucun verset favori ",
    favoriteAyahOne: "Un verset favori existe",
    favoritesAyahLessThanTen: "Il y a {{count}} versets favoris",
    favoritesAyahMoreThanTen: "Il y a {{count}} verset favori",
    remarks: "Remarque :",
    placeholder: "Note sur le verset",
    deleteFavoriteAyah: "Supprimer",
    cancel: "Annuler",
    save: "Enregistrer",
    alerMessageDelete: "Êtes-vous sûr de vouloir supprimer ce favori ?",
    alertMessageYes: "Oui",
    alertMessageNo: "Non",
    alert: "Alerte",
  },
  mushafPage: {
    extraPage: "P.E.{{page}}",
  },
  masahif: {
    selectedMushaf: "Mushaf sélectionné",
    otherMushaf: "Masahif Warsh",
    browseWithoutDownlod: "Parcourir sans télécharger",
    browse: "Parcourir",
    downloadStart: "Télécharger",
    downloadCancel: "Annuler le téléchargement",
    downloadPending: "(Téléchargement {{progress}} en cours)",
    downloadDone: "(Entièrement téléchargé)",
  },
  reciters: {
    selectedReciter: "Récitateur sélectionné",
    otherReciter: "Récitateurs algériens",
  },
  languages: {
    selectedLanguage: "Langue sélectionnée",
    otherLanguage: "Autres langues",
    ar: "Arabe",
    en: "Anglais",
    fr: "Français ",
  },
  toasts: {
    favoriteAdded: "Favori ajouté",
    favoriteRemoved: "Favori supprimé",
    favoriteRemarkSaved: "Remarque enregistrée avec succès",
    bookmarkAdded: "Signet ajouté",
  },
  about: {
    word: "Le ministère des Affaires religieuses et des Wakfs est honoré de servir le Coran et ses sciences à travers cette application, demandant à Dieu Tout-Puissant de le rendre utile aux musulmans.",
    wizaraStaff: "Personnel du ministère:",
    developementTeam: "Équipe de développement:",
    name:"Zineddine Amariche"

  },
}

export default fr
