import Link from "next/link";

export default function Post() {
  return (
    <div>
      <h3>Post</h3>
      <p>Lorem ipsum</p>
      <Link href="/news">Back to news</Link>
    </div>
  );
}
