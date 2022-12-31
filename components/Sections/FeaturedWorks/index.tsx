import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Take a look at some of the work I`ve done in the areas of freelancing,
        open source, corporate projects, and even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="NFT Mintinting contract"
            src="/works/nft-logo.png"
            description="NFT MINTING contract , This is a contract that helps mint NFTs (Non Fungible Tokens) which could be art works or certificate ."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/BernardOnuh/BernardOnuh"
            objectPosition="center"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Blockchain Tramsaction"
            description="A Decentralized way to tansfer funds between individuals through the blockchain. You Can send Funds all round the world with low charge"
            src="/works/sending.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com//BernardOnuh/BernardOnuh"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Coinfundr"
            description="Coinfundr is a decentralized crownfunding Dapp(Decentralized Application). You can create a crownfunding for yorselve and also donate to the Crownfunders."
            src="/works/coin.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/BernardOnuh/BernardOnuh"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Traveller"
            description="Traveller is a web3  based logistic project  it helps connect drivers and passengers together.."
            src="/works/Traveller.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/BernardOnuh/BernardOnuh\"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
