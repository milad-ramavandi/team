import { texts } from "../../../lib/texts";
import { IMember } from "../../../types/team";
import TeamMember from "../team-list/team-member";

const team_members: IMember[] = texts?.members;


const Team = () => {
  return (
    <div className="mil-p-0-145">
      <div className="container">
        <div className="row mil-aic">
          {team_members?.map((item, index) => {
            return <TeamMember key={index} {...item} amount_col_lg={4} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
