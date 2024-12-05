# `aiDocumentModel` Submodule <a name="`aiDocumentModel` Submodule" id="rhizo-co-terraform-provider-oci.aiDocumentModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiDocumentModel <a name="AiDocumentModel" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model oci_ai_document_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  model_type: str,
  project_id: str,
  component_models: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_quick_mode: typing.Union[bool, IResolvable] = None,
  max_training_time_in_hours: typing.Union[int, float] = None,
  model_id: str = None,
  model_version: str = None,
  testing_dataset: AiDocumentModelTestingDataset = None,
  timeouts: AiDocumentModelTimeouts = None,
  training_dataset: AiDocumentModelTrainingDataset = None,
  validation_dataset: AiDocumentModelValidationDataset = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.componentModels">component_models</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]</code> | component_models block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.maxTrainingTimeInHours">max_training_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | validation_dataset block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}.

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}.

---

##### `component_models`<sup>Optional</sup> <a name="component_models" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.componentModels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]

component_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#component_models AiDocumentModel#component_models}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_quick_mode`<sup>Optional</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.isQuickMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}.

---

##### `max_training_time_in_hours`<sup>Optional</sup> <a name="max_training_time_in_hours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.maxTrainingTimeInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}.

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.modelVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}.

---

##### `testing_dataset`<sup>Optional</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.testingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#testing_dataset AiDocumentModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#timeouts AiDocumentModel#timeouts}

---

##### `training_dataset`<sup>Optional</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.trainingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#training_dataset AiDocumentModel#training_dataset}

---

##### `validation_dataset`<sup>Optional</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.Initializer.parameter.validationDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#validation_dataset AiDocumentModel#validation_dataset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels">put_component_models</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset">put_testing_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset">put_training_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset">put_validation_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels">reset_component_models</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode">reset_is_quick_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours">reset_max_training_time_in_hours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId">reset_model_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion">reset_model_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset">reset_testing_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset">reset_training_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset">reset_validation_dataset</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_component_models` <a name="put_component_models" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels"></a>

```python
def put_component_models(
  value: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putComponentModels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]

---

##### `put_testing_dataset` <a name="put_testing_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset"></a>

```python
def put_testing_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTestingDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}.

---

##### `put_training_dataset` <a name="put_training_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset"></a>

```python
def put_training_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putTrainingDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

##### `put_validation_dataset` <a name="put_validation_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset"></a>

```python
def put_validation_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.putValidationDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

##### `reset_component_models` <a name="reset_component_models" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetComponentModels"></a>

```python
def reset_component_models() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_quick_mode` <a name="reset_is_quick_mode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetIsQuickMode"></a>

```python
def reset_is_quick_mode() -> None
```

##### `reset_max_training_time_in_hours` <a name="reset_max_training_time_in_hours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetMaxTrainingTimeInHours"></a>

```python
def reset_max_training_time_in_hours() -> None
```

##### `reset_model_id` <a name="reset_model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelId"></a>

```python
def reset_model_id() -> None
```

##### `reset_model_version` <a name="reset_model_version" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetModelVersion"></a>

```python
def reset_model_version() -> None
```

##### `reset_testing_dataset` <a name="reset_testing_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTestingDataset"></a>

```python
def reset_testing_dataset() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_training_dataset` <a name="reset_training_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetTrainingDataset"></a>

```python
def reset_training_dataset() -> None
```

##### `reset_validation_dataset` <a name="reset_validation_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.resetValidationDataset"></a>

```python
def reset_validation_dataset() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModel.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiDocumentModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiDocumentModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiDocumentModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiDocumentModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels">component_models</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel">is_composed_model</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours">trained_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput">component_models_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput">is_quick_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput">max_training_time_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput">model_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput">testing_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput">training_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput">validation_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours">max_training_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `component_models`<sup>Required</sup> <a name="component_models" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModels"></a>

```python
component_models: AiDocumentModelComponentModelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList">AiDocumentModelComponentModelsList</a>

---

##### `is_composed_model`<sup>Required</sup> <a name="is_composed_model" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isComposedModel"></a>

```python
is_composed_model: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.metrics"></a>

```python
metrics: AiDocumentModelMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList">AiDocumentModelMetricsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `testing_dataset`<sup>Required</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDataset"></a>

```python
testing_dataset: AiDocumentModelTestingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference">AiDocumentModelTestingDatasetOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeouts"></a>

```python
timeouts: AiDocumentModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference">AiDocumentModelTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `trained_time_in_hours`<sup>Required</sup> <a name="trained_time_in_hours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainedTimeInHours"></a>

```python
trained_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDataset"></a>

```python
training_dataset: AiDocumentModelTrainingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference">AiDocumentModelTrainingDatasetOutputReference</a>

---

##### `validation_dataset`<sup>Required</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDataset"></a>

```python
validation_dataset: AiDocumentModelValidationDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference">AiDocumentModelValidationDatasetOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `component_models_input`<sup>Optional</sup> <a name="component_models_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.componentModelsInput"></a>

```python
component_models_input: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_quick_mode_input`<sup>Optional</sup> <a name="is_quick_mode_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickModeInput"></a>

```python
is_quick_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_training_time_in_hours_input`<sup>Optional</sup> <a name="max_training_time_in_hours_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHoursInput"></a>

```python
max_training_time_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `model_type_input`<sup>Optional</sup> <a name="model_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelTypeInput"></a>

```python
model_type_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `testing_dataset_input`<sup>Optional</sup> <a name="testing_dataset_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.testingDatasetInput"></a>

```python
testing_dataset_input: AiDocumentModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiDocumentModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>]

---

##### `training_dataset_input`<sup>Optional</sup> <a name="training_dataset_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.trainingDatasetInput"></a>

```python
training_dataset_input: AiDocumentModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---

##### `validation_dataset_input`<sup>Optional</sup> <a name="validation_dataset_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.validationDatasetInput"></a>

```python
validation_dataset_input: AiDocumentModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_quick_mode`<sup>Required</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.isQuickMode"></a>

```python
is_quick_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_training_time_in_hours`<sup>Required</sup> <a name="max_training_time_in_hours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.maxTrainingTimeInHours"></a>

```python
max_training_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiDocumentModelComponentModels <a name="AiDocumentModelComponentModels" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelComponentModels(
  model_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

### AiDocumentModelConfig <a name="AiDocumentModelConfig" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  model_type: str,
  project_id: str,
  component_models: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_quick_mode: typing.Union[bool, IResolvable] = None,
  max_training_time_in_hours: typing.Union[int, float] = None,
  model_id: str = None,
  model_version: str = None,
  testing_dataset: AiDocumentModelTestingDataset = None,
  timeouts: AiDocumentModelTimeouts = None,
  training_dataset: AiDocumentModelTrainingDataset = None,
  validation_dataset: AiDocumentModelValidationDataset = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels">component_models</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]</code> | component_models block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours">max_training_time_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | validation_dataset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#compartment_id AiDocumentModel#compartment_id}.

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_type AiDocumentModel#model_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#project_id AiDocumentModel#project_id}.

---

##### `component_models`<sup>Optional</sup> <a name="component_models" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.componentModels"></a>

```python
component_models: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]

component_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#component_models AiDocumentModel#component_models}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#defined_tags AiDocumentModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#description AiDocumentModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#display_name AiDocumentModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#freeform_tags AiDocumentModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#id AiDocumentModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_quick_mode`<sup>Optional</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.isQuickMode"></a>

```python
is_quick_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#is_quick_mode AiDocumentModel#is_quick_mode}.

---

##### `max_training_time_in_hours`<sup>Optional</sup> <a name="max_training_time_in_hours" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.maxTrainingTimeInHours"></a>

```python
max_training_time_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#max_training_time_in_hours AiDocumentModel#max_training_time_in_hours}.

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_id AiDocumentModel#model_id}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#model_version AiDocumentModel#model_version}.

---

##### `testing_dataset`<sup>Optional</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.testingDataset"></a>

```python
testing_dataset: AiDocumentModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#testing_dataset AiDocumentModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.timeouts"></a>

```python
timeouts: AiDocumentModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#timeouts AiDocumentModel#timeouts}

---

##### `training_dataset`<sup>Optional</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.trainingDataset"></a>

```python
training_dataset: AiDocumentModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#training_dataset AiDocumentModel#training_dataset}

---

##### `validation_dataset`<sup>Optional</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelConfig.property.validationDataset"></a>

```python
validation_dataset: AiDocumentModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#validation_dataset AiDocumentModel#validation_dataset}

---

### AiDocumentModelMetrics <a name="AiDocumentModelMetrics" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetrics()
```


### AiDocumentModelMetricsDatasetSummary <a name="AiDocumentModelMetricsDatasetSummary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsDatasetSummary()
```


### AiDocumentModelMetricsLabelMetricsReport <a name="AiDocumentModelMetricsLabelMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport()
```


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries()
```


### AiDocumentModelMetricsOverallMetricsReport <a name="AiDocumentModelMetricsOverallMetricsReport" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport()
```


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntries <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries()
```


### AiDocumentModelTestingDataset <a name="AiDocumentModelTestingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTestingDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelTimeouts <a name="AiDocumentModelTimeouts" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#create AiDocumentModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#delete AiDocumentModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#update AiDocumentModel#update}.

---

### AiDocumentModelTrainingDataset <a name="AiDocumentModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTrainingDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

### AiDocumentModelValidationDataset <a name="AiDocumentModelValidationDataset" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelValidationDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_type AiDocumentModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#bucket AiDocumentModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#dataset_id AiDocumentModel#dataset_id}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#namespace AiDocumentModel#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_document_model#object AiDocumentModel#object}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiDocumentModelComponentModelsList <a name="AiDocumentModelComponentModelsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelComponentModelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelComponentModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AiDocumentModelComponentModels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]]

---


### AiDocumentModelComponentModelsOutputReference <a name="AiDocumentModelComponentModelsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelComponentModelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId">reset_model_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model_id` <a name="reset_model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.resetModelId"></a>

```python
def reset_model_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiDocumentModelComponentModels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelComponentModels">AiDocumentModelComponentModels</a>]

---


### AiDocumentModelMetricsDatasetSummaryList <a name="AiDocumentModelMetricsDatasetSummaryList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsDatasetSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsDatasetSummaryOutputReference <a name="AiDocumentModelMetricsDatasetSummaryOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount">test_sample_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount">training_sample_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount">validation_sample_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `test_sample_count`<sup>Required</sup> <a name="test_sample_count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.testSampleCount"></a>

```python
test_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_sample_count`<sup>Required</sup> <a name="training_sample_count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.trainingSampleCount"></a>

```python
training_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validation_sample_count`<sup>Required</sup> <a name="validation_sample_count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.validationSampleCount"></a>

```python
validation_sample_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetricsDatasetSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummary">AiDocumentModelMetricsDatasetSummary</a>

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```python
accuracy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `f1_score`<sup>Required</sup> <a name="f1_score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```python
f1_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetricsLabelMetricsReportConfidenceEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntries">AiDocumentModelMetricsLabelMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsLabelMetricsReportList <a name="AiDocumentModelMetricsLabelMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsLabelMetricsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsLabelMetricsReportOutputReference <a name="AiDocumentModelMetricsLabelMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries">confidence_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount">document_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision">mean_average_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_entries`<sup>Required</sup> <a name="confidence_entries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.confidenceEntries"></a>

```python
confidence_entries: AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList">AiDocumentModelMetricsLabelMetricsReportConfidenceEntriesList</a>

---

##### `document_count`<sup>Required</sup> <a name="document_count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.documentCount"></a>

```python
document_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `mean_average_precision`<sup>Required</sup> <a name="mean_average_precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.meanAveragePrecision"></a>

```python
mean_average_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetricsLabelMetricsReport
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReport">AiDocumentModelMetricsLabelMetricsReport</a>

---


### AiDocumentModelMetricsList <a name="AiDocumentModelMetricsList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsOutputReference <a name="AiDocumentModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary">dataset_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport">label_metrics_report</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport">overall_metrics_report</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_summary`<sup>Required</sup> <a name="dataset_summary" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.datasetSummary"></a>

```python
dataset_summary: AiDocumentModelMetricsDatasetSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsDatasetSummaryList">AiDocumentModelMetricsDatasetSummaryList</a>

---

##### `label_metrics_report`<sup>Required</sup> <a name="label_metrics_report" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.labelMetricsReport"></a>

```python
label_metrics_report: AiDocumentModelMetricsLabelMetricsReportList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsLabelMetricsReportList">AiDocumentModelMetricsLabelMetricsReportList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `overall_metrics_report`<sup>Required</sup> <a name="overall_metrics_report" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.overallMetricsReport"></a>

```python
overall_metrics_report: AiDocumentModelMetricsOverallMetricsReportList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList">AiDocumentModelMetricsOverallMetricsReportList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetrics">AiDocumentModelMetrics</a>

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy">accuracy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score">f1_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accuracy`<sup>Required</sup> <a name="accuracy" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.accuracy"></a>

```python
accuracy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `f1_score`<sup>Required</sup> <a name="f1_score" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.f1Score"></a>

```python
f1_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetricsOverallMetricsReportConfidenceEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntries">AiDocumentModelMetricsOverallMetricsReportConfidenceEntries</a>

---


### AiDocumentModelMetricsOverallMetricsReportList <a name="AiDocumentModelMetricsOverallMetricsReportList" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiDocumentModelMetricsOverallMetricsReportOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiDocumentModelMetricsOverallMetricsReportOutputReference <a name="AiDocumentModelMetricsOverallMetricsReportOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries">confidence_entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount">document_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision">mean_average_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_entries`<sup>Required</sup> <a name="confidence_entries" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.confidenceEntries"></a>

```python
confidence_entries: AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList">AiDocumentModelMetricsOverallMetricsReportConfidenceEntriesList</a>

---

##### `document_count`<sup>Required</sup> <a name="document_count" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.documentCount"></a>

```python
document_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mean_average_precision`<sup>Required</sup> <a name="mean_average_precision" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.meanAveragePrecision"></a>

```python
mean_average_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReportOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelMetricsOverallMetricsReport
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelMetricsOverallMetricsReport">AiDocumentModelMetricsOverallMetricsReport</a>

---


### AiDocumentModelTestingDatasetOutputReference <a name="AiDocumentModelTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTestingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTestingDataset">AiDocumentModelTestingDataset</a>

---


### AiDocumentModelTimeoutsOutputReference <a name="AiDocumentModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiDocumentModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTimeouts">AiDocumentModelTimeouts</a>]

---


### AiDocumentModelTrainingDatasetOutputReference <a name="AiDocumentModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelTrainingDataset">AiDocumentModelTrainingDataset</a>

---


### AiDocumentModelValidationDatasetOutputReference <a name="AiDocumentModelValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_document_model

aiDocumentModel.AiDocumentModelValidationDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiDocumentModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiDocumentModel.AiDocumentModelValidationDataset">AiDocumentModelValidationDataset</a>

---



