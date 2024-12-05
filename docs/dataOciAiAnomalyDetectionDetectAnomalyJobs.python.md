# `dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule <a name="`dataOciAiAnomalyDetectionDetectAnomalyJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobs <a name="DataOciAiAnomalyDetectionDetectAnomalyJobs" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs oci_ai_anomaly_detection_detect_anomaly_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs(
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
  detect_anomaly_job_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]] = None,
  id: str = None,
  model_id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.detectAnomalyJobId">detect_anomaly_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}.

---

##### `detect_anomaly_job_id`<sup>Optional</sup> <a name="detect_anomaly_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.detectAnomalyJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#filter DataOciAiAnomalyDetectionDetectAnomalyJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.modelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId">reset_detect_anomaly_job_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId">reset_model_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]

---

##### `reset_detect_anomaly_job_id` <a name="reset_detect_anomaly_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDetectAnomalyJobId"></a>

```python
def reset_detect_anomaly_job_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_model_id` <a name="reset_model_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetModelId"></a>

```python
def reset_model_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiAnomalyDetectionDetectAnomalyJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiAnomalyDetectionDetectAnomalyJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiAnomalyDetectionDetectAnomalyJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiAnomalyDetectionDetectAnomalyJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection">detect_anomaly_job_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput">detect_anomaly_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput">model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId">detect_anomaly_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `detect_anomaly_job_collection`<sup>Required</sup> <a name="detect_anomaly_job_collection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobCollection"></a>

```python
detect_anomaly_job_collection: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filter"></a>

```python
filter: DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList">DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `detect_anomaly_job_id_input`<sup>Optional</sup> <a name="detect_anomaly_job_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobIdInput"></a>

```python
detect_anomaly_job_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `model_id_input`<sup>Optional</sup> <a name="model_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelIdInput"></a>

```python
model_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `detect_anomaly_job_id`<sup>Required</sup> <a name="detect_anomaly_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.detectAnomalyJobId"></a>

```python
detect_anomaly_job_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsConfig <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  detect_anomaly_job_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]] = None,
  id: str = None,
  model_id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId">detect_anomaly_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId">model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#compartment_id DataOciAiAnomalyDetectionDetectAnomalyJobs#compartment_id}.

---

##### `detect_anomaly_job_id`<sup>Optional</sup> <a name="detect_anomaly_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.detectAnomalyJobId"></a>

```python
detect_anomaly_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#detect_anomaly_job_id DataOciAiAnomalyDetectionDetectAnomalyJobs#detect_anomaly_job_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#display_name DataOciAiAnomalyDetectionDetectAnomalyJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#filter DataOciAiAnomalyDetectionDetectAnomalyJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#id DataOciAiAnomalyDetectionDetectAnomalyJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `model_id`<sup>Optional</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#model_id DataOciAiAnomalyDetectionDetectAnomalyJobs#model_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#project_id DataOciAiAnomalyDetectionDetectAnomalyJobs#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#state DataOciAiAnomalyDetectionDetectAnomalyJobs#state}.

---

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails()
```


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilter <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#name DataOciAiAnomalyDetectionDetectAnomalyJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#values DataOciAiAnomalyDetectionDetectAnomalyJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_anomaly_detection_detect_anomaly_jobs#regex DataOciAiAnomalyDetectionDetectAnomalyJobs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values">values</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.values"></a>

```python
values: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsData</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocations</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data">data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType">input_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations">object_locations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames">signal_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.data"></a>

```python
data: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsDataList</a>

---

##### `input_type`<sup>Required</sup> <a name="input_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.inputType"></a>

```python
input_type: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `object_locations`<sup>Required</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.objectLocations"></a>

```python
object_locations: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsObjectLocationsList</a>

---

##### `signal_names`<sup>Required</sup> <a name="signal_names" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.signalNames"></a>

```python
signal_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType">output_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `output_type`<sup>Required</sup> <a name="output_type" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.outputType"></a>

```python
output_type: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetails</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails">input_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails">output_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity">sensitivity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_details`<sup>Required</sup> <a name="input_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.inputDetails"></a>

```python
input_details: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsInputDetailsList</a>

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `output_details`<sup>Required</sup> <a name="output_details" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.outputDetails"></a>

```python
output_details: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputDetailsList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `sensitivity`<sup>Required</sup> <a name="sensitivity" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.sensitivity"></a>

```python
sensitivity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItems</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.items"></a>

```python
items: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection">DataOciAiAnomalyDetectionDetectAnomalyJobsDetectAnomalyJobCollection</a>

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]]

---


### DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference <a name="DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_anomaly_detection_detect_anomaly_jobs

dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAiAnomalyDetectionDetectAnomalyJobsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAiAnomalyDetectionDetectAnomalyJobs.DataOciAiAnomalyDetectionDetectAnomalyJobsFilter">DataOciAiAnomalyDetectionDetectAnomalyJobsFilter</a>]

---



