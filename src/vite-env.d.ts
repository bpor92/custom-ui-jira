declare const AP: {
    context: {
      getUser(callback: (user: { fullName: string }) => void): void;
    };
  };