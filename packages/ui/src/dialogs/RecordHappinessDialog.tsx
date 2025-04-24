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
        <Button>{buttonName}</Button>
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
        >
          <Dialog.Title>Record Happiness</Dialog.Title>
          <Dialog.Description>How happy are you?</Dialog.Description>
          <Button>Submit</Button>
          <Dialog.Close asChild>
            <Button>閉じる</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
