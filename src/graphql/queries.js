import { gql } from '@apollo/client';
export const USER_CHATS = gql`
query getUserChats($sender: String!,$receiver: String!) {
    getUserChats(sender: $sender,receiver:$receiver){
      content
      sender{
        firstName
        unqname
      }
      timestamp
    }
  }
`

export const CHATS_OF_USER = gql`
query chatsOfUser($userEmail : String!){
  chatsOfUser(userEmail:$userEmail){
    session{
      user {
        unqname
        firstName
      }
      otherUser {
        unqname
        firstName
      }
      id
    }
      message
  }
}`

export const USER_PROFILE = gql`
query userProfile($userEmail : String!){
  userProfile(userEmail:$userEmail){
    unqname
    email
    firstName
    lastName
  }
}`