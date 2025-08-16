import { Anchor, Button, Dialog } from 'tamagui'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  buttonName: string
}

export const RecordHappinessDialog = ({ open, onOpenChange, buttonName }: Props) => {
  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <Button 
          size="$5" 
          bg="#ec4899" 
          color="white"
          br="$6"
          fontWeight="bold"
          width="100%"
          pressStyle={{ bg: "#be185d" }}
        >
          {buttonName}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          bg="$shadow6"
          animation="slow"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
          bg="#fdf2f8"
          borderColor="#f9a8d4"
          borderWidth={2}
        >
          <Dialog.Title color="#831843">小さな幸せを記録</Dialog.Title>
          <Dialog.Description color="#be185d">今の気分は？</Dialog.Description>
          <Button bg="#ec4899" color="white">保存する</Button>
          <Dialog.Close asChild>
            <Button variant="outlined" borderColor="#f9a8d4" color="#be185d">キャンセル</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
