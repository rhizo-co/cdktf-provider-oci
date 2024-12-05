# `aiAnomalyDetectionDetectAnomalyJob` Submodule <a name="`aiAnomalyDetectionDetectAnomalyJob` Submodule" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiAnomalyDetectionDetectAnomalyJob <a name="AiAnomalyDetectionDetectAnomalyJob" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job oci_ai_anomaly_detection_detect_anomaly_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob(
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
  input_details: AiAnomalyDetectionDetectAnomalyJobInputDetails,
  model_id: str,
  output_details: AiAnomalyDetectionDetectAnomalyJobOutputDetails,
  description: str = None,
  display_name: str = None,
  id: str = None,
  sensitivity: typing.Union[int, float] = None,
  timeouts: AiAnomalyDetectionDetectAnomalyJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.inputDetails">input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.outputDetails">output_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.sensitivity">sensitivity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `input_details`<sup>Required</sup> <a name="input_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.inputDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `output_details`<sup>Required</sup> <a name="output_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.outputDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.sensitivity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails">put_input_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails">put_output_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity">reset_sensitivity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_input_details` <a name="put_input_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails"></a>

```python
def put_input_details(
  input_type: str,
  content: str = None,
  content_type: str = None,
  data: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]] = None,
  object_locations: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]] = None,
  signal_names: typing.List[str] = None
) -> None
```

###### `input_type`<sup>Required</sup> <a name="input_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.inputType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}.

---

###### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.content"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}.

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.contentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}.

---

###### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.data"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}

---

###### `object_locations`<sup>Optional</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.objectLocations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}

---

###### `signal_names`<sup>Optional</sup> <a name="signal_names" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putInputDetails.parameter.signalNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}.

---

##### `put_output_details` <a name="put_output_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails"></a>

```python
def put_output_details(
  bucket: str,
  namespace: str,
  output_type: str,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

###### `output_type`<sup>Required</sup> <a name="output_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.outputType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putOutputDetails.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}.

---

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_sensitivity` <a name="reset_sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetSensitivity"></a>

```python
def reset_sensitivity() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiAnomalyDetectionDetectAnomalyJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiAnomalyDetectionDetectAnomalyJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiAnomalyDetectionDetectAnomalyJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiAnomalyDetectionDetectAnomalyJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails">input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails">output_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput">input_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput">output_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput">sensitivity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity">sensitivity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `input_details`<sup>Required</sup> <a name="input_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetails"></a>

```python
input_details: AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference</a>

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `output_details`<sup>Required</sup> <a name="output_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetails"></a>

```python
output_details: AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference">AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference">AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_details_input`<sup>Optional</sup> <a name="input_details_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.inputDetailsInput"></a>

```python
input_details_input: AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `output_details_input`<sup>Optional</sup> <a name="output_details_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.outputDetailsInput"></a>

```python
output_details_input: AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---

##### `sensitivity_input`<sup>Optional</sup> <a name="sensitivity_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivityInput"></a>

```python
sensitivity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiAnomalyDetectionDetectAnomalyJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.sensitivity"></a>

```python
sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiAnomalyDetectionDetectAnomalyJobConfig <a name="AiAnomalyDetectionDetectAnomalyJobConfig" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  input_details: AiAnomalyDetectionDetectAnomalyJobInputDetails,
  model_id: str,
  output_details: AiAnomalyDetectionDetectAnomalyJobOutputDetails,
  description: str = None,
  display_name: str = None,
  id: str = None,
  sensitivity: typing.Union[int, float] = None,
  timeouts: AiAnomalyDetectionDetectAnomalyJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails">input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | input_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails">output_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | output_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity">sensitivity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#compartment_id AiAnomalyDetectionDetectAnomalyJob#compartment_id}.

---

##### `input_details`<sup>Required</sup> <a name="input_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.inputDetails"></a>

```python
input_details: AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

input_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_details AiAnomalyDetectionDetectAnomalyJob#input_details}

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#model_id AiAnomalyDetectionDetectAnomalyJob#model_id}.

---

##### `output_details`<sup>Required</sup> <a name="output_details" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.outputDetails"></a>

```python
output_details: AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

output_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_details AiAnomalyDetectionDetectAnomalyJob#output_details}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#description AiAnomalyDetectionDetectAnomalyJob#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#display_name AiAnomalyDetectionDetectAnomalyJob#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#id AiAnomalyDetectionDetectAnomalyJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitivity`<sup>Optional</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.sensitivity"></a>

```python
sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#sensitivity AiAnomalyDetectionDetectAnomalyJob#sensitivity}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobConfig.property.timeouts"></a>

```python
timeouts: AiAnomalyDetectionDetectAnomalyJobTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timeouts AiAnomalyDetectionDetectAnomalyJob#timeouts}

---

### AiAnomalyDetectionDetectAnomalyJobInputDetails <a name="AiAnomalyDetectionDetectAnomalyJobInputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails(
  input_type: str,
  content: str = None,
  content_type: str = None,
  data: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]] = None,
  object_locations: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]] = None,
  signal_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType">input_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType">content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data">data</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]</code> | data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations">object_locations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]</code> | object_locations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames">signal_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}. |

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#input_type AiAnomalyDetectionDetectAnomalyJob#input_type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content AiAnomalyDetectionDetectAnomalyJob#content}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#content_type AiAnomalyDetectionDetectAnomalyJob#content_type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.data"></a>

```python
data: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#data AiAnomalyDetectionDetectAnomalyJob#data}

---

##### `object_locations`<sup>Optional</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.objectLocations"></a>

```python
object_locations: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]

object_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object_locations AiAnomalyDetectionDetectAnomalyJob#object_locations}

---

##### `signal_names`<sup>Optional</sup> <a name="signal_names" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails.property.signalNames"></a>

```python
signal_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#signal_names AiAnomalyDetectionDetectAnomalyJob#signal_names}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsData <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsData" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData(
  timestamp: str = None,
  values: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp">timestamp</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}. |

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#timestamp AiAnomalyDetectionDetectAnomalyJob#timestamp}.

---

##### `values`<sup>Optional</sup> <a name="values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#values AiAnomalyDetectionDetectAnomalyJob#values}.

---

### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations(
  bucket: str = None,
  namespace: str = None,
  object: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#object AiAnomalyDetectionDetectAnomalyJob#object}.

---

### AiAnomalyDetectionDetectAnomalyJobOutputDetails <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetails" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails(
  bucket: str,
  namespace: str,
  output_type: str,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType">output_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#bucket AiAnomalyDetectionDetectAnomalyJob#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#namespace AiAnomalyDetectionDetectAnomalyJob#namespace}.

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#output_type AiAnomalyDetectionDetectAnomalyJob#output_type}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#prefix AiAnomalyDetectionDetectAnomalyJob#prefix}.

---

### AiAnomalyDetectionDetectAnomalyJobTimeouts <a name="AiAnomalyDetectionDetectAnomalyJobTimeouts" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#create AiAnomalyDetectionDetectAnomalyJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#delete AiAnomalyDetectionDetectAnomalyJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ai_anomaly_detection_detect_anomaly_job#update AiAnomalyDetectionDetectAnomalyJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp">reset_timestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_timestamp` <a name="reset_timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetTimestamp"></a>

```python
def reset_timestamp() -> None
```

##### `reset_values` <a name="reset_values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput">timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp_input`<sup>Optional</sup> <a name="timestamp_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestampInput"></a>

```python
timestamp_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiAnomalyDetectionDetectAnomalyJobInputDetailsData]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject">reset_object</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.resetObject"></a>

```python
def reset_object() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]

---


### AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData">put_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations">put_object_locations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations">reset_object_locations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames">reset_signal_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data` <a name="put_data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData"></a>

```python
def put_data(
  value: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putData.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]

---

##### `put_object_locations` <a name="put_object_locations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations"></a>

```python
def put_object_locations(
  value: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.putObjectLocations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]

---

##### `reset_content` <a name="reset_content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_data` <a name="reset_data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_object_locations` <a name="reset_object_locations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetObjectLocations"></a>

```python
def reset_object_locations() -> None
```

##### `reset_signal_names` <a name="reset_signal_names" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.resetSignalNames"></a>

```python
def reset_signal_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations">object_locations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput">data_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput">input_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput">object_locations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput">signal_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType">input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames">signal_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.data"></a>

```python
data: AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList">AiAnomalyDetectionDetectAnomalyJobInputDetailsDataList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `object_locations`<sup>Required</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocations"></a>

```python
object_locations: AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocationsList</a>

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.dataInput"></a>

```python
data_input: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsData]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsData">AiAnomalyDetectionDetectAnomalyJobInputDetailsData</a>]]

---

##### `input_type_input`<sup>Optional</sup> <a name="input_type_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputTypeInput"></a>

```python
input_type_input: str
```

- *Type:* str

---

##### `object_locations_input`<sup>Optional</sup> <a name="object_locations_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.objectLocationsInput"></a>

```python
object_locations_input: typing.Union[IResolvable, typing.List[AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations">AiAnomalyDetectionDetectAnomalyJobInputDetailsObjectLocations</a>]]

---

##### `signal_names_input`<sup>Optional</sup> <a name="signal_names_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNamesInput"></a>

```python
signal_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

---

##### `signal_names`<sup>Required</sup> <a name="signal_names" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.signalNames"></a>

```python
signal_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionDetectAnomalyJobInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobInputDetails">AiAnomalyDetectionDetectAnomalyJobInputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_prefix` <a name="reset_prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput">output_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `output_type_input`<sup>Optional</sup> <a name="output_type_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputTypeInput"></a>

```python
output_type_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: AiAnomalyDetectionDetectAnomalyJobOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobOutputDetails">AiAnomalyDetectionDetectAnomalyJobOutputDetails</a>

---


### AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference <a name="AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import ai_anomaly_detection_detect_anomaly_job

aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiAnomalyDetectionDetectAnomalyJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.aiAnomalyDetectionDetectAnomalyJob.AiAnomalyDetectionDetectAnomalyJobTimeouts">AiAnomalyDetectionDetectAnomalyJobTimeouts</a>]

---



