import ProfilePhoto from "../atoms/ProfilePhoto";

type TeamMemberProps = {
  classname: string;
};

const TeamMember = ({ classname }: TeamMemberProps) => {
  return (
    <div className={classname}>
      <ProfilePhoto />
      <h3> El Francisco</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, qui!</p>
    </div>
  );
};

export default TeamMember;
