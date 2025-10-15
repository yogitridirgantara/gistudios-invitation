import Invitation from "@/components/invitation/header";
import Intro from "@/components/invitation/intro";
import Couple from "@/components/invitation/couple";
import EventDetails from "@/components/invitation/eventDetail";
import Location from "@/components/invitation/location";
import Closing from "@/components/invitation/closing";
import MusicPlayer from "@/components/invitation/musicPlayer";
import BrideGroom from "@/components/invitation/brideGroom";
import LoveStory from "@/components/invitation/loveStory";
import WeddingGift from "@/components/invitation/weddingGift";
import RSVP from "@/components/invitation/RSVP";
import Gallery from "@/components/invitation/gallery";

export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-800">
      {/* Header */}
      <Invitation />

      {/* Intro (target scroll dengan id="intro") */}
      <div id="intro">
        <Intro />
      </div>

      <Couple />
      <BrideGroom />
      <EventDetails />
      <Location />
      <LoveStory />
      <Gallery />
      <WeddingGift />
      <RSVP />
      <Closing />
      <MusicPlayer />
    </div>
  );
}
