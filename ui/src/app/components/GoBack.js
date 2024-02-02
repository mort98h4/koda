import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export function GoBack({href}) {
    return (
        <Link href={href} className='text-sm hover:underline'>
            <FontAwesomeIcon className='mr-2' icon={faArrowLeft} />
            Go back
        </Link>
    )
}