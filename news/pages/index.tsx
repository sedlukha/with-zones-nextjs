import Link from "next/link";

export default function News() {
  return (
    <div>
      <h3>This is our news</h3>
      <ul>
        <li>
          <Link href="/post/1">Post 1</Link>
        </li>
        <li>
          <Link href="/post/2">Post 2</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </div>
  );
}
