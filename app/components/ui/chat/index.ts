import { JSONValue } from "ai";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";

export { type ChatHandler } from "./chat.interface";
export { ChatInput, ChatMessages };

export enum MessageAnnotationType {
  IMAGE = "image",
  DOCUMENT_FILE = "document_file",
  SOURCES = "sources",
  EVENTS = "events",
  TOOLS = "tools",
  SUGGESTED_QUESTIONS = "suggested_questions",
  AGENT_EVENTS = "agent",
}

export type ImageData = {
  url: string;
};

export type DocumentFileType = "csv" | "pdf" | "txt" | "docx";
export const DOCUMENT_FILE_TYPES: DocumentFileType[] = [
  "csv",
  "pdf",
  "txt",
  "docx",
];

export type UploadedFileMeta = {
  id: string;
  name: string; // The uploaded file name in the backend (including uuid and sanitized)
  url?: string;
  refs?: string[];
};

export type DocumentFile = {
  filename: string; // The original file name
  filesize: number;
  filetype: DocumentFileType;
  metadata?: UploadedFileMeta; // undefined when the file is not uploaded yet
};

export type DocumentFileData = {
  files: DocumentFile[];
};

export type SourceNode = {
  id: string;
  metadata: Record<string, unknown>;
  score?: number;
  text: string;
  url: string;
};

export type SourceData = {
  nodes: SourceNode[];
};

export type EventData = {
  title: string;
};

export type AgentEventData = {
  agent: string;
  text: string;
};

export type ToolData = {
  toolCall: {
    id: string;
    name: string;
    input: {
      [key: string]: JSONValue;
    };
  };
  toolOutput: {
    output: JSONValue;
    isError: boolean;
  };
};

export type SuggestedQuestionsData = string[];

export type AnnotationData =
  | ImageData
  | DocumentFileData
  | SourceData
  | EventData
  | AgentEventData
  | ToolData
  | SuggestedQuestionsData;

export type MessageAnnotation = {
  type: MessageAnnotationType;
  data: AnnotationData;
};

const NODE_SCORE_THRESHOLD = 0.25;

export function getAnnotationData<T extends AnnotationData>(
  annotations: MessageAnnotation[],
  type: MessageAnnotationType,
): T[] {
  return annotations.filter((a) => a.type === type).map((a) => a.data as T);
}

export function getSourceAnnotationData(
  annotations: MessageAnnotation[],
): SourceData[] {
  const data = getAnnotationData<SourceData>(
    annotations,
    MessageAnnotationType.SOURCES,
  );
  if (data.length > 0) {
    const sourceData = data[0] as SourceData;
    if (sourceData.nodes) {
      sourceData.nodes = preprocessSourceNodes(sourceData.nodes);
    }
  }
  return data;
}

function preprocessSourceNodes(nodes: SourceNode[]): SourceNode[] {
  // Filter source nodes has lower score
  nodes = nodes
    .filter((node) => (node.score ?? 1) > NODE_SCORE_THRESHOLD)
    .filter((node) => node.url && node.url.trim() !== "")
    .sort((a, b) => (b.score ?? 1) - (a.score ?? 1))
    .map((node) => {
      // remove trailing slash for node url if exists
      node.url = node.url.replace(/\/$/, "");
      return node;
    });
  return nodes;
}
