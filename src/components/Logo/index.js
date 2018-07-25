import { colors } from 'utils';
import { PropTypes, React } from 'utils/create';

export const Logo = ({ className, fill }) => (
  <svg className={className} fill={fill} x="0px" y="0px" viewBox="-16.161 -16.177 100 100">
    <path d="M83.183-0.79l-6.904-0.29l4.558-7.619l-5.683-0.032l1.739-7.446c0,0-7.479,10.116-16.004,13.681  c-2.37,0.991-5.479,1.323-8.979,1.323c-7.03,0-15.641-1.335-23.056-1.335c-0.8,0-1.588,0.016-2.356,0.05  C16.694-2.018,7.699,2.284,0.775,9.205c-13.646,13.647-15.913,34.354-6.824,50.36c-1.732-0.527-3.882-1.38-6.459-2.775l-1.925,3.556  c3.512,1.901,6.386,2.936,8.625,3.488c-2.57,0.786-5.896,1.548-9.697,1.812l0.28,4.032c3.402-0.236,6.435-0.83,8.968-1.508  c-2.092,2.055-4.414,4.992-6.495,9.156l3.616,1.809c2.295-4.591,4.882-7.452,6.919-9.179c-1.349,2.952-2.363,7.479-1.097,13.865  l3.966-0.787c-0.947-4.775-0.416-8.185,0.425-10.485c2.276,5.156,5.919,8.72,6.157,8.949l2.806-2.912  c-0.043-0.041-2.424-2.383-4.342-5.835c7.346,5.377,16.043,8.067,24.741,8.067c10.736,0,21.473-4.096,29.664-12.287  c0.178-0.179,0.343-0.371,0.513-0.556c2.066-2.231,4.009-4.537,5.566-7.157c5.268-8.861,6.305-19.289,5.534-29.396  C70.717,18.273,69.413,11.221,83.183-0.79z M6.334,60.74c-0.831,0.037-1.518,0.034-2.056,0.016c-0.007-0.053-0.013-0.09-0.021-0.16  c-0.036-0.208-0.067-0.609-0.109-1.12c-0.021-0.516-0.071-1.146-0.062-1.882c-0.013-0.734,0.009-1.568,0.065-2.484  c0.033-0.916,0.164-1.907,0.271-2.961c0.174-1.044,0.29-2.165,0.562-3.298c0.123-0.57,0.247-1.15,0.373-1.738  c0.16-0.581,0.323-1.168,0.487-1.759c0.292-1.202,0.767-2.361,1.164-3.559c0.423-1.188,0.969-2.324,1.444-3.482  c0.537-1.123,1.124-2.204,1.663-3.273c0.588-1.039,1.217-2.01,1.786-2.956c0.546-0.963,1.226-1.755,1.77-2.554  c0.575-0.774,1.058-1.528,1.588-2.106c0.51-0.603,0.953-1.126,1.318-1.558c0.735-0.867,1.154-1.363,1.154-1.363  s-0.486,0.429-1.338,1.18c-0.429,0.377-0.948,0.835-1.544,1.359c-0.621,0.506-1.209,1.182-1.902,1.876  c-0.663,0.72-1.476,1.432-2.169,2.32c-0.716,0.871-1.508,1.771-2.268,2.75c-0.712,1.009-1.483,2.04-2.213,3.125  c-0.669,1.12-1.416,2.233-2.043,3.412c-0.604,1.19-1.285,2.355-1.784,3.581c-0.269,0.606-0.534,1.208-0.798,1.804  c-0.228,0.609-0.453,1.213-0.676,1.806c-0.471,1.182-0.781,2.373-1.138,3.488c-0.214,0.844-0.42,1.641-0.598,2.415  c-6.04-12.799-3.781-28.572,6.786-39.139c5.777-5.776,13.159-9.146,20.785-9.489c0.628-0.027,1.31-0.042,2.023-0.042  c3.442,0,7.388,0.332,11.202,0.654c3.968,0.334,8.07,0.681,11.852,0.681c0.539,0,1.056-0.01,1.566-0.024  c-0.122,0.078-0.242,0.151-0.365,0.23c-0.816,0.486-1.656,0.977-2.504,1.448c-0.861,0.435-1.71,0.928-2.581,1.313  c-0.871,0.388-1.72,0.824-2.576,1.133c-0.852,0.324-1.67,0.685-2.477,0.913c-0.803,0.238-1.558,0.533-2.275,0.683  c-0.72,0.17-1.381,0.324-1.965,0.463c-0.59,0.121-1.111,0.172-1.54,0.242c-0.864,0.125-1.357,0.196-1.357,0.196  s0.497,0.025,1.369,0.07c0.438,0.015,0.972,0.065,1.584,0.062c0.613-0.021,1.307-0.047,2.062-0.074  c0.763-0.01,1.568-0.153,2.439-0.235c0.875-0.073,1.77-0.271,2.713-0.433c0.95-0.146,1.894-0.415,2.877-0.64  c0.984-0.225,1.946-0.554,2.938-0.83c0.973-0.314,1.94-0.649,2.894-0.988c0.933-0.372,1.879-0.701,2.757-1.093  c1.329-0.55,2.57-1.125,3.691-1.67c-0.874,1.468-1.84,3.086-2.886,4.846c-1.167,1.938-2.445,4.015-3.813,6.194  c-1.39,2.163-2.855,4.443-4.371,6.803c-1.493,2.369-3.036,4.816-4.604,7.304c-1.548,2.517-3.152,4.945-4.879,7.304  c-1.764,2.328-3.609,4.586-5.591,6.646c-2.002,2.038-4.098,3.902-6.225,5.556c-2.118,1.667-4.326,3.045-6.465,4.222  c-2.141,1.176-4.246,2.106-6.238,2.789c-1.987,0.688-3.834,1.2-5.489,1.497C8.945,60.516,7.506,60.68,6.334,60.74z M15.28,66.444  c-0.825-0.068-1.594-0.149-2.318-0.236c1.67-0.609,3.476-1.331,5.352-2.271c2.122-1.063,4.347-2.328,6.571-3.831  c2.229-1.498,4.421-3.273,6.59-5.188c2.157-1.93,4.241-4.063,6.199-6.354c1.95-2.294,3.817-4.705,5.539-7.211  c1.704-2.515,3.237-5.154,4.735-7.65c1.494-2.53,2.994-4.983,4.479-7.333c1.485-2.35,2.921-4.629,4.396-6.708  c1.457-2.092,2.933-3.995,4.345-5.708c0.023-0.026,0.045-0.051,0.067-0.078c-0.504,1.168-0.997,2.411-1.455,3.747  c-0.81,2.39-1.514,5.022-2.061,7.809c-0.537,2.787-1.013,5.701-1.52,8.648c-0.54,2.941-1.23,5.896-2.281,8.745  c-0.524,1.431-1.142,2.803-1.863,4.183c-0.369,0.739-0.735,1.355-1.118,2.028c-0.405,0.657-0.806,1.318-1.245,1.952  c-1.722,2.561-3.738,4.901-5.975,6.903c-2.231,2.007-4.699,3.649-7.236,4.915c-2.528,1.29-5.14,2.182-7.678,2.762  c-2.536,0.586-4.993,0.911-7.276,0.997C19.242,66.659,17.141,66.597,15.28,66.444z M59.773,57.009  c-1.322,2.225-3.081,4.231-4.645,5.92l-0.205,0.225c-0.042,0.047-0.083,0.093-0.126,0.139c-6.511,6.494-15.159,10.07-24.358,10.07  c-3.032,0-6.003-0.396-8.859-1.151c0.148-0.017,0.291-0.028,0.439-0.047c2.538-0.335,5.285-0.831,8.106-1.692  c2.82-0.855,5.722-2.037,8.521-3.632c2.809-1.572,5.475-3.602,7.888-5.931c2.416-2.331,4.547-5.004,6.323-7.869  c1.765-2.868,3.288-5.876,4.365-9.037c1.085-3.145,1.716-6.328,2.229-9.346c0.54-3.015,0.927-5.891,1.54-8.534  c0.596-2.645,1.311-5.077,2.213-7.221c0.227-0.565,0.463-1.107,0.706-1.635c-0.454,4.153-0.13,8.347,0.228,12.882  c0.048,0.6,0.097,1.213,0.145,1.84C65.073,42.389,63.599,50.573,59.773,57.009z" />
  </svg>
);

Logo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
  fill: colors.onion,
};

export default Logo;
