export type EndpointKey = 'about' | 'experience' | 'projects' | 'stack' | 'contact';

export interface EndpointData {
  id: EndpointKey;
  path: string;
  description: string;
  response: Record<string, unknown> | Record<string, unknown>[];
}