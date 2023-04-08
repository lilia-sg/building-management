export const request = async (method, url, data) => {
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

export const get = request.bind(null, "GET");
export const put = request.bind(null, "PUT");
export const post = request.bind(null, "POST");
