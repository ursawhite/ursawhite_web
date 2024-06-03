import React from "react";
import {
  GrIntegration,
  GrOptimize,
  GrServices,
  GrArticle,
  GrCreditCard,
  GrBundle,
} from "react-icons/gr";

const Excellence = () => {
  return (
    <div className="container mb-5">
      <div className="row position-relative">
        <div className="position-absolute top-0 left-0 p-2 d-none d-lg-block">
          <div className="">
            <p className="text-title text-start fw-bold">Our Strengths</p>
            <h2 className="text-white text-start">
              Expertise in creating innovative,
              <br className="d-none d-md-block" /> user-friendly websites
              swiftly.
            </h2>
            <p className="text-white text-start">
              We blend technology and creativity
              <br className="d-none d-md-block" />
              for superior digital solutions.
            </p>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <p className="text-title text-start fw-bold">Our Strengths</p>
          <h2 className="text-white text-start">
            Expertise in creating innovative,
            <br className="d-none d-md-block" /> user-friendly websites swiftly.
          </h2>
          <p className="text-white text-start">
            Memudahkan pembuatan website bisnis maupun
            <br className="d-none d-md-block" /> toko online secara profesional.
          </p>
        </div>
        <div className="col-12 col-md-8 p-2 d-none d-lg-block"></div>
        <div className="col-12 col-md-6 col-lg-4 p-2 z-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrIntegration
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">Marketing Tools Integration</h5>
              <p className="text-white">
                Effectively supports marketing activities with various built-in
                features that can be integrated.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2 d-none d-lg-block"></div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrBundle
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">Comprehensive E-Commerce Features</h5>
              <p className="text-white">
                One stop solution e-commerce with various easy payment methods
                and complete promotional features.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrOptimize
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">SEO Optimization Configuration</h5>
              <p className="text-white">
                {`MakeWebEasy's`} built-in SEO features for articles and
                products greatly support the appearance of sites on the first
                page of Google search.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrServices
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">Integrated Shipping Services</h5>
              <p className="text-white">
                Enjoy the ease of integrating shipping with national &
                international courier services that offer pick up and drop off.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrArticle
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">Easy and Stunning Design</h5>
              <p className="text-white">
                Create a professional website appearance with hundreds of
                ready-to-use and mobile-friendly templates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-2 p-2">
          <div className="gray-section p-3">
            <div className="p-2">
              <GrCreditCard
                className="h1 text-title"
                style={{ color: "var(--second-color)" }}
              />
            </div>
            <div className="ps-2">
              <h5 className="text-title">Payment Gateway</h5>
              <p className="text-white">
                Integration with payment gateways supporting debit/credit
                payments and installments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
