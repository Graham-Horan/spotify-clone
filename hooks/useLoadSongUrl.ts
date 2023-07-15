import { Song } from "@/types"
import { useSupabaseClient } from "@supabase/auth-helpers-react"

const useLoadSongUrl = (song: Song) => {
    const supabaseClient = useSupabaseClient()//Watch @ 4:13.30

    if (!song){
    return ''
}

const { data: songData } = supabaseClient
.storage
.from('songs')
.getPublicUrl(song.song_path)

return songData.publicUrl
}

export default useLoadSongUrl