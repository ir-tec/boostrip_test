interface response_helper {
    status: number;
    message?: string;
    data?: object;
  }
  
  export const response_helper = ({ status, message, data }: response_helper) => {
    return {
      status,
      message,
      data,
    };
  };
  