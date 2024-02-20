import { convertObjectToI18n } from "app/i18n"
import { Experiences } from "assets/db/Home/Experiences"
import { Educations } from "assets/db/Home/Educations"
import { Certificates } from "assets/db/Home/Certificates"
 

export const loadTranslations = (data: any, category: string) => {
  return Object.keys(data).map((item) => {
    return convertObjectToI18n(data[item].meta, category, item)
  })
}

const experienceTranslations = loadTranslations(Experiences, "experience")
const educationTranslations = loadTranslations(Educations, "education")
const certificatesTranslations = loadTranslations(Certificates, "certificate")
 

export const translationsObject = [
  ...experienceTranslations,
  ...educationTranslations,
  ...certificatesTranslations
]
