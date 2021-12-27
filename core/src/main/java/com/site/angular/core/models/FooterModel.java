package com.project.angular.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import lombok.Getter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import static com.adobe.cq.export.json.ExporterConstants.SLING_MODEL_EXPORTER_NAME;
import static com.adobe.cq.export.json.ExporterConstants.SLING_MODEL_EXTENSION;
import static org.apache.sling.models.annotations.DefaultInjectionStrategy.OPTIONAL;

@Getter
@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {FooterModel.class, ComponentExporter.class},
        resourceType = FooterModel.RESOURCE_TYPE,
        defaultInjectionStrategy = OPTIONAL
)
@Exporter(name = SLING_MODEL_EXPORTER_NAME, extensions = SLING_MODEL_EXTENSION)

public class FooterModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "siteangular/components/footer";

    @ValueMapValue
    private String author;

    @ValueMapValue
    private String email;

    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
