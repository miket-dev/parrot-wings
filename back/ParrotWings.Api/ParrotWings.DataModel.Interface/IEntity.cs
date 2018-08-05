
namespace ParrotWings.DataModel.Interface
{
    public interface IEntity<TId>
        where TId : struct
    {
        TId Id { get; set; }
    }

    public interface IEditEntity<TId> : IEntity<TId>
        where TId : struct
    {

    }

    public interface IViewEntity<TId> : IEntity<TId>
        where TId : struct
    {

    }
}
