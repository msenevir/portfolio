import { BlogPosts } from "@/app/components/posts";

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                mahen seneviratne's portfolio
            </h1>
            <p className="mb-4">
                {`computer science enthusiast specializing in secure distributed systems. outside of work, i focus on photography as another way of seeing and framing the world.`}
            </p>
            <h2 className="mb-2 text-lg font-semibold tracking-tighter">
                recent blog posts
            </h2>
            <div className="my-4">
                <BlogPosts />
            </div>
        </section>
    );
}
