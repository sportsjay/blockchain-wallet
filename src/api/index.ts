import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { EVM_NETWORK } from "../networkConfig";
import { Transaction } from "../screens/home/components/transaction";

interface ResponseData<T = any> {
  message: string;
  data: T;
  [x: string]: any;
}

interface LoginData {
  publicKey: string;
  isSigned: boolean;
  balance: string;
}

interface TransferData {
  myAddress: string;
  toAddress: string;
  amount: string;
}

export default class ServiceAPI {
  public config: AxiosRequestConfig;

  constructor() {
    this.config = {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 3000,
      timeoutErrorMessage: "Fail to process query",
    };
  }

  public async getRecentTransactions(
    key: string
  ): Promise<ResponseData<Transaction[] | []>> {
    try {
      const response = await axios.get<ResponseData<Transaction[]>>(
        `${EVM_NETWORK}/transactions/${key}`,
        this.config
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) return error.response?.data;
      return {
        data: [],
        message: "Please try again later!",
      };
    }
  }

  public async createTransfer(
    fromKey: string,
    toKey: string,
    amount: string
  ): Promise<ResponseData<TransferData | undefined>> {
    const data = {
      myAddress: fromKey,
      toAddress: toKey,
      amount: amount,
    };

    try {
      const response = await axios.post<ResponseData<TransferData>>(
        `${EVM_NETWORK}/transfer`,
        data,
        this.config
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error))
        return error.response?.data as ResponseData<undefined>;
      return {
        data: undefined,
        message: "Please try again later!",
      };
    }
  }

  /**
   * Submits the login query by communicating with Web3
   */
  async login(username: string) {
    // TODO: login logic
    const body = {
      publicKey: username,
    };
    const loginResponse = await axios.post<ResponseData<LoginData>>(
      `${EVM_NETWORK}/validate`,
      body,
      this.config
    );

    return loginResponse.data;
  }
}
