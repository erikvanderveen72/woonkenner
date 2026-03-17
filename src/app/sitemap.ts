import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://woonkenner.nl';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/hypotheek`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/woningwaarde`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/energie`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/huurprijzen`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/verduurzaming`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/raamdecoratie`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/vloeren`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kozijnen`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ];
}
