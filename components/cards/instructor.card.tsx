import { IUser } from '@/app.types'
import Link from 'next/link'
import CustomImage from '../shared/custom-image'

interface Props {
	instructor: IUser
}
function InstructorCard({ instructor }: Props) {
	return (
		<Link href={`/instructors/${instructor.clerkId}`}>
			<div className='flex flex-col space-y-1'>
				<div className='relative h-72 w-full'>
					<CustomImage
						src={instructor.picture}
						alt={instructor.fullName}
						className='rounded-md'
					/>
				</div>
				<h1 className='font-space-grotesk text-2xl font-bold'>
					{instructor.fullName}
				</h1>
				<div className='font-medium text-muted-foreground'>
					{instructor.job}
				</div>
			</div>
		</Link>
	)
}

export default InstructorCard
