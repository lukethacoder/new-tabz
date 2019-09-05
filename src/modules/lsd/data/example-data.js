import { uuidv4 } from '../helpers/helpers';

const firstProject = {
    id: uuidv4(),
    logo:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 488 512' class='svg-inline--fa fa-google fa-w-16 fa-3x'%3E%3Cpath fill='%23ffffff' d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z' class=''%3E%3C/path%3E%3C/svg%3E",
    brandColor: '#4285F4',
    title: 'First Project',
    dateLastWorkedOn: '2019-09-05',
    groups: [
        {
            id: uuidv4(),
            title: 'Handy Links',
            links: [
                {
                    id: uuidv4(),
                    icon: 'fab fa-google',
                    title: 'Google Search',
                    url: 'https://google.com.au'
                }
            ]
        }
    ]
};

export const projects = [firstProject, australianOlympicCommittee];
