# `aiDocumentModel` Submodule <a name="`aiDocumentModel` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentModel <a name="AiDocumentModel" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model oci_ai_document_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModel;

AiDocumentModel.Builder.create(Construct scope, java.lang.String id)
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
    .modelType(java.lang.String)
    .projectId(java.lang.String)
//  .componentModels(IResolvable)
//  .componentModels(java.util.List<AiDocumentModelComponentModels>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isQuickMode(java.lang.Boolean)
//  .isQuickMode(IResolvable)
//  .maxTrainingTimeInHours(java.lang.Number)
//  .modelId(java.lang.String)
//  .modelVersion(java.lang.String)
//  .testingDataset(AiDocumentModelTestingDataset)
//  .timeouts(AiDocumentModelTimeouts)
//  .trainingDataset(AiDocumentModelTrainingDataset)
//  .validationDataset(AiDocumentModelValidationDataset)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.componentModels">componentModels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>></code> | component_models block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.isQuickMode">isQuickMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.maxTrainingTimeInHours">maxTrainingTimeInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | validation_dataset block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}.

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}.

---

##### `componentModels`<sup>Optional</sup> <a name="componentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.componentModels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>>

component_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#component_models AiDocumentModel#component_models}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isQuickMode`<sup>Optional</sup> <a name="isQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.isQuickMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}.

---

##### `maxTrainingTimeInHours`<sup>Optional</sup> <a name="maxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.maxTrainingTimeInHours"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}.

---

##### `testingDataset`<sup>Optional</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.testingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#testing_dataset AiDocumentModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#timeouts AiDocumentModel#timeouts}

---

##### `trainingDataset`<sup>Optional</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.trainingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#training_dataset AiDocumentModel#training_dataset}

---

##### `validationDataset`<sup>Optional</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.validationDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#validation_dataset AiDocumentModel#validation_dataset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels">putComponentModels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset">putTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset">putTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset">putValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels">resetComponentModels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode">resetIsQuickMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours">resetMaxTrainingTimeInHours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId">resetModelId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset">resetTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset">resetTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset">resetValidationDataset</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentModels` <a name="putComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels"></a>

```java
public void putComponentModels(IResolvable OR java.util.List<AiDocumentModelComponentModels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>>

---

##### `putTestingDataset` <a name="putTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset"></a>

```java
public void putTestingDataset(AiDocumentModelTestingDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts"></a>

```java
public void putTimeouts(AiDocumentModelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---

##### `putTrainingDataset` <a name="putTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset"></a>

```java
public void putTrainingDataset(AiDocumentModelTrainingDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---

##### `putValidationDataset` <a name="putValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset"></a>

```java
public void putValidationDataset(AiDocumentModelValidationDataset value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---

##### `resetComponentModels` <a name="resetComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels"></a>

```java
public void resetComponentModels()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId"></a>

```java
public void resetId()
```

##### `resetIsQuickMode` <a name="resetIsQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode"></a>

```java
public void resetIsQuickMode()
```

##### `resetMaxTrainingTimeInHours` <a name="resetMaxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours"></a>

```java
public void resetMaxTrainingTimeInHours()
```

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId"></a>

```java
public void resetModelId()
```

##### `resetModelVersion` <a name="resetModelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion"></a>

```java
public void resetModelVersion()
```

##### `resetTestingDataset` <a name="resetTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset"></a>

```java
public void resetTestingDataset()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrainingDataset` <a name="resetTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset"></a>

```java
public void resetTrainingDataset()
```

##### `resetValidationDataset` <a name="resetValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset"></a>

```java
public void resetValidationDataset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModel;

AiDocumentModel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModel;

AiDocumentModel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModel;

AiDocumentModel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModel;

AiDocumentModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiDocumentModel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiDocumentModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiDocumentModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels">componentModels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel">isComposedModel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels">labels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId">tenancyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours">trainedTimeInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput">componentModelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput">isQuickModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput">maxTrainingTimeInHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput">modelTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput">modelVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput">testingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput">trainingDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput">validationDatasetInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode">isQuickMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours">maxTrainingTimeInHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `componentModels`<sup>Required</sup> <a name="componentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels"></a>

```java
public AiDocumentModelComponentModelsList getComponentModels();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a>

---

##### `isComposedModel`<sup>Required</sup> <a name="isComposedModel" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel"></a>

```java
public IResolvable getIsComposedModel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels"></a>

```java
public java.util.List<java.lang.String> getLabels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics"></a>

```java
public AiDocumentModelMetricsList getMetrics();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId"></a>

```java
public java.lang.String getTenancyId();
```

- *Type:* java.lang.String

---

##### `testingDataset`<sup>Required</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset"></a>

```java
public AiDocumentModelTestingDatasetOutputReference getTestingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts"></a>

```java
public AiDocumentModelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `trainedTimeInHours`<sup>Required</sup> <a name="trainedTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours"></a>

```java
public java.lang.Number getTrainedTimeInHours();
```

- *Type:* java.lang.Number

---

##### `trainingDataset`<sup>Required</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset"></a>

```java
public AiDocumentModelTrainingDatasetOutputReference getTrainingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a>

---

##### `validationDataset`<sup>Required</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset"></a>

```java
public AiDocumentModelValidationDatasetOutputReference getValidationDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `componentModelsInput`<sup>Optional</sup> <a name="componentModelsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput"></a>

```java
public java.lang.Object getComponentModelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isQuickModeInput`<sup>Optional</sup> <a name="isQuickModeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput"></a>

```java
public java.lang.Object getIsQuickModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxTrainingTimeInHoursInput`<sup>Optional</sup> <a name="maxTrainingTimeInHoursInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput"></a>

```java
public java.lang.Number getMaxTrainingTimeInHoursInput();
```

- *Type:* java.lang.Number

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput"></a>

```java
public java.lang.String getModelTypeInput();
```

- *Type:* java.lang.String

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput"></a>

```java
public java.lang.String getModelVersionInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `testingDatasetInput`<sup>Optional</sup> <a name="testingDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput"></a>

```java
public AiDocumentModelTestingDataset getTestingDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---

##### `trainingDatasetInput`<sup>Optional</sup> <a name="trainingDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput"></a>

```java
public AiDocumentModelTrainingDataset getTrainingDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---

##### `validationDatasetInput`<sup>Optional</sup> <a name="validationDatasetInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput"></a>

```java
public AiDocumentModelValidationDataset getValidationDatasetInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isQuickMode`<sup>Required</sup> <a name="isQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode"></a>

```java
public java.lang.Object getIsQuickMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxTrainingTimeInHours`<sup>Required</sup> <a name="maxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours"></a>

```java
public java.lang.Number getMaxTrainingTimeInHours();
```

- *Type:* java.lang.Number

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentModelComponentModels <a name="AiDocumentModelComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelComponentModels;

AiDocumentModelComponentModels.builder()
//  .modelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

### AiDocumentModelConfig <a name="AiDocumentModelConfig" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelConfig;

AiDocumentModelConfig.builder()
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
    .modelType(java.lang.String)
    .projectId(java.lang.String)
//  .componentModels(IResolvable)
//  .componentModels(java.util.List<AiDocumentModelComponentModels>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isQuickMode(java.lang.Boolean)
//  .isQuickMode(IResolvable)
//  .maxTrainingTimeInHours(java.lang.Number)
//  .modelId(java.lang.String)
//  .modelVersion(java.lang.String)
//  .testingDataset(AiDocumentModelTestingDataset)
//  .timeouts(AiDocumentModelTimeouts)
//  .trainingDataset(AiDocumentModelTrainingDataset)
//  .validationDataset(AiDocumentModelValidationDataset)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType">modelType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels">componentModels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>></code> | component_models block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode">isQuickMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours">maxTrainingTimeInHours</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId">modelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion">modelVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset">testingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset">trainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset">validationDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | validation_dataset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}.

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}.

---

##### `componentModels`<sup>Optional</sup> <a name="componentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels"></a>

```java
public java.lang.Object getComponentModels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>>

component_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#component_models AiDocumentModel#component_models}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isQuickMode`<sup>Optional</sup> <a name="isQuickMode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode"></a>

```java
public java.lang.Object getIsQuickMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}.

---

##### `maxTrainingTimeInHours`<sup>Optional</sup> <a name="maxTrainingTimeInHours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours"></a>

```java
public java.lang.Number getMaxTrainingTimeInHours();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}.

---

##### `modelId`<sup>Optional</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion"></a>

```java
public java.lang.String getModelVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}.

---

##### `testingDataset`<sup>Optional</sup> <a name="testingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset"></a>

```java
public AiDocumentModelTestingDataset getTestingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#testing_dataset AiDocumentModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts"></a>

```java
public AiDocumentModelTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#timeouts AiDocumentModel#timeouts}

---

##### `trainingDataset`<sup>Optional</sup> <a name="trainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset"></a>

```java
public AiDocumentModelTrainingDataset getTrainingDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#training_dataset AiDocumentModel#training_dataset}

---

##### `validationDataset`<sup>Optional</sup> <a name="validationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset"></a>

```java
public AiDocumentModelValidationDataset getValidationDataset();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#validation_dataset AiDocumentModel#validation_dataset}

---

### AiDocumentModelMetrics <a name="AiDocumentModelMetrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetrics;

AiDocumentModelMetrics.builder()
    .build();
```


### AiDocumentModelMetricsDatasetSummary <a name="AiDocumentModelMetricsDatasetSummary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsDatasetSummary;

AiDocumentModelMetricsDatasetSummary.builder()
    .build();
```


### AiDocumentModelMetricsLabelMetricsReport <a name="AiDocumentModelMetricsLabelMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReport;

AiDocumentModelMetricsLabelMetricsReport.builder()
    .build();
```


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries;

AiDocumentModelMetricsLabelMetricsReportConfidenceEntries.builder()
    .build();
```


### AiDocumentModelMetricsOverallMetricsReport <a name="AiDocumentModelMetricsOverallMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReport;

AiDocumentModelMetricsOverallMetricsReport.builder()
    .build();
```


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries;

AiDocumentModelMetricsOverallMetricsReportConfidenceEntries.builder()
    .build();
```


### AiDocumentModelTestingDataset <a name="AiDocumentModelTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTestingDataset;

AiDocumentModelTestingDataset.builder()
    .datasetType(java.lang.String)
//  .bucket(java.lang.String)
//  .datasetId(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelTimeouts <a name="AiDocumentModelTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTimeouts;

AiDocumentModelTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}.

---

### AiDocumentModelTrainingDataset <a name="AiDocumentModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTrainingDataset;

AiDocumentModelTrainingDataset.builder()
    .datasetType(java.lang.String)
//  .bucket(java.lang.String)
//  .datasetId(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelValidationDataset <a name="AiDocumentModelValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelValidationDataset;

AiDocumentModelValidationDataset.builder()
    .datasetType(java.lang.String)
//  .bucket(java.lang.String)
//  .datasetId(java.lang.String)
//  .namespace(java.lang.String)
//  .object(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `datasetId`<sup>Optional</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentModelComponentModelsList <a name="AiDocumentModelComponentModelsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelComponentModelsList;

new AiDocumentModelComponentModelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get"></a>

```java
public AiDocumentModelComponentModelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>>

---


### AiDocumentModelComponentModelsOutputReference <a name="AiDocumentModelComponentModelsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelComponentModelsOutputReference;

new AiDocumentModelComponentModelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId">resetModelId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModelId` <a name="resetModelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId"></a>

```java
public void resetModelId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput">modelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId">modelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelIdInput`<sup>Optional</sup> <a name="modelIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput"></a>

```java
public java.lang.String getModelIdInput();
```

- *Type:* java.lang.String

---

##### `modelId`<sup>Required</sup> <a name="modelId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId"></a>

```java
public java.lang.String getModelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>

---


### AiDocumentModelMetricsDatasetSummaryList <a name="AiDocumentModelMetricsDatasetSummaryList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsDatasetSummaryList;

new AiDocumentModelMetricsDatasetSummaryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get"></a>

```java
public AiDocumentModelMetricsDatasetSummaryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsDatasetSummaryOutputReference <a name="AiDocumentModelMetricsDatasetSummaryOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsDatasetSummaryOutputReference;

new AiDocumentModelMetricsDatasetSummaryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount">testSampleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount">trainingSampleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount">validationSampleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `testSampleCount`<sup>Required</sup> <a name="testSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount"></a>

```java
public java.lang.Number getTestSampleCount();
```

- *Type:* java.lang.Number

---

##### `trainingSampleCount`<sup>Required</sup> <a name="trainingSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount"></a>

```java
public java.lang.Number getTrainingSampleCount();
```

- *Type:* java.lang.Number

---

##### `validationSampleCount`<sup>Required</sup> <a name="validationSampleCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount"></a>

```java
public java.lang.Number getValidationSampleCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetricsDatasetSummary getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a>

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList;

new AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get"></a>

```java
public AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference;

new AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```java
public java.lang.Number getAccuracy();
```

- *Type:* java.lang.Number

---

##### `f1Score`<sup>Required</sup> <a name="f1Score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```java
public java.lang.Number getF1Score();
```

- *Type:* java.lang.Number

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```java
public java.lang.Number getPrecision();
```

- *Type:* java.lang.Number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```java
public java.lang.Number getRecall();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetricsLabelMetricsReportConfidenceEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsLabelMetricsReportList <a name="AiDocumentModelMetricsLabelMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReportList;

new AiDocumentModelMetricsLabelMetricsReportList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get"></a>

```java
public AiDocumentModelMetricsLabelMetricsReportOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsLabelMetricsReportOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsLabelMetricsReportOutputReference;

new AiDocumentModelMetricsLabelMetricsReportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries">confidenceEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount">documentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision">meanAveragePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceEntries`<sup>Required</sup> <a name="confidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries"></a>

```java
public AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList getConfidenceEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a>

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount"></a>

```java
public java.lang.Number getDocumentCount();
```

- *Type:* java.lang.Number

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `meanAveragePrecision`<sup>Required</sup> <a name="meanAveragePrecision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision"></a>

```java
public java.lang.Number getMeanAveragePrecision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetricsLabelMetricsReport getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a>

---


### AiDocumentModelMetricsList <a name="AiDocumentModelMetricsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsList;

new AiDocumentModelMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get"></a>

```java
public AiDocumentModelMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsOutputReference <a name="AiDocumentModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOutputReference;

new AiDocumentModelMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary">datasetSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport">labelMetricsReport</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType">modelType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport">overallMetricsReport</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetSummary`<sup>Required</sup> <a name="datasetSummary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary"></a>

```java
public AiDocumentModelMetricsDatasetSummaryList getDatasetSummary();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a>

---

##### `labelMetricsReport`<sup>Required</sup> <a name="labelMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport"></a>

```java
public AiDocumentModelMetricsLabelMetricsReportList getLabelMetricsReport();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType"></a>

```java
public java.lang.String getModelType();
```

- *Type:* java.lang.String

---

##### `overallMetricsReport`<sup>Required</sup> <a name="overallMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport"></a>

```java
public AiDocumentModelMetricsOverallMetricsReportList getOverallMetricsReport();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetrics getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a>

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList;

new AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get"></a>

```java
public AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference;

new AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1Score</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```java
public java.lang.Number getAccuracy();
```

- *Type:* java.lang.Number

---

##### `f1Score`<sup>Required</sup> <a name="f1Score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```java
public java.lang.Number getF1Score();
```

- *Type:* java.lang.Number

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```java
public java.lang.Number getPrecision();
```

- *Type:* java.lang.Number

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```java
public java.lang.Number getRecall();
```

- *Type:* java.lang.Number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetricsOverallMetricsReportConfidenceEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsOverallMetricsReportList <a name="AiDocumentModelMetricsOverallMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReportList;

new AiDocumentModelMetricsOverallMetricsReportList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get"></a>

```java
public AiDocumentModelMetricsOverallMetricsReportOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### AiDocumentModelMetricsOverallMetricsReportOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelMetricsOverallMetricsReportOutputReference;

new AiDocumentModelMetricsOverallMetricsReportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries">confidenceEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount">documentCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision">meanAveragePrecision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confidenceEntries`<sup>Required</sup> <a name="confidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries"></a>

```java
public AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList getConfidenceEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a>

---

##### `documentCount`<sup>Required</sup> <a name="documentCount" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount"></a>

```java
public java.lang.Number getDocumentCount();
```

- *Type:* java.lang.Number

---

##### `meanAveragePrecision`<sup>Required</sup> <a name="meanAveragePrecision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision"></a>

```java
public java.lang.Number getMeanAveragePrecision();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue"></a>

```java
public AiDocumentModelMetricsOverallMetricsReport getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a>

---


### AiDocumentModelTestingDatasetOutputReference <a name="AiDocumentModelTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTestingDatasetOutputReference;

new AiDocumentModelTestingDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue"></a>

```java
public AiDocumentModelTestingDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---


### AiDocumentModelTimeoutsOutputReference <a name="AiDocumentModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTimeoutsOutputReference;

new AiDocumentModelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

---


### AiDocumentModelTrainingDatasetOutputReference <a name="AiDocumentModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelTrainingDatasetOutputReference;

new AiDocumentModelTrainingDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue"></a>

```java
public AiDocumentModelTrainingDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---


### AiDocumentModelValidationDatasetOutputReference <a name="AiDocumentModelValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ai_document_model.AiDocumentModelValidationDatasetOutputReference;

new AiDocumentModelValidationDatasetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId">resetDatasetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject">resetObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDatasetId` <a name="resetDatasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId"></a>

```java
public void resetDatasetId()
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject"></a>

```java
public void resetObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput">datasetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput">datasetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType">datasetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `datasetIdInput`<sup>Optional</sup> <a name="datasetIdInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput"></a>

```java
public java.lang.String getDatasetIdInput();
```

- *Type:* java.lang.String

---

##### `datasetTypeInput`<sup>Optional</sup> <a name="datasetTypeInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput"></a>

```java
public java.lang.String getDatasetTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetType`<sup>Required</sup> <a name="datasetType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType"></a>

```java
public java.lang.String getDatasetType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue"></a>

```java
public AiDocumentModelValidationDataset getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---



