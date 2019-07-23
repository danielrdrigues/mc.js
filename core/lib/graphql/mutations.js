import gql from 'graphql-tag'

export const UPDATE_PLAYER_MUTATION = gql`
  mutation UpdatePlayer(
    $id: ID!
    $x: Float
    $y: Float
    $z: Float
    $dirx: Float
    $diry: Float
    $cursor: Int
    $data: String
  ) {
    updatePlayer(
      data: { id: $id, x: $x, y: $y, z: $z, dirx: $dirx, diry: $diry, cursor: $cursor, data: $data }
    ) {
      x
      y
      z
    }
  }
`