import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

import PropTypes from 'prop-types'

const AvatarHeader = (props: any)=> {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'} size={'icon'} className={'rounded-full'}>
          <Avatar>
            <AvatarImage src={props.avatarImgSrc} alt ={props.avatarImgAlt} />
            <AvatarFallback delayMs={1000}>{props.avatarFallback}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <h1>{props.nickname}</h1>
          <span className="text-xs text-muted-foreground">{props.email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

AvatarHeader.propTypes = {
  avatarImgSrc: PropTypes.string.isRequired,
  avatarImgAlt: PropTypes.string.isRequired,
  avatarFallback: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default AvatarHeader;
