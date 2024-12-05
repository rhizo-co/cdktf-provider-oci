# `dataOciDatasciencePipelineRuns` Submodule <a name="`dataOciDatasciencePipelineRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatasciencePipelineRuns <a name="DataOciDatasciencePipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs oci_datascience_pipeline_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]] = None,
  id: str = None,
  pipeline_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.pipelineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId">reset_pipeline_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]

---

##### `reset_created_by` <a name="reset_created_by" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pipeline_id` <a name="reset_pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetPipelineId"></a>

```python
def reset_pipeline_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatasciencePipelineRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatasciencePipelineRuns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatasciencePipelineRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatasciencePipelineRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns">pipeline_runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput">pipeline_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filter"></a>

```python
filter: DataOciDatasciencePipelineRunsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList">DataOciDatasciencePipelineRunsFilterList</a>

---

##### `pipeline_runs`<sup>Required</sup> <a name="pipeline_runs" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineRuns"></a>

```python
pipeline_runs: DataOciDatasciencePipelineRunsPipelineRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList">DataOciDatasciencePipelineRunsPipelineRunsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pipeline_id_input`<sup>Optional</sup> <a name="pipeline_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineIdInput"></a>

```python
pipeline_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRuns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatasciencePipelineRunsConfig <a name="DataOciDatasciencePipelineRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]] = None,
  id: str = None,
  pipeline_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId">pipeline_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#compartment_id DataOciDatasciencePipelineRuns#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#created_by DataOciDatasciencePipelineRuns#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#display_name DataOciDatasciencePipelineRuns#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#filter DataOciDatasciencePipelineRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#id DataOciDatasciencePipelineRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pipeline_id`<sup>Optional</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#pipeline_id DataOciDatasciencePipelineRuns#pipeline_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#state DataOciDatasciencePipelineRuns#state}.

---

### DataOciDatasciencePipelineRunsFilter <a name="DataOciDatasciencePipelineRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#name DataOciDatasciencePipelineRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#values DataOciDatasciencePipelineRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_pipeline_runs#regex DataOciDatasciencePipelineRuns#regex}.

---

### DataOciDatasciencePipelineRunsPipelineRuns <a name="DataOciDatasciencePipelineRunsPipelineRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns()
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsLogDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails()
```


### DataOciDatasciencePipelineRunsPipelineRunsStepRuns <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRuns" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatasciencePipelineRunsFilterList <a name="DataOciDatasciencePipelineRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatasciencePipelineRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]]

---


### DataOciDatasciencePipelineRunsFilterOutputReference <a name="DataOciDatasciencePipelineRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatasciencePipelineRunsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsFilter">DataOciDatasciencePipelineRunsFilter</a>]

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enable_logging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_auto_log_creation`<sup>Required</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```python
enable_logging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetails">DataOciDatasciencePipelineRunsPipelineRunsLogDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails">configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails">configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns">delete_related_job_runs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails">log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails">log_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId">pipeline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails">step_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns">step_runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationDetails"></a>

```python
configuration_details: DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationDetailsList</a>

---

##### `configuration_override_details`<sup>Required</sup> <a name="configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.configurationOverrideDetails"></a>

```python
configuration_override_details: DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsConfigurationOverrideDetailsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delete_related_job_runs`<sup>Required</sup> <a name="delete_related_job_runs" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.deleteRelatedJobRuns"></a>

```python
delete_related_job_runs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `log_configuration_override_details`<sup>Required</sup> <a name="log_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logConfigurationOverrideDetails"></a>

```python
log_configuration_override_details: DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogConfigurationOverrideDetailsList</a>

---

##### `log_details`<sup>Required</sup> <a name="log_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.logDetails"></a>

```python
log_details: DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList">DataOciDatasciencePipelineRunsPipelineRunsLogDetailsList</a>

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `pipeline_id`<sup>Required</sup> <a name="pipeline_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.pipelineId"></a>

```python
pipeline_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `step_override_details`<sup>Required</sup> <a name="step_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepOverrideDetails"></a>

```python
step_override_details: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList</a>

---

##### `step_runs`<sup>Required</sup> <a name="step_runs" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.stepRuns"></a>

```python
step_runs: DataOciDatasciencePipelineRunsPipelineRunsStepRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList">DataOciDatasciencePipelineRunsPipelineRunsStepRunsList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRuns">DataOciDatasciencePipelineRunsPipelineRuns</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails">step_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails">step_container_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `step_configuration_details`<sup>Required</sup> <a name="step_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepConfigurationDetails"></a>

```python
step_configuration_details: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList</a>

---

##### `step_container_configuration_details`<sup>Required</sup> <a name="step_container_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepContainerConfigurationDetails"></a>

```python
step_container_configuration_details: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList</a>

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_signature_id`<sup>Required</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails">DataOciDatasciencePipelineRunsPipelineRunsStepOverrideDetailsStepContainerConfigurationDetails</a>

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsList <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference <a name="DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_pipeline_runs

dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId">job_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType">step_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `job_run_id`<sup>Required</sup> <a name="job_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.jobRunId"></a>

```python
job_run_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `step_type`<sup>Required</sup> <a name="step_type" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.stepType"></a>

```python
step_type: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRunsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatasciencePipelineRunsPipelineRunsStepRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatasciencePipelineRuns.DataOciDatasciencePipelineRunsPipelineRunsStepRuns">DataOciDatasciencePipelineRunsPipelineRunsStepRuns</a>

---



