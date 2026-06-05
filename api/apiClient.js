// @ts-check

export class ApiClient {
  constructor(request, baseURL = 'https://demowebshop.tricentis.com') {
    this.request = request;
    this.baseURL = baseURL;
  }

  async get(route) {
    const endpoint = new URL(route, this.baseURL);
    return this.request.get(endpoint.toString());
  }
}
