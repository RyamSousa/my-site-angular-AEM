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
        adapters = {InformationsModel.class, ComponentExporter.class},
        resourceType = InformationsModel.RESOURCE_TYPE,
        defaultInjectionStrategy = OPTIONAL
)
@Exporter(name = SLING_MODEL_EXPORTER_NAME, extensions = SLING_MODEL_EXTENSION)

public class InformationsModel implements ComponentExporter {

    static final String RESOURCE_TYPE = "siteangular/components/informations";

    @ValueMapValue
    private String username;

    @ValueMapValue
    private String name;

    @ValueMapValue
    private String avatarUrl;

    @ValueMapValue
    private String bio;

    @ValueMapValue
    private String location;
    
    @Override
    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
