import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
  FaBehance,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/Bernard_O1',
    icon: FaTwitter,
  },

  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bernard-o-76606a247',
    icon: FaLinkedin,
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/bernardonuh',
    icon: FaBehance,
  },
  {
    label: 'Github',
    href: 'https://github.com/BernardOnuh/BernardOnuh',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/bernardonuh',
    icon: FaDev,
  },
]
