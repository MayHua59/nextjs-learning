import Link from "next/link"

export default function Home(){
    return <div>
        <Link href={"/knowledge-base/getting-started/installation"}>Installing</Link>
        <Link href={"/knowledge-base/advanced-topics/security/best-practices"}>Best Practices</Link>
    </div>
}