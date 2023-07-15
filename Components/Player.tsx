'use client'

import useGetSongById from '@/hooks/useGetSongById'
import usePlayer from '@/hooks/usePlayer'
import PlayerContent from './PlayerContent'
import useLoadSongUrl from '@/hooks/useLoadSongUrl'

const Player = () => {
  const player = usePlayer()
  const { song } = useGetSongById(player.activeId)

  const songUrl = useLoadSongUrl(song!) //undefined

  if (!song || !songUrl || !player.activeId) {
    return null
  }
  return (
    <div
      className="
  fixed
  bottom-0
  bg-black
  w-full
  py-2
  h-[80px]
  px-4
  "
    >
      <PlayerContent
        key={songUrl} //see 4:21:00 of video
        song={song}
        songUrl={songUrl}
      />
      Player
    </div>
  )
}

export default Player
