import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        free bread reviews
      </h1>
      <p className="mb-4">
        {`free bread reviews. we review free bread and we review bread for free.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
