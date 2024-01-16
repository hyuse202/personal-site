import Link from 'next/link'
import { BsYoutube } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <div className="mb-[20px] mt-[60px] block minxs:flex max-w-full overflow-y-auto">
        <p className="text-md notranslate">
          &copy;&ensp;{new Date().getFullYear()}&thinsp;Ayl&thinsp;Rose
          rights reserved.
        </p>
        <div className="flex-1"></div>
        <div className="text-md">
          <Link
            // alt="Link of araxyso's github home page (open in new tab)"
            className=" text-gray-500 hover:text-gray-900 dark:hover:text-white transition items-center inline-flex"
            target="_blank"
            href="https://www.youtube.com/channel/UC9ca2OM1EuV6kw_ZJL91KGA"
          >
            <BsYoutube />
            &thinsp;Youtube
          </Link>
        </div>
      </div>
    </footer>
  );
}