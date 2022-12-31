import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiSolidity,
  SiGit,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('grey.300', 'orange.300')
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2016

  return (
    <Stack width={{ base: '100%', lg: '70%' }} spacing={{ base: 6, xl: 8 }}>
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What i do.
      </Heading>
      <Text variant="description">
        I`ve been working as a professional developer for the past two years. I
        specialize in designing,building and
        <Tooltip
          label="Ha!. {coding} "
          aria-label="Border joke?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> cooking </b>
          </Text>
        </Tooltip>
        user friendly decentralized applications (Dapps)
        <Tooltip
          label="probably nothing D_D (🧱, 🚀)"
          aria-label="WAGMI"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b> what you see is exactly what i create.</b>
          </Text>
        </Tooltip>{' '}
        <br /> <br />
        Here are a couple of the technologies I
        <Tooltip label="console.log((🧱, 🚀))" aria-label="log" hasArrow>
          <Text as="span" variant="emphasis">
            <b> utilize </b>
          </Text>
        </Tooltip>
        in my development.{' '}
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            Javascript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            Typescript
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAdobephotoshop} color={emphasis} fontSize="2em" />
            Photoshop
          </ListItem>

          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSolidity} color={emphasis} fontSize="2em" />
            Solidity
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiGit} color={emphasis} fontSize="2em" />
            Git
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See my full arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
