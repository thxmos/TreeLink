"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SOCIAL_PLATFORMS } from "@/constants";
import { updateUser } from "./links.actions";
import { UserDto } from "@/data-access/user";
import { DashboardCard } from "@/components/dashboard-card/dashboard-card";
import { toast } from "sonner";

interface SocialMediaCardProps {
  user: UserDto;
}

export function SocialMediaCard({ user }: SocialMediaCardProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: SOCIAL_PLATFORMS.reduce(
      (acc, platform) => ({
        ...acc,
        [platform.value]: user[platform.value as keyof UserDto] || "",
      }),
      {},
    ),
  });

  const onSubmit = async (data: Record<string, string>) => {
    try {
      await updateUser(user.id, data);
      toast.success("Social media links updated successfully", {
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to update social media links:", error);
      toast.error("Failed to update social media links", {
        duration: 3000,
      });
    }
  };

  return (
    <DashboardCard
      title="Social Media"
      description="Manage your social media links here"
      footer={
        <div className="flex justify-end w-full">
          <Button
            type="submit"
            form="social-media-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      }
    >
      <form
        id="social-media-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {SOCIAL_PLATFORMS.map((platform) => (
          <div key={platform.value} className="space-x-2 items-center flex">
            <Label htmlFor={platform.value} className="w-20">
              {platform.label}
            </Label>
            <Input
              id={platform.value}
              placeholder={`Enter your ${platform.label} username`}
              {...register(platform.value as keyof typeof register)}
            />
          </div>
        ))}
      </form>
    </DashboardCard>
  );
}
