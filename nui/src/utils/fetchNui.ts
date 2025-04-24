import { isEnvBrowser } from "./isEnvBrowser";

export async function fetchNui<T = unknown>(eventName: string, data?: unknown): Promise<T> {
  if (isEnvBrowser()) {
    console.log(`[NUI-MOCK] → ${eventName}`, data);
    return new Promise((resolve) => setTimeout(() => resolve({} as T), 500));
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  const resourceName = (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : 'nui-frame-app';

  const response = await fetch(`https://${resourceName}/${eventName}`, options);

  const respFormatted = await response.json();

  return respFormatted;
}
