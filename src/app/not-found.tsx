import Link from "next/link";

export default function NotFound(){
    return <div>
        <h1>PAGE nOT found</h1>
        <Link href={'/'}>Back to Home</Link>
    </div>
}