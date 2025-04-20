import { Tabs, Group, YStack } from 'tamagui'
import { useRouter, usePathname } from 'next/navigation'

const routes = [
  { label: 'ホーム', value: '/', icon: 'home' },
  { label: '一覧', value: '/list', icon: 'list' },
  { label: '設定', value: '/setting', icon: 'setting' },
]

export const FooterNav = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <YStack
      position="fixed"
      style={{
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '$background',
        zIndex: 100,
        borderTopWidth: 1,
        borderColor: '$borderColor',
      }}
    >
      <Tabs
        value={pathname}
        onValueChange={(val) => {
          if (val !== pathname) router.push(val)
        }}
        flexDirection="row"
      >
        <Tabs.List disablePassBorderRadius width="100%">
          {routes.map((item) => (
            <Tabs.Tab key={item.value} value={item.value} flex={1}>
              {item.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
    </YStack>
  )
}
