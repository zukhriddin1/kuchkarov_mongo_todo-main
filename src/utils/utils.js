import url from 'url';

export const Url = (req) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
	return url.parse(fullUrl, true);
};
