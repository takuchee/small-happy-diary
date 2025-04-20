import { H2, YStack, FooterNav, Card, CardHeader, CardFooter } from '@my/ui'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <h1>Home Screen</h1>
      <Card className="w-[300px]">
        <CardHeader>
          <H2>カードのタイトル</H2>
        </CardHeader>

        {/* <CardContent>
          <p>カードの内容がここに入ります。</p>
        </CardContent> */}

        <CardFooter>
          <button>アクション</button>
        </CardFooter>
      </Card>
      <FooterNav />
    </YStack>
  )
}
