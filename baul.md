<div className="event-card__dates">
        {formattedEvent?.date.length === 1 ? (
          <p> {formattedEvent.date}</p>
        ) : (
          formattedEvent?.date.map((date) => {
            <select>
              <option>{date}</option>
            </select>;
          })
        )}
      </div>



      <select className="event-card__dates">
        {formattedEvent?.data.map((date) => (
          <option>{date}</option>
        ))}
      </select>
      {/*  {formattedEvent?.data.length > 1 && <p>+</p>} */}







      {formattedEvent?.data && (
        <select className="event-card__dates">
          <option value="">hi</option>
        </select>
      )}