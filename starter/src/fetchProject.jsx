import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "tchre3w8fp0t",
  environment: "master",
  accessToken: "kSO9_zdB6RiPSyi20JG4UUheu3xPJnKVlv20m_uYNe8",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, img, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
