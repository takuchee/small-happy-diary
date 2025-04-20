import { Button, H1, YStack, FooterNav } from '@my/ui'
import { useLink } from 'solito/navigation'

export function ListScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <H1>list Screen</H1>
      <Button>List</Button>
      <FooterNav />
    </YStack>
  )
}
