import useDocumentTitle from "../../hooks/useDocumentTitle";

import BaseCard from "../../components/base/BaseCard";
import { Link } from "react-router-dom";

interface IProps {}

export default function NotFoundView({}: IProps): JSX.Element {
  useDocumentTitle("Not Found | Virtual Card");

  return (
    <BaseCard title="Not found the requested resource">
      <p>It's seems that the requested page does not exist.</p>
      <p>For further information please contact support.</p>
      <p>
        Go back home <Link to="/" className="text-blue-600 underline hover:text-blue-700">here</Link>.
      </p>
    </BaseCard>
  )
}
