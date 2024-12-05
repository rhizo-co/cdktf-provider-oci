# `dataOciDataintegrationWorkspaceImportRequests` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequests` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequests <a name="DataOciDataintegrationWorkspaceImportRequests" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests oci_dataintegration_workspace_import_requests}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]] = None,
  id: str = None,
  import_status: str = None,
  name: str = None,
  projection: str = None,
  time_ended_in_millis: str = None,
  time_started_in_millis: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.importStatus">import_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.projection">projection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.timeEndedInMillis">time_ended_in_millis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.timeStartedInMillis">time_started_in_millis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#filter DataOciDataintegrationWorkspaceImportRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_status`<sup>Optional</sup> <a name="import_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.importStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}.

---

##### `projection`<sup>Optional</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.projection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}.

---

##### `time_ended_in_millis`<sup>Optional</sup> <a name="time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.timeEndedInMillis"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}.

---

##### `time_started_in_millis`<sup>Optional</sup> <a name="time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.Initializer.parameter.timeStartedInMillis"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetImportStatus">reset_import_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetProjection">reset_projection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeEndedInMillis">reset_time_ended_in_millis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeStartedInMillis">reset_time_started_in_millis</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_import_status` <a name="reset_import_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetImportStatus"></a>

```python
def reset_import_status() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_projection` <a name="reset_projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetProjection"></a>

```python
def reset_projection() -> None
```

##### `reset_time_ended_in_millis` <a name="reset_time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeEndedInMillis"></a>

```python
def reset_time_ended_in_millis() -> None
```

##### `reset_time_started_in_millis` <a name="reset_time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.resetTimeStartedInMillis"></a>

```python
def reset_time_started_in_millis() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequests resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequests resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequests to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataintegrationWorkspaceImportRequests that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequests to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList">DataOciDataintegrationWorkspaceImportRequestsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importRequestSummaryCollection">import_request_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatusInput">import_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projectionInput">projection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillisInput">time_ended_in_millis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillisInput">time_started_in_millis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatus">import_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projection">projection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillis">time_ended_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillis">time_started_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filter"></a>

```python
filter: DataOciDataintegrationWorkspaceImportRequestsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList">DataOciDataintegrationWorkspaceImportRequestsFilterList</a>

---

##### `import_request_summary_collection`<sup>Required</sup> <a name="import_request_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importRequestSummaryCollection"></a>

```python
import_request_summary_collection: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `import_status_input`<sup>Optional</sup> <a name="import_status_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatusInput"></a>

```python
import_status_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `projection_input`<sup>Optional</sup> <a name="projection_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projectionInput"></a>

```python
projection_input: str
```

- *Type:* str

---

##### `time_ended_in_millis_input`<sup>Optional</sup> <a name="time_ended_in_millis_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillisInput"></a>

```python
time_ended_in_millis_input: str
```

- *Type:* str

---

##### `time_started_in_millis_input`<sup>Optional</sup> <a name="time_started_in_millis_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillisInput"></a>

```python
time_started_in_millis_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_status`<sup>Required</sup> <a name="import_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.importStatus"></a>

```python
import_status: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `projection`<sup>Required</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.projection"></a>

```python
projection: str
```

- *Type:* str

---

##### `time_ended_in_millis`<sup>Required</sup> <a name="time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeEndedInMillis"></a>

```python
time_ended_in_millis: str
```

- *Type:* str

---

##### `time_started_in_millis`<sup>Required</sup> <a name="time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.timeStartedInMillis"></a>

```python
time_started_in_millis: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequests.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestsConfig <a name="DataOciDataintegrationWorkspaceImportRequestsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  workspace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]] = None,
  id: str = None,
  import_status: str = None,
  name: str = None,
  projection: str = None,
  time_ended_in_millis: str = None,
  time_started_in_millis: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.importStatus">import_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.projection">projection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeEndedInMillis">time_ended_in_millis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeStartedInMillis">time_started_in_millis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#workspace_id DataOciDataintegrationWorkspaceImportRequests#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#filter DataOciDataintegrationWorkspaceImportRequests#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#id DataOciDataintegrationWorkspaceImportRequests#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import_status`<sup>Optional</sup> <a name="import_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.importStatus"></a>

```python
import_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#import_status DataOciDataintegrationWorkspaceImportRequests#import_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}.

---

##### `projection`<sup>Optional</sup> <a name="projection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.projection"></a>

```python
projection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#projection DataOciDataintegrationWorkspaceImportRequests#projection}.

---

##### `time_ended_in_millis`<sup>Optional</sup> <a name="time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeEndedInMillis"></a>

```python
time_ended_in_millis: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_ended_in_millis DataOciDataintegrationWorkspaceImportRequests#time_ended_in_millis}.

---

##### `time_started_in_millis`<sup>Optional</sup> <a name="time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsConfig.property.timeStartedInMillis"></a>

```python
time_started_in_millis: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#time_started_in_millis DataOciDataintegrationWorkspaceImportRequests#time_started_in_millis}.

---

### DataOciDataintegrationWorkspaceImportRequestsFilter <a name="DataOciDataintegrationWorkspaceImportRequestsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#values DataOciDataintegrationWorkspaceImportRequests#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#regex DataOciDataintegrationWorkspaceImportRequests#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#name DataOciDataintegrationWorkspaceImportRequests#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#values DataOciDataintegrationWorkspaceImportRequests#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_requests#regex DataOciDataintegrationWorkspaceImportRequests#regex}.

---

### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection()
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems()
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution()
```


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestsFilterList <a name="DataOciDataintegrationWorkspaceImportRequestsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceImportRequestsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]]

---


### DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataintegrationWorkspaceImportRequestsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsFilter">DataOciDataintegrationWorkspaceImportRequestsFilter</a>]

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicatePrefix">duplicate_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicateSuffix">duplicate_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.importConflictResolutionType">import_conflict_resolution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duplicate_prefix`<sup>Required</sup> <a name="duplicate_prefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```python
duplicate_prefix: str
```

- *Type:* str

---

##### `duplicate_suffix`<sup>Required</sup> <a name="duplicate_suffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```python
duplicate_suffix: str
```

- *Type:* str

---

##### `import_conflict_resolution_type`<sup>Required</sup> <a name="import_conflict_resolution_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```python
import_conflict_resolution_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.newKey">new_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.oldKey">old_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.resolutionAction">resolution_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.timeUpdatedInMillis">time_updated_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `new_key`<sup>Required</sup> <a name="new_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.newKey"></a>

```python
new_key: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `old_key`<sup>Required</sup> <a name="old_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.oldKey"></a>

```python
old_key: str
```

- *Type:* str

---

##### `resolution_action`<sup>Required</sup> <a name="resolution_action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.resolutionAction"></a>

```python
resolution_action: str
```

- *Type:* str

---

##### `time_updated_in_millis`<sup>Required</sup> <a name="time_updated_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```python
time_updated_in_millis: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjects</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.areDataAssetReferencesIncluded">are_data_asset_references_included</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.errorMessages">error_messages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fileName">file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importConflictResolution">import_conflict_resolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importedObjects">imported_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectKeyForImport">object_key_for_import</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion">object_storage_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId">object_storage_tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis">time_ended_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis">time_started_in_millis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.totalImportedObjectCount">total_imported_object_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_data_asset_references_included`<sup>Required</sup> <a name="are_data_asset_references_included" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.areDataAssetReferencesIncluded"></a>

```python
are_data_asset_references_included: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```python
error_messages: StringMap
```

- *Type:* cdktf.StringMap

---

##### `file_name`<sup>Required</sup> <a name="file_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.fileName"></a>

```python
file_name: str
```

- *Type:* str

---

##### `import_conflict_resolution`<sup>Required</sup> <a name="import_conflict_resolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importConflictResolution"></a>

```python
import_conflict_resolution: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportConflictResolutionList</a>

---

##### `imported_objects`<sup>Required</sup> <a name="imported_objects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.importedObjects"></a>

```python
imported_objects: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsImportedObjectsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_key_for_import`<sup>Required</sup> <a name="object_key_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectKeyForImport"></a>

```python
object_key_for_import: str
```

- *Type:* str

---

##### `object_storage_region`<sup>Required</sup> <a name="object_storage_region" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageRegion"></a>

```python
object_storage_region: str
```

- *Type:* str

---

##### `object_storage_tenancy_id`<sup>Required</sup> <a name="object_storage_tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.objectStorageTenancyId"></a>

```python
object_storage_tenancy_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_ended_in_millis`<sup>Required</sup> <a name="time_ended_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeEndedInMillis"></a>

```python
time_ended_in_millis: str
```

- *Type:* str

---

##### `time_started_in_millis`<sup>Required</sup> <a name="time_started_in_millis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.timeStartedInMillis"></a>

```python
time_started_in_millis: str
```

- *Type:* str

---

##### `total_imported_object_count`<sup>Required</sup> <a name="total_imported_object_count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.totalImportedObjectCount"></a>

```python
total_imported_object_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_import_requests

dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequests.DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection">DataOciDataintegrationWorkspaceImportRequestsImportRequestSummaryCollection</a>

---



