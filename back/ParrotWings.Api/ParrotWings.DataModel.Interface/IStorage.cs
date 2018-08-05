using System;
using System.Linq;

namespace ParrotWings.DataModel.Interface
{
    public interface IReadableStorage<TViewEntity, TId>
        where TId : struct
        where TViewEntity : IViewEntity<TId>
    {
        /// <summary>
        /// Returns created query object
        /// </summary>
        IQueryable<TViewEntity> Query();

        TViewEntity this[TId id] { get; }
    }

    public interface IWriteableStorage<TEditEntity, TId>
        where TId : struct
        where TEditEntity: IEditEntity<TId>
    {
        /// <summary>
        /// Returns inserted entity id
        /// </summary>
        TId Insert(TEditEntity entity);
    }

    public interface IEditableStorage<TEditEntity, TId> : IWriteableStorage<TEditEntity, TId>
        where TId : struct
        where TEditEntity : IEditEntity<TId>
    {
        /// <summary>
        /// Returns updated entity id
        /// </summary>
        TId Update(TEditEntity entity);

    }
}
