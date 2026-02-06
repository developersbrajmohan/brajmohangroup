import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://brajmohangroup.com';

    // Core routes
    const routes = [
        '',
        '/about',
        '/services',
        '/projects',
        '/contact',
        '/sustainability',
        '/services/real-estate',
        '/services/civil-construction',
        '/services/web-development',
        '/services/solar-energy',
        '/services/interior-design',
        '/services/manpower',
        '/services/furniture',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
