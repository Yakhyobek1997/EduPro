'use client'

import { ReactNode } from 'react'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog'

interface Props {
	onConfirm: () => void
	children: ReactNode
}

function ConfirmDeleteModal({ onConfirm, children }: Props) {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant={'destructive'} onClick={onConfirm}>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}

export default ConfirmDeleteModal
