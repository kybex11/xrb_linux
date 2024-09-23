interface Place {
    id: number;
    name: string;
  }
  
  const GameInfo = ({ game }: { game: Place[] }) => {
    return (
      <>
        {game.map((game: Place) => (
          <div key={game.id}>{game.name}</div>
        ))}
      </>
    );
  };
  
  export default GameInfo;