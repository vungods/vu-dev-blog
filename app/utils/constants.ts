import BlogPostInterface from '../interfaces/BlogPost'

export const MOCK_DATA: BlogPostInterface[] = [
  {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post. It provides an overview of the topic discussed.',
    image: 'https://via.placeholder.com/250',
    date: '2024-05-01'
  },
  {
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post. It delves into more advanced topics and insights.',
    image: 'https://via.placeholder.com/150',
    date: '2024-05-02'
  },
  {
    title: 'Book Review: The Great Gatsby',
    content: 'This is a review of "The Great Gatsby". It covers the plot, themes, and critical analysis of the book.',
    image: 'https://via.placeholder.com/150',
    date: '2024-04-28'
  },
  {
    title: 'Book Review: To Kill a Mockingbird',
    content: 'This is a review of "To Kill a Mockingbird". It discusses the storyline, characters, and the impact of the book.',
    image: 'https://via.placeholder.com/150',
    date: '2024-04-29'
  },
  {
    title: 'My Development Experience',
    content: 'This post shares personal experiences and lessons learned during a development project.',
    image: 'https://via.placeholder.com/150',
    date: '2024-05-10'
  },
  {
    title: 'Learning JavaScript',
    content: 'This post covers the basics and advanced concepts of JavaScript programming.',
    image: 'https://via.placeholder.com/150',
    date: '2024-05-15'
  },
];

export const tutorialsOptions = [
  { label: 'Amazon Web Services', href: 'amazon-web-services' },
  { label: 'System Design', href: 'system-design' },
  { label: 'Web Development', href: 'web-development' },
  { label: 'Software Engineering', href: 'software-engineering' },
  { label: 'Cloud Computing', href: 'cloud-computing' }, 
  { label: 'Networking', href: 'networking' },
  { label: 'Databases', href: 'databases' },
  { label: 'Artificial Intelligence', href: 'artificial-intelligence' },
  { label: 'Machine Learning', href: 'machine-learning' },
  { label: 'Computer Vision', href: 'computer-vision' },
];


export const mmoOptions = [
  { label: 'Make Money: Youtube', href: 'mmo-youtube' },
  { label: 'Make Money: Tiktok', href: 'mmo-tiktok' },
];
