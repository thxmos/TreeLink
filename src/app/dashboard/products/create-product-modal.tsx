"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ImageUpload } from "@/components/image-upload/image-upload";
import type { CreateProduct2Dto } from "@/data-access/product2";

interface CreateProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: CreateProduct2Dto) => Promise<void>;
}

export function CreateProductModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateProductModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [active, setActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const productData: CreateProduct2Dto = {
        name,
        description,
        image,
        active,
        price: price ? Number.parseFloat(price) : undefined,
      };
      await onSubmit(productData);
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImage(undefined);
    setActive(false);
  };

  const handleImageChange = (imageUrl: string | null) => {
    setImage(imageUrl || undefined);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter product price"
                step="0.01"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <ImageUpload
              initialImage={image}
              size="sm"
              onImageChange={handleImageChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={active}
                onCheckedChange={setActive}
              />
              <Label htmlFor="active">Active</Label>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
