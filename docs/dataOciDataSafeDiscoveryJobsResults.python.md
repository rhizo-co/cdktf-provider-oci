# `dataOciDataSafeDiscoveryJobsResults` Submodule <a name="`dataOciDataSafeDiscoveryJobsResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJobsResults <a name="DataOciDataSafeDiscoveryJobsResults" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_job_id: str,
  column_name: typing.List[str] = None,
  discovery_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]] = None,
  id: str = None,
  is_result_applied: typing.Union[bool, IResolvable] = None,
  object: typing.List[str] = None,
  planned_action: str = None,
  schema_name: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryType">discovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.isResultApplied">is_result_applied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.plannedAction">planned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.columnName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.discoveryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_result_applied`<sup>Optional</sup> <a name="is_result_applied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.isResultApplied"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.object"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `planned_action`<sup>Optional</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.plannedAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.schemaName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName">reset_column_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType">reset_discovery_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied">reset_is_result_applied</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction">reset_planned_action</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName">reset_schema_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]

---

##### `reset_column_name` <a name="reset_column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName"></a>

```python
def reset_column_name() -> None
```

##### `reset_discovery_type` <a name="reset_discovery_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType"></a>

```python
def reset_discovery_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_result_applied` <a name="reset_is_result_applied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied"></a>

```python
def reset_is_result_applied() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_planned_action` <a name="reset_planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction"></a>

```python
def reset_planned_action() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeDiscoveryJobsResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection">discovery_job_result_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput">column_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput">discovery_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput">discovery_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput">is_result_applied_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput">object_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput">planned_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput">schema_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType">discovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied">is_result_applied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object">object</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction">planned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `discovery_job_result_collection`<sup>Required</sup> <a name="discovery_job_result_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection"></a>

```python
discovery_job_result_collection: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter"></a>

```python
filter: DataOciDataSafeDiscoveryJobsResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a>

---

##### `column_name_input`<sup>Optional</sup> <a name="column_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput"></a>

```python
column_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_job_id_input`<sup>Optional</sup> <a name="discovery_job_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput"></a>

```python
discovery_job_id_input: str
```

- *Type:* str

---

##### `discovery_type_input`<sup>Optional</sup> <a name="discovery_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput"></a>

```python
discovery_type_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_result_applied_input`<sup>Optional</sup> <a name="is_result_applied_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput"></a>

```python
is_result_applied_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput"></a>

```python
object_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action_input`<sup>Optional</sup> <a name="planned_action_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput"></a>

```python
planned_action_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput"></a>

```python
schema_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId"></a>

```python
discovery_job_id: str
```

- *Type:* str

---

##### `discovery_type`<sup>Required</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_result_applied`<sup>Required</sup> <a name="is_result_applied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied"></a>

```python
is_result_applied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action`<sup>Required</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobsResultsConfig <a name="DataOciDataSafeDiscoveryJobsResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_job_id: str,
  column_name: typing.List[str] = None,
  discovery_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]] = None,
  id: str = None,
  is_result_applied: typing.Union[bool, IResolvable] = None,
  object: typing.List[str] = None,
  planned_action: str = None,
  schema_name: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName">column_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType">discovery_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied">is_result_applied</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object">object</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction">planned_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName">schema_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId"></a>

```python
discovery_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `column_name`<sup>Optional</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName"></a>

```python
column_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `discovery_type`<sup>Optional</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_result_applied`<sup>Optional</sup> <a name="is_result_applied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied"></a>

```python
is_result_applied: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object"></a>

```python
object: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `planned_action`<sup>Optional</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName"></a>

```python
schema_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection()
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems()
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes()
```


### DataOciDataSafeDiscoveryJobsResultsFilter <a name="DataOciDataSafeDiscoveryJobsResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType">discovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount">estimated_data_value_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied">is_result_applied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes">modified_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction">planned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues">sample_data_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey">sensitive_columnkey</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId"></a>

```python
discovery_job_id: str
```

- *Type:* str

---

##### `discovery_type`<sup>Required</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

---

##### `estimated_data_value_count`<sup>Required</sup> <a name="estimated_data_value_count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```python
estimated_data_value_count: str
```

- *Type:* str

---

##### `is_result_applied`<sup>Required</sup> <a name="is_result_applied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied"></a>

```python
is_result_applied: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `modified_attributes`<sup>Required</sup> <a name="modified_attributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes"></a>

```python
modified_attributes: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_keys`<sup>Required</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action`<sup>Required</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `sample_data_values`<sup>Required</sup> <a name="sample_data_values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues"></a>

```python
sample_data_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_columnkey`<sup>Required</sup> <a name="sensitive_columnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```python
sensitive_columnkey: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a>

---


### DataOciDataSafeDiscoveryJobsResultsFilterList <a name="DataOciDataSafeDiscoveryJobsResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDiscoveryJobsResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeDiscoveryJobsResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]]

---


### DataOciDataSafeDiscoveryJobsResultsFilterOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_discovery_jobs_results

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeDiscoveryJobsResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>]

---



