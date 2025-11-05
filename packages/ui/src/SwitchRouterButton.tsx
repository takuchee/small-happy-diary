import { Button, YStack, Text } from 'tamagui'
import { Link } from 'solito/link'

interface SwitchRouterButtonProps {
  title: string
  linkText: string
  href: string
}

export const SwitchRouterButton = ({ title, linkText, href }: SwitchRouterButtonProps) => {
  return (
    <YStack alignItems="center" space="$2">
      <Text>{title}</Text>
      <Link href={href}>
        <Button>{linkText}</Button>
      </Link>
    </YStack>
  )
}
