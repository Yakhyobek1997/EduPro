import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'} className='flex items-center gap-2'>
			<Image src={'/main_logo.png'} alt='logo' width={50} height={50} />
			<h1 className='font-space-grotesk text-4xl font-bold'>YaGu</h1>
		</Link>
	)
}

export default Logo
