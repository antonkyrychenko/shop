namespace Shop.WebApi.Models
{
    public class ResponseObject<D>
    {
        public D Data { get; set; }

        public object Errors { get; set; }

        public ResponseObject(D data)
        {
            Data = data;
        }

        public ResponseObject()
        {
        }
    }
}
