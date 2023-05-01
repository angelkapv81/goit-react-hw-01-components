import logo from "./logo.svg";
import "./App.css";

import user from "./Data/user.json";
import data from "./Data/data.json";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";

import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;
