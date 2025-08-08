import { Button, H1, YStack, FooterNav } from '@my/ui'

export function ListScreen({ pagesMode = false }: { pagesMode?: boolean }) {

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <H1>list Screen</H1>
      <Button>List</Button>
      <FooterNav />
    </YStack>
  )
}
