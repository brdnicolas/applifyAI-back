import cheerio from 'cheerio'
import { cleanText } from '@/shared/utils/text'
import { ScrappingResult } from '@/scripts/scrapping/main'

export const linkedinScrapping = async (data: string): Promise<ScrappingResult> => {
  const $ = cheerio.load(data)

  const job = $('h1').text()
  const companyImageUrl = $('.artdeco-entity-image.artdeco-entity-image--square-5').attr('data-delayed-url')
  const company = cleanText($('.topcard__org-name-link').text())

  return {
    job,
    company,
    companyImageUrl: companyImageUrl || ''
  }
}
