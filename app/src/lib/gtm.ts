const wndw: any = window as any

export const track = (data: {
  event: string // customEvent
  eventCategory: string // Form
  eventAction: string // Submit RSVP form
}) => {
  wndw.dataLayer = wndw.dataLayer || []
  wndw.dataLayer.push(data)
}
