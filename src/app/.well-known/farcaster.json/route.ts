export async function GET() {
  return Response.json({
    accountAssociation: {
      header:
        "eyJmaWQiOjEzNTAyNTEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwYUNBMTExNGFGZkQ3RUY1RjY3MzFkNmJhMTEwN0U4ZGE4ZTc2OWU3In0",
      payload: "eyJkb21haW4iOiJiYXNlLWFwcC1kZW1vLnZlcmNlbC5hcHAifQ",
      signature:
        "cLj1O3tCoFUO1IaXnjm0MIJ4cvbsRtEkkGrlVJCyYD8Hb81KXnVtsSv1TAg2Vf4yoWtlgN+TvWilnpbXktd92Bs=",
    },
    baseBuilder: {
      ownerAddress: "0x7A370C25Df2dfdb4c57969C2b6556F8E9B25621b",
    },
    miniapp: {
      version: "1",
      name: "Base Demo",
      homeUrl: "https://base-app-demo.vercel.app/",
      iconUrl: "https://base-app-demo.vercel.app/icon.png",
      splashImageUrl: "https://base-app-demo.vercel.app/splash-image.png",
      splashBackgroundColor: "#000000",
      webhookUrl: "https://base-app-demo.vercel.app/api/webhook",
      subtitle: "Easy to manage",
      description: "Track and manage your cryptocurrency portfolio.",
      screenshotUrls: ["https://base-app-demo.vercel.app/screenshot-1.png"],
      primaryCategory: "finance",
      tags: ["finance"],
      heroImageUrl: "https://base-app-demo.vercel.app/hero.png",
      tagline: "Save instantly",
      ogTitle: "Base Demo",
      ogDescription: "Easy to manage portfolio.",
      ogImageUrl: "https://base-app-demo.vercel.app/og.png",
      noindex: false,
    },
  });
}
