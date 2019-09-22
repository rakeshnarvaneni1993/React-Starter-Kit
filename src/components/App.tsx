import React from 'react';
import Test from './test';

import '../styles/index.css';

interface Details {
    accountNo: number
}

interface UserDetials {
    name: string;
    id: number;
    details: Details
}

class App extends React.PureComponent {

    state = {
        clicked: false
    };

    

    render() {
        console.log('calling render...')
        console.log(this.state);
        const userDetails: any = [
            {name: 'test1', id: 12, details: {accountNo: 12345}},
            {name: 'test2', id: 13, details: {accountNo: 123456}},
        ];
        return (
            <div>
                <h1>Hello World!</h1>
                {userDetails.map((user: any) => <Test users={user} />)}
            </div>
        );
    }
}

export default App;