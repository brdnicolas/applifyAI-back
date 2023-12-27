import axios from 'axios'
import { linkedinScrapping } from '@/scripts/scrapping/linkedin'
import { welcomeToTheJungleScrapping } from '@/scripts/scrapping/welcomeToTheJungle'
import { helloWorkScrapping } from '@/scripts/scrapping/helloWork'
import { poleEmploiScrapping } from '@/scripts/scrapping/poleEmploi'

const SCRAPP_URL_MATCHING = {
  'linkedin.com': linkedinScrapping,
  'welcometothejungle.com': welcomeToTheJungleScrapping,
  'hellowork.com': helloWorkScrapping,
  'pole-emploi.fr': poleEmploiScrapping
}

export type ScrappingResult = {
  job: string
  company: string
  companyImageUrl: string
}

export const scrapApplication = async (url: string): Promise<ScrappingResult> => {
  if (!url) {
    return {
      job: '',
      company: '',
      companyImageUrl: ''
    }
  }

  const rawHtml = await axios
    .get(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
          '(KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36',
        'Content-Type': 'text/html',
        Accept: 'text/html'
      }
    })
    .then((response) => response.data)
  const scrappingKey = Object.keys(SCRAPP_URL_MATCHING).find((urlToMatch) =>
    url.includes(urlToMatch)
  ) as keyof typeof SCRAPP_URL_MATCHING

  if (scrappingKey) {
    return await SCRAPP_URL_MATCHING[scrappingKey](rawHtml)
  }

  return {
    job: '',
    company: '',
    companyImageUrl: ''
  }
}
