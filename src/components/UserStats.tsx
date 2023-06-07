type UserNumberProps = {
  label: string
  number: number
}

export default function UserStats({ label, number }: UserNumberProps) {
  return (
    <div className="text-center">
      <span className="text-sm text-blue-600 dark:text-white leading-5 max-[450px]:text-lg">
        {label}
      </span>
      <p className="text-2xl font-bold leading-8">{number}</p>
    </div>
  )
}
