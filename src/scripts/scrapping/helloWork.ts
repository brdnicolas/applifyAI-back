import cheerio from 'cheerio'
import { ScrappingResult } from '@/scripts/scrapping/main'

export const helloWorkScrapping = async (data: string): Promise<ScrappingResult> => {
  const $ = cheerio.load(data)

  const job = $('h1 span').text()
  const companyImageUrl = $('.tw-h-7').attr('src')
  const company = $('h1 .tw-typo-m').text()

  return {
    job,
    company,
    companyImageUrl: companyImageUrl || ''
  }
}
