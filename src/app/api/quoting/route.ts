export async function POST(req: Request) {
	const res = await fetch(process.env.API_ROUTE!, {
		method: 'POST',
		body: await req.formData(),
	});

	const data = await res.json();

	return Response.json(data.result);
}
