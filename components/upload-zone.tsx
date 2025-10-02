"use client"

import type React from "react"

import { useCallback } from "react"
import { Upload } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadZoneProps {
  onFileSelect: (file: File) => void
  selectedFile: File | null
}

export function UploadZone({ onFileSelect, selectedFile }: UploadZoneProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      if (file && file.type.startsWith("video/")) {
        onFileSelect(file)
      }
    },
    [onFileSelect],
  )

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) {
        onFileSelect(file)
      }
    },
    [onFileSelect],
  )

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className={cn(
        "border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer",
        selectedFile ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-secondary/50",
      )}
    >
      <input type="file" accept="video/*" onChange={handleFileInput} className="hidden" id="video-upload" />
      <label htmlFor="video-upload" className="cursor-pointer">
        <Upload className="w-12 h-12 mx-auto mb-4 text-primary" />
        {selectedFile ? (
          <div>
            <p className="text-lg font-medium text-foreground mb-1">{selectedFile.name}</p>
            <p className="text-sm text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium text-foreground mb-1">Drop video file here or click to browse</p>
            <p className="text-sm text-muted-foreground">Supports MP4, AVI, MOV formats</p>
          </div>
        )}
      </label>
    </div>
  )
}
