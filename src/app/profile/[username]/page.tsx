import {
  getProfileByUsername,
  getUserLikedPosts,
  getUserPosts,
  isFollowing,
} from "@/actions/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";
import { Metadata } from "next";

type Props = {
  params: Promise<{ username: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const user = await getProfileByUsername(resolvedParams.username);
  if (!user) return {
      title: 'User not found',
      description: 'This user does not exist'
  };

  return {
      title: `${user.name ?? user.username}`,
      description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

export default async function ProfilePage({ params }: Props) {
  const resolvedParams = await params;
  const user = await getProfileByUsername(resolvedParams.username);

  if (!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
      getUserPosts(user.id),
      getUserLikedPosts(user.id),
      isFollowing(user.id),
  ]);

  return (
      <ProfilePageClient
          user={user}
          posts={posts}
          likedPosts={likedPosts}
          isFollowing={isCurrentUserFollowing}
      />
  );
}