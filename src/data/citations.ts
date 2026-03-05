// Research citations
export interface Citation {
    id: string
    title: string
    authors: string
    year: number
    organization: string
    excerpt: string
    category: 'preparedness' | 'behavior' | 'sustainability' | 'growth'
}

export const citations: Citation[] = [
    {
        id: 'hhi-2024',
        title: 'Disaster Preparedness in Southeast Asia: A National Assessment',
        authors: 'Harvard Humanitarian Initiative',
        year: 2024,
        organization: 'Harvard Humanitarian Initiative',
        excerpt: 'Regional disaster preparedness score averaged 19.2/50, indicating significant ongoing vulnerabilities in planning, training, and material investment.',
        category: 'preparedness',
    },
    {
        id: 'ucla-2023',
        title: 'Cognitive Tunneling Under Acute Stress: Implications for Crisis Technology',
        authors: 'UCLA Behavioral Economics Group',
        year: 2023,
        organization: 'UCLA',
        excerpt: 'Individuals experiencing acute disaster stress exhibit narrowed cognitive bandwidth, significantly reducing their ability to process complex digital interfaces.',
        category: 'behavior',
    },
    {
        id: 'knight-2017',
        title: 'The Sustainability of Civic Technology',
        authors: 'Knight Foundation',
        year: 2017,
        organization: 'Knight Foundation',
        excerpt: 'Startups focusing entirely on consumer-facing social good while ignoring institutional buyers face inevitable collapse without sustainable revenue models.',
        category: 'sustainability',
    },
    {
        id: 'petabencana-2024',
        title: 'Community Disaster Reporting Growth in Southeast Asia',
        authors: 'Yayasan Peta Bencana',
        year: 2024,
        organization: 'Peta Bencana',
        excerpt: '150% year-over-year increase in resident-submitted disaster reports in 2024 — but zero platforms in the region close the individual feedback loop.',
        category: 'growth',
    },
]

// Competitor comparison data for chart
export const competitorData = [
    {
        factor: 'Feedback Loop',
        nationalSystems: 0,
        crowdsourcePlatforms: 15,
        climatePulse: 95,
    },
    {
        factor: 'Pre-Disaster',
        nationalSystems: 25,
        crowdsourcePlatforms: 10,
        climatePulse: 90,
    },
    {
        factor: 'Community Utility',
        nationalSystems: 5,
        crowdsourcePlatforms: 30,
        climatePulse: 88,
    },
    {
        factor: 'Youth Design',
        nationalSystems: 0,
        crowdsourcePlatforms: 20,
        climatePulse: 95,
    },
]
