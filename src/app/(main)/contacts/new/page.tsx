'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { createContact } from '@/actions/actions'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Sidebar } from '@/components/Sidebar'
import toast from 'react-hot-toast'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  imageUrl: z.string().url('Invalid image URL'),
  notes: z.string().optional()
})

export default function NewContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D03AQGF6VjIJLtoUQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1715308238190?e=1739404800&v=beta&t=q4WWkvpxwdr6wGE1DHVhsoBg57qnuq1TFvSsR2yaBk4',
      notes: ''
    }
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const result = await createContact(values)

    if (result.success) {
      // Redirect to the contacts list or show a success message
      setLoading(false)
      toast.success('Contact created successfully:')
      router.push('/contacts')
    } else {
      setLoading(false)
      // Show an error message
      toast.error('Failed to create contact:')
      console.error('Failed to create contact:', result.error)
    }
  }

  return (
    <>
      <Sidebar count={0} />
      <main className='ml-64 flex-1'>
        <div className='mx-auto max-w-2xl p-6'>
          <h1 className='mb-6 text-2xl font-semibold'>Create New Contact</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='John Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type='email'
                        placeholder='john@example.com'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='phone'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder='+1234567890' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='imageUrl'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='https://example.com/image.jpg'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='notes'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Input placeholder='Additional notes...' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button disabled={loading} type='submit' className='w-full'>
                {loading ? 'Creating....' : 'Create Contact'}
              </Button>
            </form>
          </Form>
        </div>
      </main>
    </>
  )
}