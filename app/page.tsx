import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        free bread reviews
      </h1>
      <p className="mb-4">
        {`free bread reviews! we review free bread but sometimes we review bread (that's not free) for free, too.`} 
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
