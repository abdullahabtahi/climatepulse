// Team volunteer data
export interface TeamMember {
    id: string
    name: string
    countryCode: string
    countryName: string
    role: string
    contribution: string
    initials: string
    accentColor: string
}

export const teamMembers: TeamMember[] = [
    {
        id: '1',
        name: 'Team Member 1',
        countryCode: 'PH',
        countryName: 'Philippines',
        role: 'UX Research Lead',
        contribution: 'Mapped flood reporting patterns across 3 urban communities',
        initials: 'TM',
        accentColor: '#0FA87E',
    },
    {
        id: '2',
        name: 'Team Member 2',
        countryCode: 'ID',
        countryName: 'Indonesia',
        role: 'Community Engagement',
        contribution: 'Facilitated 12 focus groups with youth climate volunteers',
        initials: 'TM',
        accentColor: '#2E8B57',
    },
    {
        id: '3',
        name: 'Team Member 3',
        countryCode: 'TH',
        countryName: 'Thailand',
        role: 'Technical Lead',
        contribution: 'Designed the feedback loop architecture and data flow',
        initials: 'TM',
        accentColor: '#E8A030',
    },
    {
        id: '4',
        name: 'Team Member 4',
        countryCode: 'VN',
        countryName: 'Vietnam',
        role: 'Data & Research',
        contribution: 'Compiled ASEAN disaster preparedness research foundation',
        initials: 'TM',
        accentColor: '#6B8F8A',
    },
]
