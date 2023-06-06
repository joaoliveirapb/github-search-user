import { AlertCircle } from 'lucide-react'

export default function Error() {
  return (
    <p className="flex justify-center gap-3 py-3 bg-red-600/30 text-red-500 rounded-2xl">
      <AlertCircle />
      User not found
    </p>
  )
}
