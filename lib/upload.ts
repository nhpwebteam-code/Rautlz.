import { put } from "@vercel/blob";

export async function uploadBlob(file: File | Blob, filename: string) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.warn("BLOB_READ_WRITE_TOKEN not configured.");
    return null;
  }

  const blob = await put(filename, file, {
    access: "public",
  });

  return blob;
}
