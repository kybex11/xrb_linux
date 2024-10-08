interface Place {
    id: number;
    name: string;
  }
  
  const GameInfo = ({ game }: { game: Place[] }) => {
    return (
      <>
        {game.map((game: Place) => (
          <div key={game.id}>
            <button className="game-button">{game.name}</button> ID: {game.id}
            <br /><br />
          </div>
        ))}
      </>
    );
  };
  
  export default GameInfo;