
const allUsersData = [
    {
        id: 1,
        name: 'Jewell',
        bio: 'I am a Software Developer',
        skills: ['JavaScript', 'ReactJS','MaterialUI'],
        links: [
            {name: 'Facebook', link: 'https://github.com/mdajgarhossain'},
            {name: 'Github', link: 'https://github.com/mdajgarhossain'},
            {name: 'Twitter', link: 'https://github.com/mdajgarhossain'},
            {name: 'Linkedin', link: 'https://github.com/mdajgarhossain'},
            {name: 'Reddit', link: 'https://github.com/mdajgarhossain'}
        ]
    },
    {
        id: 2,
        name: 'Ajgar',
        bio: 'I am a React Developer',
        skills: ['JavaScript', 'ReactJS','MaterialUI', 'NodeJS', 'MySQL'],
        links: [
            {name: 'Facebook', link: 'https://github.com/mdajgarhossain'},
            {name: 'Github', link: 'https://github.com/mdajgarhossain'},
            {name: 'Twitter', link: 'https://github.com/mdajgarhossain'},
            {name: 'Linkedin', link: 'https://github.com/mdajgarhossain'},
            {name: 'Reddit', link: 'https://github.com/mdajgarhossain'}
        ]
    },
    {
        id: 3,
        name: 'Hossain',
        bio: 'I am a Javascript Developer',
        skills: ['JavaScript', 'ReactJS','MaterialUI', 'NodeJS'],
        links: [
            {name: 'Facebook', link: 'https://github.com/mdajgarhossain'},
            {name: 'Github', link: 'https://github.com/mdajgarhossain'},
            {name: 'Twitter', link: 'https://github.com/mdajgarhossain'},
            {name: 'Linkedin', link: 'https://github.com/mdajgarhossain'},
            {name: 'Reddit', link: 'https://github.com/mdajgarhossain'}
        ]
    }
];

export const fetchData = (id) => {
    return allUsersData.find(data => data.id === id);
};

export default allUsersData;