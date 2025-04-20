import { YStack, FooterNav } from '@my/ui'
import { useLink } from 'solito/navigation'

export function SettingScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <h1>Setting Screen</h1>
      <FooterNav />
    </YStack>
  )
}
