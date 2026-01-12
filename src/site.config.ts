import { withBase } from "./utils/helpers";

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    eyebrowText?: string;
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type About = {
    title?: string;
    text?: string;
};

export type ContactInfo = {
    title?: string;
    text?: string;
    email?: {
        text?: string;
        href?: string;
        email?: string;
    };
    socialProfiles?: {
        text?: string;
        href?: string;
    }[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    about?: About;
    contactInfo?: ContactInfo;
    subscribe?: Subscribe;
    postsPerPage?: number;
    recentPostLimit: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Krishna',
    description: 'Not tutorials. Not motivation. Just real experiments, technical notes, and things I built while figuring stuff out.',
    image: {
        src: 'krishnaprofile.png', // Replace with actual image later
        alt: 'Krishna Ethamukkala - Blog by Krishna Ethamukkala'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: withBase('/')
        },
        {
            text: 'Blog',
            href: withBase('/blog')
        },
        {
            text: 'Projects',
            href: withBase('/projects')
        },
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: withBase('/about')
        },
        {
            text: 'Contact',
            href: withBase('/contact')
        },
        {
            text: 'RSS Feed',
            href: withBase('/rss.xml')
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/'
        }
    ],
    hero: {
        eyebrowText: 'Founder of KHC',
        title: 'Krishna Ethamukkala',
        text: "I build things. Sometimes they work. Sometimes they don't. But I keep building.by Krishna Ethamukkala.",
        image: {
            src: '/assets/images/hero-image.jpg', // Replace with actual image later
            alt: 'Mumbai cityscape illustration'
        },
        actions: [
            {
                text: 'Read Stories',
                href: withBase('/blog')
            },
            {
                text: 'Subscribe',
                href: '#subscribe'
            }
        ]
    },
    about: {
        title: 'About Krishna Ethamukkala',
        text: "Krishna Ethamukkala is a writer from India, sharing short and medium-length stories about the vibrant lives of Mumbai's people. His writing blends humor, wit, and surprise, making every story a delightful journey. For the past three years, Samay has captured the essence of Mumbai, one story at a time."
    },
    contactInfo: {
        title: 'Get In Touch',
        text: "Have a question, suggestion, or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out through any of the channels below:",
        email: {
            text: "Drop me an email and I'll do my best to respond as soon as possible.",
            href: "mailto:ekrishnachaitanya2004@gmail.com",
            email: "ekrishnachaitanya2004@gmail.com"
        },
        socialProfiles: [
            {
                text: "GitHub",
                href: "https://github.com/"
            },
            {
                text: "LinkedIn",
                href: "https://linkedin.com/"
            },
            {
                text: "Twitter",
                href: "https://twitter.com/"
            },
            {
                text: "Instagram",
                href: "https://instagram.com/"
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Krishna Ethamukkala',
        text: 'Get the latest tales, struggles and wins, in your inbox. One story per week. 💖',
        formUrl: '#'
    },
    postsPerPage: 10,
    recentPostLimit: 3
};

export default siteConfig;
