import {Header} from "@/components/Header";
import {MarkdownToHtml} from "@/components/MarkdownToHtml";
import {getAllSimplePages, getSimplePageBySlug} from "@/lib/api";
import {GetStaticPaths} from "next";

export default async function Page({params}: {params: {slug: string}}) {
  const simplePage = getSimplePageBySlug(params.slug)
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <MarkdownToHtml content={simplePage.content} />
    </main>
  )
}

export const getStaticPaths = (async () => {
  const simplePages = getAllSimplePages()

  return {
    paths: simplePages.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}) satisfies GetStaticPaths