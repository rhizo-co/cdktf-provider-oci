# `datasciencePipeline` Submodule <a name="`datasciencePipeline` Submodule" id="rhizo-co-terraform-provider-oci.datasciencePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasciencePipeline <a name="DatasciencePipeline" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline oci_datascience_pipeline}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipeline;

DatasciencePipeline.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .projectId(java.lang.String)
    .stepDetails(IResolvable)
    .stepDetails(java.util.List<DatasciencePipelineStepDetails>)
//  .configurationDetails(DatasciencePipelineConfigurationDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deleteRelatedPipelineRuns(java.lang.Boolean)
//  .deleteRelatedPipelineRuns(IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .infrastructureConfigurationDetails(DatasciencePipelineInfrastructureConfigurationDetails)
//  .logConfigurationDetails(DatasciencePipelineLogConfigurationDetails)
//  .stepArtifact(IResolvable)
//  .stepArtifact(java.util.List<DatasciencePipelineStepArtifact>)
//  .timeouts(DatasciencePipelineTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.stepDetails">stepDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>></code> | step_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.deleteRelatedPipelineRuns">deleteRelatedPipelineRuns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.infrastructureConfigurationDetails">infrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.logConfigurationDetails">logConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.stepArtifact">stepArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>></code> | step_artifact block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}.

---

##### `stepDetails`<sup>Required</sup> <a name="stepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.stepDetails"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>>

step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_details DatasciencePipeline#step_details}

---

##### `configurationDetails`<sup>Optional</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.configurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#configuration_details DatasciencePipeline#configuration_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}.

---

##### `deleteRelatedPipelineRuns`<sup>Optional</sup> <a name="deleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.deleteRelatedPipelineRuns"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureConfigurationDetails`<sup>Optional</sup> <a name="infrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.infrastructureConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#infrastructure_configuration_details DatasciencePipeline#infrastructure_configuration_details}

---

##### `logConfigurationDetails`<sup>Optional</sup> <a name="logConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.logConfigurationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_configuration_details DatasciencePipeline#log_configuration_details}

---

##### `stepArtifact`<sup>Optional</sup> <a name="stepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.stepArtifact"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>>

step_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_artifact DatasciencePipeline#step_artifact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#timeouts DatasciencePipeline#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails">putConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails">putInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails">putLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact">putStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails">putStepDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails">resetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns">resetDeleteRelatedPipelineRuns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails">resetInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails">resetLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact">resetStepArtifact</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigurationDetails` <a name="putConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails"></a>

```java
public void putConfigurationDetails(DatasciencePipelineConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `putInfrastructureConfigurationDetails` <a name="putInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails"></a>

```java
public void putInfrastructureConfigurationDetails(DatasciencePipelineInfrastructureConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `putLogConfigurationDetails` <a name="putLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails"></a>

```java
public void putLogConfigurationDetails(DatasciencePipelineLogConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putLogConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `putStepArtifact` <a name="putStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact"></a>

```java
public void putStepArtifact(IResolvable OR java.util.List<DatasciencePipelineStepArtifact> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepArtifact.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>>

---

##### `putStepDetails` <a name="putStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails"></a>

```java
public void putStepDetails(IResolvable OR java.util.List<DatasciencePipelineStepDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putStepDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts"></a>

```java
public void putTimeouts(DatasciencePipelineTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---

##### `resetConfigurationDetails` <a name="resetConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetConfigurationDetails"></a>

```java
public void resetConfigurationDetails()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeleteRelatedPipelineRuns` <a name="resetDeleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDeleteRelatedPipelineRuns"></a>

```java
public void resetDeleteRelatedPipelineRuns()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetId"></a>

```java
public void resetId()
```

##### `resetInfrastructureConfigurationDetails` <a name="resetInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetInfrastructureConfigurationDetails"></a>

```java
public void resetInfrastructureConfigurationDetails()
```

##### `resetLogConfigurationDetails` <a name="resetLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetLogConfigurationDetails"></a>

```java
public void resetLogConfigurationDetails()
```

##### `resetStepArtifact` <a name="resetStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetStepArtifact"></a>

```java
public void resetStepArtifact()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipeline;

DatasciencePipeline.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipeline;

DatasciencePipeline.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipeline;

DatasciencePipeline.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipeline;

DatasciencePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatasciencePipeline.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatasciencePipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatasciencePipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatasciencePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatasciencePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy">createdBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails">infrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails">logConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact">stepArtifact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails">stepDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput">configurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput">deleteRelatedPipelineRunsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput">infrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput">logConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput">stepArtifactInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput">stepDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns">deleteRelatedPipelineRuns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `configurationDetails`<sup>Required</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetails"></a>

```java
public DatasciencePipelineConfigurationDetailsOutputReference getConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference">DatasciencePipelineConfigurationDetailsOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.createdBy"></a>

```java
public java.lang.String getCreatedBy();
```

- *Type:* java.lang.String

---

##### `infrastructureConfigurationDetails`<sup>Required</sup> <a name="infrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetails"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetailsOutputReference getInfrastructureConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsOutputReference</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `logConfigurationDetails`<sup>Required</sup> <a name="logConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetails"></a>

```java
public DatasciencePipelineLogConfigurationDetailsOutputReference getLogConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference">DatasciencePipelineLogConfigurationDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stepArtifact`<sup>Required</sup> <a name="stepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifact"></a>

```java
public DatasciencePipelineStepArtifactList getStepArtifact();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList">DatasciencePipelineStepArtifactList</a>

---

##### `stepDetails`<sup>Required</sup> <a name="stepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetails"></a>

```java
public DatasciencePipelineStepDetailsList getStepDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList">DatasciencePipelineStepDetailsList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeouts"></a>

```java
public DatasciencePipelineTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference">DatasciencePipelineTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `configurationDetailsInput`<sup>Optional</sup> <a name="configurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.configurationDetailsInput"></a>

```java
public DatasciencePipelineConfigurationDetails getConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteRelatedPipelineRunsInput`<sup>Optional</sup> <a name="deleteRelatedPipelineRunsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRunsInput"></a>

```java
public java.lang.Object getDeleteRelatedPipelineRunsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `infrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="infrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.infrastructureConfigurationDetailsInput"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetails getInfrastructureConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---

##### `logConfigurationDetailsInput`<sup>Optional</sup> <a name="logConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.logConfigurationDetailsInput"></a>

```java
public DatasciencePipelineLogConfigurationDetails getLogConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `stepArtifactInput`<sup>Optional</sup> <a name="stepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepArtifactInput"></a>

```java
public java.lang.Object getStepArtifactInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>>

---

##### `stepDetailsInput`<sup>Optional</sup> <a name="stepDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.stepDetailsInput"></a>

```java
public java.lang.Object getStepDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteRelatedPipelineRuns`<sup>Required</sup> <a name="deleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.deleteRelatedPipelineRuns"></a>

```java
public java.lang.Object getDeleteRelatedPipelineRuns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipeline.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatasciencePipelineConfig <a name="DatasciencePipelineConfig" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineConfig;

DatasciencePipelineConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .projectId(java.lang.String)
    .stepDetails(IResolvable)
    .stepDetails(java.util.List<DatasciencePipelineStepDetails>)
//  .configurationDetails(DatasciencePipelineConfigurationDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deleteRelatedPipelineRuns(java.lang.Boolean)
//  .deleteRelatedPipelineRuns(IResolvable)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .infrastructureConfigurationDetails(DatasciencePipelineInfrastructureConfigurationDetails)
//  .logConfigurationDetails(DatasciencePipelineLogConfigurationDetails)
//  .stepArtifact(IResolvable)
//  .stepArtifact(java.util.List<DatasciencePipelineStepArtifact>)
//  .timeouts(DatasciencePipelineTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails">stepDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>></code> | step_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails">configurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns">deleteRelatedPipelineRuns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails">infrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | infrastructure_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails">logConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | log_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact">stepArtifact</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>></code> | step_artifact block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#compartment_id DatasciencePipeline#compartment_id}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#project_id DatasciencePipeline#project_id}.

---

##### `stepDetails`<sup>Required</sup> <a name="stepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepDetails"></a>

```java
public java.lang.Object getStepDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>>

step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_details DatasciencePipeline#step_details}

---

##### `configurationDetails`<sup>Optional</sup> <a name="configurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.configurationDetails"></a>

```java
public DatasciencePipelineConfigurationDetails getConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#configuration_details DatasciencePipeline#configuration_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#defined_tags DatasciencePipeline#defined_tags}.

---

##### `deleteRelatedPipelineRuns`<sup>Optional</sup> <a name="deleteRelatedPipelineRuns" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.deleteRelatedPipelineRuns"></a>

```java
public java.lang.Object getDeleteRelatedPipelineRuns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete_related_pipeline_runs DatasciencePipeline#delete_related_pipeline_runs}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#display_name DatasciencePipeline#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#freeform_tags DatasciencePipeline#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#id DatasciencePipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructureConfigurationDetails`<sup>Optional</sup> <a name="infrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.infrastructureConfigurationDetails"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetails getInfrastructureConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#infrastructure_configuration_details DatasciencePipeline#infrastructure_configuration_details}

---

##### `logConfigurationDetails`<sup>Optional</sup> <a name="logConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.logConfigurationDetails"></a>

```java
public DatasciencePipelineLogConfigurationDetails getLogConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

log_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_configuration_details DatasciencePipeline#log_configuration_details}

---

##### `stepArtifact`<sup>Optional</sup> <a name="stepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.stepArtifact"></a>

```java
public java.lang.Object getStepArtifact();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>>

step_artifact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_artifact DatasciencePipeline#step_artifact}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfig.property.timeouts"></a>

```java
public DatasciencePipelineTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#timeouts DatasciencePipeline#timeouts}

---

### DatasciencePipelineConfigurationDetails <a name="DatasciencePipelineConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineConfigurationDetails;

DatasciencePipelineConfigurationDetails.builder()
    .type(java.lang.String)
//  .commandLineArguments(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .maximumRuntimeInMinutes(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#type DatasciencePipeline#type}.

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineInfrastructureConfigurationDetails <a name="DatasciencePipelineInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineInfrastructureConfigurationDetails;

DatasciencePipelineInfrastructureConfigurationDetails.builder()
    .blockStorageSizeInGbs(java.lang.Number)
    .shapeName(java.lang.String)
//  .shapeConfigDetails(DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `shapeConfigDetails`<sup>Optional</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails getShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails;

DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineLogConfigurationDetails <a name="DatasciencePipelineLogConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineLogConfigurationDetails;

DatasciencePipelineLogConfigurationDetails.builder()
//  .enableAutoLogCreation(java.lang.Boolean)
//  .enableAutoLogCreation(IResolvable)
//  .enableLogging(java.lang.Boolean)
//  .enableLogging(IResolvable)
//  .logGroupId(java.lang.String)
//  .logId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId">logId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}. |

---

##### `enableAutoLogCreation`<sup>Optional</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableAutoLogCreation"></a>

```java
public java.lang.Object getEnableAutoLogCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_auto_log_creation DatasciencePipeline#enable_auto_log_creation}.

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#enable_logging DatasciencePipeline#enable_logging}.

---

##### `logGroupId`<sup>Optional</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_group_id DatasciencePipeline#log_group_id}.

---

##### `logId`<sup>Optional</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#log_id DatasciencePipeline#log_id}.

---

### DatasciencePipelineStepArtifact <a name="DatasciencePipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepArtifact;

DatasciencePipelineStepArtifact.builder()
    .artifactContentLength(java.lang.String)
    .pipelineStepArtifact(java.lang.String)
    .stepName(java.lang.String)
//  .artifactContentDisposition(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength">artifactContentLength</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact">pipelineStepArtifact</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName">stepName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}. |

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentLength"></a>

```java
public java.lang.String getArtifactContentLength();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_length DatasciencePipeline#artifact_content_length}.

---

##### `pipelineStepArtifact`<sup>Required</sup> <a name="pipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.pipelineStepArtifact"></a>

```java
public java.lang.String getPipelineStepArtifact();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#pipeline_step_artifact DatasciencePipeline#pipeline_step_artifact}.

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `artifactContentDisposition`<sup>Optional</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact.property.artifactContentDisposition"></a>

```java
public java.lang.String getArtifactContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#artifact_content_disposition DatasciencePipeline#artifact_content_disposition}.

---

### DatasciencePipelineStepDetails <a name="DatasciencePipelineStepDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetails;

DatasciencePipelineStepDetails.builder()
    .stepName(java.lang.String)
    .stepType(java.lang.String)
//  .dependsOn(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .isArtifactUploaded(java.lang.Boolean)
//  .isArtifactUploaded(IResolvable)
//  .jobId(java.lang.String)
//  .stepConfigurationDetails(DatasciencePipelineStepDetailsStepConfigurationDetails)
//  .stepContainerConfigurationDetails(DatasciencePipelineStepDetailsStepContainerConfigurationDetails)
//  .stepInfrastructureConfigurationDetails(DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName">stepName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType">stepType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded">isArtifactUploaded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId">jobId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | step_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | step_container_configuration_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails">stepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | step_infrastructure_configuration_details block. |

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_name DatasciencePipeline#step_name}.

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepType"></a>

```java
public java.lang.String getStepType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_type DatasciencePipeline#step_type}.

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#depends_on DatasciencePipeline#depends_on}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#description DatasciencePipeline#description}.

---

##### `isArtifactUploaded`<sup>Optional</sup> <a name="isArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.isArtifactUploaded"></a>

```java
public java.lang.Object getIsArtifactUploaded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#is_artifact_uploaded DatasciencePipeline#is_artifact_uploaded}.

---

##### `jobId`<sup>Optional</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#job_id DatasciencePipeline#job_id}.

---

##### `stepConfigurationDetails`<sup>Optional</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepConfigurationDetails getStepConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

step_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_configuration_details DatasciencePipeline#step_configuration_details}

---

##### `stepContainerConfigurationDetails`<sup>Optional</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepContainerConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepContainerConfigurationDetails getStepContainerConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

step_container_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_container_configuration_details DatasciencePipeline#step_container_configuration_details}

---

##### `stepInfrastructureConfigurationDetails`<sup>Optional</sup> <a name="stepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails.property.stepInfrastructureConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails getStepInfrastructureConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

step_infrastructure_configuration_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#step_infrastructure_configuration_details DatasciencePipeline#step_infrastructure_configuration_details}

---

### DatasciencePipelineStepDetailsStepConfigurationDetails <a name="DatasciencePipelineStepDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepConfigurationDetails;

DatasciencePipelineStepDetailsStepConfigurationDetails.builder()
//  .commandLineArguments(java.lang.String)
//  .environmentVariables(java.util.Map<java.lang.String, java.lang.String>)
//  .maximumRuntimeInMinutes(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}. |

---

##### `commandLineArguments`<sup>Optional</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#command_line_arguments DatasciencePipeline#command_line_arguments}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#environment_variables DatasciencePipeline#environment_variables}.

---

##### `maximumRuntimeInMinutes`<sup>Optional</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#maximum_runtime_in_minutes DatasciencePipeline#maximum_runtime_in_minutes}.

---

### DatasciencePipelineStepDetailsStepContainerConfigurationDetails <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails;

DatasciencePipelineStepDetailsStepContainerConfigurationDetails.builder()
    .containerType(java.lang.String)
    .image(java.lang.String)
//  .cmd(java.util.List<java.lang.String>)
//  .entrypoint(java.util.List<java.lang.String>)
//  .imageDigest(java.lang.String)
//  .imageSignatureId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType">containerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd">cmd</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId">imageSignatureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}. |

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#container_type DatasciencePipeline#container_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image DatasciencePipeline#image}.

---

##### `cmd`<sup>Optional</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.cmd"></a>

```java
public java.util.List<java.lang.String> getCmd();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#cmd DatasciencePipeline#cmd}.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#entrypoint DatasciencePipeline#entrypoint}.

---

##### `imageDigest`<sup>Optional</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_digest DatasciencePipeline#image_digest}.

---

##### `imageSignatureId`<sup>Optional</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails.property.imageSignatureId"></a>

```java
public java.lang.String getImageSignatureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#image_signature_id DatasciencePipeline#image_signature_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails;

DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.builder()
    .blockStorageSizeInGbs(java.lang.Number)
    .shapeName(java.lang.String)
//  .shapeConfigDetails(DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | shape_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}. |

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#block_storage_size_in_gbs DatasciencePipeline#block_storage_size_in_gbs}.

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_name DatasciencePipeline#shape_name}.

---

##### `shapeConfigDetails`<sup>Optional</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.shapeConfigDetails"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails getShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

shape_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#shape_config_details DatasciencePipeline#shape_config_details}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#subnet_id DatasciencePipeline#subnet_id}.

---

### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails;

DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.builder()
//  .memoryInGbs(java.lang.Number)
//  .ocpus(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}. |

---

##### `memoryInGbs`<sup>Optional</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#memory_in_gbs DatasciencePipeline#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#ocpus DatasciencePipeline#ocpus}.

---

### DatasciencePipelineTimeouts <a name="DatasciencePipelineTimeouts" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineTimeouts;

DatasciencePipelineTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#create DatasciencePipeline#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#delete DatasciencePipeline#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/datascience_pipeline#update DatasciencePipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasciencePipelineConfigurationDetailsOutputReference <a name="DatasciencePipelineConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineConfigurationDetailsOutputReference;

new DatasciencePipelineConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```java
public void resetCommandLineArguments()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```java
public void resetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```java
public java.lang.String getCommandLineArgumentsInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```java
public java.lang.String getMaximumRuntimeInMinutesInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineConfigurationDetails">DatasciencePipelineConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference;

new DatasciencePipelineInfrastructureConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">putShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">resetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShapeConfigDetails` <a name="putShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```java
public void putShapeConfigDetails(DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `resetShapeConfigDetails` <a name="resetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```java
public void resetShapeConfigDetails()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">blockStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">shapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shapeConfigDetails`<sup>Required</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference getShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `blockStorageSizeInGbsInput`<sup>Optional</sup> <a name="blockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```java
public java.lang.Number getBlockStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `shapeConfigDetailsInput`<sup>Optional</sup> <a name="shapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails getShapeConfigDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetails">DatasciencePipelineInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference;

new DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineLogConfigurationDetailsOutputReference <a name="DatasciencePipelineLogConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineLogConfigurationDetailsOutputReference;

new DatasciencePipelineLogConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation">resetEnableAutoLogCreation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId">resetLogGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId">resetLogId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAutoLogCreation` <a name="resetEnableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableAutoLogCreation"></a>

```java
public void resetEnableAutoLogCreation()
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetEnableLogging"></a>

```java
public void resetEnableLogging()
```

##### `resetLogGroupId` <a name="resetLogGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogGroupId"></a>

```java
public void resetLogGroupId()
```

##### `resetLogId` <a name="resetLogId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.resetLogId"></a>

```java
public void resetLogId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput">enableAutoLogCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput">logGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput">logIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation">enableAutoLogCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging">enableLogging</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId">logGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId">logId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableAutoLogCreationInput`<sup>Optional</sup> <a name="enableAutoLogCreationInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreationInput"></a>

```java
public java.lang.Object getEnableAutoLogCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLoggingInput"></a>

```java
public java.lang.Object getEnableLoggingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupIdInput`<sup>Optional</sup> <a name="logGroupIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupIdInput"></a>

```java
public java.lang.String getLogGroupIdInput();
```

- *Type:* java.lang.String

---

##### `logIdInput`<sup>Optional</sup> <a name="logIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logIdInput"></a>

```java
public java.lang.String getLogIdInput();
```

- *Type:* java.lang.String

---

##### `enableAutoLogCreation`<sup>Required</sup> <a name="enableAutoLogCreation" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableAutoLogCreation"></a>

```java
public java.lang.Object getEnableAutoLogCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.enableLogging"></a>

```java
public java.lang.Object getEnableLogging();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logGroupId"></a>

```java
public java.lang.String getLogGroupId();
```

- *Type:* java.lang.String

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.logId"></a>

```java
public java.lang.String getLogId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineLogConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineLogConfigurationDetails">DatasciencePipelineLogConfigurationDetails</a>

---


### DatasciencePipelineStepArtifactList <a name="DatasciencePipelineStepArtifactList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepArtifactList;

new DatasciencePipelineStepArtifactList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get"></a>

```java
public DatasciencePipelineStepArtifactOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>>

---


### DatasciencePipelineStepArtifactOutputReference <a name="DatasciencePipelineStepArtifactOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepArtifactOutputReference;

new DatasciencePipelineStepArtifactOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition">resetArtifactContentDisposition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactContentDisposition` <a name="resetArtifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.resetArtifactContentDisposition"></a>

```java
public void resetArtifactContentDisposition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5">artifactContentMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified">artifactLastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput">artifactContentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput">artifactContentLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput">pipelineStepArtifactInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition">artifactContentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength">artifactContentLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact">pipelineStepArtifact</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName">stepName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactContentMd5`<sup>Required</sup> <a name="artifactContentMd5" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentMd5"></a>

```java
public java.lang.String getArtifactContentMd5();
```

- *Type:* java.lang.String

---

##### `artifactLastModified`<sup>Required</sup> <a name="artifactLastModified" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactLastModified"></a>

```java
public java.lang.String getArtifactLastModified();
```

- *Type:* java.lang.String

---

##### `artifactContentDispositionInput`<sup>Optional</sup> <a name="artifactContentDispositionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDispositionInput"></a>

```java
public java.lang.String getArtifactContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `artifactContentLengthInput`<sup>Optional</sup> <a name="artifactContentLengthInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLengthInput"></a>

```java
public java.lang.String getArtifactContentLengthInput();
```

- *Type:* java.lang.String

---

##### `pipelineStepArtifactInput`<sup>Optional</sup> <a name="pipelineStepArtifactInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifactInput"></a>

```java
public java.lang.String getPipelineStepArtifactInput();
```

- *Type:* java.lang.String

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepNameInput"></a>

```java
public java.lang.String getStepNameInput();
```

- *Type:* java.lang.String

---

##### `artifactContentDisposition`<sup>Required</sup> <a name="artifactContentDisposition" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentDisposition"></a>

```java
public java.lang.String getArtifactContentDisposition();
```

- *Type:* java.lang.String

---

##### `artifactContentLength`<sup>Required</sup> <a name="artifactContentLength" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.artifactContentLength"></a>

```java
public java.lang.String getArtifactContentLength();
```

- *Type:* java.lang.String

---

##### `pipelineStepArtifact`<sup>Required</sup> <a name="pipelineStepArtifact" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.pipelineStepArtifact"></a>

```java
public java.lang.String getPipelineStepArtifact();
```

- *Type:* java.lang.String

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifactOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepArtifact">DatasciencePipelineStepArtifact</a>

---


### DatasciencePipelineStepDetailsList <a name="DatasciencePipelineStepDetailsList" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsList;

new DatasciencePipelineStepDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get"></a>

```java
public DatasciencePipelineStepDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>>

---


### DatasciencePipelineStepDetailsOutputReference <a name="DatasciencePipelineStepDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsOutputReference;

new DatasciencePipelineStepDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails">putStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails">putStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails">putStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn">resetDependsOn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded">resetIsArtifactUploaded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId">resetJobId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails">resetStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails">resetStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails">resetStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStepConfigurationDetails` <a name="putStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails"></a>

```java
public void putStepConfigurationDetails(DatasciencePipelineStepDetailsStepConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `putStepContainerConfigurationDetails` <a name="putStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails"></a>

```java
public void putStepContainerConfigurationDetails(DatasciencePipelineStepDetailsStepContainerConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepContainerConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `putStepInfrastructureConfigurationDetails` <a name="putStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails"></a>

```java
public void putStepInfrastructureConfigurationDetails(DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.putStepInfrastructureConfigurationDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `resetDependsOn` <a name="resetDependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDependsOn"></a>

```java
public void resetDependsOn()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsArtifactUploaded` <a name="resetIsArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetIsArtifactUploaded"></a>

```java
public void resetIsArtifactUploaded()
```

##### `resetJobId` <a name="resetJobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetJobId"></a>

```java
public void resetJobId()
```

##### `resetStepConfigurationDetails` <a name="resetStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepConfigurationDetails"></a>

```java
public void resetStepConfigurationDetails()
```

##### `resetStepContainerConfigurationDetails` <a name="resetStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepContainerConfigurationDetails"></a>

```java
public void resetStepContainerConfigurationDetails()
```

##### `resetStepInfrastructureConfigurationDetails` <a name="resetStepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.resetStepInfrastructureConfigurationDetails"></a>

```java
public void resetStepInfrastructureConfigurationDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails">stepConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails">stepContainerConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails">stepInfrastructureConfigurationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput">dependsOnInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput">isArtifactUploadedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput">jobIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput">stepConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput">stepContainerConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput">stepInfrastructureConfigurationDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput">stepTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded">isArtifactUploaded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId">jobId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName">stepName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType">stepType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stepConfigurationDetails`<sup>Required</sup> <a name="stepConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference getStepConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference</a>

---

##### `stepContainerConfigurationDetails`<sup>Required</sup> <a name="stepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference getStepContainerConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference</a>

---

##### `stepInfrastructureConfigurationDetails`<sup>Required</sup> <a name="stepInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetails"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference getStepInfrastructureConfigurationDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference</a>

---

##### `dependsOnInput`<sup>Optional</sup> <a name="dependsOnInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOnInput"></a>

```java
public java.util.List<java.lang.String> getDependsOnInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `isArtifactUploadedInput`<sup>Optional</sup> <a name="isArtifactUploadedInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploadedInput"></a>

```java
public java.lang.Object getIsArtifactUploadedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobIdInput"></a>

```java
public java.lang.String getJobIdInput();
```

- *Type:* java.lang.String

---

##### `stepConfigurationDetailsInput`<sup>Optional</sup> <a name="stepConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepConfigurationDetailsInput"></a>

```java
public DatasciencePipelineStepDetailsStepConfigurationDetails getStepConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---

##### `stepContainerConfigurationDetailsInput`<sup>Optional</sup> <a name="stepContainerConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepContainerConfigurationDetailsInput"></a>

```java
public DatasciencePipelineStepDetailsStepContainerConfigurationDetails getStepContainerConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---

##### `stepInfrastructureConfigurationDetailsInput`<sup>Optional</sup> <a name="stepInfrastructureConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepInfrastructureConfigurationDetailsInput"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails getStepInfrastructureConfigurationDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepNameInput"></a>

```java
public java.lang.String getStepNameInput();
```

- *Type:* java.lang.String

---

##### `stepTypeInput`<sup>Optional</sup> <a name="stepTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepTypeInput"></a>

```java
public java.lang.String getStepTypeInput();
```

- *Type:* java.lang.String

---

##### `dependsOn`<sup>Required</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isArtifactUploaded`<sup>Required</sup> <a name="isArtifactUploaded" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.isArtifactUploaded"></a>

```java
public java.lang.Object getIsArtifactUploaded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.jobId"></a>

```java
public java.lang.String getJobId();
```

- *Type:* java.lang.String

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepName"></a>

```java
public java.lang.String getStepName();
```

- *Type:* java.lang.String

---

##### `stepType`<sup>Required</sup> <a name="stepType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.stepType"></a>

```java
public java.lang.String getStepType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetails">DatasciencePipelineStepDetails</a>

---


### DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference;

new DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments">resetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes">resetMaximumRuntimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommandLineArguments` <a name="resetCommandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetCommandLineArguments"></a>

```java
public void resetCommandLineArguments()
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetEnvironmentVariables"></a>

```java
public void resetEnvironmentVariables()
```

##### `resetMaximumRuntimeInMinutes` <a name="resetMaximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.resetMaximumRuntimeInMinutes"></a>

```java
public void resetMaximumRuntimeInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput">commandLineArgumentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput">maximumRuntimeInMinutesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">commandLineArguments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environmentVariables</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximumRuntimeInMinutes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commandLineArgumentsInput`<sup>Optional</sup> <a name="commandLineArgumentsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArgumentsInput"></a>

```java
public java.lang.String getCommandLineArgumentsInput();
```

- *Type:* java.lang.String

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariablesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariablesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maximumRuntimeInMinutesInput`<sup>Optional</sup> <a name="maximumRuntimeInMinutesInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutesInput"></a>

```java
public java.lang.String getMaximumRuntimeInMinutesInput();
```

- *Type:* java.lang.String

---

##### `commandLineArguments`<sup>Required</sup> <a name="commandLineArguments" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```java
public java.lang.String getCommandLineArguments();
```

- *Type:* java.lang.String

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnvironmentVariables();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `maximumRuntimeInMinutes`<sup>Required</sup> <a name="maximumRuntimeInMinutes" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```java
public java.lang.String getMaximumRuntimeInMinutes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineStepDetailsStepConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepConfigurationDetails">DatasciencePipelineStepDetailsStepConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference;

new DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd">resetCmd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest">resetImageDigest</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId">resetImageSignatureId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCmd` <a name="resetCmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetCmd"></a>

```java
public void resetCmd()
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetEntrypoint"></a>

```java
public void resetEntrypoint()
```

##### `resetImageDigest` <a name="resetImageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageDigest"></a>

```java
public void resetImageDigest()
```

##### `resetImageSignatureId` <a name="resetImageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.resetImageSignatureId"></a>

```java
public void resetImageSignatureId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput">cmdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput">containerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput">entrypointInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput">imageDigestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput">imageSignatureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">containerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">imageSignatureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cmdInput`<sup>Optional</sup> <a name="cmdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmdInput"></a>

```java
public java.util.List<java.lang.String> getCmdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerTypeInput`<sup>Optional</sup> <a name="containerTypeInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerTypeInput"></a>

```java
public java.lang.String getContainerTypeInput();
```

- *Type:* java.lang.String

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypointInput"></a>

```java
public java.util.List<java.lang.String> getEntrypointInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageDigestInput`<sup>Optional</sup> <a name="imageDigestInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigestInput"></a>

```java
public java.lang.String getImageDigestInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `imageSignatureIdInput`<sup>Optional</sup> <a name="imageSignatureIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureIdInput"></a>

```java
public java.lang.String getImageSignatureIdInput();
```

- *Type:* java.lang.String

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```java
public java.util.List<java.lang.String> getCmd();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerType`<sup>Required</sup> <a name="containerType" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```java
public java.lang.String getContainerType();
```

- *Type:* java.lang.String

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```java
public java.util.List<java.lang.String> getEntrypoint();
```

- *Type:* java.util.List<java.lang.String>

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `imageSignatureId`<sup>Required</sup> <a name="imageSignatureId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```java
public java.lang.String getImageSignatureId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineStepDetailsStepContainerConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepContainerConfigurationDetails">DatasciencePipelineStepDetailsStepContainerConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference;

new DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails">putShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails">resetShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShapeConfigDetails` <a name="putShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails"></a>

```java
public void putShapeConfigDetails(DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.putShapeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `resetShapeConfigDetails` <a name="resetShapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetShapeConfigDetails"></a>

```java
public void resetShapeConfigDetails()
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails">shapeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput">blockStorageSizeInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput">shapeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput">shapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">blockStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName">shapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `shapeConfigDetails`<sup>Required</sup> <a name="shapeConfigDetails" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetails"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference getShapeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference</a>

---

##### `blockStorageSizeInGbsInput`<sup>Optional</sup> <a name="blockStorageSizeInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbsInput"></a>

```java
public java.lang.Number getBlockStorageSizeInGbsInput();
```

- *Type:* java.lang.Number

---

##### `shapeConfigDetailsInput`<sup>Optional</sup> <a name="shapeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeConfigDetailsInput"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails getShapeConfigDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---

##### `shapeNameInput`<sup>Optional</sup> <a name="shapeNameInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeNameInput"></a>

```java
public java.lang.String getShapeNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `blockStorageSizeInGbs`<sup>Required</sup> <a name="blockStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```java
public java.lang.Number getBlockStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```java
public java.lang.String getShapeName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetails</a>

---


### DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference <a name="DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference;

new DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs">resetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus">resetOcpus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMemoryInGbs` <a name="resetMemoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetMemoryInGbs"></a>

```java
public void resetMemoryInGbs()
```

##### `resetOcpus` <a name="resetOcpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.resetOcpus"></a>

```java
public void resetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput">memoryInGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput">ocpusInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbsInput`<sup>Optional</sup> <a name="memoryInGbsInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbsInput"></a>

```java
public java.lang.Number getMemoryInGbsInput();
```

- *Type:* java.lang.Number

---

##### `ocpusInput`<sup>Optional</sup> <a name="ocpusInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpusInput"></a>

```java
public java.lang.Number getOcpusInput();
```

- *Type:* java.lang.Number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails">DatasciencePipelineStepDetailsStepInfrastructureConfigurationDetailsShapeConfigDetails</a>

---


### DatasciencePipelineTimeoutsOutputReference <a name="DatasciencePipelineTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.datascience_pipeline.DatasciencePipelineTimeoutsOutputReference;

new DatasciencePipelineTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.datasciencePipeline.DatasciencePipelineTimeouts">DatasciencePipelineTimeouts</a>

---



