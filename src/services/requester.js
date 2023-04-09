export const request = async (method, url, data, token) => {
	const options = {};

	// TODO: Error handling

	if (method !== "GET") {
		options.method = method;

		if (data) {
			options.headers = {
				"content-type": "application/json",
			};
			options.body = JSON.stringify(data);
		}
	}

	if (token) {
            options.headers = {
                ...options.headers,
                'X-Authorization': token,
            };
    }

	const response = await fetch(url, options);
	// TODO: No content response
	if (response.status === "204") {
		return [];
	}

	if (response.status === 403) {      
		const err = await response.json();
		return { errorMessage: err.message };
	}

	if (!response.ok) {
		throw response;
	}

	const result = response.json();

	return result;
};


export const get = (url, token) => request("GET", url, null, token);
export const put = (url, data, token) => request("PUT", url, data, token);
export const post = (url, data, token) => request("POST", url, data, token);
