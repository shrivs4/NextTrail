import React from 'react'
type Props = {
    promise: Promise<Post[]>
}

export default async function UserPost({promise}:Props) {
    let post = await promise;

    const content = post?.map((post)=>{
        return(
            <article key={post?.id}>
                <h2>{post?.title}</h2>
                <p>{post?.body}</p>
                <br />
            </article>
        )
    })

  return content;
}
