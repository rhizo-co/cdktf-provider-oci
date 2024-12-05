# `dataOciDatascienceJobRuns` Submodule <a name="`dataOciDatascienceJobRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceJobRuns <a name="DataOciDatascienceJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs oci_datascience_job_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRuns(
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
  created_by: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]] = None,
  id: str = None,
  job_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#compartment_id DataOciDatascienceJobRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#created_by DataOciDatascienceJobRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#display_name DataOciDatascienceJobRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#id DataOciDatascienceJobRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#job_id DataOciDatascienceJobRuns#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#state DataOciDatascienceJobRuns#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#compartment_id DataOciDatascienceJobRuns#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#created_by DataOciDatascienceJobRuns#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#display_name DataOciDatascienceJobRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#filter DataOciDatascienceJobRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#id DataOciDatascienceJobRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#job_id DataOciDatascienceJobRuns#job_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#state DataOciDatascienceJobRuns#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetJobId">reset_job_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]

---

##### `reset_created_by` <a name="reset_created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_id` <a name="reset_job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetJobId"></a>

```python
def reset_job_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatascienceJobRuns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatascienceJobRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatascienceJobRuns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatascienceJobRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceJobRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList">DataOciDatascienceJobRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobRuns">job_runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList">DataOciDatascienceJobRunsJobRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.filter"></a>

```python
filter: DataOciDatascienceJobRunsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList">DataOciDatascienceJobRunsFilterList</a>

---

##### `job_runs`<sup>Required</sup> <a name="job_runs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobRuns"></a>

```python
job_runs: DataOciDatascienceJobRunsJobRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList">DataOciDatascienceJobRunsJobRunsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRuns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceJobRunsConfig <a name="DataOciDatascienceJobRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  created_by: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]] = None,
  id: str = None,
  job_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#compartment_id DataOciDatascienceJobRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#created_by DataOciDatascienceJobRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#display_name DataOciDatascienceJobRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#id DataOciDatascienceJobRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#job_id DataOciDatascienceJobRuns#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#state DataOciDatascienceJobRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#compartment_id DataOciDatascienceJobRuns#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#created_by DataOciDatascienceJobRuns#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#display_name DataOciDatascienceJobRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#filter DataOciDatascienceJobRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#id DataOciDatascienceJobRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#job_id DataOciDatascienceJobRuns#job_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#state DataOciDatascienceJobRuns#state}.

---

### DataOciDatascienceJobRunsFilter <a name="DataOciDatascienceJobRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#name DataOciDatascienceJobRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#values DataOciDatascienceJobRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#regex DataOciDatascienceJobRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#name DataOciDatascienceJobRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#values DataOciDatascienceJobRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_runs#regex DataOciDatascienceJobRuns#regex}.

---

### DataOciDatascienceJobRunsJobRuns <a name="DataOciDatascienceJobRunsJobRuns" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRuns()
```


### DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails <a name="DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails <a name="DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails()
```


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails()
```


### DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails <a name="DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct()
```


### DataOciDatascienceJobRunsJobRunsLogDetails <a name="DataOciDatascienceJobRunsJobRunsLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceJobRunsFilterList <a name="DataOciDatascienceJobRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatascienceJobRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]]

---


### DataOciDatascienceJobRunsFilterOutputReference <a name="DataOciDatascienceJobRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatascienceJobRunsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsFilter">DataOciDatascienceJobRunsFilter</a>]

---


### DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType">job_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_signature_id`<sup>Required</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

---

##### `job_environment_type`<sup>Required</sup> <a name="job_environment_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType"></a>

```python
job_environment_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">job_infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">job_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_infrastructure_type`<sup>Required</sup> <a name="job_infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```python
job_infrastructure_type: str
```

- *Type:* str

---

##### `job_shape_config_details`<sup>Required</sup> <a name="job_shape_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```python
job_shape_config_details: DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetails</a>

---


### DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enable_logging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_auto_log_creation`<sup>Required</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```python
enable_logging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails">DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceJobRunsJobRunsList <a name="DataOciDatascienceJobRunsJobRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsLogDetailsList <a name="DataOciDatascienceJobRunsJobRunsLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference <a name="DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetails">DataOciDatascienceJobRunsJobRunsLogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRunsLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetails">DataOciDatascienceJobRunsJobRunsLogDetails</a>

---


### DataOciDatascienceJobRunsJobRunsOutputReference <a name="DataOciDatascienceJobRunsJobRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_runs

dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.asynchronous">asynchronous</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobConfigurationOverrideDetails">job_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobEnvironmentConfigurationOverrideDetails">job_environment_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobInfrastructureConfigurationDetails">job_infrastructure_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobLogConfigurationOverrideDetails">job_log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobStorageMountConfigurationDetailsList">job_storage_mount_configuration_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.logDetails">log_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList">DataOciDatascienceJobRunsJobRunsLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRuns">DataOciDatascienceJobRunsJobRuns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.asynchronous"></a>

```python
asynchronous: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_configuration_override_details`<sup>Required</sup> <a name="job_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobConfigurationOverrideDetails"></a>

```python
job_configuration_override_details: DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobConfigurationOverrideDetailsList</a>

---

##### `job_environment_configuration_override_details`<sup>Required</sup> <a name="job_environment_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobEnvironmentConfigurationOverrideDetails"></a>

```python
job_environment_configuration_override_details: DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobEnvironmentConfigurationOverrideDetailsList</a>

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_infrastructure_configuration_details`<sup>Required</sup> <a name="job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobInfrastructureConfigurationDetails"></a>

```python
job_infrastructure_configuration_details: DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobRunsJobRunsJobInfrastructureConfigurationDetailsList</a>

---

##### `job_log_configuration_override_details`<sup>Required</sup> <a name="job_log_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobLogConfigurationOverrideDetails"></a>

```python
job_log_configuration_override_details: DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList">DataOciDatascienceJobRunsJobRunsJobLogConfigurationOverrideDetailsList</a>

---

##### `job_storage_mount_configuration_details_list`<sup>Required</sup> <a name="job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.jobStorageMountConfigurationDetailsList"></a>

```python
job_storage_mount_configuration_details_list: DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobRunsJobRunsJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `log_details`<sup>Required</sup> <a name="log_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.logDetails"></a>

```python
log_details: DataOciDatascienceJobRunsJobRunsLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsLogDetailsList">DataOciDatascienceJobRunsJobRunsLogDetailsList</a>

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRunsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunsJobRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRuns.DataOciDatascienceJobRunsJobRuns">DataOciDatascienceJobRunsJobRuns</a>

---



