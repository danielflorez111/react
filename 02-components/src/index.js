import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail
                    author="Laura"
                    timeAgo="Today at 4:45PM"
                    content="Great"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                Are you sure you want to do this?
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Daniel"
                    timeAgo="Today at 2:00AM"
                    content="It sucks"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Juan"
                    timeAgo="Today at 3:15PM"
                    content="Good job"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));