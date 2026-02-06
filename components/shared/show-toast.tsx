import { toast } from 'react-hot-toast'
import { ToastMessage, ToastType } from './toast-message'

export function showToast(type: ToastType, message: string, options?: { id?: string; duration?: number }) {
  return toast.custom(() => <ToastMessage type={type} message={message} />, options)
}
