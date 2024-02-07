import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
mutation messageMutation($sender: String!,$receiver: String!,$content: String!) {
    createMessage(sender: $sender,receiver:$receiver,content:$content){
      message{
        sender{
          firstName
        }
        content
      }
    }
  }
`;