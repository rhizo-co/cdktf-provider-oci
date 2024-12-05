# `dataOciDataintegrationWorkspaceApplicationSchedules` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedules <a name="DataOciDataintegrationWorkspaceApplicationSchedules" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules oci_dataintegration_workspace_application_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  workspace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]] = None,
  id: str = None,
  identifier: typing.List[str] = None,
  key: typing.List[str] = None,
  name: str = None,
  type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.identifier">identifier</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.key">key</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.applicationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#filter DataOciDataintegrationWorkspaceApplicationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.identifier"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.key"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.type"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataintegrationWorkspaceApplicationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection">schedule_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput">identifier_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput">key_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput">type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier">identifier</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key">key</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type">type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter"></a>

```python
filter: DataOciDataintegrationWorkspaceApplicationSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a>

---

##### `schedule_summary_collection`<sup>Required</sup> <a name="schedule_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection"></a>

```python
schedule_summary_collection: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a>

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput"></a>

```python
identifier_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput"></a>

```python
key_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput"></a>

```python
type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier"></a>

```python
identifier: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key"></a>

```python
key: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesConfig <a name="DataOciDataintegrationWorkspaceApplicationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  workspace_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]] = None,
  id: str = None,
  identifier: typing.List[str] = None,
  key: typing.List[str] = None,
  name: str = None,
  type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier">identifier</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key">key</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#filter DataOciDataintegrationWorkspaceApplicationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier"></a>

```python
identifier: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key"></a>

```python
key: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesFilter <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef()
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesFilterList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]]

---


### DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataintegrationWorkspaceApplicationSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter">DataOciDataintegrationWorkspaceApplicationSchedulesFilter</a>]

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression">custom_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time">time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth">week_of_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_expression`<sup>Required</sup> <a name="custom_expression" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression"></a>

```python
custom_expression: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time"></a>

```python
time: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a>

---

##### `week_of_month`<sup>Required</sup> <a name="week_of_month" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```python
week_of_month: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second">second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minute`<sup>Required</sup> <a name="minute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `second`<sup>Required</sup> <a name="second" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second"></a>

```python
second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">object_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_count`<sup>Required</sup> <a name="object_count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```python
object_count: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">object_type_count_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_count_list`<sup>Required</sup> <a name="object_type_count_list" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```python
object_type_count_list: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics">count_statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName">created_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath">identifier_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields">info_fields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName">updated_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```python
aggregator: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `count_statistics`<sup>Required</sup> <a name="count_statistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```python
count_statistics: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_by_name`<sup>Required</sup> <a name="created_by_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```python
created_by_name: str
```

- *Type:* str

---

##### `identifier_path`<sup>Required</sup> <a name="identifier_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```python
identifier_path: str
```

- *Type:* str

---

##### `info_fields`<sup>Required</sup> <a name="info_fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```python
info_fields: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_by_name`<sup>Required</sup> <a name="updated_by_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```python
updated_by_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails">frequency_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled">is_daylight_adjustment_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef">parent_ref</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `frequency_details`<sup>Required</sup> <a name="frequency_details" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails"></a>

```python
frequency_details: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a>

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `is_daylight_adjustment_enabled`<sup>Required</sup> <a name="is_daylight_adjustment_enabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled"></a>

```python
is_daylight_adjustment_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_status`<sup>Required</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_ref`<sup>Required</sup> <a name="parent_ref" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef"></a>

```python
parent_ref: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a>

---

##### `registry_metadata`<sup>Required</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```python
registry_metadata: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId">root_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `root_doc_id`<sup>Required</sup> <a name="root_doc_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```python
root_doc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_schedules

dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a>

---



