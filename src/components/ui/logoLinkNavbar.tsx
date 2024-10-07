import Image from "next/image"
import Link from "next/link"

import PropTypes from 'prop-types'

const LogoLinkNavbar = (props: any) => {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href='/' className="flex items-center gap-2 text-lg font-semibold">
        <Image src={props.imgSrc} alt={props.imgAlt} width={props.size} height={props.size} />
        <span>{props.title}</span>
      </Link>
    </div>
  )
}

LogoLinkNavbar.defaultProps = {
  imgSrc: '/logo.png',
  imgAlt: 'ShinaTokan',
  size: 30,
  title: 'ShinaTokan'
}

LogoLinkNavbar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default LogoLinkNavbar
