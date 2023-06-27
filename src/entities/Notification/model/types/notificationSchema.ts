import { Notification } from './notification'

export interface NotificationSchema {
  isLoading: boolean
  error?: string
  data?: Notification
}
