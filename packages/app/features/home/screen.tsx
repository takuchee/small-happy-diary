import {
  H1,
  H2,
  YStack,
  FooterNav,
  Card,
  CardHeader,
  CardFooter,
  Button,
  Text,
  RecordHappinessDialog,
} from '@my/ui'
import { useState } from 'react'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  const [showDialog, setShowDialog] = useState(false)
  const linkTarget = pagesMode ? '/pages-example-user' : '/user'
  const linkProps = useLink({
    href: `${linkTarget}/nate`,
  })

  return (
    <YStack flex={1} justify="center" items="center" gap="$8" p="$4" bg="$background">
      <Card>
        <Card.Header>
          <Text>今月の幸せメモリ</Text>
          <H1>0</H1>
        </Card.Header>
      </Card>
      {/* 真ん中: キャラクターとセリフ */}
      <Card elevate size="$4" bordered>
        <Card.Header padded>
          <YStack>
            <YStack width={120} height={120}>
              <Text fontSize={60}>😊</Text>
              <Text>今日も偉い！！</Text>
            </YStack>
            {/* <Text textAlign="center" fontSize="$5" fontWeight="500" color="$pink11">
              {praise}
            </Text> */}
          </YStack>
        </Card.Header>
      </Card>
      <RecordHappinessDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        buttonName="小さな幸せを記録する"
      />
      <FooterNav />
    </YStack>
  )
}
