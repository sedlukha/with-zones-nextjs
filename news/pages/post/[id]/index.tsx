import Link from "next/link";

export default function Post({ params: { id } }) {
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/news">Back to blog</Link>
    </div>
  );
}
