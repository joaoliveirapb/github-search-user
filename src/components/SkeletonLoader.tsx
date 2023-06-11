import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SkeletonLoader() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>()

  useEffect(() => {
    const htmlTagClasses = document.documentElement.classList.contains('dark')
    if (htmlTagClasses) {
      setIsDarkTheme(true)
    } else {
      setIsDarkTheme(false)
    }
    console.log(isDarkTheme)
  }, [isDarkTheme])

  return (
    <section className="flex gap-7 p-12 bg-slate-100 dark:bg-blue-700 rounded-2xl shadow-lg shadow-zinc-900/10 dark:shadow-blue-600/20 max-sm:flex-col">
      <div className="max-sm:flex max-sm:justify-center">
        <div className="h-[120px] w-[120px] rounded-full max-sm:w-36 max-sm:h-36">
          {isDarkTheme ? (
            <Skeleton
              circle={true}
              height={120}
              width={120}
              baseColor="#141D2F"
              highlightColor="#504f4f"
            />
          ) : (
            <Skeleton circle={true} height={120} width={120} />
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-5">
          <div className="max-w-[65%] max-sm:text-center">
            {isDarkTheme ? (
              <>
                <Skeleton
                  width={200}
                  height={30}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
                <Skeleton
                  width={100}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
              </>
            ) : (
              <>
                <Skeleton width={200} height={30} />
                <Skeleton width={100} />
              </>
            )}
          </div>
          <span>
            {isDarkTheme ? (
              <Skeleton
                width={150}
                baseColor="#141D2F"
                highlightColor="#504f4f"
              />
            ) : (
              <Skeleton width={150} />
            )}
          </span>
        </div>
        <p className="mt-5 mb-8 max-sm:text-center">
          {isDarkTheme ? (
            <Skeleton baseColor="#141D2F" highlightColor="#504f4f" />
          ) : (
            <Skeleton />
          )}
        </p>
        <div className="flex justify-between py-4 px-8 bg-slate-300 dark:bg-blue-950 rounded-lg max-[450px]:flex-col max-[450px]:gap-3">
          <div className="text-center">
            <span>
              {isDarkTheme ? (
                <Skeleton
                  width={100}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={100} />
              )}
            </span>
            <p>
              {isDarkTheme ? (
                <Skeleton
                  width={50}
                  height={23}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={50} height={23} />
              )}
            </p>
          </div>
          <div className="text-center">
            <span>
              {isDarkTheme ? (
                <Skeleton
                  width={100}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={100} />
              )}
            </span>
            <p>
              {isDarkTheme ? (
                <Skeleton
                  width={50}
                  height={23}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={50} height={23} />
              )}
            </p>
          </div>
          <div className="text-center">
            <span>
              {isDarkTheme ? (
                <Skeleton
                  width={100}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={100} />
              )}
            </span>
            <p>
              {isDarkTheme ? (
                <Skeleton
                  width={50}
                  height={23}
                  baseColor="#1E2A47"
                  highlightColor="#504f4f"
                />
              ) : (
                <Skeleton width={50} height={23} />
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5 max-[450px]:flex-col max-[450px]:gap-4">
          <div className="flex flex-col gap-4">
            {isDarkTheme ? (
              <>
                <Skeleton
                  width={220}
                  height={20}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
                <Skeleton
                  width={220}
                  height={20}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
              </>
            ) : (
              <>
                <Skeleton width={220} height={20} />
                <Skeleton width={220} height={20} />
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {isDarkTheme ? (
              <>
                <Skeleton
                  width={220}
                  height={20}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
                <Skeleton
                  width={220}
                  height={20}
                  baseColor="#141D2F"
                  highlightColor="#504f4f"
                />
              </>
            ) : (
              <>
                <Skeleton width={220} height={20} />
                <Skeleton width={220} height={20} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
