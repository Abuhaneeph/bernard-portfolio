import { Link } from '@chakra-ui/react'

export type Company = 'Coinfundr' | 'Traveller'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Coinfundr: {
    name: 'Coinfundr',
    longName: 'Coinfundr Fund Raiser',
    subDetail: 'Fund Raising Agency',
    url: 'https://coinfundr.netlify.app/',
    position: 'Blockchain Developer',
    duration: 'August 2022 - December 2022',
    logo: {
      light: '/worked_at_logos/coinfundr/logo-light.png',
      dark: '/worked_at_logos/coinfundr/logo-dark.png',
    },
    roles: [
      <>
        Made it possible to send funds from the funders to the reciever through the blockchain, it was possible with{' '}
        <Link
          variant="primaryLink"
          href="https://wagmi.sh/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Wagmi Ethers
        </Link>{' '}
        .
      </>,
      <>
        I worked on integrating {' '}
        <Link
          variant="primaryLink"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          NFTs
        </Link>{' '}
        ,When Funders sends funds to the reciever ther are able to Mint an NFT
      </>,
      <>
        The idea is unique,I loved it when i heard the idea of the project,
        <Link
          variant="primaryLink"
          href="https://coinfundr.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Coinfundr
        </Link>{' '}
        I gave it my best made it more dynamic and flexible.
      </>,
    ],
  },
  Traveller: {
    name: 'Traveller',
    longName: 'Traveller Logistics',
    subDetail: 'Traveller Logistic and Transportation',
    url: 'https://traveller.com/',
    position: 'Blockchain Developer',
    duration: 'June 2022 - August 2022',
    logo: {
      light: '/worked_at_logos/traveller/traveller-light.png',
      dark: '/worked_at_logos/traveller/traveller-dark.png',
    },
    roles: [
      <>
        I was  succesful to have built a smart contract that Helps calculate the total amount to be paid with the help of Chainlink.
      </>,
      <>
        I worked on integrating {' '}
        <Link
          variant="primaryLink"
          href="https://chain.link/"
          target="_blank"
          rel="noreferrer"
        >
          Chainlink
        </Link>{' '}
        used the best decentralized APIs.
      </>,
      <>
        I worked with the front-end Developer in making use of
        <Link
          aria-label="Braze"
          href="https://maps.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Google Map.
        </Link>{' '}
        from the ground up.
      </>,
      <>
        Since i had basic knowledge on Design i was able to work with the design team to give the best
        <Link
          aria-label="Braze"
          href="https://"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          UserInterface & UserExpeerience.
        </Link>{' '}
      </>,
    ],
  },
}

export const ExperiencesList = [Experiences.Coinfundr, Experiences.Traveller]
