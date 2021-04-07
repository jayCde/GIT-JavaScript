import styles from "../../../styles/admin/bootstrapmodal.module.css";

export default function Modal({ children, id, title }) {
  const { modalbox, header } = styles;

  return (
    <div id={id} className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className={`${modalbox} modal-content`}>
          <div className="modal-header">
            <h5 className={header}>{title}</h5>
            <button
              type="button"
              className="close m-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" className="text-light">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0001 2.66669C8.62675 2.66669 2.66675 8.62669 2.66675 16C2.66675 23.3734 8.62675 29.3334 16.0001 29.3334C23.3734 29.3334 29.3334 23.3734 29.3334 16C29.3334 8.62669 23.3734 2.66669 16.0001 2.66669ZM22.6667 20.7867L20.7867 22.6667L16.0001 17.88L11.2134 22.6667L9.33342 20.7867L14.1201 16L9.33342 11.2134L11.2134 9.33335L16.0001 14.12L20.7867 9.33335L22.6667 11.2134L17.8801 16L22.6667 20.7867Z"
                    fill="#A0A3BD"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
