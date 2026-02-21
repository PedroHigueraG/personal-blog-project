import { createPost } from "./actions"

export default function NewPostPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  py-32 px-16  sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
                    New Post
                </h1>

                <form action={createPost} className="space-y-6 w-full mt-10">

                    <div className="">
                        <label className="block mb-2 font-medium">Title</label>
                        <input
                            name="title"
                            type="text"
                            required
                            className="w-full border p-2 rounded"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Content (Markdown)</label>
                        <textarea
                            name="content"
                            rows={12}
                            required
                            className="w-full border p-2 rounded font-mono"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-4 py-2 rounded"
                    >
                        Create
                    </button>
                </form>
            </main>
        </div>
    )
}