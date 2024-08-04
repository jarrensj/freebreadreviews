import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'free bread reviews',
  description: 'free bread reviews',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog</h1>
      <BlogPosts />
    </section>
  )
}
