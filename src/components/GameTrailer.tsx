import useVideo from "@/hooks/useVideo";

interface props {
  gameId: number;
}
const GameTrailer = ({ gameId }: props) => {
  const { data, isLoading, error } = useVideo(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    ></video>
  );
};

export default GameTrailer;
