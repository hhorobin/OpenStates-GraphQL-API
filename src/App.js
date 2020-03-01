import React from 'react'
import './App.css'
import { useQuery } from '@apollo/react-hooks'
import gql from "graphql-tag"

const GET_INFO = gql`
{
    people(first: 10) {
        edges {
            node {
                name
            }
        }
    }
}
`

function App() {
  const { data, loading, error } = useQuery(GET_INFO)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const names = data.people.edges.map((person) => {
    return person.node.name
  })

  return (
  <>
    <div className="container">
      {names}
    </div>
  </>
);
}

export default App;
