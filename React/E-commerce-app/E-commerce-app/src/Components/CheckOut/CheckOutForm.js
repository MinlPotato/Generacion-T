import React, { useContext, useEffect } from "react";
import ShopContext from "../ContextT/ShopContext";


function CheckOutForm() {
  const context = useContext(ShopContext);
  console.log(context.cart);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Tu carrito</span>
            <span className="badge bg-primary rounded-pill">
              {" "}
              {context.cart.length}{" "}
            </span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex flex-column gap-3 justify-content-between lh-sm">
              {context.cart.map((cartItem) => (
                <div className="card w-100 text-muted">
                  <div
                    key={cartItem.id}
                    className=" d-flex justify-content-between"
                  >
                    <div className=" d-flex flex-column align-items-center mx-2">
                      <img
                        className="card-img-left rounded"
                        src={cartItem.image}
                        style={{ width: "70px" }}
                      ></img>
                      <p className="mt-2">{cartItem.name}</p>
                    </div>
                    <div className="d-flex flex-column mx-2 my-2">
                      <p> Cantidad: {cartItem.quantity}</p>
                      <p className="">
                        Precio: ${cartItem.precio * cartItem.quantity}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Datos</h4>
          <form className="needs-validation" novalidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label for="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label for="address" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                ></input>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label for="address2" className="form-label">
                  Dirección 2 <span className="text-muted">(Opcional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartmamento"
                ></input>
              </div>

              <div className="col-md-5">
                <label for="country" className="form-label">
                  Pais
                </label>
                <select className="form-select" id="country" required>
                  <option value="">Elige...</option>
                  <option>Argentina</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label for="state" className="form-label">
                  Provincia
                </label>
                <select className="form-select" id="state" required>
                  <option value="">Elige...</option>
                  <option>Buenos Aires</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label for="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4"></hr>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              ></input>
              <label className="form-check-label" for="same-address">
                Mi dirección de envío es la misma a mi dirección de facturación
              </label>
            </div>

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              ></input>
              <label className="form-check-label" for="save-info">
                Guarda esta inforamcion para la siguiente vez
              </label>
            </div>

            <hr className="my-4"></hr>

            <h4 className="mb-3">Pago</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked
                  required
                ></input>
                <label className="form-check-label" for="credit">
                  Tarjeta de credito
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                ></input>
                <label className="form-check-label" for="debit">
                  Tarjeta de debito
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                ></input>
                <label className="form-check-label" for="paypal">
                  MercadoPago
                </label>
              </div>
            </div>

            <div className="row gy-3">
              <div className="col-md-6">
                <label for="cc-name" className="form-label">
                  Nombre de la tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-name"
                  placeholder=""
                  required
                ></input>
                <small className="text-muted">Nombre completo</small>
                <div className="invalid-feedback">Name on card is required</div>
              </div>

              <div className="col-md-6">
                <label for="cc-number" className="form-label">
                  Numero de la tarjeta
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-number"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div className="col-md-3">
                <label for="cc-expiration" className="form-label">
                  Expiración
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Expiration date required</div>
              </div>

              <div className="col-md-3">
                <label for="cc-cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr className="my-4"></hr>

            {context.cart.length == 0 ? (
              <>
                <button
                  className="w-100 btn btn-primary btn-lg"
                  disabled
                  type="submit"
                >
                  Seguir con el CheckOut
                </button>
                <small className="text-muted">
                  No tiene nada en su carrito
                </small>
              </>
            ) : (
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Seguir con el CheckOut
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default CheckOutForm;
