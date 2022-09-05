const Analytics = ({
  analyticsMeasurementId,
}: {
  analyticsMeasurementId: string;
}) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', '${analyticsMeasurementId}');
                `,
        }}
      ></script>
    </>
  );
};

export default Analytics;
