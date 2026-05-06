export async function GET(request) {
  try {
    // Get category from query params if present
    const url = new URL(request.url);
    const category = url.searchParams.get('category');

    // Build backend URL
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const apiUrl = category
      ? `${backendUrl}/api/products/category/${category}`
      : `${backendUrl}/api/products`;

    console.log('🔗 [API Route] Fetching from backend:', apiUrl);

    // Fetch from backend
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('❌ [API Route] Backend error:', response.status);
      return Response.json(
        { error: `Backend error: ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('✅ [API Route] Got products:', data.length);

    return Response.json(data);
  } catch (error) {
    console.error('❌ [API Route] Error:', error.message);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
