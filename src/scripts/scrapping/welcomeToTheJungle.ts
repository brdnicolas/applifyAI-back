import cheerio from 'cheerio'
import { ScrappingResult } from '@/scripts/scrapping/main'

export const welcomeToTheJungleScrapping = async (data: string): Promise<ScrappingResult> => {
  const $ = cheerio.load(data)

  const job = $('h2').text().replace('D’autres offres vous correspondent !', '')
  const companyImageUrl = $('.sc-bXCLTC.dPVkkc img').attr('src')
  const company = $('.sc-bXCLTC.dPVkkc img').attr('alt')

  return {
    job,
    company: company || '',
    companyImageUrl: companyImageUrl || ''
  }
}
