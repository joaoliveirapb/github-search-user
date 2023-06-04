import Image from 'next/image'
import { Building, Link, MapPin, Search, Sun, Twitter } from 'lucide-react'
import ProfilePicGH from '../assets/github.png'

export default function Home() {
  return (
    <div className="min-w-[730px] py-7">
      <header className="flex items-center justify-between py-1">
        <h1 className="text-[26px] font-bold">devfinder</h1>
        <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[2.5px]">
          light
          <Sun size={20} />
        </button>
      </header>
      <main className="mt-4 space-y-6">
        <section className="relative flex">
          <Search
            size={28}
            className="absolute text-blue-500 top-1/2 translate-y-[-50%] left-6"
          />
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="w-full py-5 pl-20 pr-28 bg-blue-700 rounded-2xl placeholder:text-white focus:outline-none"
          />
          <button className="absolute top-1/2 translate-y-[-50%] right-[10px] py-3 px-4 bg-blue-500 rounded-lg transition-colors hover:bg-blue-800">
            Search
          </button>
        </section>
        <section className="flex gap-7 p-12 bg-blue-700 rounded-2xl shadow-lg shadow-blue-500/20">
          <div>
            <Image src={ProfilePicGH} alt="Foto de perfil do Octocat" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold leading-9">The Octocat</h1>
                <span className="text-blue-500">@octocat</span>
              </div>
              <span className="text-sm">Joined 25 Jan 2011</span>
            </div>
            <p className="mt-5 mb-8 text-zinc-400 text-sm">
              This profile has no bio
            </p>
            <div className="flex justify-between py-4 px-8 bg-blue-950 rounded-lg">
              <div>
                <span className="text-sm leading-5">Repos</span>
                <p className="text-2xl font-bold leading-8">8</p>
              </div>
              <div>
                <span className="text-sm leading-5">Followers</span>
                <p className="text-2xl font-bold leading-8">9375</p>
              </div>
              <div>
                <span className="text-sm leading-5">Following</span>
                <p className="text-2xl font-bold leading-8">9</p>
              </div>
            </div>
            <div className="flex gap-24 mt-5">
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-3 text-sm">
                  <MapPin size={22} />
                  San Francisco
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Link size={22} />
                  https://github.blog
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-3 text-sm">
                  <Twitter size={22} />
                  Not Available
                </p>
                <p className="flex items-center gap-3 text-sm">
                  <Building size={22} />
                  @github
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
