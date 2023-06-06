type UserNumberProps = {
  label: string
  number: number
}

export default function UserStats({ label, number }: UserNumberProps) {
  return (
    <div className="text-center">
      <span className="text-sm leading-5">{label}</span>
      <p className="text-2xl font-bold leading-8">{number}</p>
    </div>
  )
}
