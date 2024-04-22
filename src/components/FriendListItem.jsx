// import "../friends.json";

const FriendListItem = (friends) => {
  return (
    <div>
      <img src={friends.avatar} alt={friends.name} width="48" />
      <p>{friends.name}</p>
      <p>{friends.isOnline}</p>
    </div>
  );
};

export default FriendListItem;
