import { notFound } from "next/navigation";
import AboutMe from "../../../components/ui/team/team-member/about-me";
import Hero from "../../../components/ui/team/team-member/hero";
import ContactMe from "../../../components/ui/team/team-member/cantact-me";
import { IMember } from "../../../types/team";
import { texts } from "../../../lib/texts";

const team_members:IMember[] = texts?.members

const TeamMemberPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const mainUser = team_members?.filter((item) => item?.slug === slug)[0];
  if (!mainUser) {
    notFound()
  }
  return (
    <main>
      <Hero userData={mainUser} />
      <AboutMe />
      <ContactMe imageUrl={mainUser?.imageUrl}/>
    </main>
  );
};

export default TeamMemberPage;
