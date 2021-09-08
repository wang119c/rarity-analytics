import { gql } from "@apollo/client";

export const METADATA = gql`
  query Metadata {
    metaDatas {
      summoners
      barbarians
      bards
      clerics
      druids
      fighters
      monks
      paladins
      rangers
      rogues
      sorcerers
      wizards
    }
  }
`;

export const SUMMONERS = gql`
  query Metadata($offset: Int, $limit: Int) {
    summoners(offset: $offset, limit: $limit) {
      owner
      id
      _class
      _level
    }
  }
`;
