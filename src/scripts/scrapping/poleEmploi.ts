import cheerio from 'cheerio'
import { ScrappingResult } from '@/scripts/scrapping/main'

export const poleEmploiScrapping = async (data: string): Promise<ScrappingResult> => {
  const $ = cheerio.load(data)

  const job = $("h1 [itemprop='title']").text()
  const companyImageUrl = 'https://www.pole-emploi.fr/logos/img/partenaires/pemjc80.png'
  const company = 'Pôle Emploi'

  return {
    job,
    company,
    companyImageUrl
  }
}
