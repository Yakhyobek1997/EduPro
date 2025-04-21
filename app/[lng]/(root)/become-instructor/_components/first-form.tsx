import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useTranslate from '@/hooks/use-translate'
import { basicInstructorSchema } from '@/lib/validation'
import { useUser } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

interface Props {
	onHandler: (values: z.infer<typeof basicInstructorSchema>) => Promise<void>
}
function FirstForm({ onHandler }: Props) {
	const { user } = useUser()
	const t = useTranslate()

	const form = useForm<z.infer<typeof basicInstructorSchema>>({
		resolver: zodResolver(basicInstructorSchema),
		defaultValues: {},
	})

	const onSubmit = (values: z.infer<typeof basicInstructorSchema>) => {
		const promise = onHandler(values)

		toast.promise(promise, {
			loading: t('loading'),
			success: t('successfully'),
			error: t('error'),
		})
	}

	useEffect(() => {
		if (user) {
			form.setValue('email', user.emailAddresses[0].emailAddress)
			form.setValue('name', user.fullName!)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='mt-4 space-y-3'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t('emailAddress')} <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='example@sammi.ac'
									disabled={true}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t('fullName')} <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='Abdul Sami'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								{t('mobilePhone')} <span className='text-red-500'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									{...field}
									className='bg-primary/10'
									placeholder='0300-1234567'
									type='number'
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button className='w-fit' type='submit' size={'sm'}>
					<span>{t('nextStep')}</span>
				</Button>
			</form>
		</Form>
	)
}

export default FirstForm
