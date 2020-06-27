import React from "react";
import { Media } from "reactstrap";

const RenderLeader = (props) => {
  const leader = props.leaders.map((leader) => {
      return (
        <div key={leader.id} className="col-12 mt-3">
      <Media tag="li">
        <Media left middle>
          <Media object src={leader.image} alt={leader.name} />
        </Media>
        <Media body className="col-12">
          <Media heading>{leader.name}</Media>
          <p>{leader.designation}</p>
          <p>{leader.description}</p>
        </Media>
      </Media>
    </div>
      );
  });

  return (
    <div className="row">
        {leader}
    </div>
  );
}

export default RenderLeader;
