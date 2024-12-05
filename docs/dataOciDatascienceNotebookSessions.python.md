# `dataOciDatascienceNotebookSessions` Submodule <a name="`dataOciDatascienceNotebookSessions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceNotebookSessions <a name="DataOciDatascienceNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions oci_datascience_notebook_sessions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#filter DataOciDatascienceNotebookSessions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]

---

##### `reset_created_by` <a name="reset_created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatascienceNotebookSessions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatascienceNotebookSessions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatascienceNotebookSessions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceNotebookSessions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions">notebook_sessions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filter"></a>

```python
filter: DataOciDatascienceNotebookSessionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList">DataOciDatascienceNotebookSessionsFilterList</a>

---

##### `notebook_sessions`<sup>Required</sup> <a name="notebook_sessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.notebookSessions"></a>

```python
notebook_sessions: DataOciDatascienceNotebookSessionsNotebookSessionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList">DataOciDatascienceNotebookSessionsNotebookSessionsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceNotebookSessionsConfig <a name="DataOciDatascienceNotebookSessionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig(
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
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#compartment_id DataOciDatascienceNotebookSessions#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#created_by DataOciDatascienceNotebookSessions#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#display_name DataOciDatascienceNotebookSessions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#filter DataOciDatascienceNotebookSessions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#id DataOciDatascienceNotebookSessions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#project_id DataOciDatascienceNotebookSessions#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#state DataOciDatascienceNotebookSessions#state}.

---

### DataOciDatascienceNotebookSessionsFilter <a name="DataOciDatascienceNotebookSessionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#name DataOciDatascienceNotebookSessions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#values DataOciDatascienceNotebookSessions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_notebook_sessions#regex DataOciDatascienceNotebookSessions#regex}.

---

### DataOciDatascienceNotebookSessionsNotebookSessions <a name="DataOciDatascienceNotebookSessionsNotebookSessions" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection()
```


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceNotebookSessionsFilterList <a name="DataOciDatascienceNotebookSessionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatascienceNotebookSessionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]]

---


### DataOciDatascienceNotebookSessionsFilterOutputReference <a name="DataOciDatascienceNotebookSessionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatascienceNotebookSessionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsFilter">DataOciDatascienceNotebookSessionsFilter</a>]

---


### DataOciDatascienceNotebookSessionsNotebookSessionsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notebook_session_shape_config_details`<sup>Required</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails">notebook_session_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notebook_session_shape_config_details`<sup>Required</sup> <a name="notebook_session_shape_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.notebookSessionShapeConfigDetails"></a>

```python
notebook_session_shape_config_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsNotebookSessionShapeConfigDetailsList</a>

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollection</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection">notebook_session_git_repo_config_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `notebook_session_git_repo_config_collection`<sup>Required</sup> <a name="notebook_session_git_repo_config_collection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.notebookSessionGitRepoConfigCollection"></a>

```python
notebook_session_git_repo_config_collection: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsNotebookSessionGitRepoConfigCollectionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables">custom_environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails">notebook_session_git_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_environment_variables`<sup>Required</sup> <a name="custom_environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.customEnvironmentVariables"></a>

```python
custom_environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `notebook_session_git_config_details`<sup>Required</sup> <a name="notebook_session_git_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.notebookSessionGitConfigDetails"></a>

```python
notebook_session_git_config_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsNotebookSessionGitConfigDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetails</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference <a name="DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_notebook_sessions

dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails">notebook_session_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails">notebook_session_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails">notebook_session_runtime_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList">notebook_session_storage_mount_configuration_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl">notebook_session_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `notebook_session_config_details`<sup>Required</sup> <a name="notebook_session_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigDetails"></a>

```python
notebook_session_config_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigDetailsList</a>

---

##### `notebook_session_configuration_details`<sup>Required</sup> <a name="notebook_session_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionConfigurationDetails"></a>

```python
notebook_session_configuration_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionConfigurationDetailsList</a>

---

##### `notebook_session_runtime_config_details`<sup>Required</sup> <a name="notebook_session_runtime_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionRuntimeConfigDetails"></a>

```python
notebook_session_runtime_config_details: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionRuntimeConfigDetailsList</a>

---

##### `notebook_session_storage_mount_configuration_details_list`<sup>Required</sup> <a name="notebook_session_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionStorageMountConfigurationDetailsList"></a>

```python
notebook_session_storage_mount_configuration_details_list: DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList">DataOciDatascienceNotebookSessionsNotebookSessionsNotebookSessionStorageMountConfigurationDetailsListStructList</a>

---

##### `notebook_session_url`<sup>Required</sup> <a name="notebook_session_url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.notebookSessionUrl"></a>

```python
notebook_session_url: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceNotebookSessionsNotebookSessions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceNotebookSessions.DataOciDatascienceNotebookSessionsNotebookSessions">DataOciDatascienceNotebookSessionsNotebookSessions</a>

---



