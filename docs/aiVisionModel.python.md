# `aiVisionModel` Submodule <a name="`aiVisionModel` Submodule" id="rhizo-co-terraform-provider-oci.aiVisionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiVisionModel <a name="AiVisionModel" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model oci_ai_vision_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModel(
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
  training_dataset: AiVisionModelTrainingDataset,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_quick_mode: typing.Union[bool, IResolvable] = None,
  max_training_duration_in_hours: typing.Union[int, float] = None,
  model_version: str = None,
  testing_dataset: AiVisionModelTestingDataset = None,
  timeouts: AiVisionModelTimeouts = None,
  validation_dataset: AiVisionModelValidationDataset = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.maxTrainingDurationInHours">max_training_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | validation_dataset block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}.

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.modelType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}.

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.trainingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#training_dataset AiVisionModel#training_dataset}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_quick_mode`<sup>Optional</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.isQuickMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}.

---

##### `max_training_duration_in_hours`<sup>Optional</sup> <a name="max_training_duration_in_hours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.maxTrainingDurationInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.modelVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}.

---

##### `testing_dataset`<sup>Optional</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.testingDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#testing_dataset AiVisionModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#timeouts AiVisionModel#timeouts}

---

##### `validation_dataset`<sup>Optional</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.Initializer.parameter.validationDataset"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#validation_dataset AiVisionModel#validation_dataset}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset">put_testing_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset">put_training_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset">put_validation_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetIsQuickMode">reset_is_quick_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetMaxTrainingDurationInHours">reset_max_training_duration_in_hours</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetModelVersion">reset_model_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTestingDataset">reset_testing_dataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetValidationDataset">reset_validation_dataset</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_testing_dataset` <a name="put_testing_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset"></a>

```python
def put_testing_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

###### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTestingDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#create AiVisionModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#delete AiVisionModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#update AiVisionModel#update}.

---

##### `put_training_dataset` <a name="put_training_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset"></a>

```python
def put_training_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

###### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putTrainingDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

##### `put_validation_dataset` <a name="put_validation_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset"></a>

```python
def put_validation_dataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
) -> None
```

###### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.datasetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

###### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.datasetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

###### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.putValidationDataset.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_quick_mode` <a name="reset_is_quick_mode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetIsQuickMode"></a>

```python
def reset_is_quick_mode() -> None
```

##### `reset_max_training_duration_in_hours` <a name="reset_max_training_duration_in_hours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetMaxTrainingDurationInHours"></a>

```python
def reset_max_training_duration_in_hours() -> None
```

##### `reset_model_version` <a name="reset_model_version" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetModelVersion"></a>

```python
def reset_model_version() -> None
```

##### `reset_testing_dataset` <a name="reset_testing_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTestingDataset"></a>

```python
def reset_testing_dataset() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_validation_dataset` <a name="reset_validation_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.resetValidationDataset"></a>

```python
def reset_validation_dataset() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiVisionModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiVisionModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiVisionModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiVisionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiVisionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.averagePrecision">average_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.confidenceThreshold">confidence_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.metrics">metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.precision">precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testImageCount">test_image_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference">AiVisionModelTestingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference">AiVisionModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.totalImageCount">total_image_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainedDurationInHours">trained_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference">AiVisionModelTrainingDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference">AiVisionModelValidationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickModeInput">is_quick_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHoursInput">max_training_duration_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelTypeInput">model_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersionInput">model_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDatasetInput">testing_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDatasetInput">training_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDatasetInput">validation_dataset_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHours">max_training_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `average_precision`<sup>Required</sup> <a name="average_precision" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.averagePrecision"></a>

```python
average_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `confidence_threshold`<sup>Required</sup> <a name="confidence_threshold" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.confidenceThreshold"></a>

```python
confidence_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.metrics"></a>

```python
metrics: str
```

- *Type:* str

---

##### `precision`<sup>Required</sup> <a name="precision" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.precision"></a>

```python
precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `test_image_count`<sup>Required</sup> <a name="test_image_count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testImageCount"></a>

```python
test_image_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `testing_dataset`<sup>Required</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDataset"></a>

```python
testing_dataset: AiVisionModelTestingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference">AiVisionModelTestingDatasetOutputReference</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeouts"></a>

```python
timeouts: AiVisionModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference">AiVisionModelTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_image_count`<sup>Required</sup> <a name="total_image_count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.totalImageCount"></a>

```python
total_image_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trained_duration_in_hours`<sup>Required</sup> <a name="trained_duration_in_hours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainedDurationInHours"></a>

```python
trained_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDataset"></a>

```python
training_dataset: AiVisionModelTrainingDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference">AiVisionModelTrainingDatasetOutputReference</a>

---

##### `validation_dataset`<sup>Required</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDataset"></a>

```python
validation_dataset: AiVisionModelValidationDatasetOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference">AiVisionModelValidationDatasetOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_quick_mode_input`<sup>Optional</sup> <a name="is_quick_mode_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickModeInput"></a>

```python
is_quick_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_training_duration_in_hours_input`<sup>Optional</sup> <a name="max_training_duration_in_hours_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHoursInput"></a>

```python
max_training_duration_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_type_input`<sup>Optional</sup> <a name="model_type_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelTypeInput"></a>

```python
model_type_input: str
```

- *Type:* str

---

##### `model_version_input`<sup>Optional</sup> <a name="model_version_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersionInput"></a>

```python
model_version_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `testing_dataset_input`<sup>Optional</sup> <a name="testing_dataset_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.testingDatasetInput"></a>

```python
testing_dataset_input: AiVisionModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiVisionModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>]

---

##### `training_dataset_input`<sup>Optional</sup> <a name="training_dataset_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.trainingDatasetInput"></a>

```python
training_dataset_input: AiVisionModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

---

##### `validation_dataset_input`<sup>Optional</sup> <a name="validation_dataset_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.validationDatasetInput"></a>

```python
validation_dataset_input: AiVisionModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_quick_mode`<sup>Required</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.isQuickMode"></a>

```python
is_quick_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_training_duration_in_hours`<sup>Required</sup> <a name="max_training_duration_in_hours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.maxTrainingDurationInHours"></a>

```python
max_training_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiVisionModelConfig <a name="AiVisionModelConfig" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelConfig(
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
  training_dataset: AiVisionModelTrainingDataset,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_quick_mode: typing.Union[bool, IResolvable] = None,
  max_training_duration_in_hours: typing.Union[int, float] = None,
  model_version: str = None,
  testing_dataset: AiVisionModelTestingDataset = None,
  timeouts: AiVisionModelTimeouts = None,
  validation_dataset: AiVisionModelValidationDataset = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelType">model_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.trainingDataset">training_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | training_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.isQuickMode">is_quick_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.maxTrainingDurationInHours">max_training_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelVersion">model_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.testingDataset">testing_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | testing_dataset block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.validationDataset">validation_dataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | validation_dataset block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}.

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}.

---

##### `training_dataset`<sup>Required</sup> <a name="training_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.trainingDataset"></a>

```python
training_dataset: AiVisionModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

training_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#training_dataset AiVisionModel#training_dataset}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#description AiVisionModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#id AiVisionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_quick_mode`<sup>Optional</sup> <a name="is_quick_mode" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.isQuickMode"></a>

```python
is_quick_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}.

---

##### `max_training_duration_in_hours`<sup>Optional</sup> <a name="max_training_duration_in_hours" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.maxTrainingDurationInHours"></a>

```python
max_training_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}.

---

##### `model_version`<sup>Optional</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}.

---

##### `testing_dataset`<sup>Optional</sup> <a name="testing_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.testingDataset"></a>

```python
testing_dataset: AiVisionModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

testing_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#testing_dataset AiVisionModel#testing_dataset}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.timeouts"></a>

```python
timeouts: AiVisionModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#timeouts AiVisionModel#timeouts}

---

##### `validation_dataset`<sup>Optional</sup> <a name="validation_dataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelConfig.property.validationDataset"></a>

```python
validation_dataset: AiVisionModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

validation_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#validation_dataset AiVisionModel#validation_dataset}

---

### AiVisionModelTestingDataset <a name="AiVisionModelTestingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTestingDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

### AiVisionModelTimeouts <a name="AiVisionModelTimeouts" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#create AiVisionModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#delete AiVisionModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#update AiVisionModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#create AiVisionModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#delete AiVisionModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#update AiVisionModel#update}.

---

### AiVisionModelTrainingDataset <a name="AiVisionModelTrainingDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTrainingDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

### AiVisionModelValidationDataset <a name="AiVisionModelValidationDataset" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelValidationDataset(
  dataset_type: str,
  bucket: str = None,
  dataset_id: str = None,
  namespace_name: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetType">dataset_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetId">dataset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}. |

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}.

---

##### `dataset_id`<sup>Optional</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}.

---

##### `namespace_name`<sup>Optional</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_vision_model#object AiVisionModel#object}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiVisionModelTestingDatasetOutputReference <a name="AiVisionModelTestingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTestingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetNamespaceName">reset_namespace_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace_name` <a name="reset_namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetNamespaceName"></a>

```python
def reset_namespace_name() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiVisionModelTestingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTestingDataset">AiVisionModelTestingDataset</a>

---


### AiVisionModelTimeoutsOutputReference <a name="AiVisionModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiVisionModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTimeouts">AiVisionModelTimeouts</a>]

---


### AiVisionModelTrainingDatasetOutputReference <a name="AiVisionModelTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelTrainingDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetNamespaceName">reset_namespace_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace_name` <a name="reset_namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetNamespaceName"></a>

```python
def reset_namespace_name() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiVisionModelTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelTrainingDataset">AiVisionModelTrainingDataset</a>

---


### AiVisionModelValidationDatasetOutputReference <a name="AiVisionModelValidationDatasetOutputReference" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_vision_model

aiVisionModel.AiVisionModelValidationDatasetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetDatasetId">reset_dataset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetNamespaceName">reset_namespace_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_dataset_id` <a name="reset_dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetDatasetId"></a>

```python
def reset_dataset_id() -> None
```

##### `reset_namespace_name` <a name="reset_namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetNamespaceName"></a>

```python
def reset_namespace_name() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetTypeInput">dataset_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetType">dataset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_type_input`<sup>Optional</sup> <a name="dataset_type_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetTypeInput"></a>

```python
dataset_type_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `dataset_type`<sup>Required</sup> <a name="dataset_type" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.datasetType"></a>

```python
dataset_type: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDatasetOutputReference.property.internalValue"></a>

```python
internal_value: AiVisionModelValidationDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiVisionModel.AiVisionModelValidationDataset">AiVisionModelValidationDataset</a>

---



