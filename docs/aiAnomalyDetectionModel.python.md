# `aiAnomalyDetectionModel` Submodule <a name="`aiAnomalyDetectionModel` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionModel <a name="AiAnomalyDetectionModel" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model oci_ai_anomaly_detection_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModel(
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
  model_training_details: AiAnomalyDetectionModelModelTrainingDetails,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: AiAnomalyDetectionModelTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.modelTrainingDetails">model_training_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | model_training_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}.

---

##### `model_training_details`<sup>Required</sup> <a name="model_training_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.modelTrainingDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

model_training_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#model_training_details AiAnomalyDetectionModel#model_training_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#timeouts AiAnomalyDetectionModel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails">put_model_training_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_model_training_details` <a name="put_model_training_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails"></a>

```python
def put_model_training_details(
  data_asset_ids: typing.List[str],
  algorithm_hint: str = None,
  target_fap: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  window_size: typing.Union[int, float] = None
) -> None
```

###### `data_asset_ids`<sup>Required</sup> <a name="data_asset_ids" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.dataAssetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}.

---

###### `algorithm_hint`<sup>Optional</sup> <a name="algorithm_hint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.algorithmHint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}.

---

###### `target_fap`<sup>Optional</sup> <a name="target_fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.targetFap"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}.

---

###### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.trainingFraction"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}.

---

###### `window_size`<sup>Optional</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putModelTrainingDetails.parameter.windowSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModel.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiAnomalyDetectionModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiAnomalyDetectionModel to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiAnomalyDetectionModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetails">model_training_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference">AiAnomalyDetectionModelModelTrainingDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingResults">model_training_results</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList">AiAnomalyDetectionModelModelTrainingResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference">AiAnomalyDetectionModelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetailsInput">model_training_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `model_training_details`<sup>Required</sup> <a name="model_training_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetails"></a>

```python
model_training_details: AiAnomalyDetectionModelModelTrainingDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference">AiAnomalyDetectionModelModelTrainingDetailsOutputReference</a>

---

##### `model_training_results`<sup>Required</sup> <a name="model_training_results" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingResults"></a>

```python
model_training_results: AiAnomalyDetectionModelModelTrainingResultsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList">AiAnomalyDetectionModelModelTrainingResultsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionModelTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference">AiAnomalyDetectionModelTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_training_details_input`<sup>Optional</sup> <a name="model_training_details_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.modelTrainingDetailsInput"></a>

```python
model_training_details_input: AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiAnomalyDetectionModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionModelConfig <a name="AiAnomalyDetectionModelConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  model_training_details: AiAnomalyDetectionModelModelTrainingDetails,
  project_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: AiAnomalyDetectionModelTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.modelTrainingDetails">model_training_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | model_training_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#compartment_id AiAnomalyDetectionModel#compartment_id}.

---

##### `model_training_details`<sup>Required</sup> <a name="model_training_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.modelTrainingDetails"></a>

```python
model_training_details: AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

model_training_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#model_training_details AiAnomalyDetectionModel#model_training_details}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#project_id AiAnomalyDetectionModel#project_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#defined_tags AiAnomalyDetectionModel#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#description AiAnomalyDetectionModel#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#display_name AiAnomalyDetectionModel#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#freeform_tags AiAnomalyDetectionModel#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#id AiAnomalyDetectionModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelConfig.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionModelTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#timeouts AiAnomalyDetectionModel#timeouts}

---

### AiAnomalyDetectionModelModelTrainingDetails <a name="AiAnomalyDetectionModelModelTrainingDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails(
  data_asset_ids: typing.List[str],
  algorithm_hint: str = None,
  target_fap: typing.Union[int, float] = None,
  training_fraction: typing.Union[int, float] = None,
  window_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.dataAssetIds">data_asset_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.algorithmHint">algorithm_hint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.targetFap">target_fap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.windowSize">window_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}. |

---

##### `data_asset_ids`<sup>Required</sup> <a name="data_asset_ids" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.dataAssetIds"></a>

```python
data_asset_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#data_asset_ids AiAnomalyDetectionModel#data_asset_ids}.

---

##### `algorithm_hint`<sup>Optional</sup> <a name="algorithm_hint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.algorithmHint"></a>

```python
algorithm_hint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#algorithm_hint AiAnomalyDetectionModel#algorithm_hint}.

---

##### `target_fap`<sup>Optional</sup> <a name="target_fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.targetFap"></a>

```python
target_fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#target_fap AiAnomalyDetectionModel#target_fap}.

---

##### `training_fraction`<sup>Optional</sup> <a name="training_fraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#training_fraction AiAnomalyDetectionModel#training_fraction}.

---

##### `window_size`<sup>Optional</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails.property.windowSize"></a>

```python
window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#window_size AiAnomalyDetectionModel#window_size}.

---

### AiAnomalyDetectionModelModelTrainingResults <a name="AiAnomalyDetectionModelModelTrainingResults" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults()
```


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails()
```


### AiAnomalyDetectionModelModelTrainingResultsSignalDetails <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails()
```


### AiAnomalyDetectionModelTimeouts <a name="AiAnomalyDetectionModelTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#create AiAnomalyDetectionModel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#delete AiAnomalyDetectionModel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_model#update AiAnomalyDetectionModel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionModelModelTrainingDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetAlgorithmHint">reset_algorithm_hint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTargetFap">reset_target_fap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTrainingFraction">reset_training_fraction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetWindowSize">reset_window_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_algorithm_hint` <a name="reset_algorithm_hint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetAlgorithmHint"></a>

```python
def reset_algorithm_hint() -> None
```

##### `reset_target_fap` <a name="reset_target_fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTargetFap"></a>

```python
def reset_target_fap() -> None
```

##### `reset_training_fraction` <a name="reset_training_fraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetTrainingFraction"></a>

```python
def reset_training_fraction() -> None
```

##### `reset_window_size` <a name="reset_window_size" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.resetWindowSize"></a>

```python
def reset_window_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHintInput">algorithm_hint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIdsInput">data_asset_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFapInput">target_fap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFractionInput">training_fraction_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSizeInput">window_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint">algorithm_hint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds">data_asset_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap">target_fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction">training_fraction</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize">window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_hint_input`<sup>Optional</sup> <a name="algorithm_hint_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHintInput"></a>

```python
algorithm_hint_input: str
```

- *Type:* str

---

##### `data_asset_ids_input`<sup>Optional</sup> <a name="data_asset_ids_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIdsInput"></a>

```python
data_asset_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_fap_input`<sup>Optional</sup> <a name="target_fap_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFapInput"></a>

```python
target_fap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction_input`<sup>Optional</sup> <a name="training_fraction_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFractionInput"></a>

```python
training_fraction_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_size_input`<sup>Optional</sup> <a name="window_size_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSizeInput"></a>

```python
window_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm_hint`<sup>Required</sup> <a name="algorithm_hint" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.algorithmHint"></a>

```python
algorithm_hint: str
```

- *Type:* str

---

##### `data_asset_ids`<sup>Required</sup> <a name="data_asset_ids" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.dataAssetIds"></a>

```python
data_asset_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_fap`<sup>Required</sup> <a name="target_fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.targetFap"></a>

```python
target_fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_fraction`<sup>Required</sup> <a name="training_fraction" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.trainingFraction"></a>

```python
training_fraction: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_size`<sup>Required</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.windowSize"></a>

```python
window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionModelModelTrainingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingDetails">AiAnomalyDetectionModelModelTrainingDetails</a>

---


### AiAnomalyDetectionModelModelTrainingResultsList <a name="AiAnomalyDetectionModelModelTrainingResultsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiAnomalyDetectionModelModelTrainingResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiAnomalyDetectionModelModelTrainingResultsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap">fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved">is_training_goal_achieved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae">mae</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows">max_inference_sync_rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap">multivariate_fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse">rmse</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails">row_reduction_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails">signal_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning">warning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize">window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults">AiAnomalyDetectionModelModelTrainingResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.fap"></a>

```python
fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_training_goal_achieved`<sup>Required</sup> <a name="is_training_goal_achieved" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.isTrainingGoalAchieved"></a>

```python
is_training_goal_achieved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mae`<sup>Required</sup> <a name="mae" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.mae"></a>

```python
mae: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_inference_sync_rows`<sup>Required</sup> <a name="max_inference_sync_rows" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.maxInferenceSyncRows"></a>

```python
max_inference_sync_rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multivariate_fap`<sup>Required</sup> <a name="multivariate_fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.multivariateFap"></a>

```python
multivariate_fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rmse`<sup>Required</sup> <a name="rmse" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rmse"></a>

```python
rmse: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `row_reduction_details`<sup>Required</sup> <a name="row_reduction_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.rowReductionDetails"></a>

```python
row_reduction_details: AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList</a>

---

##### `signal_details`<sup>Required</sup> <a name="signal_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.signalDetails"></a>

```python
signal_details: AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList">AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList</a>

---

##### `warning`<sup>Required</sup> <a name="warning" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.warning"></a>

```python
warning: str
```

- *Type:* str

---

##### `window_size`<sup>Required</sup> <a name="window_size" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.windowSize"></a>

```python
window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionModelModelTrainingResults
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResults">AiAnomalyDetectionModelModelTrainingResults</a>

---


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled">is_reduction_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod">reduction_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage">reduction_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_reduction_enabled`<sup>Required</sup> <a name="is_reduction_enabled" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.isReductionEnabled"></a>

```python
is_reduction_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `reduction_method`<sup>Required</sup> <a name="reduction_method" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionMethod"></a>

```python
reduction_method: str
```

- *Type:* str

---

##### `reduction_percentage`<sup>Required</sup> <a name="reduction_percentage" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.reductionPercentage"></a>

```python
reduction_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails">AiAnomalyDetectionModelModelTrainingResultsRowReductionDetails</a>

---


### AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference <a name="AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap">fap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized">is_quantized</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio">mvi_ratio</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName">signal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std">std</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails">AiAnomalyDetectionModelModelTrainingResultsSignalDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `fap`<sup>Required</sup> <a name="fap" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.fap"></a>

```python
fap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_quantized`<sup>Required</sup> <a name="is_quantized" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.isQuantized"></a>

```python
is_quantized: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mvi_ratio`<sup>Required</sup> <a name="mvi_ratio" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.mviRatio"></a>

```python
mvi_ratio: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signal_name`<sup>Required</sup> <a name="signal_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.signalName"></a>

```python
signal_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `std`<sup>Required</sup> <a name="std" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.std"></a>

```python
std: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionModelModelTrainingResultsSignalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelModelTrainingResultsSignalDetails">AiAnomalyDetectionModelModelTrainingResultsSignalDetails</a>

---


### AiAnomalyDetectionModelTimeoutsOutputReference <a name="AiAnomalyDetectionModelTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_model

aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiAnomalyDetectionModelTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionModel.AiAnomalyDetectionModelTimeouts">AiAnomalyDetectionModelTimeouts</a>]

---



