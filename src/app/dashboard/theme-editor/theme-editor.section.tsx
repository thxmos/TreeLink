"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FONTS } from "@/constants/fonts";
import { upsertTheme } from "./themes.actions";
import { toast } from "sonner";
import type { CreateThemeDto } from "@/data-access/theme";
import { DashboardCard } from "@/components/dashboard-card";
import { Switch } from "@/components/ui/switch";
import { SelectInput } from "@/components/select-input";
import { ColorSelect } from "@/components/color-select/color-select";
import { ColorPickerStandalone } from "@/components/color-select/color-picker-standalone";
import { Separator } from "@/components/ui/separator";

const BACKGROUND_TYPES = [
  { label: "Colored Background", value: "color" },
  { label: "Image Background", value: "image" },
  { label: "Video Background", value: "video" },
];

export const THEME_FORM_FIELDS = [
  {
    category: "Color Palette",
    fields: [
      { label: "Primary Color", type: "color-picker", name: "primaryColor" },
    ],
  },
  {
    category: "Font",
    fields: [
      { label: "Font Family", type: "select", name: "fontFamily" },
      { label: "Text Color", type: "color", name: "fontColor" },
      {
        label: "Secondary Text Color",
        type: "color",
        name: "secondaryColorFont",
      },
    ],
  },
  {
    category: "Border",
    fields: [
      { label: "Border Color", type: "color", name: "borderColor" },
      { label: "Border Radius", type: "number", name: "borderRadius" },
      { label: "Border Width", type: "number", name: "borderWidth" },
      { label: "Border Style", type: "select", name: "borderStyle" },
    ],
  },
  {
    category: "Card",
    fields: [
      {
        label: "Background Color",
        type: "color",
        name: "cardBackgroundColor",
      },
    ],
  },
  {
    category: "Icon",
    fields: [{ label: "Icon Color", type: "color", name: "iconColor" }],
  },
];

export function ThemeEditorSection({
  userId,
  initialTheme,
}: {
  userId: string;
  initialTheme: Omit<CreateThemeDto, "userId">;
}) {
  const { control, handleSubmit, watch } = useForm<{
    theme: Omit<CreateThemeDto, "userId">;
  }>({
    defaultValues: { theme: initialTheme },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const backgroundType =
    watch("theme.backgroundType") || BACKGROUND_TYPES[0].value;

  const onSubmit = async (data: { theme: Omit<CreateThemeDto, "userId"> }) => {
    setIsSubmitting(true);
    try {
      // TODO: Ensure number fields are converted to integers in data access layer
      const updatedTheme = {
        ...data.theme,
        borderRadius: Number.parseInt(
          data.theme.borderRadius as unknown as string,
          10,
        ),
        borderWidth: Number.parseInt(
          data.theme.borderWidth as unknown as string,
          10,
        ),
      };
      await upsertTheme(userId, updatedTheme);
      toast.success("Theme updated successfully", {
        duration: 3000,
      });
    } catch (error) {
      console.error("Failed to update theme:", error);
      toast.error("Failed to update theme", {
        duration: 3000,
      });
    }
    setIsSubmitting(false);
  };

  const renderFormField = (
    field: (typeof THEME_FORM_FIELDS)[0]["fields"][0],
    control: any,
  ) => {
    switch (field.type) {
      case "select":
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectInput
                options={
                  field.name === "fontFamily"
                    ? FONTS
                    : [
                        { label: "Solid", value: "solid" },
                        { label: "Dashed", value: "dashed" },
                        { label: "Dotted", value: "dotted" },
                      ]
                }
                placeholder={`Select ${field.label.toLowerCase()}`}
                onValueChange={onChange}
                defaultValue={
                  value ||
                  (field.name === "fontFamily" ? FONTS[0].value : undefined)
                }
              />
            )}
          />
        );
      case "switch":
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Switch checked={value} onCheckedChange={onChange} />
            )}
          />
        );
      case "number":
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                type="number"
                value={value}
                onChange={(e) => onChange(Number.parseInt(e.target.value, 10))}
              />
            )}
          />
        );
      case "color":
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <ColorSelect
                value={value}
                themePrimaryColor={watch("theme.primaryColor")}
                onChange={onChange}
              />
            )}
          />
        );
      case "color-picker":
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <ColorPickerStandalone
                value={watch("theme.primaryColor")}
                onChange={onChange}
              />
            )}
          />
        );
      default:
        return (
          <Controller
            name={`theme.${field.name}`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input type={field.type} value={value} onChange={onChange} />
            )}
          />
        );
    }
  };

  return (
    <DashboardCard
      title={<span>Themes</span>}
      description="Customize your brand theme settings here. These will be applied to all your pages"
      footer={
        <div className="flex justify-end w-full">
          <Button type="submit" form="theme-form" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      }
    >
      <form
        id="theme-form"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="space-y-4">
          {THEME_FORM_FIELDS.map((section) => (
            <div key={section.category} className="space-y-4">
              <Label className="text-lg font-bold">{section.category}</Label>
              {section.fields.map((field) => (
                <div
                  key={field.name}
                  className="flex items-center space-x-2 mt-2"
                >
                  <Label className="w-24 font-bold">{field.label}</Label>
                  {renderFormField(field, control)}
                </div>
              ))}
              <Separator />
            </div>
          ))}

          <div className="space-y-2">
            <Label className="text-lg font-bold">Background</Label>
            <div className="flex items-center space-x-2 mt-2">
              <Label className="w-24 font-bold">Type</Label>
              <Controller
                name="theme.backgroundType"
                control={control}
                defaultValue={BACKGROUND_TYPES[0].value}
                render={({ field: { onChange, value } }) => (
                  <SelectInput
                    options={BACKGROUND_TYPES}
                    placeholder="Select background type"
                    onValueChange={onChange}
                    defaultValue={BACKGROUND_TYPES[0].value}
                  />
                )}
              />
            </div>

            {backgroundType === "color" && (
              <div className="flex items-center space-x-2 mt-2">
                <Label className="w-24 font-bold">Color</Label>
                <Controller
                  name="theme.backgroundColor"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ColorSelect
                      value={value}
                      themePrimaryColor={watch("theme.primaryColor")}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            )}

            {backgroundType === "image" && (
              <div className="flex items-center space-x-2 mt-2">
                <Label className="w-24 font-bold">Image URL</Label>
                <Controller
                  name="theme.backgroundImageUrl"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input type="text" value={value} onChange={onChange} />
                  )}
                />
              </div>
            )}

            {backgroundType === "video" && (
              <div className="flex items-center space-x-2 mt-2">
                <Label className="w-24 font-bold">Video URL</Label>
                <Controller
                  name="theme.videoUrl"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Input type="text" value={value} onChange={onChange} />
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </DashboardCard>
  );
}
