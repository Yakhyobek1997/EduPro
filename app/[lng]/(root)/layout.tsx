import { ChildProps } from '@/types'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import RefreshModal from '@/components/modals/refresh.modal'
import AiButton from '@/components/shared/ai-button'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
			<RefreshModal />
			<AiButton />
		</div>
	)
}

export default Layout
