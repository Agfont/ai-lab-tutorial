// Hand-written lab descriptions shown on each lab page. Lab and task pages
// themselves come from snapshot.json (see scripts/snapshot-labs.mjs).

export const LAB_OVERVIEWS: Record<string, { about: string; concepts: string[] }> = {
  "1-ai-api-call": {
    about: "Learn the end-to-end flow of a first AI integration: import SDK, create client, call chat completions, parse response, and track token cost.",
    concepts: [
      "OpenAI Python SDK",
      "python-dotenv",
      "Chat Completions API",
      "Token usage metrics"
    ]
  },
  "2-langchain": {
    about: "Learn how LangChain reduces boilerplate and composes prompts, models, and parsers into reusable chains.",
    concepts: [
      "LangChain",
      "LangChain OpenAI",
      "PromptTemplate",
      "Output Parsers"
    ]
  },
  "3-prompt-engineering": {
    about: "Practice the core prompting strategies that improve quality and consistency of LLM outputs.",
    concepts: [
      "LangChain",
      "LangChain OpenAI",
      "Prompt templates",
      "Prompting techniques (zero/one/few-shot, CoT)"
    ]
  },
  "4-vector-databases": {
    about: "Build semantic search by embedding documents, storing vectors, and retrieving results by meaning instead of exact keywords.",
    concepts: [
      "Sentence Transformers",
      "HuggingFace Embeddings",
      "ChromaDB",
      "LangChain Text Splitters"
    ]
  },
  "5-rag": {
    about: "Connect retrieval to generation to produce grounded answers from your own document corpus.",
    concepts: [
      "ChromaDB",
      "Sentence Transformers",
      "LangChain",
      "OpenAI Chat Models"
    ]
  },
  "6-langgraph": {
    about: "Create stateful AI workflows with graph nodes, edges, and routing logic for multi-step execution.",
    concepts: [
      "LangGraph",
      "LangChain",
      "OpenAI Chat Models",
      "DuckDuckGo Search (ddgs)"
    ]
  },
  "7-mcp": {
    about: "Integrate external tools through MCP and orchestrate single or multiple MCP servers from agent workflows.",
    concepts: [
      "MCP Python SDK",
      "FastMCP",
      "LangChain MCP Adapters",
      "LangGraph"
    ]
  }
};

export const LAB_TASK_SUMMARIES: Record<string, string[]> = {
  "1-ai-api-call": [
    "Task 1: Import AI SDK modules and understand package roles.",
    "Task 2: Initialize the OpenAI client from environment variables.",
    "Task 3: Build and send your first chat completions request.",
    "Task 4: Extract assistant text from nested response fields.",
    "Task 5: Inspect prompt/completion tokens and usage costs."
  ],
  "2-langchain": [
    "Task 1: Compare raw SDK boilerplate with LangChain abstractions.",
    "Task 2: Swap providers with the same LangChain model interface.",
    "Task 3: Build reusable prompt templates with variables.",
    "Task 4: Parse model output into structured formats.",
    "Task 5: Compose full prompt-model-parser chains with pipes."
  ],
  "3-prompt-engineering": [
    "Task 1: Practice zero-shot instructions for direct tasks.",
    "Task 2: Use one-shot prompting to teach expected format.",
    "Task 3: Use few-shot examples for style and consistency.",
    "Task 4: Apply chain-of-thought for multi-step reasoning.",
    "Task 5: Compare prompting strategies and choose fit by goal."
  ],
  "4-vector-databases": [
    "Task 1: Generate embeddings and inspect semantic similarity.",
    "Task 2: Chunk documents with overlap to preserve context.",
    "Task 3: Create and populate a vector store for retrieval.",
    "Task 4: Run semantic search with ranked and filtered results."
  ],
  "5-rag": [
    "Task 1: Initialize vector store infrastructure for RAG.",
    "Task 2: Process and index corpus chunks with metadata.",
    "Task 3: Configure LLM behavior for grounded answers.",
    "Task 4: Build prompts that inject retrieved context.",
    "Task 5: Orchestrate retrieval + generation end to end."
  ],
  "6-langgraph": [
    "Task 1: Learn core LangGraph imports and state typing.",
    "Task 2: Write node functions that return partial state updates.",
    "Task 3: Connect nodes and edges into a runnable graph.",
    "Task 4: Build a complete multi-step stateful flow.",
    "Task 5: Add conditional routing based on state decisions.",
    "Task 6: Integrate a calculator tool path into the graph.",
    "Task 7: Build a research agent with tool orchestration."
  ],
  "7-mcp": [
    "Task 1: Create MCP tools and expose them via a server.",
    "Task 2: Bind MCP tools into a LangGraph-driven flow.",
    "Task 3: Orchestrate multiple MCP servers with routing."
  ]
};
