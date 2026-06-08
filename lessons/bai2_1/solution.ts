export class SmartContract {
  private message: string;

  constructor(initialMessage: string) {
    if (!initialMessage.trim()) {
      throw new Error("Initial message cannot be empty");
    }

    this.message = initialMessage;
  }

  public updateMessage(newMsg: string): void {
    if (!newMsg.trim()) {
      throw new Error("New message cannot be empty");
    }
    if (newMsg === this.message) {
      throw new Error("New message must be different from the current message");
    }
    this.message = newMsg;
  }

  public getMessage(): string {
    return this.message;
  }
}
