import React from 'react'
import MainLayout from '../components/MainLayout'
import BlogImage from '../assets/little-girl-glasses-blue-backpack-with-oranges-created-with-generative-ai-technology.webp'
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        category: 'Study Tips',
        title: '10 Proven Techniques to Improve Your Exam Scores',
        excerpt: 'Discover effective strategies and study habits that top students use to excel in their exams and reduce stress.',
        link: '/blog/10-proven-techniques-to-improve-your-exam-scores',
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        category: 'Career Guidance',
        title: 'Choosing the Right Career Path After Graduation',
        excerpt: 'Feeling lost after graduation? Our guide helps you explore options, understand your strengths, and make informed career decisions.',
        link: '/blog/post-2',
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        category: 'Student Life',
        title: 'Balancing Academics and Social Life: A Student’s Guide',
        excerpt: 'Learn how to effectively manage your time to succeed in your studies while also enjoying a healthy and fulfilling social life.',
        link: '/blog/post-3',
    },
];

// --- Reusable Blog Post Card Component ---
const BlogPostCard = ({ imageUrl, category, title, excerpt, link }) => (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
            <div className="flex-1">
                <p className="text-sm font-medium text-blue-600">{category}</p>
                <Link to={link} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{title}</p>
                    <p className="mt-3 text-base text-gray-500">{excerpt}</p>
                </Link>
            </div>
            <div className="mt-6">
                <Link to={link} className="font-semibold text-blue-600 hover:text-blue-500">
                    Read More &rarr;
                </Link>
            </div>
        </div>
    </div>
);

const Blogs = () => {
    return (
        <>
            <MainLayout>

                <section className="abt-page-bnr ">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={BlogImage} alt='about-us-img' />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-gray-50 py-12 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                From Our Blog
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                                Get the latest updates, articles, and insights from our expert team.
                            </p>
                        </div>
                        <div className="mx-auto mt-12 grid  gap-8 lg:max-w-none lg:grid-cols-3">
                            {blogPosts.map((post) => (
                                <BlogPostCard
                                    key={post.id}
                                    imageUrl={post.imageUrl}
                                    category={post.category}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    link={post.link}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

export default Blogs