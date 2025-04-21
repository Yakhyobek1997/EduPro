import BlogCard from '@/components/cards/blog.card'
import TopBar from '@/components/shared/top-bar'
import { getBlogs } from '@/service/blogs.service'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Praktikum | Bloglar',
	description:
		'Bloglarimizda dasturlash, dizayn, marketing, startup loyihalari va boshqa mavzular haqida maqolalar va yangiliklar.',
}
async function Page() {
	const blogs = await getBlogs()

	return (
		<>
			<TopBar label='blogs' description='blogsDescription' />
			<div className='container mx-auto max-w-6xl'>
				<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
					{blogs.map(blog => (
						<BlogCard key={blog.slug} {...blog} />
					))}
				</div>
			</div>
		</>
	)
}

export default Page
