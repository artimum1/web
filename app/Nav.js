import Link from "next/link";

export default function Nav(){
    return(
    <div className="nav">
        <Link className="navs" href="/">Home</Link>
        <Link className="navs" href="/About">About</Link>
        <Link className="navs" href="/Works">Works</Link>
    </div>
    )
}