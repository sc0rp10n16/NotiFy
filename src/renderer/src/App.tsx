import { Content, DraggableTopBar, NotePreviewList, RootLayout, Sidebar } from '@/components'
import { ActionButtonRow } from '@/components'

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-zinc-800/50">
          <ActionButtonRow className="flex justify-between" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}

export default App
