import Image from 'next/image'
import { UserProps } from '@/types/user'
import { MapPin, Link, Twitter, Building } from 'lucide-react'
import dayjs from 'dayjs'
import UserStats from './UserStats'
import UserAdditionalInfos from './UserAdditionalInfos'

export default function UserDetails({
  avatar_url,
  name,
  login,
  created_at,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
  twitter_username,
  company,
}: UserProps) {
  return (
    <section className="flex gap-7 p-12 bg-blue-700 rounded-2xl shadow-lg shadow-blue-500/20">
      <div>
        <Image
          src={avatar_url}
          width={120}
          height={120}
          alt={`Foto de perfil do(a) ${name}`}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="max-w-[65%]">
            <h1 className="text-2xl font-bold leading-9">{name}</h1>
            <span className="text-blue-500">@{login}</span>
          </div>
          <span className="text-sm capitalize">
            Joined {dayjs(created_at).format('DD MMM YYYY')}
          </span>
        </div>
        <p
          className={`mt-5 mb-8 text-sm ${
            bio === null ? 'text-zinc-400' : 'text-white'
          }`}
        >
          {bio === null ? 'This profile has no bio' : bio}
        </p>
        <div className="flex justify-between py-4 px-8 bg-blue-950 rounded-lg">
          <UserStats label="Repositories" number={public_repos} />
          <UserStats label="Followers" number={followers} />
          <UserStats label="Following" number={following} />
        </div>
        <div className="flex justify-between mt-5">
          <div className="flex flex-col gap-4">
            <UserAdditionalInfos icon={<MapPin size={22} />} info={location} />
            <UserAdditionalInfos icon={<Link size={22} />} info={blog} />
          </div>
          <div className="flex flex-col gap-4">
            <UserAdditionalInfos
              icon={<Twitter size={22} />}
              info={twitter_username}
            />
            <UserAdditionalInfos icon={<Building size={22} />} info={company} />
          </div>
        </div>
      </div>
    </section>
  )
}
