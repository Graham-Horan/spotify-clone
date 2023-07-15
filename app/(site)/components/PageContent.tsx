'use client'

import SongItem from '@/Components/SongItem'
import { Song } from '@/types'
import useOnPlay from '@/hooks/useOnPlay'

interface PageContentProps {
  songs: Song[]
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const onPlay = useOnPlay(songs)

  return (
    <div
      className="
    grid
    grid-cols-3
    sm:grid-cols-3
    md-grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-8
    gap-4
    mt-4
    "
    >
      {songs.map((item) => (
        <SongItem
          onClick={(id: string) => onPlay(id)} // call onplay and pass it an id
          key={item.id}
          data={item}
        />
      ))}
    </div>
  )
}
export default PageContent
