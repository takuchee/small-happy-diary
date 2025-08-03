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
    <YStack flex={1} jc="space-between" ai="center" p="$4" bg="$background">
      {/* Top: Character dialogue */}
      <YStack width="100%" ai="center" pt="$8">
        <Text fontSize="$8" fontWeight="bold" color="pink" mb="$4">
          幸せ日記
        </Text>
        <Card elevate size="$4" bordered bg="#fce7f3" borderColor="#f9a8d4">
          <Card.Header padded>
            <YStack ai="center" gap="$2">
              <YStack width={80} height={80} ai="center" jc="center">
                <Text fontSize={50}>😊</Text>
              </YStack>
              <Text ta="center" fontSize="$4" color="#831843">
                今日の小さな幸せ、見つけましたか？
              </Text>
            </YStack>
          </Card.Header>
        </Card>
      </YStack>

      {/* Middle: Monthly count */}
      <YStack ai="center" gap="$2">
        <Card bg="#fdf2f8" borderColor="#f3e8ff" bordered>
          <Card.Header padded>
            <YStack ai="center" gap="$2">
              <Text fontSize="$5" color="#831843">今月の小さな幸せ：3件</Text>
              <Text fontSize="$6">✨</Text>
            </YStack>
          </Card.Header>
        </Card>
      </YStack>

      {/* Bottom: Record button */}
      <YStack width="100%" pb="$8">
        <RecordHappinessDialog
          open={showDialog}
          onOpenChange={setShowDialog}
          buttonName="日記を書く"
        />
      </YStack>
      
      <FooterNav />
    </YStack>
  )
}
